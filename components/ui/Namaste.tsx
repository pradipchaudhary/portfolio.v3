"use client";

import Image from "next/image";

const Nameste = () => {
  return (
    <div className="relative flex flex-col sm:items-center sm:justify-center mb-7 ml-[10px] p-2.5 transform -rotate-1 transition-all duration-300 sm:ml-0 sm:mx-auto">

      {/* Background */}
      <div className="absolute inset-0 bg-white/90 rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.08)] border-dotted border-red-500 transform rotate-1 hover:rotate-0 transition-all duration-300"></div>

      {/* Content */}
      <div className="relative flex items-center gap-2 z-10">
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

      {/* Top Pin Dot */}
      <div className="absolute -top-1 right-1 sm:right-1">
        <div className="w-2 h-2 bg-red-500 rounded-full shadow-md relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/80 to-transparent"></div>
        </div>
      </div>

      {/* Bottom Pin Dot */}
      <div className="absolute -bottom-1 left-1 sm:left-1">
        <div className="w-2 h-2 bg-red-500 rounded-full shadow-md relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/80 to-transparent"></div>
        </div>
      </div>

    </div>
  )
}

export default Nameste;