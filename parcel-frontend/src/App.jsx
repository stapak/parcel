import { useState } from 'react'
import { Router,Route, Routes } from 'react-router-dom'

import './App.css'

// Website components
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import AboutUs from './components/AboutUs/AboutUs';
import TrackingPage from './components/TrackingPage/TrackingPage';
import UserVerificationPage from './components/UserVerificationPage/UserVerificationPage';
import LoginPage from './components/LoginPage/LoginPage';
import DashboardPage from './components/DashboardPage/DashboardPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/tracking' element={<TrackingPage />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/user-verification/:trackingId' element={<UserVerificationPage />} />
          <Route path ='/login' element={<LoginPage />} /> 
          <Route path='/dashboard' element={< DashboardPage  />} />
      </Routes>
      
    </div>
  )
}

export default App
