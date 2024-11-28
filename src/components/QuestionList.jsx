import React from 'react'

function QuestionList({ question, options, handleClick, currentAnswer }) {
  return (
    <div>
      <h1 className='text-4xl font-semibold text-center mb-10'>{`${question} ?`}</h1>
      <ul>
        {
          options.map((option, ind) => {
            return <li key={ind} className={`${currentAnswer === option ? 'bg-blue-400' : ' '} 
            text-center mt-3 rounded-md bg-[#edeef1] text-black font-semibold
             hover:bg-[#ccc] hover:cursor-pointer px-24 py-2`} onClick={() => handleClick(option)}>{option}</li>
          })
        }
      </ul>
    </div>
  )
}

export default QuestionList