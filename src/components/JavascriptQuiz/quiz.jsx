import React, { useState } from 'react'
import QuizQuestions from './quizQuestions'
import JavascriptQuestionsList from './JavascriptQuestionsList';
import JavascriptScore from './javascriptScore';

function JavaScriptQuiz() {
  const quizQuestion = QuizQuestions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null)
  const [score, setScore] = useState(0);
console.log('score=>', score);

  const handleClick = (option) => {
    setCurrentAnswer(option)
    if (option === quizQuestion[currentQuestionIndex].answer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  }
  return (
    <div className='h-dvh flex flex-col justify-center items-center'>
      {
        currentQuestionIndex < quizQuestion.length ? <div className='flex flex-col justify-center'><JavascriptQuestionsList quizQuestion={quizQuestion[currentQuestionIndex].question}
          quizOptions={quizQuestion[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer} />
          <button className={`${currentAnswer === null ? 'cursor-not-allowed mt-8' :
            'mt-10 border-2 cursor-pointer border-black py-2 px-6 text-sm rounded-[10px] hover:scale-95 font-semibold active:bg-black active:text-white text-black'} 
  `} onClick={handleNextQuestion}>Next Question</button></div> : <JavascriptScore score={score}/>

      }
    </div>
  )
}

export default JavaScriptQuiz