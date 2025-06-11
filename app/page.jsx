"use client";
import { Explore } from "@/components/Explore";
import Hero from "@/components/Hero";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const Home = () => {
  // add LocomotiveScroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);
  return (
    <div lassName=" h-full overflow-x-hidden">
      <Hero />

      <Explore />
      {/* temporary div */}
      <div className="h-[4000px] bg-yellow-700"></div>
    </div>
  );
};

export default Home;
