"use client"
import { FaTrashAlt } from 'react-icons/fa'
import { GoDash, GoPlus } from 'react-icons/go'

interface QtyBtnProps{
    onIncrease:()=>void
    onDecrease:()=>void
    qty:number
}

const QtyBtn = (props:QtyBtnProps) => {
  return (
    <div className='flex items-center gap-4'>
        <span onClick={props.onDecrease} className="cursor-pointer text-xl font-bold text-red-500">
            {
                props.qty === 1 ? <FaTrashAlt />:<GoDash />
            }
        </span>
        <span className="font-black text-2xl mx-3 text-slate-500">{props.qty}</span>
        <span onClick={props.onIncrease} className="cursor-pointer text-xl font-bold text-green-500">
            <GoPlus />
        </span>
    </div>
  )
}

export default QtyBtn