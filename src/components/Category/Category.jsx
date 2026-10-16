import Heading from "../Heading/Heading"
import Fruits from '../../assets/fruits-and-veggies.png';
import dairy from "../../assets/dairy-and-eggs.png";
import seafood from "../../assets/meat-and-seafood.png";
import { Link } from "react-router-dom";
const category = [
  {
    id:1,
    title:"Fruits & Veggies",
    description:"Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image:Fruits,
    path:'/fruits'
  },
  {
    id:2,
    title:"Dairy & Eggs",
    description:"Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisamal cheeses.",
    image:dairy,
    path:'/dairy'
  },
  {
    id:3,
    title:"Meat & Seafood",
    description:"High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image:seafood,
    path:"/seafood"
  },
]
function Category() {
  const renderCards = category.map((card)=>(
    <div className="w-full mt-8 md:mt-0" key={card.id}>
      {/*Card Image*/}
       <div className="relative w-full min-h-[200px] -mb-10">
          <img src={card.image} alt="" className="absolute bottom-0 left-0 w-full h-full object-contain" />
       </div>

      {/*Card Content*/}
       <div className="bg-zinc-100 pt-16 p-10 md:p-9 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link to={card.path} className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-700 transition-all duration-300 cursor-pointer active:scale-105 active:to-orange-700">See All</Link>
       </div>          
    </div>
    ));
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="by Category"/>

        {/*Cateogry Cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 mt-10 md:mt-15">
          {renderCards}
        </div>
      </div>
    </section>
  )
}

export default Category
