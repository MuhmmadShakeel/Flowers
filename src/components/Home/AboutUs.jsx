import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="bg-white text-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">

        {/* Image on the left */}
        <div
          data-aos="fade-right"
          className="md:w-5/12 flex justify-center"
        >
          <img
            src="https://i.pinimg.com/736x/1b/37/48/1b3748e8c6f162d96d894fd2675ded18.jpg"
            alt="Beautiful flowers"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500 w-4/5 md:w-full h-72 md:h-96 object-cover"
          />
        </div>

        {/* Text on the right */}
        <div
          data-aos="fade-left"
          className="md:w-7/12 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#4C763B]">
            About Bloom & Co.
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Bloom & Co. is passionate about delivering fresh, high-quality flowers directly to your doorstep. 
            Every bouquet is carefully curated to ensure it brings joy and beauty to your special moments.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our dedicated team works closely with local growers to source flowers ethically and sustainably, 
            guaranteeing vibrant arrangements that reflect care, love, and attention to detail.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
