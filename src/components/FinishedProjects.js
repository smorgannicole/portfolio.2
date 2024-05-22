import React from "react"
import DisplayProjects from "./DisplayProjects"
import ViewArchive from "./ViewArchive"
import Footer from "../components/Footer"
import Footnote from "../components/Footnote"
import { Link } from "react-router-dom"
import vibeVillas from "../assets/vibe-villas.png"
import teaHouse from "../assets/tea.png"
import catTinder from "../assets/cat-tinder.png"
import weatherMap from "../assets/map1.png"

const FinishedProjects = ({
  displayFinished,
  setDisplayFinished,
  handleViewArchive,
}) => {
  const handleViewProj = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div className="flex flex-col" style={{ alignItems: "center" }}>
        <div className="relative py-14 gap-14 grid grid-cols-1 screen-md:grid-cols-2 w-full max-w-screen-2xl">
          <DisplayProjects
            displayFinished={displayFinished}
            setDisplayFinished={setDisplayFinished}
          />
          <Link
            to="/show1"
            className="h-40 screen-md-sm:h-101 relative overflow-hidden bg-pink-750 bg-opacity-55 rounded-4xl py-7 px-8 hover:bg-opacity-60 hover:cursor-pointer hover:drop-shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            tabIndex="0"
            onClick={handleViewProj}
          >
            <div className="flex flex-col text-gray-950 mt-4">
              <h3 className="font-title text-3xl screen-md-sm:text-5xl flex justify-start screen-md-sm:justify-end">
                Vibe Villas
              </h3>
              <p className="font-text flex justify-start screen-md-sm:justify-end text-md screen-md-sm:text-2xl">
                React / Rails / Reactstrap
              </p>
            </div>
            <div className="mt-10">
              <div className="absolute flex justify-end w-full hidden screen-md-sm:block">
                <img
                  className="rounded-xl group-hover:translate-y-[16px] transition-all duration-500 pointer-events-none"
                  src={vibeVillas}
                  alt="vibe villas landing page"
                />
              </div>
            </div>
          </Link>
          <Link
            to="/show2"
            className="h-40 screen-md-sm:h-101 relative overflow-hidden bg-purple-650 bg-opacity-55 rounded-4xl py-7 px-8 hover:bg-opacity-60 hover:cursor-pointer hover:drop-shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            tabIndex="0"
            onClick={handleViewProj}
          >
            <div className="flex flex-col text-gray-950 mt-4">
              <h3 className="font-title text-3xl screen-md-sm:text-5xl flex justify-start screen-md-sm:justify-end">
                Tea House
              </h3>
              <p className="font-text flex justify-start screen-md-sm:justify-end text-md screen-md-sm:text-2xl">
                React / Boonaki Tea API
              </p>
            </div>
            <div className="mt-10">
              <div className="absolute flex justify-end w-full hidden screen-md-sm:block">
                <img
                  className="rounded-xl group-hover:translate-y-[16px] transition-all duration-500 pointer-events-none"
                  src={teaHouse}
                  alt="tea house landing page"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col" style={{ alignItems: "center" }}>
        <div className="relative gap-14 grid grid-cols-1 screen-md:grid-cols-2 w-full max-w-screen-2xl">
          <Link
            to="/show3"
            className="h-40 screen-md-sm:h-101 relative overflow-hidden bg-blue-150 bg-opacity-40 rounded-4xl py-7 px-8 hover:bg-opacity-45 hover:cursor-pointer hover:drop-shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            tabIndex="0"
            onClick={handleViewProj}
          >
            <div className="flex flex-col text-gray-950 mt-4">
              <h3 className="font-title text-3xl screen-md-sm:text-5xl flex justify-start screen-md-sm:justify-end">
                Cat Tinder
              </h3>
              <p className="font-text flex justify-start screen-md-sm:justify-end text-md screen-md-sm:text-2xl">
                React / Rails / Reactstrap
              </p>
            </div>
            <div className="mt-10">
              <div className="absolute flex justify-end w-full hidden screen-md-sm:block">
                <img
                  className="rounded-xl group-hover:translate-y-[16px] transition-all duration-500 pointer-events-none"
                  src={catTinder}
                  alt="cat tinder landing page"
                />
              </div>
            </div>
          </Link>
          <Link
            to="/show4"
            className="h-40 screen-md-sm:h-101 relative overflow-hidden bg-blue-250 bg-opacity-40 rounded-4xl py-7 px-8 hover:bg-opacity-45 hover:cursor-pointer hover:drop-shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            tabIndex="0"
            onClick={handleViewProj}
          >
            <div className="flex flex-col text-gray-950 mt-4">
              <h3 className="font-title text-3xl screen-md-sm:text-5xl flex justify-start screen-md-sm:justify-end">
                Weather Map
              </h3>
              <p className="font-text flex justify-start screen-md-sm:justify-end text-md screen-md-sm:text-2xl">
                JS / OpenWeather API / Mapbox API
              </p>
            </div>
            <div className="mt-10">
              <div className="absolute flex justify-end w-full hidden screen-md-sm:block">
                <img
                  className="rounded-xl group-hover:translate-y-[16px] transition-all duration-500 pointer-events-none"
                  src={weatherMap}
                  alt="weather map landing page"
                />
              </div>
            </div>
          </Link>
          <ViewArchive handleViewArchive={handleViewArchive} />
        </div>
        <div className="w-full max-w-screen-2xl">
          <Footer footnote={displayFinished ? <Footnote /> : null} />
        </div>
      </div>
    </>
  )
}

export default FinishedProjects
