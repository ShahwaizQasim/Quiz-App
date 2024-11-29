import { BrowserRouter, Route, Routes } from "react-router"
import Quiz from "./components/ReactQuiz/Quiz"
import Home from "./Pages/home"
import Navbar from "./components/navbar"

function App() {
  return (
    <>
      {/* <Quiz /> */}
      <BrowserRouter>
      <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
