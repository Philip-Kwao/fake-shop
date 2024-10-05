"use client"
import dynamic from 'next/dynamic';

const PaystackBtn = dynamic(() => import("../components/PaystackBtn"), {
  ssr: false, // Disable server-side rendering
});

import { useAppSelector } from "@/redux/store"
import CartCard from "../components/CartCard"
import { totalPriceSelector } from "@/redux/features/cartSlice"

const CartPage = () => {
    const cartItem = useAppSelector((state)=>state.cart.cartItem)
    const totalPrice = useAppSelector(totalPriceSelector)
    
    return (
    <div className='w-full'>
        {
            cartItem.length>0?(cartItem.map((cart)=>(
                <CartCard key={cart.product.id} cartItems={cart} />
            ))):(
                <div className="">No Product in Cart</div>
            )
        }
        <div className="flex items-center md:justify-between justify-center gap-4 p-20 flex-wrap">
         <span className="font-bold lg:font-extrabold text-xl lg:text-3xl text-slate-500 ml-10">Total Price: GHS {totalPrice}</span>
         <div className="text-white bg-slate-500 py-4 px-8 font-bold hover:bg-slate-400">
            <PaystackBtn amount={totalPrice} />
        </div>   
        </div>
    </div>
  )
}

export default CartPage