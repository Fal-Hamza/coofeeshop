"use client";

import { useEffect, useRef } from "react";

function ContactDetails() {
  //focus
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <section className=" pt-12 pb-16 xl:pt-28 xl:pb-28">
      <div className=" container mx-auto">
        <div className=" flex flex-1 xl:gap-20 md:gap-16 gap-10 items-center justify-center xl:flex-row md:flex-row flex-col ">
          {/* form details */}
          <div className=" flex flex-1 xl:h-[500px] sm:w-[90%] xl:p-6 md:p-5 py-4 px-7 border rounded-2xl hover:shadow-2xl transition-all duration-700 shadow-accent">
            <form
              className="flex flex-col items-center justify-center xl:gap-3 md:gap-3 gap-2 w-full h-full "
              action=""
            >
              <span className=" uppercase xl:text-3xl md:text-3xl text-xl xl:mb-2">
                Leave a message
              </span>
              <h2 className=" h2 xl:text-5xl md:text-5xl text-3xl text-center  mb-7">
                We Love to hear from <span className=" text-accent">YOU</span>
              </h2>
              <input
                ref={inputRef}
                className=" min-w[100%] p-3 w-full outline-none rounded-2xl border-[1px] transition-all focus:border-accent"
                type="text"
                placeholder="Your name"
              />
              <input
                className=" min-w[100%] p-3 w-full outline-none rounded-2xl border-[1px] transition-all focus:border-accent"
                type="email"
                placeholder="Your Email"
              />
              <textarea
                className=" outline-none min-w[100%] max-h-[120px] p-3 w-full rounded-2xl border-[1px] transition-all focus:border-accent"
                name=""
                id=""
                cols="30"
                rows="30"
              ></textarea>
              <button type="submit" className=" btn rounded-2xl">
                Submit
              </button>
            </form>
          </div>
          {/* Map */}

          <div className=" flex flex-1 border xl:h-[500px] sm:w-[90%]">
            <div className=" w-[100%] h-[500px] ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.4920140414392!2d-7.983098924589839!3d31.620376474168367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee387a92f6bf%3A0xc99352ab61109342!2sPHARMACIE%20JNANE%20EL%20AFIA!5e0!3m2!1sfr!2sma!4v1732297804025!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
