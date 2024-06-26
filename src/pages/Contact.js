import React from "react"
import NavBar from "../components/NavBar"
import AmbientBG from "../components/AmbientBG"

const Contact = () => {
  return (
    <>
      <div className="font-text text-gray-950 min-h-screen bg-opacity-50 bg-blue-100 px-5 screen-md-sm-660:px-32 py-10">
        <NavBar />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-x-clip pointer-events-none">
          <AmbientBG />
        </div>
        <h1 className="text-3xl screen-md-sm:text-5xl font-title font-bold pt-28 screen-md-sm:pt-36 items-center flex flex-col justify-center text-center">
          <span>Feel Free to Say Hello!</span>
        </h1>
        <div className="flex flex-col" style={{ alignItems: "center" }}>
          <ul className="mt-10 flex flex-col gap-5 text-md screen-md-sm:text-xl h-fit w-fit">
            <li className="flex flex-wrap justify-center">
              Email me&nbsp;
              <a
                href="mailto:smorgannicole@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="underline flex transition-all duration-300 hover:opacity-70">
                  here
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li className="flex flex-wrap justify-center text-md screen-md-sm:text-xl">
              Connect with me on&nbsp;
              <a
                className="underline transition-all duration-300 hover:opacity-70"
                href="https://www.linkedin.com/in/smorgannicole/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex">
                  LinkedIn
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li className="flex flex-wrap justify-center text-md screen-md-sm:text-xl">
              Check out my work on&nbsp;
              <a
                className="transition-all duration-300 hover:opacity-70"
                href="https://github.com/smorgannicole"
                target="_blank"
                rel="noreferrer"
              >
                <span className="underline flex">
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
