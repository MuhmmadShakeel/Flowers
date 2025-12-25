import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Premium Background Image */}
      <img
        src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2000&auto=format&fit=crop"
        alt="Luxury Floral Arrangement"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <h4
            className="text-[#F5AD18] uppercase tracking-[0.5em] font-semibold mb-4"
            data-aos="fade-right"
          >
            Since 1995
          </h4>

          <h1
            className="text-6xl md:text-8xl font-serif text-white leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Crafting{" "}
            <span className="text-[#F5AD18] italic">Emotions</span>{" "}
            Through Petals
          </h1>

          <p
            className="mt-6 text-xl text-white/80 max-w-lg font-light leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Bloom & Co. isn't just a flower shop; it's a sanctuary where
            nature's finest art meets human connection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
