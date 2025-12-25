import React from "react";

const AboutPhilosophy = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-green-50 rounded-full -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1591886944143-48368af7dcae?q=80&w=1000&auto=format&fit=crop"
              alt="Floral Designer at work"
              className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
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
            <div className="flex items-center gap-8 border-t border-gray-100 pt-8">
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
