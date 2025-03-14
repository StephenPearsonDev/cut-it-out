import React, { useState, useEffect } from 'react';
import { calorieData } from '../data/calorieData';
import ServingSlider from './ServingSlider';
import FoodDropdown from './FoodDropdown';

function FoodForm({ onAddItem, isMetric, setIsMetric }) {

  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const [consumptionType, setConsumptionType] = useState('everyday');
  const [dailyFrequency, setDailyFrequency] = useState(1);
  const [daysPerWeek, setDaysPerWeek] = useState(1);

 
  useEffect(() => {
    if (!calorieData || !Array.isArray(calorieData)) return;
    const search = foodName.trim().toLowerCase();
    if (!search) {
      setFilteredFoods([]);
      setShowDropdown(false);
      return;
    }
    const matched = calorieData.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
    if (matched.length === 1 && matched[0].name.toLowerCase() === search) {
      setShowDropdown(false);
    } else {
      setShowDropdown(matched.length > 0);
    }
    setFilteredFoods(matched);
  }, [foodName]);


  useEffect(() => {
    if (showDropdown) {
      const timer = setTimeout(() => {
        setShowDropdown(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showDropdown]);


  const handleSelectFood = (item) => {
    setFoodName(item.name);
    if (item.variants && item.variants.length > 0) {
      setCalories(item.variants[0].calories);
    }
    setShowDropdown(false);
  };

  function handleCalorieChange(e) {
    const val = e.target.value;
    if (val === '') {
      setCalories('');
      return;
    }
    const numericVal = parseInt(val, 10);
    if (!isNaN(numericVal)) {
      setCalories(numericVal > 5000 ? 5000 : numericVal);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!foodName.trim() || !calories) return;

    onAddItem({
      foodItem: foodName,
      calories: parseInt(calories, 10),
      consumptionType,
      dailyFrequency: parseInt(dailyFrequency, 10),
      daysPerWeek: parseInt(daysPerWeek, 10),
    });


    setFoodName('');
    setCalories('');
    setDailyFrequency(1);
    setDaysPerWeek(1);
    setShowDropdown(false);
    setFilteredFoods([]);
  }

  return (
    <div className="  flex w-full h-full">
      <div className="sm:border-2  border-indigo-200 rounded-lg p-2 lg:p-6 w-full">
        <h2 className="text-xl sm:text-2xl text-center font-bold text-indigo-600 my-2">
          What do you want to cut out?
        </h2>
        <p className="text-gray-600 my-2 text-xs text-center">
          Type to search our database or enter your own custom name and calorie value.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FoodDropdown 
            foodName={foodName}
            setFoodName={setFoodName}
            filteredFoods={filteredFoods}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            handleSelectFood={handleSelectFood}
            isMetric={isMetric}
            setCalories={setCalories}
          />

          <div>
            <label className="block mb-2 font-medium text-sm text-gray-700">
              Calories (per serving)
            </label>
            <input
              type="number"
              value={calories}
              onChange={handleCalorieChange}
              max="5000"
              min="1"
              required
              className="w-full p-1 pl-2 border border-gray-300 rounded focus:outline-none focus:ring"
              placeholder="e.g., 150"
            />
          </div>

          <div className="place-content-center my-4">
            <label className="flex text-lg sm:text-xl font-bold text-indigo-600 place-self-center mb-2">
              How often do you eat or drink it?
            </label>
            <div className="flex gap-4 mb-2 place-self-center text-xs">
              <label>
                <input
                  type="radio"
                  name="consumptionType"
                  value="everyday"
                  checked={consumptionType === 'everyday'}
                  onChange={(e) => setConsumptionType(e.target.value)}
                />
                <span className="ml-1">Every Day</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="consumptionType"
                  value="somedays"
                  checked={consumptionType === 'somedays'}
                  onChange={(e) => setConsumptionType(e.target.value)}
                />
                <span className="ml-1">Some Days</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="consumptionType"
                  value="certainDays"
                  checked={consumptionType === 'certainDays'}
                  onChange={(e) => setConsumptionType(e.target.value)}
                />
                <span className="ml-1">Certain Days</span>
              </label>
            </div>

            {consumptionType === 'everyday' && (
              <div>
                <ServingSlider
                    label="Times per Day"
                    value={dailyFrequency}
                    setValue={setDailyFrequency}
                    min={1}
                    max={20}
                  />
              </div>
            )}

            {consumptionType === 'somedays' && (
              <div className="flex flex-col gap-4">
                <div>
                  
                  <ServingSlider
                    label="Times per Day"
                    value={dailyFrequency}
                    setValue={setDailyFrequency}
                    min={1}
                    max={20}
                  />
                </div>
                <div>
                 
                  <ServingSlider
                    label="Days per Week"
                    value={daysPerWeek}
                    setValue={setDaysPerWeek}
                    min={1}
                    max={7}
                  />
                </div>
              </div>
            )}

            {consumptionType === 'certainDays' && (
              <div>
                
                <ServingSlider
                  label="Days per Week"
                  value={daysPerWeek}
                  setValue={setDaysPerWeek}
                  min={1}
                  max={7}
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold text-lg py-2 px-4 rounded-md hover:bg-indigo-700 mx-auto"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default FoodForm;
