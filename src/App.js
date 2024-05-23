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
      date: "05/2024",
      project: "Personal Website V2",
      builtWith: ["React", "Tailwind CSS"],
      link: ["You're on it", "https://github.com/smorgannicole/portfolio.2"],
    },
    {
      date: "05/2024",
      project: "Bank Buddy",
      builtWith: ["React", "Rails", "Reactstrap"],
      link: [
        "https://capstone-frontend-yx8y.onrender.com/",
        "https://github.com/orgs/Morgan-and-sons/repositories",
      ],
      description:
        "A React and Rails API project with a PostgreSQL database. Users can create events with descriptions, dates, and locations. Invitations can be sent to friends and family. Financial goals for events can be set and tracked. User authentication and security are managed with Devise and JWT. Logged-in users can manage their events by adding, editing, or deleting them, ensuring full control and transparency.",
    },
    {
      date: "04/2024",
      project: "Vibe Villas",
      builtWith: ["React", "Rails", "Reactstrap"],
      link: [
        "https://github.com/learn-academy-2024-alpha/apartment-app-frontend-the-smiths",
      ],
      description:
        "A React and Rails API project with a PostgreSQL database. User authentication and authorization are handled via Devise and JWT, enabling users to list units for rent and manage their listings. Visitors can view available units, access unit info, and engage in listing management functionalities upon logging in.",
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
      description:
        "A React app where users can engage in tic-tac-toe matches against one another. Players have the option to choose their preferred color chalk which is then reflected in their moves throughout the game. Hand-drawn elements were created using Adobe Fresco.",
    },
    {
      date: "03/2024",
      project: "Simple as Pho",
      builtWith: ["React", "SCSS"],
      link: ["https://github.com/smorgannicole/simple-as-pho"],
      description:
        "A React app where users can add and delete items from their carts. Interactive modals showcase food items illustrated using Adobe Fresco.",
    },
    {
      date: "03/2024",
      project: "Cat Tinder",
      builtWith: ["React", "Rails", "Reactstrap"],
      link: [
        "https://github.com/learn-academy-2024-alpha/cat-tinder-frontend-ryan-amir-morgan",
      ],
      description:
        "A full-stack, decoupled application with a PostgreSQL database. Users can view, heart, edit, add , and delete kitties. Kitties may be filtered by age and searched by name.",
    },
    {
      date: "03/2024",
      project: "Hood Dreams",
      builtWith: ["Ruby"],
      link: [
        "https://github.com/learn-academy-2024-alpha/text-based-game-team-ms",
      ],
      description:
        "A text-based game where users immerse themselves in interactive fiction. User interactions from the IRB console drive the narrative forward.",
    },
    {
      date: "02/2024",
      project: "Robo Active Listening",
      builtWith: ["React"],
      link: ["https://github.com/smorgannicole/robo-ear"],
      description: `A React app that features four "robots" that dynamically respond to user input in real-time. "Good Robot" echoes the user's input
      exactly, "Bad Robot" mimics the input with a repetitive "BLABLA..."
      pattern, and the third and fourth robots respond the same no matter
      the input.`,
    },
    {
      date: "02/2024",
      project: "Mushroom Hunt",
      builtWith: ["React"],
      link: [
        "https://github.com/learn-academy-2024-alpha/treasure-hunt-smorgannicole",
      ],
      description:
        "A React project where mushrooms appear in randomized locations during each game. Players must rely on luck to select the elusive magic mushroom, which changes every playthrough, in under five tries. As users click to pick mushrooms, they are moved to a basket while their randomized descriptions are recorded in a notebook.",
    },
    {
      date: "02/2024",
      project: "Pig Latin Translator",
      builtWith: ["React", "Tailwind"],
      link: ["https://github.com/smorgannicole/pig-latin-translator"],
      description:
        "A React app that translates english words into pig latin. The application parses input strings, applies Pig Latin transformation rules, and generates corresponding translations. English and pig latin words are logged.",
    },
    {
      date: "02/2024",
      project: "Dice Roll",
      builtWith: ["React"],
      link: ["https://github.com/smorgannicole/dice-roll"],
      description:
        "A React app where each roll corresponds to graphics and colors on a particular die. Users may switch between different themed dice and roll a new set of six corresponding emojis. Rolls are logged may be cleared at any time.",
    },
    {
      date: "12/2023",
      project: "Tea House",
      builtWith: ["React", "Bootstrap", "Boonaki Tea API"],
      link: ["https://github.com/smorgannicole/tea-react-project"],
      description:
        "A React app where visitors access tea info via the Boonaki API. Tea enthusiasts can add, delete, and edit teas, all stored locally.",
    },
    {
      date: "11/2023",
      project: "Cosmic Coffee",
      builtWith: ["Javascript", "Bootstrap"],
      link: ["https://github.com/pennington-smith/coffee-project"],
      description: `An application where users can search coffees by name or filter by roast. Coffee cards may be clicked and "flipped" to reveal more info. The app enables users to create, edit, and delete their own custom coffees, stored locally for convenience.`,
    },
    {
      date: "11/2023",
      project: "Weather Map",
      builtWith: ["Javascript", "Bootstrap", "OpenWeather API", "Mapbox API"],
      link: [
        "https://github.com/smorgannicole/codeup-web-exercises/blob/main/js/weather_map.js",
      ],
      description:
        "Built using HTML, CSS, and JavaScript. OpenWeatherMap API is used to display weather info in a specific location. Users can search for desired locations with the forecast updated dynamically. Mapbox API is used to visually transition from the previous location to the newly searched one.",
    },
    {
      date: "11/2023",
      project: "Ajax Tools",
      builtWith: ["Javascript", "Bootstrap"],
      link: [
        "https://github.com/smorgannicole/codeup-web-exercises/blob/main/data/ajax-store.html",
      ],
      description:
        "Built using HTML, CSS, and JavaScript. Designed to simulate API requests, this application retrieves tool objects from a JSON file, mimicking working with external data sources.",
    },
    {
      date: "10/2023",
      project: "Park City",
      builtWith: ["HTML", "CSS", "Bootstrap"],
      link: [
        "https://github.com/smorgannicole/codeup-web-exercises/blob/main/css/media-queries-exercise.css",
      ],
      description:
        "Designed as a platform for honing proficiency in media queries, this project presents three wireframes of layouts to be replicated. The objective is to rebuild the site from scratch with detail and precision.",
    },
  ]
  return (
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
  )
}

export default App
