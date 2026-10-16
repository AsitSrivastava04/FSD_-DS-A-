import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>

      <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/admin" element={<AdminDashboard/>} />
       <Route path="/user" element={<UserDashboard/>} />
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
