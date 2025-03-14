import { useState, useEffect, useRef } from 'react';

export default function useFoodLogic() {
  const [addedItems, setAddedItems] = useState([]);
  const [months, setMonths] = useState(0);
  const [isMetric, setIsMetric] = useState(true);

  const [totalDailyCalories, setTotalDailyCalories] = useState(0);
  const [totalWeightLoss, setTotalWeightLoss] = useState(0);

  const CALORIES_PER_KG = 7700;
  const CALORIES_PER_LB = 3500;

  useEffect(() => {
    calculateTotals();
  }, [addedItems, months, isMetric]);

  function calculateTotals() {
    const dailyCals = addedItems.reduce((sum, item) => {
      let itemDaily = 0;
      if (item.consumptionType === 'everyday') {
        itemDaily = item.calories * item.dailyFrequency;
      } else if (item.consumptionType === 'somedays') {
        itemDaily = (item.calories * item.dailyFrequency * item.daysPerWeek) / 7;
      } else if (item.consumptionType === 'certainDays') {
        itemDaily = (item.calories * item.daysPerWeek) / 7;
      }
      return sum + itemDaily;
    }, 0);
  
    setTotalDailyCalories(Math.round(dailyCals));
  
    const CALORIES_PER_KG = 7700;
    const CALORIES_PER_LB = 3500;
    const calPerUnit = isMetric ? CALORIES_PER_KG : CALORIES_PER_LB;
    const totalCut = dailyCals * 30 * months;
    const loss = totalCut / calPerUnit;
    setTotalWeightLoss(loss.toFixed(2));
  }
  

  function handleAddItem(newItem) {
    setAddedItems((prev) => [...prev, newItem]);
  }

  function handleRemoveItem(index) {
    setAddedItems((prev) => prev.filter((_, i) => i !== index));
  }

  return {
    addedItems,
    handleAddItem,
    handleRemoveItem,
    months,
    setMonths,
    isMetric,
    setIsMetric,
    totalDailyCalories,
    totalWeightLoss
  };
}
