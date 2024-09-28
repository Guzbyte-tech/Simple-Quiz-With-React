/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Question from "./components/Question/Question";
import { examQuestions } from "./data/examQuestions";
import Score from "./components/Score/Score";

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [answers, setAnswers] = useState([]);

  const nextQuestion = () => {
    if (questionIndex < examQuestions.length - 1) {
      setQuestionIndex(() => questionIndex + 1);
    } else {
      setShowFinalScore(true);
    }
  };

  const prevQuestion = () => {
    if (questionIndex <= examQuestions.length - 1) {
      setQuestionIndex(() => questionIndex - 1);
    } else {
      setShowFinalScore(true);
    }
  };

  const onAnswer = (selectedAnswer) => {
    // map answer to question answered by user.
    const newAnswer = [...answers];
    newAnswer[questionIndex] = selectedAnswer;
    setAnswers(newAnswer);
  };

  const handleRestart = () => {
    setQuestionIndex(() => 0)
    setShowFinalScore(() => false)
    setAnswers(() => [])
  }

  return (
    <>
      <div className="my-32">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Simple Quiz App
        </h1>

        {showFinalScore ? (
          <Score questions={examQuestions} answers={answers} onRestart={handleRestart} />
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full mx-auto border">
            <Question
              question={examQuestions[questionIndex]}
              handleAnswer={onAnswer}
              selectedOption={answers[questionIndex]}
              totalQuestions={examQuestions.length}
              currentQuestion={questionIndex}
              
            />

            <Navigation
              currentQuestion={questionIndex}
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
              totalQuestions={examQuestions.length}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
