import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Pages/home"
import Quiz from "./components/ReactQuiz/Quiz"

function App() {
  return (
    <>
      {/* <Quiz /> */}
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/ReactQuiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
