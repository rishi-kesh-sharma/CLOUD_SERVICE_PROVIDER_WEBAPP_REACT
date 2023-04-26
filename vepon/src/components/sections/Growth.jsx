import React from "react";
import Button from "../commons/Button";
import { smallAnimation } from "@/constants/animations";
const image = "https://vpn1.netlify.app/static/media/map.1269c3fd.svg";
import { motion } from "framer-motion";
const Growth = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-[3rem]">
      <div className="flex flex-col gap-2 md:gap-4 ">
        <motion.div
          {...smallAnimation}
          className=" text-[#0450FA] font-semibold bg-gray-50 w-[140px] md:w-[200px] py-2 md:py-3 flex items-center justify-center rounded-md mx-auto">
          {" "}
          Our Growth
        </motion.div>
        <motion.h1
          {...smallAnimation}
          className="text-gray-50 text-[2rem] md:text-[2.5rem] font-semibold text-center">
          Global Coverage
        </motion.h1>
        <motion.p
          {...smallAnimation}
          className="text-gray-300 text-sm  max-w-[500px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          dictum risus, non suscipit arcu. Quisque aliquam posuere tortor iscing
          elit. Duis at dictum risus, non suscipit arcu.
        </motion.p>
      </div>
      <div className="">
        <img src={image} />
      </div>
    </div>
  );
};

export default Growth;
