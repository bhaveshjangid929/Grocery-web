import { FaHeart, FaPlus } from "react-icons/fa"
import Button from "../Button/Button"
import { Link } from "react-router-dom";
function Cards({id, image, name, price, likedProducts, setLikedProducts,cart,setCart}) {
  const like = (likedProducts || []).includes(id);
  return (
    
    <div className="bg-zinc-100 p-5 rounded-xl">

      {/*card icons*/}
      <div className="flex items-center justify-between">
        <button className={`text-3xl ${like? "text-orange-500":"text-zinc-300"}`} 

onClick={() => {
  setLikedProducts((prev) => {
    const updated = prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id];

    console.log("Updated wishlist:", updated);
    return updated;
  });
}}

>
          <FaHeart/>
        </button>

        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white text-xl px-4 py-3 rounded-lg" onClick={() => {
  setCart((prev) => {
    const existing = prev.find((item) => item.id === id);

    if (existing) {
      return prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { id, image, name, price, quantity: 1 }];
  });
}} >
          <FaPlus/>
        </button>
      </div>

      {/*card image*/}  
      <div className="w-full h-50">
        <img src={image} className="w-full h-full object-contain mx-auto"/>
      </div>

      {/*card content*/}
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-2xl font-bold mt-4 mb-3">${price.toFixed(2)}</p>
        <Link to="/cart" className="block mt-2">
        <Button content="Shop Now" />
        </Link>
      </div>

    </div>
  )
}

export default Cards
