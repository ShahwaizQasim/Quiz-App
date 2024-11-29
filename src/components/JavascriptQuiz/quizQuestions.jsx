const QuizQuestions = [
    {
        question: "Q1) Which of the following is a JavaScript data type?",
        options: ["String", "Number", "Boolean", "All of the above"],
        answer: "All of the above",
    },
    {
        question: "Q2) What is the correct syntax for referring to an external script called 'app.js'?",
        options: [
            "<script name='app.js'>",
            "<script href='app.js'>",
            "<script src='app.js'>",
            "<script link='app.js'>"
        ],
        answer: "<script src='app.js'>",
    },
    {
        question: "Q3) Which method is used to parse a JSON string to an object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toObject()"],
        answer: "JSON.parse()",
    },
    {
        question: "Q4) What is the output of `typeof null` in JavaScript?",
        options: ["'null'", "'object'", "'undefined'", "'number'"],
        answer: "'object'",
    },
    {
        question: "Q5) Which of the following is not a reserved word in JavaScript?",
        options: ["this", "new", "delete", "className"],
        answer: "className",
    },
    {
        question: "Q6) What does `NaN` stand for?",
        options: [
            "No Any Number",
            "Not a Number",
            "No Actual Number",
            "None of the above"
        ],
        answer: "Not a Number",
    },
    {
        question: "Q7) How can you add a comment in JavaScript?",
        options: [
            "// This is a comment",
            "/* This is a comment */",
            "<!-- This is a comment -->",
            "Both // and /* */"
        ],
        answer: "Both // and /* */",
    },
    {
        question: "Q8) What is the correct way to write a JavaScript array?",
        options: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'",
            "var colors = {red, green, blue}"
        ],
        answer: "var colors = ['red', 'green', 'blue']",
    },
    {
        question: "Q9) Which built-in method calls a function for each element in the array?",
        options: ["while()", "loop()", "forEach()", "None of the above"],
        answer: "forEach()",
    },
    {
        question: "Q10) What will be the output of `console.log(2 + '2')`?",
        options: ["4", "'4'", "'22'", "'NaN'"],
        answer: "'22'",
    }
];

export default QuizQuestions;