import React from "react"
import DisplayProjects from "./DisplayProjects"

const InProgress = ({ displayFinished, setDisplayFinished }) => {
  return (
    <div>
      <DisplayProjects
        displayFinished={displayFinished}
        setDisplayFinished={setDisplayFinished}
      />
      <h3 className="pt-10 font-title text-gray-950 text-3xl">
        *This portfolio*
      </h3>
    </div>
  )
}

export default InProgress
