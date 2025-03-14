import React from 'react';
import ItemsList from './ItemsList';
import TotalsSection from './TotalsSection';

function Results({
  addedItems,
  onRemoveItem,
  months,
  setMonths,
  totalDailyCalories,
  totalWeightLoss,
  isMetric,
}) {
  return ( 
      <div className="flex flex-col sm:border-2 border-indigo-200 rounded-lg p-4 h-full">
        <div className="">
          <ItemsList addedItems={addedItems} onRemoveItem={onRemoveItem} />
        </div>
      
        <TotalsSection
          months={months}
          setMonths={setMonths}
          totalDailyCalories={totalDailyCalories}
          totalWeightLoss={totalWeightLoss}
          isMetric={isMetric}
        />
      </div>
  
  );
}

export default Results;
