import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function Layout({cart}) {
  return (
    <div>
      <Navbar cart={cart}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
