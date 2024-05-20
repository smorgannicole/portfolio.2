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
          All code is my own. However, I took a generous amount of visual
          inspiration from &nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.seanhalpin.xyz/"
            className="text-pink-756 underline transition-all duration-300 hover:opacity-70"
          >
            this brilliant designer
          </a>
          &nbsp; and &nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://brittanychiang.com/archive"
            className="text-pink-756 underline transition-all duration-300 hover:opacity-70"
          >
            this brilliant developer
          </a>
        </p>
        <p className="font-text flex justify-end">
          A less-accessible iteration of my portfolio can be found &nbsp;
          <a
            href="https://poetic-tiramisu-cda399.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center transition-all duration-300 hover:opacity-70"
          >
            <span className="text-pink-756 underline">here</span>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
