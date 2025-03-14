import React, { useRef, useState, useEffect } from 'react';
import { HiXMark } from 'react-icons/hi2';

function ItemsList({ addedItems, onRemoveItem }) {
  const scrollContainerRef = useRef(null);
  const [showFade, setShowFade] = useState(false);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, clientHeight, scrollHeight } = scrollContainerRef.current;
    if (scrollTop + clientHeight < scrollHeight - 5) {
      setShowFade(true);
    } else {
      setShowFade(false);
    }
  };

  useEffect(() => {
    handleScroll();
  }, [addedItems]);

  if (addedItems.length === 0) {
    return (
      <div className="bg-gray-200 rounded-xl shadow-sm p-2 m-2 flex flex-col justify-center gap-4   text-gray-600 text-center h-[14rem] w-10/12 mx-auto mb-8">
        <p className="mb-1 font-semibold text-base text-gray-800 ">
          Your food and drink list is empty.
        </p>
        <p>Add food and drink using the form.</p>
      </div>
    );
  }

  return (
    <>
      <div className="text-1xl sm:text-2xl text-center font-bold text-indigo-600 my-4">
        Your Food and Drink items
      </div>
      <div className="relative border-2 rounded-lg">

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="rounded overflow-y-scroll min-h-[14rem] max-h-[14rem] pr-2 "
        >
          <ul className="space-y-4 p-2">
            {addedItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between p-2 rounded  bg-indigo-50 shadow-md border-indigo-100"
              >
                <div className="leading-snug">
                  <p className="font-semibold text-sm">{item.foodItem}</p>
                  <p className="text-gray-600 text-sm">
                    {item.calories} cal/serving
                    {item.consumptionType === 'everyday' && (
                      <span>, {item.dailyFrequency}x/day</span>
                    )}
                    {item.consumptionType === 'somedays' && (
                      <span>, {item.dailyFrequency}x/day on {item.daysPerWeek} days/week</span>
                    )}
                    {item.consumptionType === 'certainDays' && (
                      <span>, once/day on {item.daysPerWeek} days/week</span>
                    )}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveItem(idx)}
                  className="text-red-600 bg-white rounded-full  hover:text-white hover:bg-indigo-400 p-2"
                >
                  <HiXMark className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {showFade && (
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>
    </>
  );
}

export default ItemsList;
