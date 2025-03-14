import React, { useEffect, useRef } from 'react';
import useInputWidth from '../hooks/useInputWidth';
import { getPortionLabel } from '../utils/conversionUtils';

function FoodDropdown({ 
  foodName, 
  setFoodName, 
  filteredFoods, 
  showDropdown, 
  setShowDropdown,
  handleSelectFood,
  isMetric,
  setCalories
}) {
  const { elementRef: inputRef, elementWidth: dropdownWidth } = useInputWidth();
  const dropdownContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowDropdown]);

  return (
    <div className="relative" ref={dropdownContainerRef}>
      <label className="block mb-2 font-medium text-gray-700 text-sm">Food Item</label>
      <input
        ref={inputRef}
        type="text"
        value={foodName}
        onChange={(e) => {
          setFoodName(e.target.value);
          setShowDropdown(true);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const search = foodName.trim().toLowerCase();
            const exactMatch = filteredFoods.some(
              (item) => item.name.toLowerCase() === search
            );
            if (!exactMatch) {
              setShowDropdown(false);
            }
          }
        }}
        className="w-full  p-1 pl-2 border border-gray-300 rounded focus:outline-none focus:ring"
        placeholder="e.g., Crisps, Chocolate, or custom..."
      />

      {showDropdown && filteredFoods.length > 0 && (
        <div
          className="absolute border border-gray-300 bg-white rounded shadow-md max-h-44 overflow-auto mt-1"
          style={{ width: dropdownWidth }}
        >
          {filteredFoods.map((item, idx) => (
            <div key={idx} className="p-2 border-b last:border-none">
              <p
                className="font-semibold text-indigo-800 cursor-pointer hover:underline"
                onClick={() => handleSelectFood(item)}
              >
                {item.name}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.variants?.map((variant, vIdx) => {
                  const label = getPortionLabel(variant, isMetric);
                  return (
                    <button
                      key={vIdx}
                      type="button"
                      className="text-xs px-2 py-1 border border-indigo-300 rounded text-indigo-700 hover:bg-indigo-50"
                      onClick={() => {
                        setFoodName(item.name);
                        setCalories(variant.calories);
                        setShowDropdown(false);
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FoodDropdown;
