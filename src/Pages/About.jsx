import React from "react";
import AboutHero from "../components/aboutPageComponents/AboutHero";
import AboutPhilosophy from "../components/aboutPageComponents/AboutPhilosophy";
import AboutGallery from "../components/aboutPageComponents/AboutGallery";

const AboutPage = () => {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutPhilosophy />

      {/* Short Dynamic CTA */}
      <section className="py-20 flex flex-col items-center bg-[#F5AD18]">
        <h2 className="text-3xl md:text-5xl font-black text-green-950 uppercase tracking-tighter">
          Ready to make someone's day?
        </h2>
        <button className="mt-8 px-12 py-4 bg-green-950 text-[#F5AD18] font-bold text-lg rounded-full hover:bg-green-900 transition-all shadow-2xl">
          Order Your Custom Bouquet
        </button>
      </section>

      <AboutGallery />

      {/* Modern Footer Quote */}
      <footer className="py-12 text-center bg-white border-t border-gray-100">
        <p className="text-green-900 font-serif italic text-2xl">
          "Where flowers bloom, so does hope."
        </p>
        <p className="mt-2 text-gray-400 text-sm uppercase tracking-[0.3em]">
          Bloom & Co. Est 1995
        </p>
      </footer>
    </main>
  );
};

export default AboutPage;
