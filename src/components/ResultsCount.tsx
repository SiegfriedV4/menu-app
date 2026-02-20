// src/components/ResultsCount.tsx

interface ResultsCountProps {
  filtered: number;
  total: number;
}

function ResultsCount({ filtered, total }: ResultsCountProps) {
  return (
    <p className="results-count">
      Showing {filtered} of {total} items
    </p>
  );
}

export default ResultsCount;
