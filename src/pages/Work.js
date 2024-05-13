import React from "react"
import AmbientBG from "../components/AmbientBG"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

const Work = () => {
  return (
    <div className="bg-blue-100 min-h-screen bg-opacity-50 overflow-x-clip">
      <AmbientBG hero={<Hero />} />
      <Projects />
    </div>
  )
}

export default Work
