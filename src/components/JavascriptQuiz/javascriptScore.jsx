import React from 'react'
import { Link } from 'react-router'

function JavascriptScore({score}) {
  return (
    <div className='h-dvh flex flex-col gap-4 justify-center items-center bg-black w-full'>
        <h1 className='text-white text-4xl underline underline-offset-4'>Javascript Quiz Result</h1>
        <h3 className='text-white text-2xl mt-2'>Total Questions is 10</h3>
            <h3 className='text-white text-2xl'> Your Correct Answer is {score}</h3>
            <h4 className='text-white text-2xl'>{score >= 6 ? `Congratulations You are Pass 😍`: 'Sorry You are Fail ☹️'}</h4>
            <button className='py-2 px-6 bg-white text-[#000] font-semibold mt-6 rounded-[10px]'>
                <Link to={'/'}>Back to Home</Link>
                </button>
    </div>
  )
}

export default JavascriptScore