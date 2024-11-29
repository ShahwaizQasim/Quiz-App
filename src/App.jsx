import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Pages/home"
import Quiz from "./components/ReactQuiz/Quiz"
import JavaScriptQuiz from "./components/JavascriptQuiz/quiz"

function App() {
  return (
    <>
      {/* <Quiz /> */}
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/ReactQuiz" element={<Quiz />} />
           <Route path="/JavascriptQuiz" element={<JavaScriptQuiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
