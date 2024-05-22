import React from "react"
import NavBar from "../components/NavBar"
import me from "../assets/itsame.jpg"
import Footer from "../components/Footer"

const About = () => {
  const palette = [
    "#A9B3C6",
    "#91A9CD",
    "#94A2D3",
    "#0763AB",
    "#014795",
    "#13317D",
    "#21235D",
    "#791437",
    "#7D525C",
    "#121318",
  ]
  return (
    <div
      className="font-text text-gray-950 min-h-screen bg-opacity-50 bg-blue-100 px-5 screen-md:px-20 py-10 flex flex-col"
      style={{ alignItems: "center" }}
    >
      <div className="w-full max-w-custom-lg">
        <NavBar />
        <div className="flex flex-col" style={{ alignItems: "center" }}>
          <h1 className="font-title text-2xl screen-md-sm-660:text-4xl pt-36 items-center flex flex-col justify-center relative w-fit">
            I'm Morgan :) I'm a frontend developer located in Austin, Texas
            <div className="flex justify-center absolute -bottom-6 left-0 right-0">
              {palette.map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: color,
                    width: `${100 / palette.length}%`,
                  }}
                  className={`h-4 ${index === 0 ? "rounded-l-lg" : ""} ${
                    index === palette.length - 1 ? "rounded-r-lg" : ""
                  }`}
                ></div>
              ))}
            </div>
          </h1>
        </div>
        <div className="flex mt-16 flex-col screen-md:flex-row text-xl justify-center">
          <div className="flex justify-center">
            <img
              className="h-44 screen-md-sm-660:h-101 object-cover rounded-xl"
              src={me}
              alt="Morgan in front of a blue sculpture"
            />
          </div>
          <div className="flex justify-center mt-5 screen-md:mt-0">
            <article className="w-full screen-md:w-212 flex flex-col justify-center ml-0 screen-md:ml-5 gap-5 text-sm screen-md-sm-660:text-xl">
              <p>
                I was first introduced to coding in my CS Fundamentals class
                during my second year of college— I finished with a C.
              </p>
              <p>
                Five years later I attended both Codeup and LEARN Academy's full
                stack web development bootcamps. Despite Codeup's closure midway
                through the course, my time at LEARN Academy reinforced my
                skills in frontend languages and libraries like HTML, CSS,
                JavaScript, and React. If I went back now, I'd like to think I
                could make at least a B in CS Fundamentals.
              </p>
              <p>
                Outside of work, I enjoy friendly games of chess (add me on
                chess.com @smorgannicole), any spectator sport, live music,
                discovering the magic of the world with my partner, and spending
                quality time with my animals.
              </p>
            </article>
          </div>
        </div>
        <div className="flex flex-col screen-md:flex-row mt-10 screen-md-sm-660:mt-28 mb-10 justify-center">
          <div
            className="flex flex-col justify-center"
            style={{ alignItems: "center" }}
          >
            <article className="mb-5 mr-5 screen-md:mb-0">
              <h2 className="font-text text-2xl screen-md-sm-660:text-4xl">
                The LEARN Academy curriculum requires students present a tech
                talk over a technical topic of their choosing
              </h2>
              <p className="mt-3 text-sm screen-md-sm-660:text-xl">
                I decided to present over Accessibility in Frontend Development
                because everyone, especially differently-abled people, are
                beneficiaries to an accessible digital world. I believe we
                should always strive to make the world easier for others to
                navigate {"<3"}
              </p>
            </article>
          </div>
          <div className="flex justify-center">
            <iframe
              className="rounded-xl w-119"
              style={{ aspectRatio: "16/9" }}
              src="https://www.youtube.com/embed/HE9XFY88jQs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl -mt-10 screen-md-sm-660:mt-0">
        <Footer />
      </div>
    </div>
  )
}

export default About
