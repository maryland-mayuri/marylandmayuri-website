import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Sponsorship from './components/pages/Sponsorship'
import './index.css'

const App = () => {

  return (
    <div className='app-container'>
        <Navbar/>
        <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
        </Routes>
        </div>
      <Footer/>
    </div>
  )
}

export default App