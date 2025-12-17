import Image from "next/image";

const Nameste = () => {
  return (
    <div className="relative flex items-center mb-7 ml-[10px] p-2.5 transform -rotate-1 transition-all duration-300">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-white/90 rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.08)] border-dotted border-red-500  transform rotate-1 hover:rotate-0 transition-all duration-300"></div>

      {/* Content */}
      <div className="relative flex items-center gap-2">
        <Image
          src="/namaste.png"
          alt="Pradip Chaudhary"
          width={52}
          height={52}
        />
        <span className="text-[2.25rem] text-gray-700 font-thin hover:text-gray-900 transition-colors duration-300">
          Namaste
        </span>
      </div>

      {/* Decorative Pin Effect */}
      <div className="pin-dot -top-1 -right-1"></div>
      <div className="pin-dot -bottom-1 -left-1"></div>
    </div>
  )
}

export default Nameste;