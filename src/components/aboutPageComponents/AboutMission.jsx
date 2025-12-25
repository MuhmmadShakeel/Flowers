import React from "react";

const AboutMission = () => {
  const values = [
    {
      title: "Freshness",
      desc: "Hand-picked daily from the finest local gardens.",
    },
    {
      title: "Artistry",
      desc: "Every bouquet is a unique masterpiece by our floral artists.",
    },
    {
      title: "Sustainability",
      desc: "Eco-friendly packaging and responsible sourcing.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Bringing Nature’s{" "}
            <span className="text-[#F5AD18]">Best to You</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Bloom & Co., we believe that flowers have a language of their
            own. Whether it's a celebration, a gesture of love, or a simple
            "thank you," our mission is to deliver the freshest blooms that
            speak directly to the heart.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 border-l-4 border-[#F5AD18] bg-green-50 shadow-sm"
            >
              <h3 className="text-xl font-bold text-green-900">{v.title}</h3>
              <p className="text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
