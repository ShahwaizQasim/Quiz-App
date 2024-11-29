import React from 'react'

function JavascriptQuestionsList({quizQuestion, quizOptions, handleClick, currentAnswer}) {
  return (
    <div>
        <h1 className='text-4xl font-semibold text-center mb-10'>{quizQuestion}</h1>
        <ul>
            {
            quizOptions.map((option, ind) => {
              return <li key={ind} className={`${currentAnswer === option ? 'bg-blue-300 text-white hover:text-black': '' } 
              text-center mt-3 rounded-md bg-[#edeef1] text-black font-semibold hover:bg-[#ccc] hover:cursor-pointer px-24 py-2`}
              onClick={()=> handleClick(option)}
              >
                {option}</li>
            })
            }
        </ul>
    </div>
  )
}

export default JavascriptQuestionsList