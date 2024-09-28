
const AllQuestions = ({ questions, answers }) => {
  return (
    <>
      {questions.map((question, index) => (
        <div
          className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full mx-auto mt-5"
          key={index}
        >
          <div className="mt-3">
            <div className="flex justify-between items-center">
              <div className="text-left">
                <small className="text-gray-6600">{index + 1}/{questions.length}</small>
              </div>

              <small className="text-right text-gray-6600">5 points</small>
            </div>
            <p className="text-lg mb-4 mt-3">{question.question}</p>
            <div className="space-y-3">
              {question.options.map((option, qustIndex) => {
                let optionClass =
                  "w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700";
                if (answers[index] === option) {
                  if (option === question.correctAnswer) {
                    optionClass +=
                      " bg-green-100 text-green-700 border-green-400";
                  } else {
                    optionClass += " bg-red-100 text-red-700 border-red-400";
                  }
                } else if (option === question.correctAnswer) {
                  optionClass +=
                    " bg-green-100 text-green-700 border-green-400";
                }
                return (
                  <button key={qustIndex} className={optionClass} disabled>
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllQuestions;
