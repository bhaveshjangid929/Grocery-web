import Heading from "../Heading/Heading"
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import basket from "../../assets/basket-full-vegetables.png";
function Values() {
  
  const value=[
    {
      id:1,
      title:"Trust",
      para:"It is a long established fact that a reader will be distracted by the readable.",
      icon:<FaHeart/>
    },
    {
      id:2,
      title:"Always Fresh",
      para:"It is a long established fact that a reader will be distracted by the readable.",
      icon:<FaLeaf/>
    },
    {
      id:3,
      title:"Food Safety",
      para:"It is a long established fact that a reader will be distracted by the readable.",
      icon:<FaShieldAlt/>
    },
    {
      id:4,
      title:"100% Organic",
      para:"It is a long established fact that a reader will be distracted by the readable.",
      icon:<FaSeedling/>
    },

  ]

  const leftValue=value.slice(0,2).map((item)=>(
    <div key={item.id} className="flex flex-row-reverse items-center gap-4">
      <div>
        <span className="bg-gradient-to-b from-orange-400 to-orange-500 w-14 h-14 md:w-14 md:h-14 lg:w-15 lg:h-15
shrink-0 rounded-full flex justify-center items-center
text-2xl md:text-2xl lg:text-3xl text-white">{item.icon}</span>
      </div>

      <div className="text-right">
        <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
        <p className="text-zinc-600 mt-2">{item.para}</p>
      </div>
    </div>
  ))

  const rightValue=value.slice(2).map((item)=>(
    <div key={item.id} className="flex justify-between items-center gap-3 ">
      <div className="flex flex-row-reverse">
        <span className="bg-gradient-to-b from-orange-400 to-orange-500 w-14 h-14 md:w-14 md:h-14 lg:w-15 lg:h-15
shrink-0 rounded-full flex justify-center items-center
text-2xl md:text-2xl lg:text-3xl text-white">{item.icon}</span>
      </div>

      <div className="text-right">
        <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
        <p className="text-zinc-600 mt-2">{item.para}</p>
      </div>
    </div>
  ))
  return (
    <section className="scroll-mt-24" id="about">
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Value"/>

        <div className="flex md:flex-row flex-col gap-4 lg:mt-8">
          {/*Left Value*/}
          <div className="flex flex-col gap-20 justify-between mt-15 lg:mt-5">
            {leftValue}
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img src={basket} alt="" className="h-auto w-full object-contain"/>
          </div>

          {/*Right Value*/}
          <div className="flex gap-20 justify-between flex-col mt-15 lg:mt-5">{rightValue}</div>
        </div>
      </div>
    </section>
  )
}

export default Values
