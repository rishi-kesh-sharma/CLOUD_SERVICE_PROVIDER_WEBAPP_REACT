"use client";
import React, { createContext, useContext } from "react";
import ToggleButton from "../commons/ToggleButton";
import { useState } from "react";
import Button from "../commons/Button";
import { bluish_gray_light, primary } from "../../constants/colors";
import Container from "../commons/Container";
import logoImage from "../../assets/images/logo.png";
import Image from "next/image";
import Section from "../commons/Section";
import { NavCtx } from "@/app/layout";
import Link from "next/link";

const SecondaryHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { transparent } = useContext(NavCtx);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Section
      className={`${
        transparent ? "lg:bg-transparent" : "lg:bg-[#d7dfef]"
      } bg-[#d7dfef]  overflow-x-hidden fixed top-0 z-50 transition-all`}>
      <Container>
        <nav className="border-gray-200 ">
          <div className="mx-auto flex flex-wrap items-center justify-between py-5 lg:flex-row lg:flex-nowrap lg:justify-between">
            <Link href="#" className="flex">
              <Image src={logoImage} />
            </Link>
            <div className="flex  lg:hidden">
              <ToggleButton handleToggle={handleToggle} />
            </div>
            <div
              className={`${
                !isOpen ? "h-[0] opacity-0" : "h-[350px] opacity-100"
              }  flex justify-between lg:justify-end items-center w-full transition-all duration-300 lg:flex lg:opacity-100 lg:items-center lg:h-full `}
              id="mobile-menu-3">
              <ul className="flex-col flex mt-4 lg:flex-row ">
                <li className={``}>
                  <a
                    href="/"
                    className={` ${
                      transparent ? "lg:text-gray-100" : "text-gray-700"
                    } text-gray-700 font-[500]   py-2 block pr-4 lg`}
                    aria-current="page">
                    Home
                  </a>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`${
                      transparent ? "lg:text-gray-100" : "text-gray-700"
                    } text-gray-700 font-[500]   py-2 block pr-4`}>
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services"
                    className={` ${
                      transparent ? "lg:text-gray-100" : "text-gray-700"
                    } text-gray-700 font-[500]   py-2 block pr-4`}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className={` ${
                      transparent ? "lg:text-gray-100" : "text-gray-700"
                    } text-gray-700 font-[500]   py-2 block pr-4`}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className={` ${
                      transparent ? "lg:text-gray-100" : "text-gray-700"
                    } text-gray-700 font-[500]   py-2 block pr-4`}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={` ${
                      transparent ? "lg:text-gray-100" : "text-gray-700"
                    } text-gray-700 font-[500]   py-2 block pr-4`}>
                    Contact
                  </Link>
                </li>
                <li className="lg:ml-[2rem]">
                  <Link href="http://localhost:3001/login" className="  md:p-0">
                    <Button
                      className={`bg-[#5BA5FB] text-gray-100 py-[4px] px-7 rounded-md border border-white`}>
                      Login!
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </Section>
  );
};

export default SecondaryHeader;
