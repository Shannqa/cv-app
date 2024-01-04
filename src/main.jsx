import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import PersonalInfo from './components/PersonalInfo.jsx'
import FinishedCV from './components/FinishedCV.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <PersonalInfo />
    <FinishedCV />
  </React.StrictMode>,
)
