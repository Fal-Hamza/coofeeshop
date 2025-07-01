"use client";

import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

export const OpeningHours = () => {
  return (
    <section className="flex bg-primary h-[60vh] xl:h-[80vh]">
      {/* 1 */}
      <div className=" hidden lg:flex md:flex relative xl:flex flex-1 justify-center items-center">
        {/* overlay */}
        <div className=" w-full h-full absolute z-40 top-0 bg-black/60"></div>
        <Image
          src="/assets/opening-hours/img.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw"
          quality={100}
          priority
          className=" object-cover"
        />
        <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
      </div>
      {/* 2 */}
      <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        {/* overlay */}
        <div className=" w-full h-full absolute z-10 top-0 bg-black/[0.85]"></div>
        {/* text & image */}
        <div className=" md:w-full z-20 flex flex-col justify-center items-center">
          <h2 className="h2 text-white mb-4">Opening Hours</h2>
          <Separator bg="accent" />
          <div className="mt-12 relative w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]">
            <Image
              src="/assets/opening-hours/program-badge.svg"
              fill
              // className=" object-cover"
              quality={100}
              alt="Hours"
              sizes="(min-width: 1280px) 470px, (min-width: 768px) 300px, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
