"use client";

import { useRef, useEffect, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css"; // هذا آمن استيراده هنا
// Component;
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import { Explore } from "@/components/Explore";
import { OpeningHours } from "@/components/OpeningHours";
import About from "@/components/About";

const Home = () => {
  const scrollRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // تأكد من تحميل جميع المكونات الفرعية
  }, []);

  // add LocomotiveScroll
  useEffect(() => {
    if (!isMounted || !scrollRef.current) return;
    let scroll;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    };

    initScroll();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className=" h-full overflow-x-hidden"
    >
      <Hero />

      <Explore />

      <About />

      <Menu />
      <OpeningHours />
      <Testimonials />
    </div>
  );
};

export default Home;
