import React from 'react'

function QuestionList({ question, options }) {
  return (
    <div>
      <h1 className='text-4xl font-semibold text-center mb-10'>{`${question} ?`}</h1>
      <ul>
       {
       options.map((option, ind)=> {
        return <li key={ind} className='text-center mt-3 rounded-md bg-[#f7f8fb] hover:bg-[#ccc] hover:cursor-pointer px-24 py-2'>{option}</li>
       })
       }
      </ul>
    </div>
  )
}

export default QuestionList