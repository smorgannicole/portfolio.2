import React from "react"
import { Link } from "react-router-dom"
import vibeVillas from "../assets/vibe-villas.png"
import teaHouse from "../assets/tea.png"
import catTinder from "../assets/cat-tinder.png"
import weatherMap from "../assets/map1.png"

const FinishedProjects = () => {
  const handleViewProj = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div className="flex py-14 gap-14">
        <Link
          to="/show1"
          className="w-333 h-101 relative overflow-hidden bg-pink-750 bg-opacity-55 rounded-4xl py-7 px-9 hover:bg-opacity-65 hover:cursor-pointer hover:drop-shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
          tabIndex="0"
          onClick={handleViewProj}
        >
          <div className="flex flex-col text-gray-950">
            <h3 className="font-title text-5xl flex justify-end">
              Vibe Villas
            </h3>
            <p className="font-text flex justify-end text-2xl">
              React / Rails / Reactstrap
            </p>
          </div>
          <div style={{ overflow: "hidden" }}>
            <img
              className="flex h-auto absolute -bottom-52 -right-20 rounded-xl group-hover:translate-y-[16px] transition-all duration-500 pointer-events-none"
              src={vibeVillas}
              alt="vibe villas landing page"
            />
          </div>
        </Link>
        <Link
          to="/show2"
          className="w-5/12 h-101 relative overflow-hidden bg-purple-650 bg-opacity-55 rounded-4xl py-7 px-9 hover:bg-opacity-65 hover:cursor-pointer hover:drop-shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
          tabIndex="0"
          onClick={handleViewProj}
        >
          <div className="flex flex-col text-gray-950">
            <h3 className="font-title text-5xl flex justify-end">Tea House</h3>
            <p className="font-text flex justify-end text-2xl">
              React / Boonaki Tea API
            </p>
          </div>
          <img
            className="flex h-auto absolute -bottom-2 -right-20 rounded-xl group-hover:translate-y-[16px] transition-all duration-500 pointer-events-none"
            src={teaHouse}
            alt="tea house landing page"
          />
        </Link>
      </div>
      <div className="flex gap-14">
        <Link
          to="/show3"
          className="w-5/12 h-101 relative overflow-hidden bg-blue-150 bg-opacity-40 rounded-4xl py-7 px-9 hover:bg-opacity-50 hover:cursor-pointer hover:drop-shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
          tabIndex="0"
          onClick={handleViewProj}
        >
          <div className="flex flex-col text-gray-950">
            <h3 className="font-title text-5xl flex justify-end">Cat Tinder</h3>
            <p className="font-text flex justify-end text-2xl">
              React / Rails / Reactstrap
            </p>
          </div>
          <img
            className="flex h-auto absolute -bottom-2 -right-20 rounded-xl group-hover:translate-y-[16px] transition-all duration-500 pointer-events-none"
            src={catTinder}
            alt="cat tinder landing page"
          />
        </Link>
        <Link
          to="/show4"
          className="w-333 h-101 relative overflow-hidden bg-blue-250 bg-opacity-40 rounded-4xl py-7 px-9 hover:bg-opacity-50 hover:cursor-pointer hover:drop-shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
          tabIndex="0"
          onClick={handleViewProj}
        >
          <div className="flex flex-col text-gray-950">
            <h3 className="font-title text-5xl flex justify-end">
              Weather Map
            </h3>
            <p className="font-text flex justify-end text-2xl">
              JS / OpenWeather API / Mapbox API
            </p>
          </div>
          <img
            className="flex h-auto absolute -bottom-52 -right-20 rounded-xl group-hover:translate-y-[16px] transition-all duration-500 pointer-events-none"
            src={weatherMap}
            alt="weather map landing page"
          />
        </Link>
      </div>
    </>
  )
}

export default FinishedProjects
