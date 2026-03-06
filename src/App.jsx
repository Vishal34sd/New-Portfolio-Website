import { useState, useEffect } from 'react'
import './App.css'
import Home from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Chatbot from "./components/Chatbot.jsx"
import Preloader from "./components/Preloader.jsx"

import ProjectDetails from "./pages/ProjectDetails.jsx"
import { Route, Routes } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"



const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
