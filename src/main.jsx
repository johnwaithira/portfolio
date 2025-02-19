import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectContextProvider from './context/ProjectContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProjectContextProvider>
      <App />
    </ProjectContextProvider>
  </BrowserRouter>
)
