"use client"
import { useRouter } from "next/navigation";
import { PaystackButton } from "react-paystack";

interface PayProp {
  amount: number;
}
// console.log(process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY)
const PaystackBtn = (prop: PayProp) => {
    const router = useRouter()
  const handlePaystackSuccessAction = () => {
    alert("Payment Successful");
    router.push(`/`)

  };

  const handlePaystackCloseAction = () => {
    console.log("closed");
  };
  const config = {
      publicKey: `${process.env.NEXT_PUBLIC_KEY}`,
  }

  const componentProps = {
    ...config,
    currency: "GHS",
    email: "bluewebergh@gmail.com",
    amount: prop.amount * 100,
    text: "Make Payment",
    onSuccess: () => handlePaystackSuccessAction(),
    onClose: handlePaystackCloseAction,
  };
  return <PaystackButton {...componentProps} />;
};

export default PaystackBtn;
