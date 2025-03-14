import React, { useState, useEffect } from 'react';
import { FaCut, FaBeer, FaPizzaSlice } from 'react-icons/fa';
import { GiChocolateBar } from 'react-icons/gi';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import UnitSwitcher from './UnitSwitcher';
import useWindowWidth from '../hooks/useWindowWidth';




function Navbar({ onAboutClick, onResultsClick, onExamplesClick, onFormClick, isMetric, setIsMetric }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768; 

  const icons = [FaCut, FaBeer, FaPizzaSlice, GiChocolateBar];

  const handleNavClick = (callback) => () => {
    setMobileMenuOpen(false);
    callback();
  };

  if (isMobile) {
    return (
      <header className="bg-indigo-700 text-white sticky top-0 z-30 shadow-md">
        <div className="px-4 py-2 flex justify-between items-center">
          <h1 className="text-xl font-bold">Cut It Out</h1>
          <UnitSwitcher isMetric={isMetric} setIsMetric={setIsMetric} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="bg-indigo-800 transition-all duration-200 ease-in-out absolute top-14 w-full rounded-b-xl">
            <nav className="px-3 py-2 space-y-1 w-full flex flex-col items-center justify-center align-middle">
              <button onClick={handleNavClick(onAboutClick)} className="block w-full px-3 py-2 rounded hover:bg-indigo-700">
                About
              </button>
              <button onClick={handleNavClick(onFormClick)} className="block w-full px-3 py-2 rounded hover:bg-indigo-700">
                Calculator
              </button>
              <button onClick={handleNavClick(onResultsClick)} className="block w-full  px-3 py-2 rounded hover:bg-indigo-700">
                Results
              </button>
              <button onClick={handleNavClick(onExamplesClick)} className="block w-full px-3 py-2 rounded hover:bg-indigo-700">
                Testimonials
              </button>
            </nav>
          
          </div>
        )}
      </header>
    );
  }


  return (
    <header className="bg-indigo-700 text-white sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

        <div className="flex items-center space-x-4 w-1/3">
          <a
            href="https://stephenpearson.dev"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:text-indigo-100 transition-colors"
          >
            stephenpearson.dev
          </a>
    
        </div>

  
        <div className="flex flex-col items-center w-1/3">
          <h1 className="text-xl font-bold">Cut It Out</h1>
          <div className="flex space-x-2 mt-1">
            {icons.map((Icon, index) => (
              <Icon key={index} className="w-4 h-4" />
            ))}
          </div>
        </div>


        <div className="flex items-center align-middle w-1/3 flex-col justify-between gap-2">
          <nav className="flex gap-4">
            
            <button onClick={onAboutClick} className="text-sm font-medium hover:text-indigo-100 transition-colors">
              About
            </button>
            <button onClick={onFormClick} className="text-sm font-medium hover:text-indigo-100 transition-colors">
                Calculator
              </button>
            <button onClick={onResultsClick} className="text-sm font-medium hover:text-indigo-100 transition-colors">
              Results
            </button>
            <button onClick={onExamplesClick} className="text-sm font-medium hover:text-indigo-100 transition-colors">
              Testimonials
            </button>
            
            
          </nav>
          <UnitSwitcher isMetric={isMetric} setIsMetric={setIsMetric} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
