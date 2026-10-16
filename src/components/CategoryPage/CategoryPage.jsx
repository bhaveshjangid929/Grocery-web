import Banner from "../Banner/Banner"
import Cards from "../Cards/Cards"
import ProductList from "../ProductList/ProductList"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function CategoryPage({title, bgImage, categories=[]}) {
  const location = useLocation();
  let filterItems = categories.includes('All') ? ProductList : ProductList.filter((item)=>(
    categories.includes(item.category)
  ))
  const renderProduct = filterItems.map((product)=>(
   <div key={product.id} id={`product-${product.id}`}>
    <Cards id={product.id} image={product.img} name={product.name} price={product.price}/>
   </div> 
  ))
  useEffect(() => {
  const productId = location.state?.productId;

  if (productId) {
    const timer = setTimeout(() => {
      document
        .getElementById(`product-${productId}`)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 300);

    return () => clearTimeout(timer);
  }
}, [location.state]);
  return (

    <div>
      <Banner title={title} bgImage={bgImage}/>
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-9 mt-10 p-15">
        {renderProduct}
      </div>
    </div>
  )
}

export default CategoryPage
