import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";

type CartContextType = {
  cartTotalQuantity: number;
  cartTotalAmount: number;
  cartProducts: CartProductType[] | null;
  handelAddProductToCart: (product: CartProductType) => void;
  handleRemoveItemFromCart: (product: CartProductType) => void;
  handleCartQuantityIncrease: (product: CartProductType) => void;
  handleCartQuantityDecrease: (product: CartProductType) => void;
  handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  useEffect(() => {
    const cartItems: any = localStorage.getItem("cartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);
    setCartProducts(cProducts);
  }, []);

  useEffect(() => {
    const getTotals = () => {
      if (cartProducts) {
        const { total, quantity } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal = item.prices * item.quantity;
            acc.total += itemTotal;
            acc.quantity += item.quantity;
            return acc;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        setCartTotalQuantity(quantity);
        setCartTotalAmount(total);
      }
    };
    getTotals();
  }, [cartProducts]);

  const handelAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      toast.success("Cart added successfully");
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      console.log("handelAddProductToCart run");

      return updatedCart;
    });
  }, []);

  const handleRemoveItemFromCart = useCallback(
    (product: CartProductType) => {
      console.log("handleRemoveItemFromCart run");

      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id !== product.id;
        });
        setCartProducts(filteredProducts);
        toast.success("Product removed successfully");
        localStorage.setItem("cartItems", JSON.stringify(filteredProducts));
      }
    },
    [cartProducts]
  );

  const handleCartQuantityIncrease = useCallback(
    (product: CartProductType) => {
      console.log("handleCartQuantityIncrease run");

      let updatedCart;

      if (product.quantity === 99) {
        return toast.error("Maximum quantity reached");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = ++updatedCart[existingIndex]
            .quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleCartQuantityDecrease = useCallback(
    (product: CartProductType) => {
      console.log("handleCartQuantityDecrease run");

      let updatedCart;

      if (product.quantity === 1) {
        return toast.error("Minimum quantity reached");
      }
      if (cartProducts) {
        updatedCart = [...cartProducts];
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        if (existingIndex > -1) {
          updatedCart[existingIndex].quantity = --updatedCart[existingIndex]
            .quantity;
        }
        setCartProducts(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQuantity(0);
    localStorage.setItem("cartItems", JSON.stringify(null));
    toast.success("Cart cleared successfully");
  }, []);

  const value = {
    cartTotalQuantity,
    cartProducts,
    handelAddProductToCart,
    handleRemoveItemFromCart,
    handleCartQuantityIncrease,
    handleCartQuantityDecrease,
    handleClearCart,
    cartTotalAmount,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a cartContextProvider");
  }
  return context;
};
