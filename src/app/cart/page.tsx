"use client"

import { useAppSelector } from "@/redux/store"
import CartCard from "../components/CartCard"
import { totalPriceSelector } from "@/redux/features/cartSlice"

const CartPage = () => {
    const cartItem = useAppSelector((state)=>state.cart.cartItem)
    const totalPrice = useAppSelector(totalPriceSelector)
    return (
    <div>
        {
            cartItem.map((cart)=>(
                <CartCard key={cart.product.id} cartItems={cart} />
            ))
        }
         <span className="font-extrabold text-3xl text-slate-500 ml-10">Total Price: ${totalPrice}</span>   
    </div>
  )
}

export default CartPage