
function UnitSwitcher({ isMetric, setIsMetric }) {
  const toggleUnit = () => setIsMetric(prev => !prev);

  return (
    <div className="flex items-center gap-1.5">
      <span className={`text-xs whitespace-nowrap ${!isMetric ? 'font-semibold' : 'opacity-70'}`}>
        Imperial
      </span>
      
      <button
        className="relative inline-flex items-center justify-center h-5 w-8 rounded-full bg-white/20 focus:outline-none"
        onClick={toggleUnit}
        aria-pressed={isMetric}
        aria-label="Toggle measurement unit"
      >
        <span className="sr-only">
          {isMetric ? 'Switch to imperial units' : 'Switch to metric units'}
        </span>
        <span 
          className={`absolute h-3.5 w-3.5 rounded-full bg-white transition-transform duration-200 ease-in-out ${
            isMetric ? 'translate-x-1.5' : 'translate-x-[-0.35rem]'
          }`} 
        />
      </button>

      <span className={`text-xs whitespace-nowrap ${isMetric ? 'font-semibold' : 'opacity-70'}`}>
        Metric
      </span>
    </div>
  );
}

export default UnitSwitcher;