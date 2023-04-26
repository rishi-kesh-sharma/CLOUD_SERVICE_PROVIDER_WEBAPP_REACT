import React from "react";
import Card from "./commons/Card";
import Image1 from "../assets/images/hero-card1.png";
import Image2 from "../assets/images/hero-card3.png";
import Image3 from "../assets/images/hero-card3.png";
import Image from "next/image";
const cardData = [
  {
    image: Image1,
    title: "IT &amp; Cloud Managment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  },
  {
    image: Image2,
    title: "Diployment and Migration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  },
  {
    image: Image3,
    title: "Fastest VPN Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  },
  {
    image: Image3,
    title: "Fastest VPN Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  },
];
const ServicesCards = () => {
  return (
    <div className="gap-[2rem] md:grid md:grid-cols-2 lg:col-span-2 grid grid-cols-1 justify-center lg:justify-start">
      {cardData.map((item) => (
        <Card className="gap-[0.5rem]">
          <Image src={item.image} alt="" height={80} width={80} />
          <h3 className="text-[#467CFB] font-semibold text-lg">{item.title}</h3>
          <p className=" text-gray-400 text-sm ">{item.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default ServicesCards;
