import React from 'react';

function PerDayService() {
  const services = [
    {
      id: 1,
      title: "Daily Flower Delivery",
      description:
        "Receive fresh flowers at your doorstep every day, handpicked and arranged to brighten your home or office.",
    },
    {
      id: 2,
      title: "Weekly Subscriptions",
      description:
        "Choose your favorite flowers and get them delivered weekly. Perfect for maintaining a fresh and vibrant space.",
    },
    {
      id: 3,
      title: "Custom Schedule",
      description:
        "Set a personalized delivery schedule that fits your lifestyle. Flexibility and freshness guaranteed.",
    },
  ];

  return (
    <section className="w-full py-2 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#016630] mb-6">
          Our Daily Services
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          We offer tailored daily flower services to ensure freshness and beauty every day. Choose a plan that suits your needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 ${service.bg}`}
              data-aos="fade-up"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#016630] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default PerDayService;
