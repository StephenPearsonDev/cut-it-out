import React from "react";

function SliderWithValueBox({ value, onChangeValue, min = 0, max = 15 }) {
  const handleChange = (e) => {
    onChangeValue(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center w-full py-1 text-xs">

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full sm:w-1/2 slider-input appearance-none bg-gray-300  rounded-lg cursor-pointer text-xs"
      />
    </div>
  );
}

export default SliderWithValueBox;
