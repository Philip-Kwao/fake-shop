import { CartItem, Product } from "@/interface";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartState{
    cartItem:CartItem[]
}

export const initialState:CartState={
    cartItem:[]
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        increment:(state,action:PayloadAction<Product>)=>{
            const item = state.cartItem.find((el)=>el.product.id===action.payload.id)
            if(item){
                item.qty++
            }
            else{
                state.cartItem.push({
                    product:action.payload,
                    qty:1
                })
            }
        },
        decrement:(state,action:PayloadAction<Product>)=>{
            const item = state.cartItem.find((el)=>el.product.id===action.payload.id)
            if(item){
                item.qty--

                if(item.qty===0){
                    state.cartItem=state.cartItem.filter((el)=>el.product.id!==action.payload.id)
                }
            }
        }
    }
})

// Custom Selectors
const cartItems = (state:RootState)=>state.cart.cartItem

// Total Cart Item Selector
export const totalCartItemSelector = createSelector([cartItems],(cartItems)=>cartItems.reduce((total:number,curr:CartItem)=>(total+=curr.qty),0))

// Total Price Selector
export const totalPriceSelector = createSelector([cartItems],(cartItems)=>cartItems.reduce((total:number, curr:CartItem)=>(total+=curr.qty*curr.product.price),0))

// Total Quantity Selector
export const productQuantitySelector = createSelector([cartItems,(cartItems,productId:number)=>productId], (cartItems,productId)=> cartItems.find((el)=>el.product.id===productId)?.qty)

export const {increment,decrement} = cartSlice.actions
export default cartSlice.reducer