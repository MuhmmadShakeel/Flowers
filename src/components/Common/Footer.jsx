import React from "react";

function Footer() {
  return (
    <footer className="bg-[#016630] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/20">

          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-extrabold text-[#F5AD18] mb-4">
              Bloom & Blossom
            </h3>
            <p className="text-white/80 leading-relaxed">
              Bringing nature’s beauty to your special moments with fresh,
              handcrafted flower arrangements and premium services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li className="hover:text-[#F5AD18] cursor-pointer transition">Home</li>
              <li className="hover:text-[#F5AD18] cursor-pointer transition">About Us</li>
              <li className="hover:text-[#F5AD18] cursor-pointer transition">Services</li>
              <li className="hover:text-[#F5AD18] cursor-pointer transition">Shop</li>
              <li className="hover:text-[#F5AD18] cursor-pointer transition">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>Custom Bouquets</li>
              <li>Event Decoration</li>
              <li>Flower Packing</li>
              <li>Daily Flower Delivery</li>
              <li>Wedding & Banquets</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-white/80">
              <li> 123 Flower Street, Garden City</li>
              <li> +1 234 567 890</li>
              <li>support@flowerstore.com</li>
              <li> Mon – Sat: 9 AM – 8 PM</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-6 text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} Bloom & Blossom. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-[#F5AD18] cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-[#F5AD18] cursor-pointer transition">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
