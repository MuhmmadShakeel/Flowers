import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPhilosophy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Image Section */}
          <div className="w-full md:w-1/2 relative" data-aos="fade-right">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-green-50 rounded-full -z-10"></div>
            <img
              src="https://cdn.shopify.com/s/files/1/1334/4597/files/How-to-Fill-an-Outdoor-Planter-with-Artificial-Flowers5_1024x1024.png?v=1628269876"
              alt="Floral Designer at work"
              className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6" data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-bold text-green-950 mb-8 leading-tight">
              A Symphony of <br />{" "}
              <span className="text-[#F5AD18]">Scent & Color</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Humne apna safar aik chote se garden se shuru kiya tha. Aaj, Bloom
              & Co. poore mulk mein apne "Signature Bouquets" ke liye jana jata
              hai.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Hamara har phool "Organic Farming" ke zariye ughaya jata hai aur
              har arrangement hamare master florists ki mehnat ka nateeja hota
              hai.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 border-t border-gray-100 pt-8" data-aos="fade-up" data-aos-delay="200">
              <div>
                <p className="text-3xl font-bold text-green-900">100%</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  Natural
                </p>
              </div>
              <div className="h-12 w-[1px] bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-green-900">Fresh</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  Guaranteed
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
