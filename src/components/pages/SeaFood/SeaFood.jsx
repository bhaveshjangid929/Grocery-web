import bgsea from "../../../assets/seafood-banner.jpg"
import CategoryPage from "../../CategoryPage/CategoryPage"
function SeaFood() {
  return (
    <div>
      <h1><CategoryPage title="Meat & SeaFood" bgImage={bgsea} categories={['Seafood','Meat']}/></h1>
    </div>
  )
}

export default SeaFood
