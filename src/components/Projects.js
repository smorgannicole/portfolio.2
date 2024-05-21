import React, { useState } from "react"
import FinishedProjects from "./FinishedProjects"
import InProgressProjects from "./InProgressProjects"
import Footer from "./Footer"
import Footnote from "./Footnote"
import { Link } from "react-router-dom"
import DisplayProjects from "./DisplayProjects"

const Projects = () => {
  const [displayFinished, setDisplayFinished] = useState(true)

  const handleViewArchive = () => {
    window.scrollTo(0, 0)
  }

  return (
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
      <div className="font-text text-xl ml-3 mt-4 whitespace-no-wrap flex items-center gap-1 text-gray-950">
        <Link
          to="/archive"
          className="hover:underline underline-offset-2"
          onClick={handleViewArchive}
        >
          View Full Project Archive
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <Footer footnote={displayFinished ? <Footnote /> : null} />
    </main>
  )
}

export default Projects
