import React from 'react';

function Banquent() {
  const services = [
    {
      id: 1,
      title: "Expertly Curated Bouquets",
      description:
        "Our flowers are carefully selected and arranged by professionals to ensure freshness, elegance, and lasting beauty for every occasion.",
      bg: "bg-[#016630]",
      textColor: "text-[#F5AD18]",
    },
    {
      id: 2,
      title: "Fast & Reliable Delivery",
      description:
        "We ensure that your bouquets arrive on time and in perfect condition, making special moments unforgettable.",
      bg: "bg-[#016630]",
      textColor: "text-[#F5AD18]",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-[#016630] mb-12">
          Why Choose Our Services
        </h2>

        {/* Flex Layout for Content + Image */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left Card: Services */}
          <div className="lg:w-1/2 space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-8 rounded-2xl shadow-lg ${service.bg}`}
                data-aos="fade-up"
              >
                <h3 className={`text-2xl font-bold mb-4 ${service.textColor}`}>
                  {service.title}
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Card: Image */}
          <div
            className="lg:w-1/2 flex justify-center"
            data-aos="fade-left"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform transform duration-500 w-full max-w-md">
              <img
                src="https://i.pinimg.com/736x/59/70/ae/5970ae01e6010362367f2c0a273f6147.jpg"
                alt="Beautiful flower bouquet"
                className="w-full h-96 md:h-[28rem] object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banquent;
