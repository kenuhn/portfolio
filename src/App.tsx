import {Routes, Route } from "react-router-dom" 
 import Header from './component/Header/Header'
import Homepage from './pages/Homepage' 
import Projects from "./pages/Projects"
function App() {
  return (
    <>
    <div className="App">
      <Header /> 
      <Routes >
            <Route path="/" element={ <Homepage/>} />
            <Route path="/projets" element={<Projects/>} />
      </Routes>

    </div>
    </>
  )
}

export default App
