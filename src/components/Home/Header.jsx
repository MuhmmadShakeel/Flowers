// Updated Home component for Flower Website
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Header = () => {
  const slides = [
    {
      id: 1,
      title: "Fresh Flowers, One Destination",
      whiteWords: ["Fresh", "One"],
      subtitle: "Handcrafted Bouquets for Every Occasion",
      description:
        "Discover premium flowers curated by expert florists. From romantic roses to elegant arrangements, we bring beauty, freshness, and emotions together.",
      image:
        "https://i.pinimg.com/1200x/05/51/97/0551974de992807e9430af7ffb387033.jpg",
      link: "/shop",
    },
    {
      id: 2,
      title: "Custom Bouquets for Special Moments",
      whiteWords: ["Custom", "for"],
      subtitle: "Designed with Love & Creativity",
      description:
        "Personalized flower bouquets crafted to match your occasion, color preference, and emotions. Perfect for birthdays, anniversaries, and proposals.",
      image:
        "https://i.pinimg.com/1200x/b5/6f/65/b56f65c372bfd6b62bb049b2d24c60ed.jpg",
      link: "/services",
    },
    {
      id: 3,
      title: "Same Day Flower Delivery Service",
      whiteWords: ["Same", "Service"],
      subtitle: "Fast  Reliable  Fresh",
      description:
        "Surprise your loved ones with same-day delivery. Our flowers are carefully packed and delivered fresh to ensure lasting beauty.",
      image:
        "https://i.pinimg.com/736x/6e/96/63/6e966364cd577ef751790e209cec4f51.jpg",
      link: "/delivery",
    },
    {
      id: 4,
      title: "Elegant Wedding & Event Decor",
      whiteWords: ["Elegant"],
      subtitle: "Luxury Floral Styling",
      description:
        "Transform weddings, banquets, and events with stunning floral designs. We create unforgettable atmospheres with premium arrangements.",
      image:
        "https://i.pinimg.com/736x/04/cd/38/04cd38c82e6910220b22d0a6792f140c.jpg",
      link: "/events",
    },
    {
      id: 5,
      title: "Daily Flowers for Homes & Offices",
      whiteWords: ["Daily"],
      subtitle: "Freshness Delivered Every Day",
      description:
        "Enhance your space with daily flower services for homes, offices, and hotels. Consistent quality, elegance, and freshness guaranteed.",
      image:
        "https://i.pinimg.com/1200x/c8/5e/45/c85e45b4228d88f8159392be3a33e94c.jpg",
      link: "/subscriptions",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 100 });

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative h-[90vh] overflow-hidden bg-[#016630]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-40" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#016630]/80 to-[#F5AD18]/40 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-5 md:px-6 lg:px-8">
        <div className="max-w-3xl animate-fadeIn">
          <h1
            className="text-3xl md:text-5xl font-extrabold mb-6 transition-all duration-1000"
            data-aos="zoom-in"
            key={currentSlide.id}
          >
            {currentSlide.title.split(" ").map((word, i) => {
              const isWhite = currentSlide.whiteWords.includes(word);
              return (
                <span
                  key={i}
                  className={
                    isWhite
                      ? "text-white"
                      : "bg-[#F5AD18] bg-clip-text text-transparent"
                  }
                >
                  {word + " "}
                </span>
              );
            })}
          </h1>

          <p
            className="text-xl md:text-2xl text-white/90 mb-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            {currentSlide.subtitle}
          </p>

          <p
            className="text-md md:text-lg text-white/80 leading-relaxed mb-8"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {currentSlide.description}
          </p>

          <Link to={currentSlide.link}>
            <button className="relative px-6 py-3 font-semibold bg-[#016630] text-white rounded-full overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl">
              <span className="absolute inset-0  opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
              <span className="relative z-10 ">Explore Collection</span>
            </button>
          </Link>
        </div>

        {/* Dots */}
        <div className="flex space-x-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-500 cursor-pointer rounded-full ${
                currentIndex === index
                  ? "bg-gradient-to-r from-[#F5AD18] to-[#FFE29A] w-8 h-3 shadow-lg"
                  : "bg-white/40 w-3 h-3 hover:bg-[#F5AD18]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
      `}</style>
    </section>
  );
};

export default Header;
