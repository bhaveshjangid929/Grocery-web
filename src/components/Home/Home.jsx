import Category from "../Category/Category"
import Contact from "../Contact/Contact"
import Discount from "../Discount/Discount"
import Hero from "../Hero/Hero"
import Process from "../Process/Process"
import Products from "../Products/Products"
import Values from "../Values/Values"

function Home({ likedProducts, setLikedProducts, cart, setCart }) {
  return (
    <div>
      <Hero/>
      <Category/>
      <Values/>
      <Products likedProducts={likedProducts} setLikedProducts={setLikedProducts} cart={cart} setCart={setCart}/>
      <Discount/>
      <Process/>
      <Contact/>
    </div>
  )
}

export default Home
