import React, { useState } from 'react'
import QuizQuestions from './quizQuestions'
import JavascriptQuestionsList from './JavascriptQuestionsList';

function JavaScriptQuiz() {
  const quizQuestion = QuizQuestions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null)

  // const handleClick = () => {
     
  // }

  return (
    <div className='h-dvh flex flex-col justify-center items-center'>
      <JavascriptQuestionsList quizQuestion={quizQuestion[currentQuestionIndex].question}
        quizOptions={quizQuestion[currentQuestionIndex].options} currentAnswer={currentAnswer} />
      <button className='mt-10 border-2 cursor-pointer border-black
       py-2 px-6 text-sm rounded-[10px] hover:scale-95 font-semibold active:bg-black active:text-white text-black'>Next Question</button>
    </div>
  )
}

export default JavaScriptQuiz