import Badge from "@/components/Badge";
import Image from "next/image";

function pageConatct() {
  return (
    <section className=" xl:h-[80vh] md:h-[60vh] sm:h-[40vh] h-[40vh] relative text-white">
      {/* overlay */}
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.50]"></div>

      {/* video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/assets/opening-hours/pexels-olly-3760256.jpg"
          type="video/mp4"
        />
      </video> */}
      <Image
        src="/assets/opening-hours/pexels-olly-3760256.jpg"
        fill
        sizes="(min-width: 1024px) 50vw"
        quality={100}
        priority
        alt="photo old city"
        className=" object-cover"
      />

      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        <div className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 xl:gap-10 md:gap-8 h-full">
          <div className="flex flex-col items-center">
            {/* Badge & H1 */}
            <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
            <h1 className="h1 text-white mt-8">
              <span className=" text-accent">Let's_</span>Talk
            </h1>
            <p className="lead font-semibold text-2xl">
              LAVE A MESSAGE, We LOVE to hear from YOU!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default pageConatct;
