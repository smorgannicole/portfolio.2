import React from "react"

const Footer = ({ footnote }) => {
  return (
    <div className="text-gray-950 text-font">
      <div className="flex p-20 justify-center gap-20">
        <p className="flex" style={{ alignItems: "center" }}>
          © 2024 Morgan Smith
        </p>
        <div className="flex flex-col">
          <p className="font-bold mb-3">Elsewhere</p>
          <ul className="space-y-3">
            <li>
              <a
                href="https://github.com/smorgannicole"
                target="_blank"
                rel="noreferrer"
                className="opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/smorgannicole"
                target="_blank"
                rel="noreferrer"
                className="opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Dribbble
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/morgansmith13"
                target="_blank"
                rel="noreferrer"
                className="opacity-70 transition-all duration-300 hover:opacity-100"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="font-bold mb-3">Contact</p>
          <ul>
            <li>
              <a
                href="mailto:smorgannicole@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="opacity-70 transition-all duration-300 hover:opacity-100"
              >
                Gmail
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {footnote}
        <p className="flex justify-end">
          All code used to create this site is my own. However, I took a
          generous amount visual inspiration from &nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.seanhalpin.xyz/"
            className="text-pink-756 underline flex"
          >
            <span>this brilliant designer</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-pink-756"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          &nbsp; and &nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://brittanychiang.com/archive"
            className="text-pink-756 underline flex"
          >
            <span>this brilliant developer</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-pink-756"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </p>
        <p className="font-text flex justify-end">
          A less-accessible iteration of my portfolio can be found &nbsp;
          <a
            href="https://poetic-tiramisu-cda399.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            &nbsp;
            <span className="text-pink-756 underline">here</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-pink-756"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
