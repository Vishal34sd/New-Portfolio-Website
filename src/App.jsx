import { useState } from 'react'
import './App.css'
import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"

import ProjectDetails from "./pages/ProjectDetails.jsx"
import { Route, Routes } from "react-router-dom"



const App = () => {


  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  )
}

export default App
