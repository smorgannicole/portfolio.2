import React, { useState } from "react"
import FinishedProjects from "./FinishedProjects"
import InProgressProjects from "./InProgressProjects"
import { Link } from "react-router-dom"

const Projects = () => {
  const [displayFinished, setDisplayFinished] = useState(true)

  const handleViewArchive = () => {
    window.scrollTo(0, 0)
  }

  return (
    <main className="-mt-36 relative">
      <div className="absolute flex z-10 py-3 px-10 gap-5 -top-16 text-xl text-gray-950">
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
      {displayFinished ? <FinishedProjects /> : <InProgressProjects />}
      <div className="font-text p-3 text-xl ml-10 -mt-7 whitespace-no-wrap flex items-center gap-1 text-gray-950">
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
      {displayFinished ? (
        <>
          <div className="text-font text-gray-950 flex p-14 justify-center gap-20">
            <p className="flex" style={{ alignItems: "center" }}>
              © 2024 Morgan Smith
            </p>
            <div className="flex flex-col">
              <p className="font-bold mb-3">Elsewhere</p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com/smorgannicole"
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-70 transition-all duration-300 hover:opacity-100"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com/smorgannicole"
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-70 transition-all duration-300 hover:opacity-100"
                  >
                    Dribbble
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/morgansmith13"
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-70 transition-all duration-300 hover:opacity-100"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p className="font-bold mb-3">Contact</p>
              <ul>
                <li>
                  <a
                    href="mailto:smorgannicole@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-70 transition-all duration-300 hover:opacity-100"
                  >
                    Gmail
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col p-3 text-gray-950">
            <p className="font-text flex justify-end">
              *These sites were created prior to my awareness and understanding
              of accessibility standards.
            </p>
            <p className="font-text flex justify-end">
              A less-accessible iteration of my portfolio can be found{" "}
              <a
                href="https://poetic-tiramisu-cda399.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                &nbsp;
                <span className="text-pink-756 underline">here</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-pink-756"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </p>
          </div>
        </>
      ) : (
        ""
      )}
    </main>
  )
}

export default Projects
