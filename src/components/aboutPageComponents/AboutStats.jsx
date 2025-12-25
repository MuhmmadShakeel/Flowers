import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutStats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const stats = [
    { value: "10k+", label: "Happy Customers" },
    { value: "500+", label: "Flower Varieties" },
    { value: "24hr", label: "Express Delivery" },
    { value: "25+", label: "Years Experience" },
  ];

  return (
    <section className="py-16 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <h4 className="text-4xl font-bold text-[#F5AD18]">{stat.value}</h4>
              <p className="text-sm uppercase tracking-widest mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
