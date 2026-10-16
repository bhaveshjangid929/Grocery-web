import bgAll from "../../assets/all-banner.jpg"
import CategoryPage from "../CategoryPage/CategoryPage"
function AllProducts() {
  return (
    <div>
      <h1><CategoryPage title="All  Products" bgImage={bgAll} categories={['All']}/></h1>
    </div>
  )
}

export default AllProducts
