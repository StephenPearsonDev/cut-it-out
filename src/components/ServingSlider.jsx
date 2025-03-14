import React from 'react';
import GenericSlider from './GenericSlider';

function ServingSlider({ label, value, setValue, min = 1, max = 15 }) {
  return (
    <GenericSlider 
      label={label}
      value={value}
      onChangeValue={setValue}
      min={min}
      max={max}
      unit="servings"
      displayText={`This is your ${label.toLowerCase()}`}
    />
  );
}

export default ServingSlider;
