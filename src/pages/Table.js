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
    <div
      className="bg-blue-100 bg-opacity-50 font-text text-sm screen-md-sm:text-lg text-gray-950 py-8 screen-md-sm:py-32 px-5 screen-md-sm-660:px-48 flex flex-col"
      style={{ alignItems: "center" }}
    >
      <MorganBack color={"#4D79FF"} />
      <h1 className="font-title text-2xl screen-md-sm:text-5xl py-2 screen-md-sm:py-5">
        All Projects
      </h1>
      <table className="table-auto block">
        <thead className="text-left">
          <tr>
            <th className="p-3">Date</th>
            <th className="p-3">Project</th>
            <th className="hidden screen-md:block p-3">Built With</th>
            <th className="p-3 hidden screen-md:table-cell">
              Description (hover)
            </th>
            <th className="p-3 hidden screen-md:table-cell">Link</th>
          </tr>
        </thead>
        <tr className="border-b border-slate-full last:border-none"></tr>
        <tbody>
          {projects.map((project, index) => (
            <>
              <tr>
                <td className="p-3">{project.date}</td>
                <td className="p-3 font-bold text-sm screen-md-sm:text-xl">
                  {project.project}
                </td>
                <td className="hidden screen-md:block p-3">
                  {project.builtWith.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-purple-955 bg-opacity-70 text-white px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {technology}
                    </span>
                  ))}
                </td>
                <td className="p-3 hidden screen-md:table-cell">
                  {project.description ? (
                    <span className="relative group cursor-pointer underline">
                      {project.project} description
                      <span className="absolute left-0 top-5 w-72 p-3 mt-2 text-sm text-white bg-gray-950 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10 pointer-events-none">
                        {project.description}
                      </span>
                    </span>
                  ) : null}
                </td>
                <td className="p-3 hidden screen-md:table-cell">
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
              <tr className="border-b border-slate-full last:border-none"></tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
