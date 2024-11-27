

function Quiz() {
    const questions = [
        {
            question: "What is React",
            options: ['CSS Framework', 'React Library', 'React Framework', 'testing'],
            answer: 'React Library',
        },
        {
            question: "What is 2 + 2",
            options: ['4', '5', '7', '5'],
            answer: '4',
        }
    ]
    return (
        <div className="flex h-dvh justify-center items-center">
            <h1 className="text-3xl font-semibold">Quiz App</h1>
        </div>
    )
}

export default Quiz