import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Work from "./pages/Work"
import About from "./pages/About"
import Table from "./pages/Table"
import Show1 from "./pages/Show1"
import Show2 from "./pages/Show2"
import Show3 from "./pages/Show3"
import Show4 from "./pages/Show4"
import Contact from "./pages/Contact"

const App = () => {
  const projects = [
    {
      date: "04/2024",
      project: "Personal Website V2",
      builtWith: ["React", "Tailwind CSS"],
      link: ["You're on it", "https://github.com/smorgannicole/portfolio.2"],
    },
    {
      date: "04/2024",
      project: "Vibe Villas",
      builtWith: ["React", "Rails", "Reactstrap"],
      link: [
        "https://github.com/learn-academy-2024-alpha/apartment-app-frontend-the-smiths",
      ],
    },
    {
      date: "03/2024",
      project: "Personal Website V1",
      builtWith: ["React", "Tailwind CSS"],
      link: [
        "https://poetic-tiramisu-cda399.netlify.app/",
        " https://github.com/smorgannicole/portfolio-2024",
      ],
    },
    {
      date: "03/2024",
      project: "Sidewalk Tic Tac Toe",
      builtWith: ["React", "SCSS"],
      link: ["https://github.com/smorgannicole/sidewalk-tic-tac-toe"],
    },
    {
      date: "03/2024",
      project: "Simple as Pho",
      builtWith: ["React", "SCSS"],
      link: ["https://github.com/smorgannicole/simple-as-pho"],
    },
    {
      date: "03/2024",
      project: "Cat Tinder",
      builtWith: ["React", "Rails", "Reactstrap"],
      link: [
        "https://github.com/learn-academy-2024-alpha/cat-tinder-frontend-ryan-amir-morgan",
      ],
    },
    {
      date: "03/2024",
      project: "Hood Dreams",
      builtWith: ["Ruby"],
      link: [
        "https://github.com/learn-academy-2024-alpha/text-based-game-team-ms",
      ],
    },
    {
      date: "02/2024",
      project: "Robo Active Listening",
      builtWith: ["React"],
      link: ["https://github.com/smorgannicole/robo-ear"],
    },
    {
      date: "02/2024",
      project: "Mushroom Hunt",
      builtWith: ["React"],
      link: [
        "https://github.com/learn-academy-2024-alpha/treasure-hunt-smorgannicole",
      ],
    },
    {
      date: "02/2024",
      project: "Pig Latin Translator",
      builtWith: ["React", "Tailwind"],
      link: ["https://github.com/smorgannicole/pig-latin-translator"],
    },
    {
      date: "02/2024",
      project: "Dice Roll",
      builtWith: ["React"],
      link: ["https://github.com/smorgannicole/dice-roll"],
    },
    {
      date: "12/2023",
      project: "Tea House",
      builtWith: ["React", "Bootstrap", "Boonaki Tea API"],
      link: ["https://github.com/smorgannicole/tea-react-project"],
    },
    {
      date: "11/2023",
      project: "Cosmic Coffee",
      builtWith: ["Javascript", "Bootstrap"],
      link: ["https://github.com/pennington-smith/coffee-project"],
    },
    {
      date: "11/2023",
      project: "Weather Map",
      builtWith: ["Javascript", "Bootstrap", "OpenWeather API", "Mapbox API"],
      link: [
        "https://github.com/smorgannicole/codeup-web-exercises/blob/main/js/weather_map.js",
      ],
    },
    {
      date: "11/2023",
      project: "Ajax Tools",
      builtWith: ["Javascript", "Bootstrap"],
      link: [
        "https://github.com/smorgannicole/codeup-web-exercises/blob/main/data/ajax-store.html",
      ],
    },
    {
      date: "10/2023",
      project: "Park City",
      builtWith: ["HTML", "CSS", "Bootstrap"],
      link: [
        "https://github.com/smorgannicole/codeup-web-exercises/blob/main/css/media-queries-exercise.css",
      ],
    },
  ]
  return (
    <div className="notch-styling">
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/archive" element={<Table projects={projects} />} />
        <Route path="/about" element={<About />} />
        <Route path="/show1" element={<Show1 />} />
        <Route path="/show2" element={<Show2 />} />
        <Route path="/show3" element={<Show3 />} />
        <Route path="/show4" element={<Show4 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
