import React from 'react';

const reasons = [
  {
    title: 'Fresh Flowers Daily',
    description: 'We source flowers every morning to ensure maximum freshness and vibrant colors in every bouquet.',
    image: 'https://i.pinimg.com/originals/fc/13/4a/fc134a98d375a0ab83ff2e860c78b0f6.png', // replace with real images
  },
  {
    title: 'Ethically Sourced',
    description: 'Supporting local growers and using sustainable practices, our flowers are both beautiful and ethical.',
    image: 'https://i.pinimg.com/736x/2c/d4/b5/2cd4b53d93017d80efdb8817c3b37a40.jpg',
  },
  {
    title: 'Fast Delivery',
    description: 'We ensure your flowers arrive on time, in perfect condition, making every occasion special.',
    image: 'https://i.pinimg.com/736x/7a/d7/7d/7ad77d57ceeba14cae20e4653763828c.jpg',
  },
  {
    title: 'Custom Arrangements',
    description: 'Personalized bouquets tailored to your needs, making every gift unique and memorable.',
    image: 'https://i.pinimg.com/736x/b2/85/02/b285022ae9e23cb37d2b32f878c55ff3.jpg',
  },
];

function WhyChooseUs() {
  return (
    <section className="py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-bold text-[#4C763B]">Why Choose Us</h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Discover what makes Bloom & Co. the preferred choice for fresh and beautiful flowers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={reason.image}
              alt={reason.title}
              className="w-24 h-24 mb-4 object-cover rounded-full shadow-md"
            />
            <h3 className="text-xl font-semibold text-[#4C763B] mb-2">{reason.title}</h3>
            <p className="text-gray-700 text-sm">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
