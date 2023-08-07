import {Routes, Route } from "react-router-dom" 
 import Header from './component/Header/Header'
import Homepage from './pages/Homepage' 
function App() {
  return (
    <>
    <div className="App">
      <Header /> 
      <Routes >
            <Route path="/" element={ <Homepage/>} />
      </Routes>

    </div>
    </>
  )
}

export default App
