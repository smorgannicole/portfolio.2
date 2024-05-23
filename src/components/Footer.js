import React from "react"

const Footer = ({ footnote }) => {
  return (
    <>
      <div
        className="text-gray-950 text-font text-sm screen-md-sm:text-md flex flex-col"
        style={{ alignItems: "center" }}
      >
        <div className="flex flex-col md:flex-row py-10 screen-md-sm:py-20 mt-0 screen-md-sm:mt-5 justify-center gap-5 md:gap-20">
          <p className="flex justify-center md:justify-start items-center">
            © 2024 Morgan Smith
          </p>
          <div className="flex flex-col" style={{ alignItems: "center" }}>
            <div className="flex flex-col items-start w-fit">
              <p className="font-bold mb-1 screen-md-sm:mb-3">Elsewhere</p>
              <ul className="space-y-0 screen-md-sm:space-y-3">
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
          </div>
          <div
            className="flex flex-col pr-4 screen-md-sm:pr-0"
            style={{ alignItems: "center" }}
          >
            <div className="flex flex-col items-start w-fit">
              <p className="font-bold mb-1 screen-md-sm:mb-3">Contact</p>
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
        </div>
      </div>
      <div className="text-sm text-gray-950">
        {footnote}
        <div className="flex flex-wrap justify-end">
          <p>
            All code is my own. However, I took a generous amount of visual
            inspiration from&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.seanhalpin.xyz/"
              className="text-pink-756 underline transition-all duration-300 hover:opacity-70"
            >
              this brilliant designer
            </a>
            &nbsp;and&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://brittanychiang.com/archive"
              className="text-pink-756 underline transition-all duration-300 hover:opacity-70"
            >
              this brilliant developer
            </a>
          </p>
        </div>
        <div className="flex flex-wrap justify-start screen-md:justify-end">
          <p className="font-text">
            A less-accessible iteration of my portfolio can be found&nbsp;
            <a
              href="https://poetic-tiramisu-cda399.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-pink-756 underline transition-all duration-300 hover:opacity-70"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
