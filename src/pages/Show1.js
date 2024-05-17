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
    <div className="font-text text-gray-950 min-h-screen bg-opacity-50 bg-blue-100 py-12 px-10">
      <div className="pt-20 pl-5">
        <NavBar projTitle={"Vibe Villas"} />
      </div>
      <h1 className="font-title text-6xl pt-8 items-center flex flex-col justify-center">
        Vibe Villas
        <div className="flex pt-2">
          {palette.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
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
      <div className="flex justify-center gap-24 mt-20 text-xl">
        <div className="flex flex-col">
          <p className="font-bold">Contributors</p>
          <ul>
            <li className="mt-2">
              <a
                href="https://github.com/mark19242"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="underline flex transition-all duration-300 hover:opacity-70">
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
        <div className="flex flex-col">
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
          className="h-111 rounded-lg mt-20"
          src={vibeVillas}
          alt="vibe villas landing page- a sunset cast apartment with backlit palm trees at the bottom"
        />
      </div>
      <h2 className="font-title text-5xl mt-20 items-center flex flex-col justify-center">
        Overview
      </h2>
      <article className="px-96 mt-10">
        <p className="text-xl">
          A React and Rails API project with a PostgreSQL database. User
          authentication and authorization are handled via Devise and JWT,
          enabling users to list units for rent and manage their listings.
          Visitors can view available units, access unit info, and engage in
          listing management functionalities upon logging in.
        </p>
      </article>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={vv1}
          alt="vibe villas landing page, but sign in form "
        />
      </div>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={vv3}
          alt="vibe villas landing page, but sign in form "
        />
      </div>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={vv4}
          alt="vibe villas landing page, but sign in form "
        />
      </div>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={vv5}
          alt="vibe villas landing page, but sign in form "
        />
      </div>
      <Footer />
    </div>
  )
}

export default Show1
