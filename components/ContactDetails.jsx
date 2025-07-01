function ContactDetails() {
  return (
    <section className=" pt-12 pb-16 xl:pt-28 xl:pb-28">
      <div className=" container mx-auto">
        <div className=" flex flex-1 gap-5 items-center justify-center flex-row ">
          {/* form details */}
          <div className=" flex flex-1  p-6 border rounded-2xl hover:shadow-2xl transition-all duration-700 shadow-accent">
            <form
              className="flex flex-col items-center justify-center gap-3 w-full h-full "
              action=""
            >
              <span className=" uppercase text-3xl mb-2">Leave a message</span>
              <h2 className=" h2 text-5xl mb-7">
                We Love to hear from <span className=" text-accent">YOU</span>
              </h2>
              <input
                className=" min-w[100%] p-3 w-full outline-none rounded-2xl border-[3px] transition-all focus:border-accent"
                type="text"
                placeholder="Your name"
              />
              <input
                className=" min-w[100%] p-3 w-full outline-none rounded-2xl border-[3px] transition-all focus:border-accent"
                type="email"
                placeholder="Your Email"
              />
              <textarea
                className=" outline-none min-w[100%] max-h-[120px] p-3 w-full rounded-2xl border-[3px] transition-all focus:border-accent"
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
          <div className=" flex flex-1 bg-purple-500">2</div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
