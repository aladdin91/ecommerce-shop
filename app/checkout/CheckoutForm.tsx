// "use client";

// import { useCart } from "@/hooks/useCart";
// import { formatPrice } from "@/utils/formatPrice";
// import { useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import Heading from "../components/Heading";

// interface CheckoutFormProps {
//   clientSecret: string;
//   handleSetPaymentSuccess: (value: boolean) => void;
// }
// const CheckoutForm: React.FC<CheckoutFormProps> = ({
//   clientSecret,
//   handleSetPaymentSuccess,
// }) => {
//   const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } =
//     useCart();
//   const stripe = useStripe();
//   const elements = useElements();
//   const [isLoading, setIsLoading] = useState(false);
//   const formattedPrice = formatPrice(cartTotalAmount);

//   useEffect(() => {
//     if (!stripe) {
//       return;
//     }
//     if (!clientSecret) {
//       return;
//     }
//     handleSetPaymentSuccess(false);
//   }, [stripe]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }
//     setIsLoading(true);
//     stripe
//       .confirmPayment({
//         elements,
//         redirect: "if_required",
//       })
//       .then((result) => {
//         if (!result.error) {
//           toast.success("checkout completed");
//           handleClearCart();
//           handleSetPaymentSuccess(true);
//           handleSetPaymentIntent(null);
//         }
//         setIsLoading(false);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit} id="payment-form">
//       <div className="mb-6">
//         <Heading title="Enter your details to complete checkout" />
//         <h2>Payment information</h2>
//       </div>
//     </form>
//   );
// };
// export default CheckoutForm;
