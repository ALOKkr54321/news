// components/Slider.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
const images = [
  { id: 1, heading: "heading asdkmlkm lkmldk lkslccm  ksnlkc alksclc ashkdj asjshdk kashkdj ihaksdj kjahsskd  ", imageUrl: "/c1.png", Link: "#" },
  { id: 2, heading: "heading asdkmlkm lkmldk lkslccm  ksnlkc alksclc ashkdj asjshdk kashkdj ihaksdj kjahsskd 2", imageUrl: "/c2.png", Link: "#" },
  { id: 3, heading: "heading asdkmlkm lkmldk lkslccm  ksnlkc alksclc ashkdj asjshdk kashkdj ihaksdj kjahsskd 3", imageUrl: "/c3.png", Link: "#" },
  { id: 4, heading: "heading asdkmlkm lkmldk lkslccm  ksnlkc alksclc ashkdj asjshdk kashkdj ihaksdj kjahsskd 4", imageUrl: "/c4.png", Link: "#" },
  { id: 5, heading: "heading asdkmlkm lkmldk lkslccm  ksnlkc alksclc ashkdj asjshdk kashkdj ihaksdj kjahsskd 5", imageUrl: "/s2.png", Link: "#" },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[30vh] md:h-[60vh] overflow-hidden ">
      {images.map((image, id) => (
        <div
          key={id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            id === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            className="pointer-events-nonelg:pointer-events-auto lg:p-0"
            href={image.Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={image.imageUrl}
              alt={`Slide ${id + 1}`}
              className="w-full h-full object-cover "
              width={800}
              height={600}
            />
            <div className="absolute -bottom-8 md:-bottom-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-xl text-sm font-semibold ">
              <div className="bg-black opacity-80 w-[100vw] text-center p-2">
                <p className=" inline-block w-3/4 md:w-1/2 text-center items-center"> {image.heading}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Slider;
