import { useState } from "react"
import QuestionList from "./QuestionList"


function Quiz() {
    const questions = [
        {
            question: "Q1) What is React",
            option: ['CSS Framework', 'React Library', 'React Framework', 'testing'],
            answer: 'React Library',
        },
        {
            question: "Q2) What is the purpose of useState in React",
            options: ['To manage side effects in a React component.', 'To handle routing in a React application.',
                'To manage state in a React functional component.', 'o update the DOM directly.'],
            answer: 'To manage state in a React functional component.',
        },
        {
            question: "Q3) What is JSX in React",
            options: ['A JavaScript library for DOM manipulation.', 'A syntax extension for JavaScript that looks like XML or HTML.',
                'A React component lifecycle method.', 'A function to update state in React.'],
            answer: 'A syntax extension for JavaScript that looks like XML or HTML.',
        },
        {
            question: "Q4) Which React hook is used to handle side effects in a functional component",
            options: ['useState', 'useEffect', 'useRef', 'useReducer'],
            answer: 'useEffect',
        },
        {
            question: "Q5) What is the default method for creating a React component",
            options: ['Function declaration', 'Arrow function', 'Class-based approach', 'All of the above'],
            answer: 'All of the above',
        },
        {
            question: "Q6) What is the key prop used for in a React list",
            options: ['To identify the type of data in a list.', 'To uniquely identify each element in a list.',
                'To define the index of an array.', 'To set CSS styles for a list.'],
            answer: 'To uniquely identify each element in a list.',
        },
        {
            question: "Q7) What does the virtual DOM do in React",
            options: ['Directly updates the real DOM.', 'Creates a copy of the real DOM and updates it in memory.',
                'Is used to store state in React.', "Handles the application's routing."],
            answer: 'Creates a copy of the real DOM and updates it in memory.',
        },
        {
            question: "Q8) Which of the following is true about React",
            options: ['React is a back-end framework.', 'React is used for building user interfaces.',
                'React works only with Node.js.', "React does not support state management."],
            answer: 'React is used for building user interfaces.',
        },
        {
            question: "Q9) How can you pass data from a parent component to a child component",
            options: ['Using state', 'Using props','Using useEffect', "Using context"],
            answer: 'Using props',
        },
        {
            question: "Q10) What is useReducer used for in React",
            options: ['Managing local component state.', 'Managing complex state logic.','Updating the DOM.', "Handling component side effects."],
            answer: 'Managing complex state logic',
        },
    ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    return (
        <div className="flex flex-col h-dvh justify-center items-center">
            <QuestionList question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].option} />
            <button className="mt-10 border-2 border-black py-2 px-6 text-sm hover:scale-95
             text-black font-semibold active:bg-black active:text-white">Next Question</button>
        </div>
    )
}

export default Quiz