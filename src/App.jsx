import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/pages/Home'
import Sponsorship from './components/pages/Sponsorship'
import Competition from './components/pages/Competition'
import './index.css'

const App = () => {

  return (
    <div className='app-container'>

        <Navbar/>
        <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
        </Routes>
        </div>
      <Footer/>
    </div>
  )
}

export default App