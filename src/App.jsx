import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/landing-page/LandingPage'
import About from './components/about/About'
import Login from './components/login/Login';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/login" element={<Login />} />
    
    </Routes>
    </>
  )
}

export default App
