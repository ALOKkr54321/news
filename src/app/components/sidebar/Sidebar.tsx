"use client";

import React from 'react';
import { MdOutlineLiveTv, MdOndemandVideo, MdOutlineSlowMotionVideo, MdAmpStories, MdPodcasts } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { IoLogoGameControllerB } from "react-icons/io";
import { RiMovie2Fill } from "react-icons/ri";
import { TbMessageMinus } from "react-icons/tb";

const Sidebar: React.FC = () => {


  const datas = [
    { indx: 1, icon: MdOutlineLiveTv, text: "Live TV", urlLink: '#'},
    { indx: 2, icon: MdOndemandVideo, text: "Video", urlLink: '#'},
    { indx: 3, icon: MdOutlineSlowMotionVideo, text: "Short Video", urlLink: '#'},
    { indx: 4, icon: MdAmpStories, text: "Web Stories", urlLink: '#'},
    { indx: 5, icon: GrGallery, text: "Photo Gallery", urlLink: '#'},
    { indx: 6, icon: MdPodcasts, text: "Podcasts", urlLink: '#'},
    { indx: 7, icon: IoLogoGameControllerB, text: "Games", urlLink: '#'},
    { indx: 8, icon: RiMovie2Fill, text: "Movie Review", urlLink: '#'},
    { indx: 9, icon: TbMessageMinus, text: "Opinion", urlLink: '#'},
  ]



  return (
    <div className="bg-gray-800 text-white h-screen w-[25vw] md:w-[15vw] flex flex-col items-center pt-6 md:pt-10">
      <nav className="flex-grow">
        <ul className=" space-y-0 md:space-y-2">
          
        {
          datas.map( (data, indx) => {
            const Icon = data.icon;

            return (
              
              <li key={data.indx} className="p-4 hover:bg-gray-700 cursor-pointer">
                 <a
            className="pointer-events-none flex flex-row place-items-center gap-2 md:p-8 lg:pointer-events-auto lg:p-0"
            href={data.urlLink}
            target="_blank"
            rel="noopener noreferrer"
          >
                <Icon/>
                <p> {data.text} </p>
                </a>
              </li> 
            )
          })
        }
        </ul>
        </nav>
        </div>
      
  )
}

export default Sidebar;
