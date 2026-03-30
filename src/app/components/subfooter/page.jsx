import React from "react";

export default function SubFooter() {
  const features = [
    {
      title: "Made in India",
      desc: "Our Products truly Made in India",
      icon: '/images/logos/heart.svg',
    },
    {
      title: "Free Delivery",
      desc: "Get free delivery on all orders.",
      icon: '/images/logos/transport.svg',
    },
    {
      title: "Easy Returns",
      desc: "Shop confidently with easy returns.",
      icon: '/images/logos/hand.svg',
    },
    {
      title: "Support",
      desc: "Enjoy the best support.",
      icon: '/images/logos/chat.svg',
    },
    {
      title: "Secure Payments",
      desc: "Secure payments and support.",
      icon: '/images/logos/secure.svg',
    },
  ];

  return (
    <div className="w-full bg-rose-400 border-y border-stone-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-20">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-1.5 w-32 sm:w-40"
          >
            <img src={feature.icon} alt={feature.title} />
            <div className="text-white text-sm font-semibold font-['Inknut_Antiqua'] leading-4">
              {feature.title}
            </div>
            <div className="text-white text-[10px] sm:text-xs font-normal font-['Inknut_Antiqua'] leading-normal">
              {feature.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}