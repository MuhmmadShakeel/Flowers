import React from "react";

const AboutGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1561181286-d39736931215?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464333553961-0306191ec49a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519340333755-5072134bc221?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <section className="py-24 bg-green-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
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
