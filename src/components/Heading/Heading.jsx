
function Heading({heading, highlight}) {
  return (
    <div className="w-fit mx-auto">
          <h2 className="text-zinc-800 md:text-5xl text-[2rem] font-bold "><span className="text-orange-500">{highlight}</span> {heading}</h2>
          <div className="w-35 h-1 bg-orange-300 md:mt-6 mt-4 ml-auto"></div>
        </div>
  )
}

export default Heading
