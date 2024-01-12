"use client";

import { Order, Product, User } from "@prisma/client";

interface SummaryProps {
  orders: Order[];
  products: Product[];
  users: User[];
}
const Summary: React.FC<SummaryProps> = ({ orders, products, users }) => {
  return <div>Summary</div>;
};

export default Summary;
