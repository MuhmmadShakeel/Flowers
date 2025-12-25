import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ShopHeader() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full bg-[#016630] py-28 px-6 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-7">
        <h1
          data-aos="zoom-in"
          data-aos-delay="150"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5AD18] leading-tight"
        >
          Fresh Flowers <br className="hidden sm:block" />
          for Every Occasion
        </h1>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Explore our handpicked collection of fresh, elegant flowers designed
          to express love, joy, and beauty. Delivered with care and crafted to
          perfection.
        </p>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="flex justify-center gap-4 pt-4 flex-wrap"
        >
          <button className="bg-[#F5AD18] text-[#016630] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition">
            Shop Now
          </button>

          <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#016630] transition">
            View Collection
          </button>
        </div>

      </div>
    </section>
  );
}

export default ShopHeader;
