import React from "react";

const AboutStats = () => {
  return (
    <section className="py-16 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-4xl font-bold text-[#F5AD18]">10k+</h4>
            <p className="text-sm uppercase tracking-widest mt-2">
              Happy Customers
            </p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-[#F5AD18]">500+</h4>
            <p className="text-sm uppercase tracking-widest mt-2">
              Flower Varieties
            </p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-[#F5AD18]">24hr</h4>
            <p className="text-sm uppercase tracking-widest mt-2">
              Express Delivery
            </p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-[#F5AD18]">25+</h4>
            <p className="text-sm uppercase tracking-widest mt-2">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
