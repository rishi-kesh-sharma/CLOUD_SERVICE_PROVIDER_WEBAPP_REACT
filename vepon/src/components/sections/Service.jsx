import Image from "next/image";
import React from "react";
import serviceImage from "../../assets/images/heroMountedContainerImages/img1.png";
import mainServiceImage1 from "../../assets/images/service.jpg";
import mainServiceImage2 from "../../assets/images/service2.jpg";
import mainServiceImage3 from "../../assets/images/service3.jpg";
import { AiFillCheckCircle } from "react-icons/ai";
const serviceFeatures = [
  "We provide Flexible IT Services",
  "Best IT  Solution with Our Team",
  "Award Winning Digital Solutions",
  "25 years Skilled Experience",
  "25 years Skilled Experience",
  "25 years Skilled Experience",
];
import service from "@/app/service/[id]/page";
import ServiceFAQ from "./ServiceFAQ";
const Service = () => {
  return (
    <div className="col-span-2    flex flex-col gap-[1rem] lg:gap-[2rem]  md:order-2">
      <div className="">
        <Image className="rounded-lg lg:w-full" src={mainServiceImage1} />
        <h1 className="font-semibold text-[1.6rem] mt-[1rem]">
          {" "}
          IT Solution And Business
        </h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          recusandae voluptas officia itaque aut, odio placeat repellendus natus
          voluptate assumenda quaerat corporis aspernatur possimus rem inventore
          rerum? Aliquid, eveniet. Vero ducimus maiores, incidunt consequuntur,
          repellendus cupiditate commodi veritatis eligendi aliquid iusto ipsum
          architecto! Nulla accusamus voluptas soluta cumque sapiente, iste
          voluptates hic voluptatem fugiat magnam quaerat et doloremque repellat
          quo eos dolorem deleniti quisquam consequatur, assumenda, nam tempore!
          Alias, nam!
        </p>
      </div>
      <div className="rounded-lg bg-gray-100 grid lg:gap-[2rem] grid-cols-1 lg:grid-cols-2 lg:items-start">
        <Image src={mainServiceImage2} className="rounded-lg lg:w-full" />
        <div>
          <h1 className="font-semibold text-[1.6rem] mt-[1rem]  px-[1rem] lg:mt-0">
            {" "}
            Service Features
          </h1>
          <ul className=" px-[1rem] pb-[1rem]">
            {serviceFeatures.map((item) => {
              return (
                <li className="flex items-center gap-2 text-sm text-gray-500">
                  <AiFillCheckCircle className="text-gray-600 " />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="">
        <h1 className="font-semibold text-[1.6rem] mt-[1rem]">
          {" "}
          The Challenge of Project
        </h1>
        <p className="text-sm text-gray-500 pb-[1rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          corrupti repudiandae doloribus quos illo beatae quisquam, itaque illum
          nobis laboriosam similique error sint! Laboriosam expedita iure quod
          ea qui voluptatibus nostrum sequi, fuga voluptates eius, natus, a
          dolorem deleniti. Consequuntur odio delectus sequi dolorum distinctio
          magnam nobis, dolore modi cupiditate!
        </p>
        <p className="text-sm text-gray-500 pb-[1rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae iusto
          recusandae aspernatur quis voluptas perspiciatis mollitia aut ut sint
          quidem voluptate nihil nisi, saepe vel. Deserunt, at est? Vitae iusto,
          temporibus necessitatibus aut dolor rerum! Architecto odio aliquam
          explicabo illo corporis natus nisi, ad sit, distinctio earum
          voluptates, facere a.
        </p>
        <div className="grid  grid-cols-1 my-[1rem] md:mt-0 md:grid-cols-2 items-center justify-start gap-[1rem] object-contain w-full md:h-[200px] ">
          <Image className="rounded-lg" src={mainServiceImage1} />
          <Image
            className="object-contain     rounded-lg"
            src={mainServiceImage3}
          />
        </div>
        <div className="xl:pt-[2rem]">
          <ServiceFAQ />
        </div>
      </div>
    </div>
  );
};

export default Service;
