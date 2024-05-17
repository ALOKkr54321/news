"use client";
import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Story from "./components/Story/Story";
import Sidebar from "./components/sidebar/Sidebar";
import News from "./components/News/News";
import CardNews from "./components/News/CardNews"
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
// _app.js or _app.tsx

export default function Home() {
  return (
    <main className="flex w-full min-h-screen  items-center flex-col  pt-10 px-10">
      <Navbar />
      <div className=" w-[80vw] hidden md:flex items-center container px-2">
        <Story />
      </div>
      <div className="w-[99vw] md:w-[80vw] min-h-screen flex flex-row gap-2 bg-slate-200 p-1 justify-center">
        {/* <Sidebar /> */}
        <div className="w-full md:w-[79vw] h-max flex flex-col  bg-white mt-3 md:mt-0 ">
          <Slider/>
          <News />
          <CardNews/>
        </div>
      </div>
      <Footer />
    </main>
  );
}
