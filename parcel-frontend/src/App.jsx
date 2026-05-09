import { useState } from 'react'
import { Router,Route, Routes } from 'react-router-dom'

import './App.css'

// Website components
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import AboutUs from './components/AboutUs/AboutUs'
import TrackingPage from './components/TrackingPage/TrackingPage'
import UserVerificationPage from './components/UserVerificationPage/UserVerificationPage'

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/tracking' element={<TrackingPage />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/user-verification/:trackingId' element={<UserVerificationPage />} />
      </Routes>
      
    </div>
  )
}

export default App
