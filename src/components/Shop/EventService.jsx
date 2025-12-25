import React from "react";

function EventService() {
  return (
    <section className="w-full py-2">
      <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-[#F5AD18] mb-6">
              Event Floral Services
            </h2>
        {/* Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          
          {/* Images Section */}
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="h-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://i.pinimg.com/736x/85/f4/35/85f4355cbcdf72e369c06bc74e772f11.jpg"
                alt="Event Decoration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://i.pinimg.com/1200x/a9/fd/90/a9fd90a18cc72fbfefc374602d0b5ae7.jpg"
                alt="Flower Event Setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center h-full bg-[#F5AD18]  rounded-2xl p-10 text-left shadow-xl">
            <h2 className="text-4xl font-extrabold text-[#016630]  mb-6">
              Event Floral Services
            </h2>
            <p className="text-white text-lg leading-relaxed mb-6">
              We provide premium floral arrangements and décor services for weddings,
              corporate events, birthdays, and luxury celebrations. Every detail is
              crafted to elevate your event’s atmosphere.
            </p>
            <p className="text-white text-base leading-relaxed mb-8">
              From elegant centerpieces to complete venue styling, our expert team
              ensures beauty, freshness, and unforgettable impressions.
            </p>

            <button className="self-start bg-[#F5AD18] text-[#016630] px-8 py-3 rounded-full font-semibold hover:bg-white transition duration-300">
              Book Event Service
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EventService;
