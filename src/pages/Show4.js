import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import map1 from "../assets/map1.png"
import map2 from "../assets/map2.png"
import map3 from "../assets/map3.png"
import map4 from "../assets/map4.png"

const Show4 = () => {
  const palette = [
    "#CFD0E0",
    "#FEFEFE",
    "#4E0295",
    "#6EBAF6",
    "#530C9A",
    "#B7DDFB",
    "#B798D4",
    "#B7AFCC",
    "#AFCBE8",
    "#672CA4",
  ]

  return (
    <div className="font-text text-gray-950 min-h-screen bg-opacity-50 bg-blue-100 py-12 px-10">
      <div className="pt-20 pl-5">
        <NavBar projTitle={"Weather Map"} />
      </div>
      <h1 className="font-title text-6xl pt-8 items-center flex flex-col justify-center">
        Weather Map
        <div className="flex pt-2">
          {palette.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
              }}
              className={`w-11 h-4 ${
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
          <p className="font-bold">Date of Completion</p>
          <ul>
            <li className="mt-2">
              <p>November, 2023</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Built With</p>
          <ul>
            <li className="mt-2">JavaScript</li>
            <li>OpenWeather API</li>
            <li>Mapbox API</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="w-224 rounded-lg mt-20"
          src={map1}
          alt="weather map landing page- purply gray background with weather displayed in center of screen in a royal purple and white box"
        />
      </div>
      <h2 className="font-title text-5xl mt-20 items-center flex flex-col justify-center">
        Overview
      </h2>
      <article className="px-96 mt-10 flex justify-center">
        <p className="text-xl w-120">
          Built using HTML, CSS, and JavaScript. OpenWeatherMap API is used to
          display weather info in a specific location. Users can search for
          desired locations with the forecast updated dynamically. Mapbox API is
          used to visually transition from the previous location to the newly
          searched one.
        </p>
      </article>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={map2}
          alt="same as landing page as above, but the text 'Chicago' is typed in the weather search bar"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={map3}
          alt="a modal map of chicago is displayed and the background is blurred"
        />
      </div>
      <div className="flex justify-center">
        <img
          className="h-111 rounded-lg mt-20"
          src={map4}
          alt="the weather for Chicago is displayed"
        />
      </div>
      <Footer />
    </div>
  )
}

export default Show4
