import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();

  const {
    userId,
    amount,
    currency,
    status,
    deliveryStatus,
    city,
    postalCode,
    streetAddress,
    products,
  } = body;

  const order = await prisma.order.create({
    data: {
      userId,
      amount,
      currency,
      status,
      deliveryStatus,
      city,
      postalCode,
      streetAddress,
      products,
    },
  });

  return NextResponse.json(order);
}
