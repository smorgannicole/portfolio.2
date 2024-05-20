import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import catTinder from "../assets/cat-tinder.png"
import tinder1 from "../assets/tinder1.png"
import tinder2 from "../assets/tinder2.png"
import tinder3 from "../assets/tinder3.png"
import tinder4 from "../assets/tinder4.png"
import tinder5 from "../assets/tinder5.png"

const Show3 = () => {
  const palette = [
    "#212124",
    "#1C1E1F",
    "#333132",
    "#5F5957",
    "#232424",
    "#1D1E20",
    "#AD922A",
    "#1B1D1E",
    "#E8D32F",
    "#22201F",
  ]

  return (
    <div className="font-text text-gray-950 min-h-screen bg-opacity-50 bg-blue-100 py-12 px-10">
      <div className="pt-20 pl-5">
        <NavBar projTitle={"Cat Tinder"} />
      </div>
      <h1 className="font-title text-6xl pt-8 items-center flex flex-col justify-center">
        Cat Tinder
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
                href="https://github.com/Rashadjaxon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="underline flex transition-all duration-300 hover:opacity-70">
                  Amir Jackson
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
            <li className="mt-2">
              <a
                href="https://github.com/Rlemus93"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="underline flex transition-all duration-300 hover:opacity-70">
                  Ryan Lemus
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
              <p>March, 2024</p>
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
          src={catTinder}
          alt="cat tinder landing page- a dark charcoal background with CAT TINDER in bold yellow letters overlapping a grey cat with yellow reflective sunnies"
        />
      </div>
      <h2 className="font-title text-5xl mt-20 items-center flex flex-col justify-center">
        Overview
      </h2>
      <article className="px-96 mt-10 flex justify-center">
        <p className="text-xl w-120">
          A full-stack, decoupled application with a PostgreSQL database. Users
          can view, heart, edit, add , and delete kitties, all stored in local
          storage. Kitties may be filtered by age and searched by name.
        </p>
      </article>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={tinder1}
          alt="meet all the cats page- cat profile cards displayed in rows of 4. There is a filter and search bar above the cat cards"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={tinder2}
          alt="profile page- 3 cats laying on concrete is the background. Over top is the cat profile clicked with more details about the cat"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={tinder4}
          alt="profile page- asking if user is sure they want to delete the kitty"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={tinder3}
          alt="cat profile edit page- form field where cat details can be edited"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={tinder5}
          alt="adding a cat page- form fields allow the user to add their own kitty"
        />
      </div>
      <Footer />
    </div>
  )
}

export default Show3
