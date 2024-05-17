// components/Card.tsx
"use client";
import React from "react";
import Image from "next/image";
import { LuArrowBigRight } from "react-icons/lu";
const News: React.FC = () => {
  return (
    <div className="bg-red-700 flex flex-col md:flex-row items-center p-5 md:p-6 gap-3">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <a
          className="pointer-events-nonelg:pointer-events-auto lg:p-0"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/s2.png" alt="photo" width={730} height={425} />
        </a>
      </div>
      {/* Heading */}
      <div className="flex flex-col text-center w-full  md:w-1/2 lg:w-1/4">
        <a
          className="pointer-events-nonelg:pointer-events-auto lg:p-0"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-xl lg:text-2xl text-white font-semibold mt-2 ">
            Card Headingku okkml klkm Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus, ab voluptatum.{" "}
          </h2>
        </a>
      </div>
      {/* Quick Links */}
      <div className="hidden  lg:flex flex-col items-left lg:px-3  px-1 w-1/4">
        <ul className=" mt-2 space-y-2">
          <li>
            <a
              href="#"
              className="flex flex-row gap-1 md:gap-3 text-white font-semibold text-sm md:xl"
            >
              <LuArrowBigRight className="text-white size-10" />
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row gap-1 md:gap-3 text-white font-semibold text-sm md:xl"
            >
              <LuArrowBigRight className="text-white size-10" />
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row gap-1 md:gap-3 text-white font-semibold text-sm md:xl"
            >
              <LuArrowBigRight className="text-white size-10" />
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row gap-1 md:gap-3 text-white font-semibold text-sm md:xl"
            >
              <LuArrowBigRight className="text-white size-10" />
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row gap-1 md:gap-3 text-white font-semibold text-sm md:xl"
            >
              <LuArrowBigRight className="text-white size-10" />
              <span>Lorem ipsum dolor sit amet consectetur.</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default News;
