import AllQuestions from "../AllQuestions/AllQuestions";

const Score = ({ questions, answers }) => {
  const calculateScore = () => {
    let total = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        total += questions[index].points;
      }
    });
    return total;
  };

  const totalEarnablePoints = () => {
    return questions.reduce((acc, question) => acc + question.points, 0);
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full mx-auto border">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Final Score
          </h2>

          <div className="text-6xl font-bold text-indigo-600 mb-4">
            {/* Displaying the final score and total possible points */}
            {calculateScore()} / {totalEarnablePoints()}
          </div>
        </div>
      </div>

      <AllQuestions questions={questions} answers={answers} />

      <div className="flex justify-center space-x-4">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 mt-16"
              onClick={() => window.location.reload()}
            >
              Re-take Quiz
            </button>
          </div>
    </div>
  );
};

export default Score;
