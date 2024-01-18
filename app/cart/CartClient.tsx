"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface CartClientProps {
  currentUser: SafeUser | null | undefined;
}

const CartClient: React.FC<CartClientProps> = ({ currentUser }) => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  const router = useRouter();

  const formRef = useRef<HTMLFormElement | null>(null);
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className=" text-2xl">Your cart is empty</div>
        <div>
          <Link
            href="/"
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Start shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      return;
    }

    const orderData = {
      userId: currentUser.id,
      amount: cartTotalAmount,
      currency: "USD",
      status: "pending",
      deliveryStatus: "processing",
      city: city,
      postalCode: postalCode,
      streetAddress: streetAddress,
      products: cartProducts.map(
        ({
          id,
          quantity,
          name,
          description,
          category,
          brand,
          selectedImg,
          prices,
        }) => ({
          id,
          quantity,
          name,
          description,
          category,
          brand,
          selectedImg,
          price: prices,
        })
      ),
    };

    axios
      .post("/api/order", orderData)
      .then(() => {
        toast.success("order created successfully");
        router.refresh();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
    console.log("orderData", orderData);
  };

  return (
    <div>
      <Heading title="Shopping cart" center />
      <div className="flex flex-col">
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
          <div className="col-span-2 justify-self-start">PRODUCT</div>
          <div className="justify-self-center">PRICE</div>
          <div className="justify-self-center">QUANTITY</div>
          <div className="justify-self-end">TOTAL</div>
        </div>
        <div>
          {cartProducts &&
            cartProducts.map((item) => {
              return <ItemContent key={item.id} item={item} />;
            })}
        </div>
        <div className="border-t-[1.5px] py-4 flex justify-between gap-4">
          <form className="flex flex-col" ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
            <input
              type="text"
              name="postal_code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Postal code"
            />
            <input
              type="text"
              name="street_address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              placeholder="Street address"
            />
          </form>
        </div>
      </div>
      <div className=" border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="w-[90px]">
          <Button
            onClick={() => handleClearCart()}
            label="Clear cart"
            small
            outline
          />
        </div>

        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>${formatPrice(cartTotalAmount)}</span>
          </div>
          <p className="text-slate-500">
            Taxes and shopping calculate at checkout
          </p>
          <Button
            label={currentUser ? "Checkout" : "Login to checkout"}
            onClick={() => {
              if (currentUser) {
                formRef.current && formRef.current.requestSubmit();
              } else {
                router.push("/login");
              }
            }}
          />
          <Link
            href="/"
            className="text-slate-500 flex items-center gap-1 mt-2"
          >
            <MdArrowBack />
            <span>Continue shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
