import React from "react"
import MorganBack from "../components/MorganBack"
import { FaGithub } from "react-icons/fa"

const Table = ({ projects }) => {
  const notALink = "(You're on it)"
  const getLinkText = (url) => {
    if (url.includes(notALink)) {
      return "(You're on it)"
    } else if (url.includes("github.com")) {
      return "GitHub"
    } else {
      return "Deployed"
    }
  }

  const getLinkIcon = (url) => {
    if (url.includes("github.com")) {
      return <FaGithub className="w-4 h-4 ml-2" />
    } else if (url.includes(notALink)) {
      return null
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 ml-1"
        >
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  }

  return (
    <div className="font-text text-lg flex flex-col justify-center items-center text-gray-950 py-24 px-44 min-h-screen bg-opacity-50 bg-blue-100">
      <div className="flex flex-col items-start w-223">
        <MorganBack color={"#4D79FF"} />
        <h1 className="font-title text-5xl py-5">All Projects</h1>
      </div>
      <table className="table-auto w-223">
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
                  {project.builtWith.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-purple-955 bg-opacity-70 text-white px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {technology}
                    </span>
                  ))}
                </td>
                <td className="py-2">
                  {project.link.map((url, linkIndex) => (
                    <div key={linkIndex}>
                      {getLinkText(url) === notALink ? (
                        <span className="text-gray-950 flex items-center opacity-70">
                          {getLinkText(url)}
                        </span>
                      ) : (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-950 flex items-center opacity-70 transition-all duration-300 hover:opacity-100"
                        >
                          {getLinkText(url)}
                          {getLinkIcon(url)}
                        </a>
                      )}
                    </div>
                  ))}
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
