import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
function Navbar({cart}) {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const filterProducts = ProductList.filter((product)=>(
    product.name.toLowerCase().includes(search.toLowerCase())
  ))
  const goHome = () => {
  setmenuOpen(false);

  if (window.location.pathname === "/") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
  const [menuOpen,setmenuOpen] = useState(false);
  const [scrollIs,setscrollIs] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      setscrollIs(window.scrollY > 0);
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[])
  return (
    <header className={`bg-white top-0 fixed right-0 left-0 z-50 ${scrollIs ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.4)]":""}`}>
      <nav className="relative max-w-[1400px] px-4 sm:px-6 lg:px-10 mx-auto h-[10vh] flex items-center justify-between z-50">
        {/*Logo*/}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/*Desktop Menu*/}
         <ul className="hidden items-center gap-x-15 lg:flex">
          <li>
            <Link to="/" className="font-semibold tracking-wider text-orange-500 ml-15" onClick={goHome}>Home</Link>
          </li>
          <li>
            <a href="#about" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 duration-300">About Us</a>
          </li>
          <li>
            <a href="#process" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 duration-300">Process</a>
          </li>
          <li>
            <a href="#contact" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 duration-300">Contact Us</a>
          </li>
         </ul>

         {/*Navbar-Action*/}
         <div className="flex items-center gap-x-6 lg:gap-x-12 ml-auto mr-8">

          {/*Input Field*/}
          <div className="hidden relative lg:flex items-center  p-1 border-2 border-orange-500 rounded-full">
            <input type="text" name="text" id="text" placeholder="Search...." autoComplete="off" className="flex-1 h-[5vh] px-3 outline-none" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 rounded-full flex justify-center items-center text-xl"><IoSearch/></button>

            {search && (
    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-full p-3 max-h-60 overflow-y-auto z-50">
      {filterProducts.length > 0 ? (
        filterProducts.map((product) => (
          <button
  key={product.id}
  onClick={() => {
    setSearch("");
    navigate("/allproducts",{
      state:{productId:product.id},
    })
  }}
  className="block w-full text-left py-2 px-2 hover:bg-orange-50 rounded cursor-pointer"
>
  {product.name}
</button>
        ))
      ) : (
        <p className="py-2 text-gray-500">No products found</p>
      )}
    </div>
  )}

          </div>
            <Link to="/wishlist" className="text-zinc-800 text-2xl">
              <GoHeartFill/>
            </Link>

            <Link to="/cart" className="relative  text-zinc-800 text-2xl">
              <HiShoppingBag/>
              {cartCount > 0 && (
    <span className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
      {cartCount}
    </span>
  )}
            </Link>
         </div>

         {/*Humburger-Icon*/}
         <div className="flex items-center ">
        <button
          onClick={() => setmenuOpen(!menuOpen)}
          className="mr-3 text-2xl lg:hidden text-zinc-800">
         {menuOpen ? <HiX /> : <RiMenu3Fill />}
        </button>
{/* Mobile Menu */}
  <div className={`absolute top-[14vh] left-0 w-full bg-white p-5 shadow-md lg:hidden
  transition-all duration-500 ease-in-out
  ${menuOpen
    ? "translate-y-0 opacity-100 visible"
    : "-translate-y-5 opacity-0 invisible"
  }`}>

    {/* Mobile Menu Links */}
    <ul className="flex flex-col gap-5">
      <li>
        <Link
          to="/"
          onClick={goHome}
          className="font-semibold text-orange-500"
        >
          Home
        </Link>
      </li>

      <li>
        <a
          href="#about"
          onClick={() => setmenuOpen(false)}
          className="font-semibold text-zinc-800 hover:text-orange-500 duration-300"
        >
          About Us
        </a>
      </li>

      <li>
        <a
          href="#process"
          onClick={() => setmenuOpen(false)}
          className="font-semibold text-zinc-800 hover:text-orange-500 duration-300"
        >
          Process
        </a>
      </li>

      <li>
        <a
          href="#contact"
          onClick={() => setmenuOpen(false)}
          className="font-semibold text-zinc-800 hover:text-orange-500 duration-300"
        >
          Contact Us
        </a>
      </li>
    </ul>

{/* Mobile & Tablet Actions */}
<div className="lg:hidden flex flex-col gap-4 mt-6 border-t border-orange-100 pt-5">
 <div className="relative">
  {/* Search Bar */}
  <div className="flex items-center bg-orange-50 border border-orange-200 rounded-2xl px-3 py-2 focus-within:border-orange-500 transition-all">
    <IoSearch className="text-orange-500 text-xl" />

    <input
      type="text"
      placeholder="Search groceries..."
      autoComplete="off"
      className="flex-1 min-w-0 bg-transparent px-3 py-2 outline-none text-sm text-zinc-800 placeholder:text-zinc-400" value={search} onChange={(e)=>setSearch(e.target.value)}
    />

    <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white w-10 h-10 shrink-0 rounded-xl flex justify-center items-center text-lg shadow-md">
      <IoSearch />
    </button>
         </div>
         
    {/* Mobile Search Dropdown */}
    {search.trim() && (
      <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl w-full p-3 max-h-60 overflow-y-auto z-50">
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => {
                setSearch("");
                setmenuOpen(false);
                navigate("/allproducts", {
                  state: { productId: product.id },
                });
              }}
              className="block w-full text-left py-2 px-3 hover:bg-orange-50 rounded-lg text-zinc-800"
            >
              {product.name}
            </button>
          ))
        ) : (
          <p className="py-2 px-3 text-gray-500">
            No products found
          </p>
        )}
      </div>
    )}
</div>
       </div>
     </div>
   </div>
  </nav>
</header>
  )
}

export default Navbar
