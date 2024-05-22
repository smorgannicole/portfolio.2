import React from "react"

const DisplayProjects = ({ displayFinished, setDisplayFinished }) => {
  return (
    <div className="absolute flex z-10 gap-5 -top-10 text:lg screen-md-sm-660:text-xl text-gray-950">
      <button
        className={
          displayFinished
            ? "bg-white px-4 py-3 rounded-full transition-all"
            : "duration-300 hover:bg-opacity-50 hover:bg-white px-4 py-3 rounded-full"
        }
        onClick={() => setDisplayFinished(true)}
      >
        Finished Projects*
      </button>
      <button
        className={
          !displayFinished
            ? "bg-white px-4 py-3 rounded-full transition-all"
            : "duration-300 hover:bg-opacity-50 hover:bg-white px-4 py-3 rounded-full"
        }
        onClick={() => setDisplayFinished(false)}
      >
        Projects in Progress
      </button>
    </div>
  )
}

export default DisplayProjects
