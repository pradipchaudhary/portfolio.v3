"use client";


const Nameste = () => {
  return (
    <div className="relative flex flex-col sm:items-center sm:justify-center mb-7 ml-[10px] p-2.5 transform -rotate-1 transition-all duration-300 sm:ml-0 sm:mx-auto">
      {/*  */}
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-white/90 rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.08)] border-dotted border-green-500 transform rotate-1 hover:rotate-0 transition-all duration-300 overflow-hidden">
        {/* Moving border layer */}
        <div className="absolute inset-[-2px] animate-border-move bg-[conic-gradient(from_0deg,_transparent_0deg,_#f9eeec_60deg,_transparent_120deg,_transparent_360deg)]" />

        {/* Inner card mask */}
        <div className="absolute inset-[0px] bg-white rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.08)]" />
      </div>

      {/* Content */}
      <div className="relative flex items-center gap-2 z-10">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="42.000000pt" height="42.000000pt" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" className="animate-fill" stroke="none"> <path d="M1156 1831 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4 -12 2 -15 -3z" /> <path d="M937 1792 c-10 -11 -30 -98 -57 -247 -67 -377 -101 -509 -211 -823 -57 -163 -75 -181 -236 -237 -7 -2 -13 -10 -13 -16 0 -15 39 -5 110 27 101 46 112 63 195 309 77 229 124 422 176 714 26 147 49 249 57 258 8 8 24 13 36 11 18 -3 21 -11 24 -56 3 -49 2 -53 -16 -47 -28 8 -62 -37 -62 -83 0 -58 -29 -230 -58 -350 -16 -62 -24 -115 -20 -118 22 -14 79 225 98 410 11 106 14 116 35 116 22 0 32 -29 40 -118 6 -67 4 -86 -8 -100 -23 -26 -54 -130 -88 -295 -28 -134 -31 -172 -13 -154 4 3 21 75 40 159 34 161 61 258 73 271 4 4 13 2 19 -6 21 -25 -3 -568 -34 -767 -14 -91 -30 -182 -36 -203 -17 -56 -65 -92 -163 -122 -107 -33 -251 -103 -237 -117 6 -6 35 3 81 27 40 19 114 49 166 66 112 36 140 56 171 123 16 35 23 44 23 29 1 -35 52 -84 143 -140 46 -28 131 -87 190 -131 60 -44 111 -76 114 -70 3 5 2 13 -2 18 -24 22 -252 184 -319 225 -116 72 -135 128 -104 303 13 74 22 200 29 412 6 168 13 319 16 337 9 59 64 50 64 -11 0 -45 16 -128 55 -291 18 -77 48 -211 66 -298 45 -218 81 -270 232 -326 69 -25 67 -25 67 -6 0 8 -8 15 -17 15 -62 0 -203 105 -222 163 -6 18 -31 129 -55 247 -25 118 -52 238 -60 265 -24 80 -47 230 -55 367 -4 70 -13 133 -19 140 -5 7 -10 35 -10 61 0 26 -6 54 -12 62 -14 17 -53 19 -80 5 -13 -7 -21 -7 -25 0 -10 17 -71 11 -88 -8z m181 -49 c3 -38 1 -43 -17 -43 -12 0 -30 -9 -41 -20 l-21 -21 7 53 c8 62 19 80 48 76 17 -2 22 -11 24 -45z m16 -85 c3 -7 7 -52 10 -100 6 -80 4 -88 -12 -88 -10 0 -27 -7 -39 -15 -20 -14 -21 -13 -27 23 -10 63 -7 167 6 180 16 16 58 15 62 0z" /> <path d="M1340 271 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z" /> </g> </svg>


        <span className="text-[2.25rem] text-gray-700 font-thin hover:text-gray-900 transition-colors duration-300 animate-fill">
          Namaste
        </span>
      </div>

      {/* Top Pin Dot */}
      <div className="absolute top-[5px] right-1 sm:right-1">
        <div className="w-2 h-2 bg-red-500 rounded-full shadow-md relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/80 to-transparent"></div>
        </div>
      </div>

      {/* Bottom Pin Dot */}
      <div className="absolute bottom-[5px] left-1 sm:left-1">
        <div className="w-2 h-2 bg-red-500 rounded-full shadow-md relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/80 to-transparent"></div>
        </div>
      </div>

    </div>
  )
}

export default Nameste;