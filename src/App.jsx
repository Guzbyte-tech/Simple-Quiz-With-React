/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Question from "./components/Question/Question";
import { questions } from "./data/questions";
import Score from "./components/Score/Score";

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [answers, setAnswers] = useState([]);

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(() => questionIndex + 1);
    } else {
      setShowFinalScore(true);
    }
  };

  const prevQuestion = () => {
    if (questionIndex <= questions.length - 1) {
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

  return (
    <>
      <div className="my-32">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Simple Quiz App
        </h1>

        {showFinalScore ? (
          <Score questions={questions} answers={answers} />
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full mx-auto border">
            <Question
              question={questions[questionIndex]}
              handleAnswer={onAnswer}
              selectedOption={answers[questionIndex]}
              totalQuestions={questions.length}
              currentQuestion={questionIndex}
              
            />

            <Navigation
              currentQuestion={questionIndex}
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
              totalQuestions={questions.length}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
