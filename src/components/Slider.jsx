import React from 'react'

function Slider({ label, value, setValue, min = 0, max = 10 }) {
  const range = max - min;
  
  return (
    <div className="w-full mb-8">
      <label className="block mb-2 font-medium text-gray-700">
        {label}: <span className="text-indigo-600">{value}</span>
      </label>
      
      <div className="relative mt-12 mb-14">

        <input
          type="range"
          min={min}
          max={max}
          step="1"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="slider-input custom-slider w-full"
        />
        
        <div className="flex justify-between w-full mt-4 ">
          {Array.from({ length: range + 1 }, (_, i) => (
            <div 
              key={i} 
              className="text-center relative" 
              style={{ width: `${100/range}%`, maxWidth: '75px' }}
            >
              <span className="absolute text-lg transform -translate-x-1/2">
                {i + min}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider