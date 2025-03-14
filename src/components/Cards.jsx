import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

function Cards() {
  const examples = [
    {
      name: 'Alice',
      habit: 'Loves mayonnaise on sandwiches',
      change: 'Reduced from 2 tbsp to 1 tbsp daily',
      tip: 'Saved ~100 calories a day!',
      imageSource: '/assets/avatars/avatar3.png',
    },
    {
      name: 'Jade',
      habit: 'Enjoys cheese snacks',
      change: 'Cut 3 slices of cheddar each week',
      tip: 'Estimated to lose 1.2 kg over 3 months!',
      imageSource: '/assets/avatars/avatar2.png',
    },
    {
      name: 'Obi',
      habit: 'Coffee with sugar daily',
      change: 'Removed 1 tsp of sugar in coffee daily',
      tip: 'Great for stable long-term progress!',
      imageSource: '/assets/avatars/avatar1.png',
    },
  ]

  return (
    <div id="examples" className="w-full px-4 py-8 my-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-6 text-center">
          Testimonials
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="bg-white rounded shadow-sm p-6 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-3 overflow-hidden">
                {ex.imageSource ? (
                  <img
                    src={ex.imageSource}
                    alt={ex.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <FaUserAlt className="text-indigo-600 w-8 h-8" />
                )}
              </div>

              <h4 className="text-xl font-semibold mb-2">{ex.name}</h4>
              <p className="text-gray-700 mb-1">
                <strong>Habit:</strong> {ex.habit}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Change:</strong> {ex.change}
              </p>
              <p className="text-gray-800 italic mt-3">“{ex.tip}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
