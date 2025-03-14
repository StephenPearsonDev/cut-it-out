import React from 'react';
import SliderWithValueBox from './SliderWithValueBox';

function GenericSlider({ label, value, onChangeValue, min, max, unit = '' }) {
  return (
    <div className="w-10/12 mx-auto sm:w-full">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <label className="font-medium text-gray-700 text-center text-xs">
            {label}
          </label>
          <span className="text-lg font-semibold text-indigo-600">
            {value} {unit}
          </span>
        </div>
      )}
      <SliderWithValueBox 
        min={min} 
        max={max} 
        value={value} 
        onChangeValue={onChangeValue} 
      />
    </div>
  );
}

export default GenericSlider;
