import React from 'react'

function Score({score}) {
    return (
        <div className='h-dvh flex flex-col gap-3 justify-center items-center bg-black w-full'>
            <h1 className='text-white text-4xl '>Result</h1>
            <h3 className='text-white text-2xl'>Total Questions is 10</h3>
            <h3 className='text-white text-2xl'>Correct Answer is {score}</h3>
        </div>
    )
}

export default Score;