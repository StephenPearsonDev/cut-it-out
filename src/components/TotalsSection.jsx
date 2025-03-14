import ResultsSlider from './ResultsSlider';

function TotalsSection({
  months,
  setMonths,
  totalDailyCalories,
  totalWeightLoss,
  isMetric,
}) {
  return (
    <div className="w-full my-4 bg-white rounded shadow-sm flex flex-col flex-grow items-center gap-6 place-content-end">
      <p className="text-indigo-700 text-2xl font-medium">
        Total daily calories cut: <span className="font-bold">{totalDailyCalories}</span>
      </p>
      <p className="text-xl">
        <span className="font-bold text-gray-800">{months}</span> months ={' '}
        <span className="font-bold text-indigo-600">
          {totalWeightLoss} {isMetric ? 'kg' : 'lb'}
        </span>
      </p>

      <ResultsSlider months={months} setMonths={setMonths} />
    </div>
  );
}

export default TotalsSection;
