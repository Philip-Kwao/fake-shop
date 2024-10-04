import Image from "next/image";
import PurchaseBtn from "./PurchaseBtn";
import { Product } from "@/interface";

interface ProductCardProps{
    product:Product
}

const ProductCard = async (props:ProductCardProps) => {
//   console.log(res);
  return (
    <div className="max-w-lg mx-auto h-full shadow-lg p-4">
      <div className="flex items-center justify-between  gap-2">
        <Image src={props.product.image} width={200} height={200} alt="" />
        <div className="flex flex-col items-start gap-4">

        <h3 className="font-bold text-lg w-full">{props.product.title}</h3>
        <p className="line-clamp-1">{props.product.description}</p>
        <div className="flex items-center justify-between w-full">
      <span className="font-bold italic">${props.product.price}</span>
        <PurchaseBtn product={props.product} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
