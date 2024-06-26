import React from "react";
import DisplayProjects from "./DisplayProjects";
import Footer from "./Footer";
import Footnote from "./Footnote";

const InProgress = ({ displayFinished, setDisplayFinished }) => {
  return (
    <>
      <div className="flex flex-col" style={{ alignItems: "center" }}>
        <div className="relative py-14 gap-14 grid grid-cols-2 w-full max-w-screen-2xl">
          <DisplayProjects
            displayFinished={displayFinished}
            setDisplayFinished={setDisplayFinished}
          />
          <div className="flex flex-col text-gray-950 mt-4">
            <h3 className="pt-10 font-title text-gray-950 text-3xl">
              {/* *This portfolio* */}
            </h3>
          </div>
        </div>
      </div>
      <Footer footnote={displayFinished ? <Footnote /> : null} />
    </>
  );
};

export default InProgress;
