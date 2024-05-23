import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import vibeVillas from "../assets/vibe-villas.png"
import vv1 from "../assets/vv1.png"
import vv3 from "../assets/vv3.png"
import vv4 from "../assets/vv4.png"
import vv5 from "../assets/vv5.png"

const Show1 = () => {
  const palette = [
    "#DFAD9D",
    "#F2C29D",
    "#775455",
    "#B4795A",
    "#874C2C",
    "#4C3C38",
    "#957765",
    "#FFFFFF",
    "#F4D1A9",
    "#E5C6A8",
  ]

  return (
    <div
      className="font-text text-gray-950 min-h-screen bg-opacity-50 bg-blue-100 py-6 px-5 screen-md-sm:py-12 screen-md-sm:px-10 flex flex-col"
      style={{ alignItems: "center" }}
    >
      <div className="w-full max-w-screen-2xl">
        <div className="pt-20 pl-5">
          <NavBar projTitle={"Vibe Villas"} />
        </div>
        <div className="flex flex-col" style={{ alignItems: "center" }}>
          <h1 className="font-title text-3xl screen-md-sm:text-5xl screen-md:text-6xl pt-20 screen-md:pt-8 items-center flex flex-col justify-center relative w-fit text-center">
            Vibe Villas
            <div className="flex justify-center absolute -bottom-6 left-0 right-0">
              {palette.map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: color,
                    width: `${100 / palette.length}%`,
                  }}
                  className={`w-9 h-4 ${
                    index === 0 ? "rounded-tl-lg rounded-bl-lg" : ""
                  } ${
                    index === palette.length - 1
                      ? "rounded-tr-lg rounded-br-lg"
                      : ""
                  }`}
                ></div>
              ))}
            </div>
          </h1>
        </div>
        <div className="flex justify-center gap-8 screen-md-sm-660:gap-24 mt-10 screen-md-sm:mt-20 text-sm screen-md-sm-660:text-xl">
          <div className="flex flex-col">
            <p className="font-bold">Contributors</p>
            <ul>
              <li className="mt-2">
                <a
                  href="https://github.com/mark19242"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline flex flex-wrap transition-all duration-300 hover:opacity-70">
                    Mark Smith
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
          <div className="flex-col hidden screen-md-sm:flex">
            <p className="font-bold">Date of Completion</p>
            <ul>
              <li className="mt-2">
                <p>April, 2024</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Built With</p>
            <ul>
              <li className="mt-2">React</li>
              <li>Ruby on Rails</li>
              <li>Reactstrap</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="max-h-111 rounded-lg mt-10 screen-md-sm:mt-20"
            src={vibeVillas}
            alt="vibe villas landing page- a sunset cast apartment with backlit palm trees at the bottom"
            style={{ aspectRatio: "16/9" }}
          />
        </div>
        <h2 className="font-title text-2xl screen-md-sm:text-4xl screen-md:text-5xl mt-10 screen-md-sm:mt-20 items-center flex flex-col justify-center">
          Overview
        </h2>
        <article className="mt-5 screen-md-sm:mt-10 flex justify-center">
          <p className="text-sm screen-md-sm-660:text-xl w-120">
            A React and Rails API project with a PostgreSQL database. User
            authentication and authorization are handled via Devise and JWT,
            enabling users to list units for rent and manage their listings.
            Visitors can view available units, access unit info, and engage in
            listing management functionalities upon logging in.
          </p>
        </article>
        <div className="flex justify-center">
          <img
            className="max-h-111 rounded-lg mt-10 screen-md-sm:mt-20"
            src={vv1}
            alt="vibe villas landing page, but sign in form"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="max-h-111 rounded-lg mt-10 screen-md-sm:mt-20"
            src={vv3}
            alt="vibe villas available apartments page where units are listed in rows of 3"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="max-h-111 rounded-lg mt-10 screen-md-sm:mt-20"
            src={vv4}
            alt="vibe villas modal where individual unit info is displayed"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="max-h-111 rounded-lg mt-10 screen-md-sm:mt-20"
            src={vv5}
            alt="vibe villas my apartments tab for logged in users. layout is same as available apartments page"
          />
        </div>
      </div>
      <div className="w-full max-w-screen-md-lg">
        <Footer />
      </div>
    </div>
  )
}

export default Show1
