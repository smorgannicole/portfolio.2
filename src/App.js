import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Work from "./pages/Work"
import About from "./pages/About"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Work />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
