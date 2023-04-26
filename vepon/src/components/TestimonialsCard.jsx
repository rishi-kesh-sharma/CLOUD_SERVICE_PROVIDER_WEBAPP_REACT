import React from "react";
import Card from "./commons/Card";
import { BsStar, BsStarFill } from "react-icons/bs";

const TestimonialsCard = ({ testimonial }) => {
  return (
    <Card className="border border-gray-200 px-[1rem] py-[1rem] rounded-lg shadow-sm">
      <div className="flex gap-[0.3rem]">
        {Array.from({ length: testimonial.ratings }, (_, i) => (
          <BsStarFill className="text-yellow-500" />
        ))}
      </div>
      <p className="text-sm text-gray-500">{testimonial.review}</p>
      <div className="flex gap-[1rem] items-center justify-start">
        <div>
          <img
            src={testimonial.image}
            alt=""
            className="w-[5rem] h-[5rem]  rounded-full"
          />
        </div>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-gray-500 sm:text-sm">{testimonial.designation}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialsCard;
