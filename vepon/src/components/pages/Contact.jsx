import React from "react";
import Container from "../commons/Container";
import Hero from "../sections/Hero";
import Section from "../commons/Section";
import MountedContainer from "../commons/MountedContainer";

import img1 from "../../assets/images/heroMountedContainerImages/img1.png";
import img2 from "../../assets/images/heroMountedContainerImages/img2.png";
import img3 from "../../assets/images/heroMountedContainerImages/img3.png";
import img4 from "../../assets/images/heroMountedContainerImages/img4.png";
import img5 from "../../assets/images/heroMountedContainerImages/img5.png";
import img6 from "../../assets/images/heroMountedContainerImages/img6.png";
import ContactSection from "../sections/Contact";
import Growth from "../sections/Growth";
import Testimonials from "../sections/Testimonials";
import Banner from "../commons/Banner";
const images = [img1, img2, img3, img4, img5, img6];
const Contact = () => {
  return (
    <>
      <Banner title="Contact" breadCrumbs={["Home", "Contact"]} />
      <Section className="bg-gray-50">
        <Container className="pt-[2rem] md:pt-[4rem] md:pb-[3rem] pb-[2rem]">
          <ContactSection />
        </Container>
      </Section>
    </>
  );
};

export default Contact;
