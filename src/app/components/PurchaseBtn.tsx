"use client"
import { Product } from '@/interface'
import { decrement, increment, productQuantitySelector } from '@/redux/features/cartSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import React from 'react'
import QtyBtn from './QtyBtn'

interface Props{
    product:Product
}

const PurchaseBtn = (props:Props) => {
    const qty = useAppSelector((state)=>productQuantitySelector(state,props.product.id))
    const dispatch = useAppDispatch()
    if(!qty){
        return(
            <button onClick={()=>dispatch(increment(props.product))} className='py-2 px-6 bg-slate-400 rounded-lg text-white hover:bg-slate-500'>Add To Cart</button>
        )
    }
  return (
    <QtyBtn qty={qty} onIncrease={()=>dispatch(increment(props.product))} onDecrease={()=>dispatch(decrement(props.product))} />
  )
}

export default PurchaseBtn