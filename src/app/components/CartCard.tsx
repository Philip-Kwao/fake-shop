import { CartItem } from "@/interface";
import Image from "next/image";
import QtyBtn from "./QtyBtn";
import { useAppDispatch } from "@/redux/store";
import { decrement, increment } from "@/redux/features/cartSlice";

interface CartCardProp {
  cartItems: CartItem;
}
const CartCard = ({ cartItems }: CartCardProp) => {
  const dispatch = useAppDispatch();
  return (
    <div className="p-10">
    <div className="flex items-center justify-between mx-auto">
      <Image
        src={cartItems.product.image}
        width={100}
        height={100}
        alt={cartItems.product.title}
        className="hidden md:block"
      />
      <div className="w-full md:max-w-md space-y-2">
        <div className="flex items-center gap-4">
        <Image
        src={cartItems.product.image}
        width={50}
        height={50}
        alt={cartItems.product.title}
        className="md:hidden"
      />
        <h3 className="font-extrabold text-xl">{cartItems.product.title}</h3>
        </div>
        <hr />
        <p className="">{cartItems.product.description}</p>
        <hr />
        <div className="">
        <span className="hidden md:block text-lg italic text-slate-500">GHS{cartItems.product.price}</span>
        <div className="flex md:hidden items-center justify-between space-y-6 px-6">
      <QtyBtn
        onDecrease={() => dispatch(decrement(cartItems.product))}
        onIncrease={() => dispatch(increment(cartItems.product))}
        qty={cartItems.qty}
      />
      <div className="text-xl font-bold italic text-slate-500">
        GHS {cartItems.product.price * cartItems.qty}
      </div>
      </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center justify-between space-y-6">
      <QtyBtn
        onDecrease={() => dispatch(decrement(cartItems.product))}
        onIncrease={() => dispatch(increment(cartItems.product))}
        qty={cartItems.qty}
      />
      <div className="text-lg lg:text-xl font-bold italic text-slate-500">
        GHS {cartItems.product.price * cartItems.qty}
      </div>
      </div>
    </div>
    <hr className="h-2 mt-4" />
    </div>
  );
};

export default CartCard;
