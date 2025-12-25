import React, { useState } from "react";

const faqs = [
  {
    question: "Do you deliver flowers on the same day?",
    answer:
      "Yes! We offer same-day delivery for orders placed before 2 PM in your local area.",
  },
  {
    question: "Are your flowers fresh?",
    answer:
      "Absolutely! We source fresh flowers daily from local growers to ensure the highest quality and longevity.",
  },
  {
    question: "Can I customize my bouquet?",
    answer:
      "Yes! You can select the flowers, arrangement, and packaging to create a personalized bouquet for any occasion.",
  },
  {
    question: "Do you offer international delivery?",
    answer:
      "Currently, we deliver within the country only. International delivery will be available soon.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "If there’s an issue with your order, contact us within 24 hours and we’ll make it right, either with a replacement or a refund.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-[#4C763B]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-lg">
            Here are some of the most common questions our customers ask. If you need more information, feel free to contact us.
          </p>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <span className="text-2xl font-bold text-[#F5AD18]">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 bg-white text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 mt-42 flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/7a/77/10/7a77109fe6ad0014ab91b72ba05a2f0b.jpg"
            alt="Flowers FAQ"
            className="rounded-xl shadow-lg object-cover w-full h-96"
          />
        </div>
      </div>
    </section>
  );
}

export default Faq;
