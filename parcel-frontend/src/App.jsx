import { useState } from 'react'
import { Router,Route, Routes } from 'react-router-dom'

import './App.css'

// Website components
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import AboutUs from './components/AboutUs/AboutUs'
import TrackPage from './components/TrackPage/TrackPage'

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/track' element={<TrackPage />} />
          <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
      
    </div>
  )
}

export default App
