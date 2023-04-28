import React from "react";
import Card from "./commons/Card";
import Image1 from "../assets/images/hero-card1.png";
import Image2 from "../assets/images/hero-card3.png";
import Image3 from "../assets/images/hero-card3.png";
import Image from "next/image";
const cardData = [
  {
    id: 1,
    image: Image1,
    title: "IT &amp; Cloud Managment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  },
  {
    id: 2,
    image: Image2,
    title: "Deployment and Migration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  },
  {
    id: 3,
    image: Image3,
    title: "DevOps Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  },
  {
    id: 4,
    image: Image3,
    title: "Software Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  },
  // {
  //   id: 4,
  //   image: Image3,
  //   title: "Digital Marketing",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  // },
  // {
  //   id: 4,
  //   image: Image3,
  //   title: "Cloud Hosting",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  // },
  // {
  //   id: 4,
  //   image: Image3,
  //   title: "Quality Analysis",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  // },
  // {
  //   id: 4,
  //   image: Image3,
  //   title: "Cloud Support",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maxi ut accumsan ut, posuere sit Lorem ipsum quam, maximus ut accumsan.",
  // },
];
const ServicesCards = () => {
  return (
    <div className="gap-[2rem] md:grid md:grid-cols-2 lg:col-span-2 grid grid-cols-1 justify-center lg:justify-start">
      {cardData.map((item) => (
        <a href={`/service/${item?.id}`}>
          <Card className="gap-[0.5rem] hover:shadow-md p-[1rem] hover:cursor-pointer hover:bg-gray-50 rounded-xl">
            <Image src={item.image} alt="" height={80} width={80} />
            <h3 className="text-[#467CFB] font-semibold text-lg">
              {item.title}
            </h3>
            <p className=" text-gray-400 text-sm ">{item.description}</p>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ServicesCards;
