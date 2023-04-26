import React from "react";
import Button from "../commons/Button";
import HomeCards from "../HomeCard";

const Hero = () => {
  return (
    <div className="flex flex-col gap-3 pt-[5rem] pb-[3rem] md:pb-[5rem] lg:pb-[1rem]">
      <h3 className="text-[#467CFB]  md:text-xl  font-semibold flex items-center gap-[0.5rem]">
        <span className="w-[30px] h-[2px] bg-[#39f9f9]"></span>
        <span>Complete VPN and Cloud Solutions</span>
      </h3>
      <h1 className="text-[#1f2471] text-[2rem] md:text-[3rem] font-[600] max-w-[600px]">
        Fastest VPN and Proxy Solutions you need.
      </h1>
      <p className="max-w-[600px] text-sm text-gray-400 md:text-[1rem]">
        Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum,
        quasi? Dolor sapiente amet optio harum dolores, voluptate, tempora
        dolorem fugiat fuga autem .
      </p>
      <div className="flex gap-[1rem] mt-6 flex-wrap">
        <Button className="uppercase font-semibold text-sm bg-gradient-to-r from-sky-400 to-lime-900 text-gray-100 px-6 py-3 md:py-4 md:px-9 rounded-md">
          Get Started
        </Button>
        <Button className="uppercase font-semibold text-sm bg-gradient-to-r from-sky-400 to-lime-900 text-gray-100 py-3 px-6 md:py-4 md:px-9 rounded-md">
          Learn More
        </Button>
      </div>
      <HomeCards />
    </div>
  );
};

export default Hero;
