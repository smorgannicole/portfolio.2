import React from "react"
import { Link } from "react-router-dom"

const MorganBack = ({ color }) => {
  return (
    <div
      className="whitespace-no-wrap flex items-start w-full gap-1"
      style={{ color: color }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <Link to="/" className="text-xl hover:underline underline-offset-2">
        Morgan Smith
      </Link>
    </div>
  )
}

export default MorganBack
