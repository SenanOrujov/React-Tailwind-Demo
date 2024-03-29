import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full mx-auto h-screen text-center flex flex-col justify-center ">
        <p className="uppercase text-[#00df9a] fonst-bold p-2">
          Growing with Data analytics
        </p>
        <h1 className="uppercase md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with Data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:tex-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flex financing for
          </p>
          <ReactTyped
            className="md:tex-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platfroms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
