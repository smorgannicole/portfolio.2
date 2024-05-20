import React from "react"
import NavBar from "../components/NavBar"

const Contact = () => {
  return (
    <>
      <div className="font-text text-gray-950 min-h-screen bg-opacity-50 bg-blue-100 px-32 py-10">
        <NavBar />
        <h1 className="font-title text-5xl pt-36 items-center flex flex-col justify-center">
          <span className="bg-blue-100 px-8 py-6 rounded-full">
            Feel Free to Say Hello!
          </span>
        </h1>
        <ul className="mt-10 flex flex-col gap-5">
          <li className="flex justify-center text-xl">
            Email me&nbsp;
            <a
              className="text-pink-756 underline transition-all duration-300 hover:opacity-70 text-xl"
              href="mailto:smorgannicole@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </li>
          <li className="flex justify-center text-xl">
            Connect with me on&nbsp;
            <a
              className="text-pink-756 underline transition-all duration-300 hover:opacity-70 text-xl"
              href="https://www.linkedin.com/in/smorgannicole/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex justify-center text-xl">
            Check out my work on&nbsp;
            <a
              className="text-pink-756 underline transition-all duration-300 hover:opacity-70 text-xl"
              href="https://github.com/smorgannicole"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contact
