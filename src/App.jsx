import React, { useRef, useState } from 'react';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import FoodForm from './components/FoodForm';
import Results from './components/Results';
import Cards from './components/Cards';
import Footer from './components/Footer';
import useFoodLogic from './hooks/useFoodLogic';

function App() {
  const {
    addedItems,
    handleAddItem,
    handleRemoveItem,
    months,
    setMonths,
    isMetric,
    setIsMetric,
    totalDailyCalories,
    totalWeightLoss
  } = useFoodLogic();

  const aboutSectionRef = useRef(null);
  const resultsSectionRef = useRef(null);
  const examplesSectionRef = useRef(null);
  const formSectionRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 300);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  function scrollToSection(ref) {
    if (ref.current) {
      const offset = 80;
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  }

  function scrollToAbout() {
    scrollToSection(aboutSectionRef);
  }

  function scrollToResults() {
    scrollToSection(resultsSectionRef);
  }

  function scrollToForm() {
    scrollToSection(formSectionRef);
  }

  function scrollToExamples() {
    scrollToSection(examplesSectionRef);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onAboutClick={scrollToAbout}
        onResultsClick={scrollToResults}
        onExamplesClick={scrollToExamples}
        onFormClick={scrollToForm}
        isMetric={isMetric}
        setIsMetric={setIsMetric}
      />

      <section ref={aboutSectionRef}>
        <Hero />
      </section>

      <div className="flex w-full lg:w-10/12 mx-auto justify-center p-4 gap-4 bg-white flex-col md:flex-row">
        <div className="w-full md:w-1/2 min-h-[470px]" ref={formSectionRef}>
          <FoodForm
            onAddItem={handleAddItem}
            isMetric={isMetric}
            setIsMetric={setIsMetric}
          />
        </div>

        <div className="w-full md:w-1/2 min-h-[470px]">
          <section  className="h-full" ref={resultsSectionRef}>
            <Results
              addedItems={addedItems}
              onRemoveItem={handleRemoveItem}
              months={months}
              setMonths={setMonths}
              totalDailyCalories={totalDailyCalories}
              totalWeightLoss={totalWeightLoss}
              isMetric={isMetric}
            />
          </section>
        </div>
      </div>

      <section ref={examplesSectionRef}>
        <Cards />
      </section>

      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="
            fixed 
            bottom-5 
            right-5 
            bg-indigo-600 
            text-white 
            px-4 
            py-2 
            rounded-full 
            shadow-lg 
            hover:bg-indigo-500 
            transition-colors 
            duration-200
            z-50
          "
        >
          ↑ Top
        </button>
      )}

    </div>
  );
}

export default App;
