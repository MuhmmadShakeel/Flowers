import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop",
    "https://www.gardentech.com/-/media/project/oneweb/gardentech/images/blog/how-to-start-a-flower-garden/how-to-start-a-flower-garden-h.jpg",
    "https://i.pinimg.com/736x/d0/b0/bc/d0b0bc09224c7cf1f82c873615bc0aa8.jpg",
    "https://i.pinimg.com/736x/07/11/11/071111714c6534d9c579dc6ee5801d14.jpg",
  ];

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="py-24 bg-green-950">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-white mb-4 italic font-serif">
            A Glimpse into our Garden
          </h2>
          <p className="text-white/60">
            Every petal tells a story of care and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl h-[400px]"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <img
                src={img}
                alt="Flower"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white border border-white px-6 py-2 rounded-full uppercase text-xs tracking-widest">
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
