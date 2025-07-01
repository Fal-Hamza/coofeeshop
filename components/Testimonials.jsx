"use client";

//Import Swiper react Components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

//import swiper style
import "swiper/css";
import "swiper/css/navigation";

// import required modules
// import { Navigation } from "swiper/modules";

//react Icons
import { IoMdQuote } from "react-icons/io";

// data

const testimonials = [
  {
    message:
      "The coffee here is absolutely amazing! The baristas are skilled and the atmosphere is perfect for both work and relaxation.",
    name: "Alice Johnson",
    profession: "Graphic Designer",
  },
  {
    message:
      "I love coming to this cafe. The pastries are always fresh, and the staff is incredibly friendly. It's my go-to spot for meetings.",
    name: "Michael Lee",
    profession: "Freelance Writer",
  },
  {
    message:
      "A hidden gem! The ambiance is cozy, and the menu offers a great variety. The chai latte is a must-try!",
    name: "Samantha Green",
    profession: "Marketing Specialist",
  },
];

const Testimonials = () => {
  return (
    <section className=" h-[60vh] xl:h-[70vh]">
      <div className="container mx-auto h-full flex items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={2000}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          initialSlide={0}
          allowTouchMove={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="h-[400px]"
        >
          {testimonials.map((person, index) => {
            return (
              <SwiperSlide key={index} className=" w-full h-full">
                <div className="flex justify-center pt-14  ">
                  <div className="max-w-[60%] text-primary overflow-hidden shadow-2xl rounded-2xl p-6 h-[80%]">
                    <IoMdQuote className="text-3xl text-primary mb-3 mx-auto" />
                    <p className=" xl:text-2xl md:text-2xl font-secondery text-center mb-8">
                      {person.message}
                    </p>
                    <div className="text-center">
                      <p className="text-sm font-bold mb-1">{person.name}</p>
                      <p className="text-secondery">{person.profession}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
