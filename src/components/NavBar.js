import React, { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"

const NavBar = ({ projTitle }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [skipHovered, setSkipHovered] = useState(false)
  const location = useLocation()
  const archive = location.pathname === "/archive"
  const isProjectPage = location.pathname.startsWith("/show")

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  return !archive ? (
    <nav className="fixed top-0 screen-md-sm:top-3 screen-md:top-6 left-1/2 transform -translate-x-1/2 font-text text-gray-950 w-full flex justify-center z-50">
      <span>
        <ul
          className={`flex justify-center gap-3 screen-md:gap-14 text-sm screen-md-sm-660:text-xl transition-all duration-500 flex-col screen-md:flex-row ${
            isScrolled
              ? "bg-white py-5 px-4 rounded-full flex-col screen-md:flex-row"
              : null
          }`}
          style={{ alignItems: "center" }}
        >
          {!isScrolled ? (
            <li className="transition-all duration-300">
              <a
                href="#skip-nav"
                className="transition-all focus:px-3 rounded-full duration-300 whitespace-no-wrap flex items-center relative sr-only focus:not-sr-only focus:bg-blue-100 focus:text-black"
                onMouseEnter={() => setSkipHovered(true)}
                onMouseLeave={() => setSkipHovered(false)}
                onFocus={() => setSkipHovered(true)}
                onBlur={() => setSkipHovered(false)}
              >
                Skip to main content
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
                    ? "bg-white px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full transition-all"
                    : "bg-blue-100 px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full transition-all"
                  : isScrolled
                  ? "duration-300 hover:bg-opacity-50 hover:bg-blue-100 px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full"
                  : "duration-300 hover:bg-opacity-50 hover:bg-white px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full"
              }}
              onClick={scrollToTop}
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
                    ? "bg-white px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full transition-all"
                    : "bg-blue-100 px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full transition-all"
                  : isScrolled
                  ? "duration-300 hover:bg-opacity-50 hover:bg-blue-100 px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full"
                  : "duration-300 hover:bg-opacity-50 hover:bg-white px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full"
              }}
              onClick={scrollToTop}
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
                    ? "bg-white px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full transition-all"
                    : "bg-blue-100 px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full transition-all"
                  : isScrolled
                  ? "duration-300 hover:bg-opacity-50 hover:bg-blue-100 px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full"
                  : "duration-300 hover:bg-opacity-50 hover:bg-white px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full"
              }}
              onClick={scrollToTop}
            >
              Contact
            </NavLink>
          </li>
          {isProjectPage && (
            <li>
              <NavLink
                to="/project"
                className={
                  isScrolled
                    ? "bg-blue-100 px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full transition-all"
                    : "bg-white px-2 py-1 screen-md-sm:px-4 screen-md-sm:py-3 rounded-full transition-all"
                }
                onClick={scrollToTop}
              >
                {projTitle}
              </NavLink>
            </li>
          )}
        </ul>
      </span>
    </nav>
  ) : (
    ""
  )
}

export default NavBar
