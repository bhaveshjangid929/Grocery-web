
import Fruits from "./components/pages/Fruits/Fruits";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dairy from "./components/pages/Dairy/Dairy";
import SeaFood from "./components/pages/SeaFood/SeaFood";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import AllProducts from "./components/AllProducts/AllProducts";
import { useState, useEffect } from "react";
import Wishlist from "./components/Wishlist/WishList.jsx";
import Cart from "./components/Cart/Cart";

function App() {
 const [likedProducts, setLikedProducts] = useState(() => {
  const savedWishlist = localStorage.getItem("wishlist");
  return savedWishlist ? JSON.parse(savedWishlist) : [];
});
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(likedProducts));
}, [likedProducts]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cart={cart} />}>
          <Route
            index
            element={
              <Home
                likedProducts={likedProducts}
                setLikedProducts={setLikedProducts}
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route path="fruits" element={<Fruits />} />
          <Route path="dairy" element={<Dairy />} />
          <Route path="seafood" element={<SeaFood />} />
          <Route path="allProducts" element={<AllProducts />} />
          <Route path="allproducts" element={<CategoryPage />} />

          <Route
            path="cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />

          <Route
            path="wishlist"
            element={
              <Wishlist
                likedProducts={likedProducts}
                setLikedProducts={setLikedProducts}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
