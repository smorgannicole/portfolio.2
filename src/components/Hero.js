import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col text-gray-950 text-end justify-center">
      <h1
        id="skip-nav"
        className="text-5xl text-center screen-md-sm:text-end screen-md-sm-660:text-7xl font-title font-bold"
      >
        I'm Morgan,
        <br />a software developer.
      </h1>
      <h2 className="font-text text-center screen-md-sm:text-end text-lg screen-md-sm-660:text-2xl mt-4">
        I find great fulfillment in writing accessible, reliable, and reusable
        code.
      </h2>
    </div>
  );
};

export default Hero;
