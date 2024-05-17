"use client";
import React from "react";
import Image from "next/image";
import { LuArrowBigRight } from "react-icons/lu";
const CardNews: React.FC = () => {
  return (
    <div className="flex flex-row gap-x-1 md:gap-x-5 justify-center items-center mt-6 pl-6 md:px-5">
      <div className=" flex flex-col md:flex-row md:justify-around md:gap-x-3">
      <div className="flex flex-col w-5/6 md:w-1/2">
        <div className="">
          <Image  src="/c1.png" alt="photo"  width={250} height={150} />
        </div>
        <div>
          <h3 className="font-bold md:text-lg  py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </div>
      </div>
      <div className="flex flex-col  w-5/6 md:w-1/2">
        <div className="">
          <Image src="/c2.png" alt="photo"  width={250} height={150} />
        </div>
        <div>
          <h3 className="font-bold md:text-lg py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </div>
      </div>

      </div>
      <div className="flex flex-col md:flex-row md:justify-around md:gap-x-3">

      <div className="flex flex-col w-5/6 md:w-1/2">
        <div className="">
          <Image src="/c3.png" alt="photo"  width={250} height={150} />
        </div>
        <div>
          <h3 className="font-bold md:text-lg py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </div>
      </div>
      <div className="flex flex-col  w-5/6 md:w-1/2">
        <div className="">
          <Image src="/c4.png" alt="photo"  width={250} height={150} />
        </div>
        <div>
          <h3 className="font-bold md:text-lg py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardNews;
