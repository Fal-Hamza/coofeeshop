"use client";
// Component
import About from "@/components/About";
import { Explore } from "@/components/Explore";
import Hero from "@/components/Hero";
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const Home = () => {
  // add LocomotiveScroll
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container className=" h-full overflow-x-hidden">
      <Hero />

      <Explore />

      <About />
      {/* temporary div */}
      <div className="h-[4000px] bg-yellow-700"></div>
    </div>
  );
};

export default Home;
