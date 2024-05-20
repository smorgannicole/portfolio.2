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
    <div className="font-text text-gray-950 min-h-screen bg-opacity-50 bg-blue-100 px-32 py-10">
      <NavBar />
      <h1 className="font-title text-4xl pt-36 items-center flex flex-col justify-center">
        I'm Morgan :) I'm a frontend developer located in Austin, Texas
        <div className="flex pt-2">
          {palette.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
              }}
              className={`w-118 h-4 ${
                index === 0 ? "rounded-tl-lg rounded-bl-lg" : ""
              } ${
                index === palette.length - 1
                  ? "rounded-tr-lg rounded-br-lg"
                  : ""
              }`}
            ></div>
          ))}
        </div>
      </h1>
      <div className="flex mt-16 text-xl">
        <img
          className="h-101 w-auto rounded-xl"
          src={me}
          alt="Morgan in front of a blue sculpture"
        />
        <article className="flex flex-col justify-center ml-5 gap-5">
          <p>
            I was first introduced to coding in my CS Fundamentals class during
            my second year of college— I finished with a C.
          </p>
          <p>
            Five years later I attended both Codeup and LEARN Academy's full
            stack web development bootcamps. Despite Codeup's closure midway
            through the course, my time at LEARN Academy reinforced my skills in
            frontend languages and libraries like HTML, CSS, JavaScript, and
            React. If I went back now, I'd like to think I could make at least a
            B in CS Fundamentals.
          </p>
          <p>
            Outside of work, I enjoy friendly games of chess (add me on
            chess.com @smorgannicole), any spectator sport, live music,
            discovering the magic of the world with my partner, and spending
            quality time with my animals.
          </p>
        </article>
      </div>
      <div className="flex mt-28 mb-10">
        <div className="w-120 flex flex-col justify-center mr-5">
          <article>
            <h2 className="font-text text-4xl">
              The LEARN Academy curriculum requires students present a tech talk
              over a technical topic of their choosing
            </h2>
            <p className="mt-3 text-xl">
              I decided to present over Accessibility in Frontend Development
              because everyone, especially differently-abled people, are
              beneficiaries to an accessible digital world. I believe we should
              always strive to make the world easier for others to navigate{" "}
              {"<3"}
            </p>
          </article>
        </div>
        <iframe
          className="rounded-xl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HE9XFY88jQs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Footer />
    </div>
  )
}

export default About
