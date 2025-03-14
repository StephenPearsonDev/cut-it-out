import React from 'react';
import GenericSlider from './GenericSlider';

function ResultsSlider({ months, setMonths }) {
  return (
    <div className="w-full">
   
      <div className="relative">
        <GenericSlider
          label="Use slider to adjust the months"
          value={months}
          onChangeValue={setMonths}
          min={0}
          max={12}
          displayText="Use the slider to change the months."
          className="mt-4"
        />


      
      </div>
    </div>
  );
}

export default ResultsSlider;
