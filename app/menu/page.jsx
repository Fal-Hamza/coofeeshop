import Badge from "@/components/Badge";

const pageMenu = () => {
  return (
    <section className="h-[80vh] md:h-[60vh] sm:h-[40vh]  relative text-white">
      {/* overlay */}
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.60]"></div>

      {/* video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/menu/menuVideo.mp4" type="video/mp4" />
      </video>

      {/* text */}

      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        <div className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 xl:gap-10 md:gap-8 h-full">
          <div className="flex flex-col items-center">
            {/* Badge & H1 */}
            <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
            <h1 className="h1 text-white mt-8">
              <span className=" text-accent">Our</span> Menu
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default pageMenu;
