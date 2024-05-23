import React, { useState } from "react"
import AmbientBG from "../components/AmbientBG"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import FinishedProjects from "../components/FinishedProjects"
import InProgressProjects from "../components/InProgressProjects"

const Work = () => {
  const [displayFinished, setDisplayFinished] = useState(true)

  const handleViewArchive = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="bg-blue-100 min-h-screen bg-opacity-50 px-3 screen-md-sm-660:px-24 py-10 overflow-hidden">
      <NavBar />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-x-clip pointer-events-none">
        <AmbientBG />
      </div>
      <div className="flex justify-end 2xl:justify-center pt-28 screen-md-sm:pt-44 pb-24 screen-md-sm:pb-56">
        <Hero />
      </div>
      <main className="relative">
        {displayFinished ? (
          <FinishedProjects
            displayFinished={displayFinished}
            setDisplayFinished={setDisplayFinished}
            handleViewArchive={handleViewArchive}
          />
        ) : (
          <InProgressProjects
            displayFinished={displayFinished}
            setDisplayFinished={setDisplayFinished}
            handleViewArchive={handleViewArchive}
          />
        )}
      </main>
    </div>
  )
}

export default Work
