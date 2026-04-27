import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage.jsx'
import App from './App.jsx'
import RecruitmentPage from './RecruitmentPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<LandingPage />} />
        <Route path="/technical"   element={<App />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
