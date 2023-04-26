import React from "react";
import SectionSubtitle from "../commons/SectionSubtitle";
import SectionDescription from "../commons/SectionDescription";
import SectionTitle from "../commons/SectionTitle";
import ContactCards from "../ContactCards";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col gap-[2rem] md:gap-[2rem]">
      <div>
        <SectionTitle className=" text-sm md:text-[1rem] text-center text-blue-600 font-semibold  ml-[1rem] rounded-md bg-blue-100 max-w-[150px] py-[0.3rem] mx-auto">
          {" "}
          Contact us
        </SectionTitle>
        <SectionSubtitle className="text-center text-[1.6rem] md:text-[2rem] ">
          Contact With Us
        </SectionSubtitle>
        <SectionDescription className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo
          laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet,
        </SectionDescription>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-[4rem]">
        <ContactCards />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;