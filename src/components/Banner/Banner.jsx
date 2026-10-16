
function Banner({title, bgImage}) {
  return (
    <div className="h-[50vh] mt-25 flex justify-center bg-center bg-cover items-center relative" style={{backgroundImage:`url(${bgImage})`}}>
      <h2 className="text-5xl text-zinc-500 bg-white p-5 rounded-xl font-bold z-10">{title}</h2>

      <div className="bg-black/20 absolute inset-0"></div>
    </div>
  )
}

export default Banner
