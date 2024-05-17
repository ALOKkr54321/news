// components/Footer.tsx
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 w-[99vw] text-white pt-5">
      <div className="flex flex-row items-center justify-between space-x-4 px-10">
        <div className="text-xl font-bold flex items-center flex-row gap-2">
          <Image src="/s1.png" width={50} height={50} alt="Logo" />
          <span>LOGO</span>
        </div>
        <div className="text-xl md:text-3xl font-bold flex items-center flex-row gap-2 md:gap-6">
          <a href="#" className="text-white hover:text-blue-500">
            <FaXTwitter/>
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <FaTelegram />
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <FaWhatsapp />
          </a>
          
        </div>
      </div>

      <div className="flex justify-center text-sm md:text-xl space-x-4 mt-4">
        <a href="#">About Us</a>
        <a href="#">Feedback</a>
        <a href="#">Careers</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="text-center my-4">© 2024. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
