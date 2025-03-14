import React, { useState, useEffect } from 'react'
import { calorieData } from '../data/calorieData' 

function Calculator({ onAddItem, isMetric, setIsMetric }) {
  const [foodName, setFoodName] = useState('')
  const [calories, setCalories] = useState('')
  const [servingsDay, setServingsDay] = useState(0)
  const [servingsWeek, setServingsWeek] = useState(0)
  const [filteredFoods, setFilteredFoods] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)


  useEffect(() => {
    if (foodName.trim().length === 0) {
      setFilteredFoods([])
      setShowDropdown(false)
      return
    }

    const lower = foodName.toLowerCase()
    const matched = calorieData.filter((item) =>
      item.name.toLowerCase().includes(lower)
    )
    setFilteredFoods(matched)
    setShowDropdown(matched.length > 0)
  }, [foodName])

  function handleCalorieChange(e) {
    const val = e.target.value
    if (val === '') {
      setCalories('')
      return
    }
    const numericVal = parseInt(val, 10)
    if (!isNaN(numericVal)) {
      setCalories(numericVal > 5000 ? 5000 : numericVal)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!foodName.trim() || !calories) return

    const newItem = {
      foodItem: foodName,
      calories: parseInt(calories, 10),
      servingsDay: parseInt(servingsDay, 10),
      servingsWeek: parseInt(servingsWeek, 10),
    }

    onAddItem(newItem)

    setFoodName('')
    setCalories('')
    setServingsDay(0)
    setServingsWeek(0)
    setShowDropdown(false)
    setFilteredFoods([])
  }


  function handleSelectItem(itemName) {
    setFoodName(itemName)
    setShowDropdown(false)
    setFilteredFoods([])
  }

  function handleSelectPortion(portionCals) {
    setCalories(portionCals)
  }

  return (
    <section
      id="calculator"
      className="bg-white p-6 rounded sm:shadow-md my-6 md:w-4/5 mx-auto border border-indigo-100"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
        Add a Food to Cut
      </h2>

      <div className="flex items-center justify-center mb-6">
        <label className="mr-3 font-semibold">Units:</label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsMetric(true)}
            className={`px-4 py-2 rounded-md ${
              isMetric ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            Metric (kg)
          </button>
          <button
            type="button"
            onClick={() => setIsMetric(false)}
            className={`px-4 py-2 rounded-md ${
              !isMetric ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            Imperial (lb)
          </button>
        </div>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Food Item
          </label>
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            placeholder="e.g., Mayonnaise, Cheese, or custom..."
          />

          {showDropdown && (
            <div className="border border-gray-300 bg-white mt-1 rounded shadow-md max-h-40 overflow-auto">
              {filteredFoods.map((item, idx) => (
                <div key={idx} className="p-2 border-b last:border-none">
                  <p
                    className="font-semibold cursor-pointer text-indigo-800 hover:underline"
                    onClick={() => handleSelectItem(item.name)}
                  >
                    {item.name}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.variants.map((variant, vIdx) => (
                      <button
                        key={vIdx}
                        type="button"
                        className="text-xs px-2 py-1 border border-indigo-300 rounded text-indigo-700 hover:bg-indigo-50"
                        onClick={() => {
                          handleSelectItem(item.name)
                          handleSelectPortion(variant.calories)
                        }}
                      >
                        {variant.portion} — {variant.calories} cal
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Calories (per serving)
          </label>
          <input
            type="number"
            value={calories}
            onChange={handleCalorieChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring"
            placeholder="e.g., 94"
            max="5000"
            min="1"
            required
          />
        </div>

        <div className="rounded p-4 border border-indigo-200">
          <label className="block mb-2 text-gray-700 font-semibold">
            Servings per day: <span className="text-indigo-600">{servingsDay}</span>
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            value={servingsDay}
            onChange={(e) => setServingsDay(e.target.value)}
            className="range range-primary range-md"
          />
          <div className="flex w-full justify-between text-xs text-gray-700 mt-1">
            {[...Array(11)].map((_, i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
        </div>

        <div className="rounded p-4 border border-indigo-200">
          <label className="block mb-2 text-gray-700 font-semibold">
            Servings per week: <span className="text-indigo-600">{servingsWeek}</span>
          </label>
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            value={servingsWeek}
            onChange={(e) => setServingsWeek(e.target.value)}
            className="range range-primary range-md"
          />
          <div className="flex w-full justify-between text-xs text-gray-700 mt-1">
            {[...Array(11)].map((_, i) => (
              <span key={i}>{i}</span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white font-bold text-lg py-2 px-4 rounded-md hover:bg-indigo-700 mt-4 mx-auto"
        >
          Add Item
        </button>
      </form>
    </section>
  )
}

export default Calculator
