import React from "react"
import { Link } from "react-router-dom"

const Table = ({ projects }) => {
  const handleClick = () => {
    console.log("click")
  }
  return (
    <div className="font-text text-lg flex flex-col justify-center items-center text-gray-950 py-24 px-44 min-h-screen bg-opacity-50 bg-blue-100">
      <div className="whitespace-no-wrap flex items-start w-full gap-1 text-purple-955">
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
      <div className="flex items-start w-full">
        <h1 className="font-title text-5xl py-5">All Projects</h1>
      </div>
      <table className="table-auto">
        <thead className="text-left">
          <tr className="-m-10">
            <th className="p-7">Date</th>
            <th className="p-3">Project</th>
            <th>Built With</th>
            <th>Link</th>
          </tr>
          <tr>
            <td colSpan="4" className="py-2">
              <hr className="text-gray-955" />
            </td>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="p-7">{project.date}</td>
                <td className="p-3 font-bold text-xl">{project.project}</td>
                <td className="py-2">
                  {project.builtWith.map((technology, index) => (
                    <span
                      key={index}
                      className="inline-block bg-purple-955 bg-opacity-70 text-white px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {technology}
                    </span>
                  ))}
                </td>

                <td className="py-2">
                  <a
                    onClick={() => handleClick}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link}
                  </a>
                </td>
              </tr>
              <tr>
                <td colSpan="4" className="py-2">
                  <hr className="text-gray-955" />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
