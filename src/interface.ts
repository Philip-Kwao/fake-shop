export interface Product{
    id:number
    description:string
    price:number
    image:string
    title:string
}

export interface CartItem{
    product:Product
    qty:number
}