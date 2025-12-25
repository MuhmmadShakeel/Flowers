import React from "react";

function FlowerPacking() {
  const packingOptions = [
    {
      id: 1,
      title: "Wraps & Sleeves",
      description:
        "Elegant paper wraps and premium sleeves designed to enhance the beauty of every bouquet while keeping flowers protected and fresh.",
      image:
        "https://cdn.shopify.com/s/files/1/0629/5283/3217/files/8_883dd45a-90dd-4e23-8d65-8f29a87156e2_480x480.jpg?v=1691986401",
    },
    {
      id: 2,
      title: "Boxes & Hampers",
      description:
        "Luxury flower boxes and hampers crafted for gifting, celebrations, and special occasions with a premium presentation.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2020/11/WX/IY/MA/3847977/floral-blissful-box-dottedi.jpg",
    },
    {
      id: 3,
      title: "Water-Reservoir Containers",
      description:
        "Innovative water-reservoir containers that keep flowers hydrated during transport, ensuring long-lasting freshness.",
      image:
        "https://www.sirane.com/wp-content/uploads/2021/08/FlowerFreshPouches.jpg",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-extrabold text-[#016630] mb-6">
          Professional Flower Packing
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-14 text-lg">
          We use premium packing solutions to preserve freshness, enhance presentation,
          and deliver flowers with elegance and care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packingOptions.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-[#016630] rounded-2xl overflow-hidden shadow-lg group"
              data-aos="fade-up"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:shadow-2xl transition duration-500   hover:scale-105"
                />
              </div>

              <div className="flex flex-col p-6 text-left">
                <h3 className="text-2xl font-bold text-[#F5AD18] mb-3">
                  {item.title}
                </h3>
                <p className="text-white text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FlowerPacking;
