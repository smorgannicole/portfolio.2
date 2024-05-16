import React, { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [skipHovered, setSkipHovered] = useState(false)
  const location = useLocation()
  const archive = location.pathname === "/archive"

  useEffect(() => {
    const handleScroll = () => {
      const vertPosition = window.scrollY
      setIsScrolled(vertPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return !archive ? (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 font-text text-gray-950 w-full flex justify-center z-50">
      <span>
        <ul
          className={`flex gap-14 text-xl transition-all duration-500 ${
            isScrolled ? "bg-white py-5 px-4 rounded-full" : null
          }`}
        >
          {!isScrolled ? (
            <li className="transition-all duration-300 flex align-top">
              <a
                href="#skip-nav"
                className="transition-all duration-300 whitespace-no-wrap flex items-center relative sr-only focus:not-sr-only focus:bg-white focus:text-black focus:p-2"
                onMouseEnter={() => setSkipHovered(true)}
                onMouseLeave={() => setSkipHovered(false)}
                onFocus={() => setSkipHovered(true)}
                onBlur={() => setSkipHovered(false)}
              >
                <span>Skip Navigation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ml-2 absolute -right-7 transition-opacity ${
                    skipHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </a>
            </li>
          ) : (
            ""
          )}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? !isScrolled
                    ? "bg-white px-4 py-3 rounded-full transition-all"
                    : "bg-blue-100 px-4 py-3 rounded-full transition-all"
                  : "duration-300 hover:bg-opacity-50 hover:bg-white px-4 py-3 rounded-full"
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
                  ? !isScrolled
                    ? "bg-white px-4 py-3 rounded-full transition-all"
                    : "bg-blue-100 px-4 py-3 rounded-full transition-all"
                  : "duration-300 hover:bg-opacity-50 hover:bg-white px-4 py-3 rounded-full"
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive
                  ? !isScrolled
                    ? "bg-white px-4 py-3 rounded-full transition-all"
                    : "bg-blue-100 px-4 py-3 rounded-full transition-all"
                  : "duration-300 hover:bg-opacity-50 hover:bg-white px-4 py-3 rounded-full"
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </span>
    </nav>
  ) : (
    ""
  )
}

export default NavBar
