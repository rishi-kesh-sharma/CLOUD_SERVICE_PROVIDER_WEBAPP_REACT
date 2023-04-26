import React from "react";
import Card from "./commons/Card";
import Image1 from "../assets/images/hero-card1.png";
import Image2 from "../assets/images/hero-card3.png";
import Image3 from "../assets/images/hero-card3.png";
import Image from "next/image";
const cardData = [
  {
    image: Image1,
    title: "120.3124.24 IPs",
    description: "Lorem ipsum dolor sit amet adipisicing elit.",
  },
  {
    image: Image2,
    title: "24/7 Live Support",
    description: "Lorem ipsum dolor sit amet adipisicing elit.",
  },
  {
    image: Image3,
    title: "Stable &amp; Reliable",
    description: "Lorem ipsum dolor sit amet adipisicing elit.",
  },
];
const HomeCards = () => {
  return (
    <div className="flex gap-[1rem]  md:gap-[2rem]  flex-wrap mt-[2rem] max-w-[800px]">
      {cardData.map((item) => (
        <Card className="gap-[0.5rem] max-w-[500px]">
          <Image src={item.image} alt="" height={80} width={80} />
          <h3 className="text-[#467CFB] font-[500] ">{item.title}</h3>
          <p className="text-[1rem] text-gray-400 text-sm ">
            {item.description}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default HomeCards;
