import React, { useState } from "react"
import AmbientBG from "../components/AmbientBG"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import FinishedProjects from "../components/FinishedProjects"
import InProgressProjects from "../components/InProgressProjects"
import Footer from "../components/Footer"
import Footnote from "../components/Footnote"
import ViewArchive from "../components/ViewArchive"

const Work = () => {
  const [displayFinished, setDisplayFinished] = useState(true)

  const handleViewArchive = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="bg-blue-100 min-h-screen bg-opacity-50 px-24 py-10 overflow-hidden">
      <NavBar />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-x-clip pointer-events-none">
        <AmbientBG />
      </div>
      <div className="flex justify-end 2xl:justify-center pt-44 pb-56">
        <Hero />
      </div>
      <main className="relative">
        {displayFinished ? (
          <FinishedProjects
            displayFinished={displayFinished}
            setDisplayFinished={setDisplayFinished}
          />
        ) : (
          <InProgressProjects
            displayFinished={displayFinished}
            setDisplayFinished={setDisplayFinished}
          />
        )}
        <ViewArchive handleViewArchive={handleViewArchive} />
        <Footer footnote={displayFinished ? <Footnote /> : null} />
      </main>
    </div>
  )
}

export default Work
