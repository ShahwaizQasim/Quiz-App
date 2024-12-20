import React from 'react'
import { Link } from 'react-router'

function Home() {
    return (
        <div className='h-dvh flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-semibold'>Quiz App</h1>

            <div className="grid grid-cols-2 gap-6 mt-10">
                <div className='flex flex-col gap-4 justify-center items-center h-[250px] w-[300px] border-2 border-[#666] rounded-[10px]
                 shadow-xl shadow-[#666]'>
                    <h2 className='text-3xl text-center'>React Quiz</h2>

                    <button className='border-2 border-black px-4 py-2 bg-black text-white rounded-[5px]'>
                        <Link to={'/ReactQuiz'}>Start Your Quiz  </Link>
                    </button>

                </div>
                <div className=' flex flex-col gap-4 justify-center items-center border-2 border-[#666]  h-[250px] w-[300px] rounded-[10px]
                shadow-xl shadow-[#666]'>
                    <h2 className='text-3xl text-center'>Javascript Quiz</h2>
                    <button className='border-2 border-black px-4 py-2 bg-black text-white rounded-[5px]'>
                        <Link to={'JavascriptQuiz'}>Start Your Quiz</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home