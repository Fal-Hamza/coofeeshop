"use client";

import Link from "next/link";
import Badge from "./Badge";
import Separator from "./Separator";

const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-screen relative text-white">
      {/* overlay */}
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]"></div>

      {/* video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/hero/videoHero.mp4" type="video/mp4" />
      </video>
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        {/* text */}
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 xl:gap-10 md:gap-8 h-full"
        >
          <div className="flex flex-col items-center">
            {/* Badge & H1 */}
            <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
            <h1 className="h1 text-white mt-8">
              <span className=" text-accent">Coffeine</span> Corner
            </h1>
          </div>

          {/* Separator */}
          <Separator />
          <p className=" lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
            Experience the joy of exceptional coffee in our cozy space, where
            every cup is crafted with passion and warmth
          </p>

          <button className="btn">
            <Link href=" #menu">Our menu</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
