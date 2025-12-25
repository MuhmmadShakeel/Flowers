import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full bg-[#f9fafb] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-extrabold text-[#016630] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We’d love to hear from you. Whether you have a question, need help,
            or want to place a custom flower order — our team is ready.
          </p>
        </div>

        {/* Form & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          {/* Contact Form */}
          <div
            className="bg-white rounded-2xl shadow-xl p-10"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold text-[#016630] mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#016630]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#016630]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#016630]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#016630] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#014d24] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Box */}
          <div
            className="bg-[#016630] rounded-2xl shadow-xl p-10 text-white flex flex-col justify-center"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-[#F5AD18] mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-lg">
              <p>
                <span className="font-semibold">Address:</span><br />
                123 Flower Street, Garden City
              </p>

              <p>
                <span className="font-semibold">Phone:</span><br />
                +1 234 567 890
              </p>

              <p>
                <span className="font-semibold">Email:</span><br />
                support@flowerstore.com
              </p>

              <p>
                <span className="font-semibold">Working Hours:</span><br />
                Mon – Sat: 9:00 AM – 8:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div
          className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl"
          data-aos="zoom-in"
        >
          <iframe
            title="Flower Shop Location"
            src="https://www.google.com/maps?q=New%20York&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;
