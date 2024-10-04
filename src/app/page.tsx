import ProductCard from "./components/ProductCard";

export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products")
  if(!data.ok){
    return <div className="">No Products Available</div>
  }
  const res = await data.json()
  // console.log(res)
  return (
    <div className="
    flex items-center justify-between gap-4 flex-wrap">

      {
        res.map((r)=>(
          <ProductCard key={r.id} product={r} />
        ))
      }
    </div>
  );
}
