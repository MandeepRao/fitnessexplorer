import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Workouts from './pages/Workouts.jsx'
import Equipment from './pages/Equipment.jsx'
import User from './pages/User.jsx'
import { AuthProvider } from './ContextProvider/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/fitnessexplorer/">
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts pageType={"muscles"} />} />
          <Route path="/equipment" element={<Equipment pageType={"equipments"} />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>,
)
