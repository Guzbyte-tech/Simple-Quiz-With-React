import { useState } from "react";

/* eslint-disable react/prop-types */
const Question = ({
  question,
  handleAnswer,
  selectedOption,
  totalQuestions,
  currentQuestion,
  
}) => {
  const options = question.options;
  const [answer, setAnswer] = useState(selectedOption);
  const handleSelectedOption = (option) => {
    handleAnswer(option);
    setAnswer(option);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-left">
          <small className="text-gray-6600">
            {currentQuestion + 1} / {totalQuestions}
          </small>
        </div>

        <small className="text-right text-gray-6600">
          {question.points} points
        </small>
      </div>

      <div className="mt-3">
        <p className="text-lg mb-4">{question.question}</p>
        <div className="space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectedOption(option)}
              className={
                option === selectedOption
                  ? "w-full py-2 px-4 bg-green-100 text-green-500 border border-green-300 rounded-lg cursor-not-allowed"
                  : "w-full py-2 px-4 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-100"
              }
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
