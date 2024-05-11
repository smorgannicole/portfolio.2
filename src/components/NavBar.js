import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 font-text text-gray-950 w-full flex justify-center">
      <span>
        <ul
          className={`flex gap-14 text-xl transition-all duration-200 ${
            isScrolled
              ? "bg-white bg-opacity-50 py-5 px-4 rounded-full backdrop-blur-xl"
              : ""
          }`}
        >
          <li className="transition-all duration-300">
            <a
              href="#skip-nav"
              className="transition-all duration-300 hover:underline hover:underline-offset-1 focus:border-gray-950 focus:border-2 focus:outline-none focus:rounded-full focus:px-4 focus:py-3"
            >
              Skip Navigation
            </a>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "bg-white bg-opacity-50 px-4 py-3 rounded-full transition-all focus:border-2 focus:border-gray-950 focus:outline-none focus:rounded-full focus:px-4 focus:py-3"
                  : "duration-300 hover:bg-opacity-20 hover:bg-white px-4 py-3 rounded-full focus:border-gray-950 focus:border-2 focus:outline-none focus:rounded-full focus:px-4 focus:py-3"
              }}
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive
                  ? "bg-white bg-opacity-50 px-4 py-3 rounded-full transition-all focus:border-2 focus:border-gray-950 focus:outline-none focus:rounded-full focus:px-4 focus:py-3"
                  : "duration-300 hover:bg-white hover:bg-opacity-30 px-4 py-3 rounded-full focus:border-gray-950 focus:border-2 focus:outline-none focus:rounded-full focus:px-4 focus:py-3"
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => {
                return isActive
                  ? "bg-white bg-opacity-50 px-4 py-3 rounded-full transition-all focus:border-2 focus:border-gray-950 focus:outline-none focus:rounded-full focus:px-4 focus:py-3"
                  : "duration-300 hover:bg-white hover:bg-opacity-30 px-4 py-3 rounded-full focus:border-gray-950 focus:border-2 focus:outline-none focus:rounded-full focus:px-4 focus:py-3"
              }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive
                  ? "bg-white bg-opacity-50 px-4 py-3 rounded-full transition-all focus:border-2 focus:border-gray-950 focus:outline-none focus:rounded-full focus:px-4 focus:py-3"
                  : "duration-300 hover:bg-white hover:bg-opacity-30 px-4 py-3 rounded-full focus:border-gray-950 focus:border-2 focus:outline-none focus:rounded-full focus:px-4 focus:py-3"
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </span>
    </nav>
  )
}

export default NavBar
