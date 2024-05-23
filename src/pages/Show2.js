import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import tea from "../assets/tea.png"
import t1 from "../assets/t1.png"
import t2 from "../assets/t2.png"
import t3 from "../assets/t3.png"

const Show2 = () => {
  const palette = [
    "#AFB18D",
    "#D2CFB7",
    "#F0EEE9",
    "#F4F5F7",
    "#969C6E",
    "#69807D",
    "#F5F0DA",
    "#D9C591",
    "#A66E57",
    "#869272",
  ]

  return (
    <div
      className="font-text text-gray-950 min-h-screen bg-opacity-50 bg-blue-100 py-6 px-5 screen-md-sm:py-12 screen-md-sm:px-10 flex flex-col"
      style={{ alignItems: "center" }}
    >
      <div className="w-full max-w-screen-2xl">
        <div className="pt-20 pl-5">
          <NavBar projTitle={"Tea House"} />
        </div>
        <div className="flex flex-col" style={{ alignItems: "center" }}>
          <h1 className="font-title text-3xl screen-md-sm:text-5xl screen-md:text-6xl pt-20 screen-md:pt-8 items-center flex flex-col justify-center relative w-fit text-center">
            Tea House
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
            <p className="font-bold">Date of Completion</p>
            <ul>
              <li className="mt-2">
                <p>December, 2023</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Built With</p>
            <ul>
              <li className="mt-2">React</li>
              <li>Boonaki Tea API</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="max-h-111 rounded-lg mt-10 screen-md-sm:mt-20"
            src={tea}
            alt="tea house landing page featuring an illustration of green tea splashing into a cup"
          />
        </div>
        <h2 className="font-title text-2xl screen-md-sm:text-4xl screen-md:text-5xl mt-10 screen-md-sm:mt-20 items-center flex flex-col justify-center">
          Overview
        </h2>
        <article className="mt-5 screen-md-sm:mt-10 flex justify-center">
          <p className="text-sm screen-md-sm-660:text-xl w-120">
            A React app where visitors access tea info via the Boonaki API. Tea
            enthusiasts can add, delete, and edit teas, all stored locally.
          </p>
        </article>
        <div className="flex justify-center">
          <img
            className="max-h-111 rounded-lg mt-10 screen-md-sm:mt-20"
            src={t1}
            alt="tea house create your own tea page where users may enter tea name and description"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="max-h-111 rounded-lg mt-10 screen-md-sm:mt-20"
            src={t2}
            alt="tea house tea blends page where users can scroll through all the tea cards"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="max-h-111 rounded-lg mt-10 screen-md-sm:mt-20"
            src={t3}
            alt="tea house about us featuring tea fields and fluff text"
          />
        </div>
        <div className="w-full max-w-screen-md-lg mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Show2
