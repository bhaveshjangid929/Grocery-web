import CategoryPage from "../../CategoryPage/CategoryPage"
import bgfruits from "../../../assets/fruits-banner.jpg";
function Fruits() {
  return (
    <div>
      <h1><CategoryPage title="fruits & veggeis" bgImage={bgfruits} categories={['fruits','Vegetables']}/></h1>
    </div>
  )
}

export default Fruits
