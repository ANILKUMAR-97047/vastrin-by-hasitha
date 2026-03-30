import React from "react";

export default function SubFooter() {
  const features = [
    {
      title: "Made in India",
      desc: "Our Products truly Made in India",
      icon: (
        <div className="w-8 h-8 relative overflow-hidden shrink-0">
          <div className="w-7 h-6 left-[2.83px] top-[5.67px] absolute outline outline-2 outline-offset-[-1px] outline-white rounded-[1px]" />
        </div>
      ),
    },
    {
      title: "Free Delivery",
      desc: "Get free delivery on all orders.",
      icon: (
        <div className="w-8 h-8 relative overflow-hidden shrink-0">
          <div className="w-8 h-7 left-[1.42px] top-[2.83px] absolute bg-white rounded-[1px]" />
        </div>
      ),
    },
    {
      title: "Easy Returns",
      desc: "Shop confidently with easy returns.",
      icon: (
        <div className="w-8 h-8 relative overflow-hidden shrink-0">
          <div className="w-7 h-7 left-[2.13px] top-[2.13px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white rounded-[2px]" />
          <div className="w-3 h-2.5 left-[19.13px] top-[6.37px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white rounded-[1px]" />
        </div>
      ),
    },
    {
      title: "Support",
      desc: "Enjoy the best support.",
      icon: (
        <div className="w-8 h-8 relative overflow-hidden shrink-0">
          <div className="w-8 h-8 left-[1.06px] top-[1.06px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white rounded-[2px]" />
        </div>
      ),
    },
    {
      title: "Secure Payments",
      desc: "Secure payments and support.",
      icon: (
        <div className="w-8 h-8 relative overflow-hidden shrink-0">
          <div className="w-7 h-7 left-[5.67px] top-[1.42px] absolute bg-white rounded-[2px]" />
        </div>
      ),
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
            {feature.icon}
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