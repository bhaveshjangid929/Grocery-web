
function Button({content}) {
  return (
    <div>
      <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-700 transition-all duration-300 cursor-pointer active:scale-105 active:to-orange-700">{content}</button>
    </div>
  )
}

export default Button
