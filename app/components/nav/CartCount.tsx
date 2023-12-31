"use client";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";
export const CartCount = () => {
  const { cartTotalQuantity } = useCart();
  const router = useRouter();
  return (
    <div
      className=" relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl">
        <CiShoppingCart />
      </div>
      <span
        className=" flex absolute
      top-[-10px]
      right-[-10px] 
      bg-slate-700 
      text-white 
      h-6 
      w-6 
      rounded-full 
      items-center 
    justify-center
     text-sm"
      >
        {" "}
        {cartTotalQuantity}{" "}
      </span>
    </div>
  );
};

export default CartCount;
