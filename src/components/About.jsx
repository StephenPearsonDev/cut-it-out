import React from 'react'
import { FaCheese, FaIceCream, FaBreadSlice, FaCookieBite, FaBeer } from 'react-icons/fa'
import { MdMonitorWeight } from 'react-icons/md'

function About() {
  return (
    <section
      id="about"
      className="text-center p-6 flex flex-col gap-6 md:w-4/5 md:mx-auto"
    >
      <h2 className="text-5xl font-semibold mb-4">Cut it out!</h2>

      <div className="flex justify-center my-4">
        <MdMonitorWeight className="w-16 h-16 text-gray-700" />
      </div>

      <div className="mx-auto max-w-3xl text-lg leading-relaxed">
        <p className="mb-2">
          Visualize how{' '}
          <span className="text-indigo-600 font-semibold">small changes</span> to
          your diet can add up to <strong>significant weight changes</strong> over time.
          By cutting out a few slices of cheese less per week, or a teaspoon of sugar
          less each day, you can make gradual adjustments that are <em>easier to stick to</em>.
        </p>
        <p>
          If you’re unsure about exact calories for common foods, check a resource like{' '}
          <a
            href="https://www.calorieking.com/"
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-600"
          >
            CalorieKing
          </a>{' '}
          or other online databases.
        </p>
      </div>

      <div className="flex justify-around text-2xl text-indigo-700 mt-6">
        <FaCheese />
        <FaIceCream />
        <FaBreadSlice />
        <FaCookieBite />
        <FaBeer />
      </div>
    </section>
  )
}

export default About
