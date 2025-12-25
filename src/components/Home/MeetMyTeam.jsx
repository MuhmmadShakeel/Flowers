import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MeetMyTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Initialize AOS Animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Team members data
  const teamData = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/46/cf/56/46cf56106caa38cbbb4ae984c5bbc291.jpg",
      name: "Sarah Bloom",
      role: "Founder & CEO",
      description:
        "Visionary behind Bloom & Co., ensuring quality, freshness, and happiness in every bouquet.",
      bgColor: "bg-[#4C763B]",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/736x/d9/17/a5/d917a569979da613bb700ae4f754d75e.jpg",
      name: "James Green",
      role: "Head Florist",
      description:
        "Expert in floral arrangements, bringing creativity and style to every design.",
      bgColor: "bg-[#F5AD18]",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/c6/3a/5f/c63a5f7902b46e38ba56f4ccd213f082.jpg",
      name: "Emily Rose",
      role: "Marketing Lead",
      description:
        "Connecting Bloom & Co. with clients, creating campaigns that bloom with impact.",
      bgColor: "bg-[#4C763B]",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/736x/c4/2e/8d/c42e8d1df33f6e8db46d363b15abc129.jpg",
      name: "Michael Petal",
      role: "Operations Manager",
      description:
        "Ensuring seamless delivery and smooth operations to delight every customer.",
      bgColor: "bg-[#F5AD18]",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [teamData.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full bg-gray-50 min-h-screen py-12">
      {/* Hero Section */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
        data-aos="fade-up"
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#4C763B] leading-tight mb-6">
          Meet Our Team
        </h1>
        <p className="text-xl lg:text-2xl mt-4 text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed">
          The passionate minds behind Bloom & Co., bringing creativity, quality, and care to every floral experience.
        </p>
      </div>

      {/* Dual Carousel Section */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-aos="zoom-in-up"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Carousel - Images */}
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {teamData.map((member) => (
                  <div key={member.id} className="w-full flex-shrink-0">
                    <div className="aspect-w-16 aspect-h-12">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {teamData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-[#4C763B] scale-125"
                        : "bg-white/80 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Carousel - Content */}
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl h-full">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {teamData.map((member) => (
                  <div
                    key={member.id}
                    className={`w-full flex-shrink-0 p-8 lg:p-12 rounded-2xl ${member.bgColor} h-full flex flex-col justify-center`}
                  >
                    <h2
                      className={`text-3xl lg:text-4xl font-bold mb-4 ${
                        member.bgColor === "bg-[#4C763B]"
                          ? "text-white"
                          : "text-[#4C763B]"
                      }`}
                    >
                      {member.name}
                    </h2>
                    <h3
                      className={`text-xl lg:text-2xl font-semibold mb-4 ${
                        member.bgColor === "bg-[#4C763B]"
                          ? "text-white/90"
                          : "text-gray-700"
                      }`}
                    >
                      {member.role}
                    </h3>
                    <p
                      className={`text-lg lg:text-xl leading-relaxed ${
                        member.bgColor === "bg-[#4C763B]"
                          ? "text-white/90"
                          : "text-gray-800"
                      }`}
                    >
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className="flex justify-center mt-8 lg:hidden"
          data-aos="fade-up"
        >
          <div className="flex space-x-4">
            {teamData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#4C763B] text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5AD18] text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Creative Minds</h3>
              <p className="text-white/90">
                Our team is full of passionate and creative professionals bringing fresh ideas to every project.
              </p>
            </div>
            <div className="bg-[#4C763B] text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Expert Florists</h3>
              <p className="text-white/90">
                Each bouquet is designed by experienced florists who ensure quality, beauty, and uniqueness.
              </p>
            </div>
            <div className="bg-[#F5AD18] text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">Customer Focused</h3>
              <p className="text-white/90">
                Our team prioritizes customer satisfaction, ensuring every experience is memorable and delightful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMyTeam;
