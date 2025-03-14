import React from 'react'

function Hero() {
  return (
    <div className="w-full bg-white p-4 mt-12">
      <div className="max-w-4xl mx-auto text-center flex flex-col sm:flex-row">
        <div className="w-full  font-bold text-gray-800 mb-8 flex flex-col gap-2 items-center">
          <div className="text-2xl flex justify-center items-center w-full">
            Small cuts.
          </div>

          <div className="text-5xl sm:text-5xl font-bold flex justify-center items-center w-full">
            <span className="text-indigo-600">Big</span>&nbsp;
            <div className="relative inline-block">
              <span className="relative z-10">changes</span>
              
              <svg
                className="absolute left-2 bottom-[-13px] w-11/12 h-[20px]"
                style={{ zIndex: 0 }}
                viewBox="0 0 140 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 10 Q 10 0, 20 10 T 35 10 T 50 10 T 65 10 T 80 10 T 95 10 T 110 10 T 125 10 T 140 10"
                  stroke="rgb(79, 70, 229)"
                  strokeWidth="4"
                  fill="transparent"
                  strokeLinecap="round"
                />
                
              </svg>
              
            </div>
            <span>.</span>
          </div>

          <div className="text-sm font-light italic flex justify-center items-center text-slate-600 mt-4">
            Tiny food changes today. Noticeable weight loss tomorrow.
          </div>
        </div>

     
      </div>
    </div>
  )
}

export default Hero
