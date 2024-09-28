/* eslint-disable react/prop-types */
const Navigation = ({ currentQuestion, nextQuestion, prevQuestion, totalQuestions }) => {
  return (
    <div className="flex align-items-center justify-between gap-5">
      {currentQuestion != 0 ? (
        <button
          className="mt-4 w-full py-2 px-4 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
          onClick={prevQuestion}
        >
          &laquo; Back
        </button>
      ) : (
        ""
      )}

      <button 
        className="mt-6 w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        onClick={nextQuestion}
      >
        {currentQuestion === totalQuestions - 1 ? 'Submit' : 'Next'} &raquo;
      </button>
    </div>
  );
};

export default Navigation;
