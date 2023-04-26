import React from "react";
import SectionSubtitle from "../commons/SectionSubtitle";
import SectionDescription from "../commons/SectionDescription";
import SectionTitle from "../commons/SectionTitle";
import PricingCards from "../PricingCards";
import { motion } from "framer-motion";
import { smallAnimation } from "@/constants/animations";

const Pricing = () => {
  return (
    <div>
      <SectionTitle $as={motion.h4} {...smallAnimation} className="font-[400]">
        Pricing Plans
      </SectionTitle>
      <SectionSubtitle $as={motion.h1} {...smallAnimation}>
        Our Pricing Plans
      </SectionSubtitle>
      <SectionDescription $as={motion.p} {...smallAnimation}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </SectionDescription>
      <PricingCards />
    </div>
  );
};

export default Pricing;
