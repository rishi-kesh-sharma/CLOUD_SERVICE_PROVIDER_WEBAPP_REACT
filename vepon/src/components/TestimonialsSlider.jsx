"use client";
import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import CostumSlider from "./CustomSlider";

const testimonials = [
  {
    ratings: 5,
    image: "https://vpn1.netlify.app/static/media/2.ed722c5a.jpg",
    name: "Johan Smith",
    designation: "One of our clients",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, et!",
  },
  {
    ratings: 5,
    image: "https://vpn1.netlify.app/static/media/2.ed722c5a.jpg",
    name: "Johan Smith",
    designation: "One of our clients",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, et!",
  },
  {
    ratings: 5,
    image: "https://vpn1.netlify.app/static/media/2.ed722c5a.jpg",
    name: "Johan Smith",
    designation: "One of our clients",
    review:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, et!",
  },
  {
    ratings: 5,
    image: "https://vpn1.netlify.app/static/media/2.ed722c5a.jpg",
    name: "Johan Smith",
    designation: "One of our clients",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, et!",
  },
  {
    ratings: 5,
    image: "https://vpn1.netlify.app/static/media/2.ed722c5a.jpg",
    name: "Johan Smith",
    designation: "One of our clients",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, et!",
  },
];
const TestimonialsSlider = () => {
  return (
    <div className="">
      <CostumSlider>
        {testimonials.map((testimonial, index) => (
          <div className="p-5 ">
            <TestimonialsCard testimonial={testimonial} key={index} />
          </div>
        ))}
      </CostumSlider>
    </div>
  );
};

export default TestimonialsSlider;
