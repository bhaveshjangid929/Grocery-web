import { useState } from "react";
import Heading from "../Heading/Heading"
import ProductList from "../ProductList/ProductList"
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
function Products({ likedProducts, setLikedProducts, cart , setCart }) {
  const categories = ['All','Fruits','Vegetables','Dairy','Seafood'];
  const [activeTab,setactiveTab] = useState('All');
  let filterItems = activeTab === "All" ? ProductList : ProductList.filter((item)=>(
    item.category === activeTab
  ))
  const renderCards = filterItems.slice(0,8).map((product)=>(
    <Cards 
    key={product.id} id={product.id} image={product.img} name={product.name} price={product.price} likedProducts={likedProducts} setLikedProducts={setLikedProducts} cart={cart} setCart={setCart}/>
  ))
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products"/>
        
        {/*Tabs*/}
         <div className="flex flex-wrap items-center gap-3 justify-center mt-10">
          {categories.map((category,index)=>(
            <button key={index} className={`bg-zinc-100 px-5 py-2 text-lg rounded-lg cursor-pointer
            ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white':'bg-zinc-100 '}`} onClick={()=>setactiveTab(category)}>
              {category}
            </button>
          ))}
         </div>

          {/*products listing*/}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-9 mt-20">
            {renderCards}
          </div>

          <div className="mt-15 justify-center flex">
            <Link to="/allproducts" className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-700 transition-all duration-300 cursor-pointer active:scale-105 active:to-orange-700">View All</Link>
          </div>
      </div>
    </section>
  )
}

export default Products
