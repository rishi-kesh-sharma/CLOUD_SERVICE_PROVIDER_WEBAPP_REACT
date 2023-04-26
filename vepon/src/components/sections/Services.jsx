import React from "react";
import SectionSubtitle from "../commons/SectionSubtitle";
import SectionDescription from "../commons/SectionDescription";
import SectionTitle from "../commons/SectionTitle";
import ServicesCards from "../ServicesCards";
import TestimonialsSlider from "../TestimonialsSlider";
import { motion } from "framer-motion";
import { smallAnimation } from "@/constants/animations";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[2rem]">
      <div className="">
        <SectionTitle
          $as={motion.h4}
          {...smallAnimation}
          className="text-sm  text-blue-600 font-semibold ml-0  lg:ml-[1rem] rounded-md bg-blue-100 max-w-[150px] py-[0.3rem] md:py-[0.4rem] md:mb-[0.6rem]">
          What We Offer?
        </SectionTitle>
        <SectionSubtitle
          $as={motion.h1}
          {...smallAnimation}
          className="text-start text-[#222] ">
          Our Top Services
        </SectionSubtitle>
        <SectionDescription
          $as={motion.p}
          {...smallAnimation}
          className=" text-start md:mx-0 text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo
          laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet,
          consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!
        </SectionDescription>
      </div>
      <ServicesCards />
    </div>
  );
};

export default Services;
