import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import vibeVillas from "../assets/vibe-villas.png";
import vv1 from "../assets/vv1.png";
import vv3 from "../assets/vv3.png";
import vv4 from "../assets/vv4.png";
import vv5 from "../assets/vv5.png";
import tea from "../assets/tea.png";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import catTinder from "../assets/cat-tinder.png";
import tinder1 from "../assets/tinder1.png";
import tinder2 from "../assets/tinder2.png";
import tinder3 from "../assets/tinder3.png";
import tinder4 from "../assets/tinder4.png";
import tinder5 from "../assets/tinder5.png";
import map1 from "../assets/map1.png";
import map2 from "../assets/map2.png";
import map3 from "../assets/map3.png";
import map4 from "../assets/map4.png";

const Show = ({ project }) => {
  const {
    date,
    project: projectName,
    builtWith,
    link,
    description,
    palette,
    contributors,
    contributorLinks,
  } = project;

  let projectImages;
  switch (projectName) {
    case "Vibe Villas":
      projectImages = [vibeVillas, vv1, vv3, vv4, vv5];
      break;
    case "Tea House":
      projectImages = [tea, t1, t2, t3];
      break;
    case "Cat Tinder":
      projectImages = [catTinder, tinder1, tinder2, tinder3, tinder4, tinder5];
      break;
    case "Weather Map":
      projectImages = [map1, map2, map3, map4];
      break;
    default:
      projectImages = null;
      break;
  }

  return (
    <div
      className="font-text text-gray-950 min-h-screen bg-opacity-50 bg-blue-100 py-6 px-5 screen-md-sm:py-12 screen-md-sm:px-10 flex flex-col"
      style={{ alignItems: "center" }}
    >
      <div className="w-full max-w-screen-2xl">
        <div className="pt-20 pl-5">
          <NavBar projTitle={projectName} />
        </div>
        <div className="flex flex-col" style={{ alignItems: "center" }}>
          <h1 className="font-title text-3xl screen-md-sm:text-5xl screen-md:text-6xl pt-20 screen-md:pt-8 items-center flex flex-col justify-center relative w-fit text-center">
            {projectName}
            <div className="flex justify-center absolute -bottom-6 left-0 right-0">
              {palette.map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: color,
                    width: `${100 / palette.length}%`,
                  }}
                  className={`w-11 h-4 ${
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
        </div>
        <div className="flex justify-center gap-8 screen-md-sm-660:gap-24 mt-10 screen-md-sm:mt-20 text-sm screen-md-sm-660:text-xl">
          {contributors && (
            <div className="flex flex-col">
              <p className="font-bold">Contributors</p>
              <ul>
                {contributors.map((contributor, index) => (
                  <li key={index} className="mt-2">
                    <a
                      href={contributorLinks[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline flex items-center transition-all duration-300 hover:opacity-70"
                    >
                      <span className="flex items-center">
                        {contributor}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-6 h-6 ml-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-col">
            <p className="font-bold">Date of Completion</p>
            <ul>
              <li className="mt-2">
                <p>{date}</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Built With</p>
            <ul>
              {builtWith.map((tech, index) => (
                <li key={index} className="mt-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">View Repo</p>
            <ul>
              {link.map((repo, index) => (
                <li key={index} className="mt-2">
                  <a href={repo} target="_blank" rel="noopener noreferrer">
                    <span className="underline flex flex-wrap transition-all duration-300 hover:opacity-70">
                      GitHub
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h2 className="font-title text-2xl screen-md-sm:text-4xl screen-md:text-5xl mt-10 screen-md-sm:mt-20 items-center flex flex-col justify-center">
          Overview
        </h2>
        <article className="mt-5 screen-md-sm:mt-10 flex justify-center">
          <p className="text-sm screen-md-sm-660:text-xl w-120">
            {description}
          </p>
        </article>
        {projectImages && (
          <div>
            {projectImages.map((image, index) => (
              <div className="flex justify-center" key={index}>
                <img
                  className="max-h-111 rounded-lg mt-10 screen-md-sm:mt-20"
                  src={image}
                  alt={`Project webpage screenshot ${
                    index + 1
                  } from ${projectName}`}
                />
              </div>
            ))}
          </div>
        )}
        <div className="w-full max-w-screen-md-lg mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Show;
