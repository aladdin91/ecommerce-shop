"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handelQuantityIncrease: () => void;
  handelQuantityDecrease: () => void;
}

const btnStyle = `border-[1.2px] border-slate-300 px-2 rounded`;
const SetQuantity: React.FC<SetQuantityProps> = ({
  cartCounter,
  cartProduct,
  handelQuantityIncrease,
  handelQuantityDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTITY</div>}
      <div className="flex gap-8 items-center text-base">
        <button className={btnStyle} onClick={handelQuantityDecrease}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyle} onClick={handelQuantityIncrease}>
          +
        </button>
      </div>
    </div>
  );
};
export default SetQuantity;
