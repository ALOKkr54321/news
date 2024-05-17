"use client";

import React from 'react';
import Image from "next/image";

const Story: React.FC = () => {

  const storiesData = [
  
    { id: 1, username: 'LiveTv', avatarUrl: '/s1.png' ,urlLink: '#'},
    { id: 2, username: 'News', avatarUrl: '/s1.png' ,urlLink:'#'},
    { id: 3, username: 'Sports', avatarUrl: '/s1.png' ,urlLink:'#'},
    { id: 4, username: 'ENT', avatarUrl: '/s1.png' ,urlLink:'#'},
    { id: 5, username: 'Uncut', avatarUrl: '/s1.png' ,urlLink:'#'},
    { id: 6, username: 'Drama', avatarUrl: '/s1.png' ,urlLink:'#'},
    { id: 7, username: 'Paisa', avatarUrl: '/s1.png' ,urlLink:'#'},
  
  ];

  return (
    <div className="py-2 px-4   sm:pt-16 sm:pb-6 md:px-16 space-x-5">
    <div className="fm:border-[#33353F] sm:border rounded-md py-2 px-2 flex flex-col sm:flex-row justify-between gap-6 lg:gap-16">
      {storiesData.map((story) => (
        <div key={story.id} className="flex flex-col items-center">
           <a
            className="pointer-events-none flex flex-col place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href={story.urlLink}
            target="_blank"
            rel="noopener noreferrer"
          >

          <Image
            src={story.avatarUrl}
            alt={`${story.username}'s story`}
            className="rounded-full border-2 border-blue-500"
            width={100}
            height={100}
            priority
          />
          <p className="text-sm text-gray-800">{story.username}</p>
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Story;

