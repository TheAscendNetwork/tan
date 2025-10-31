"use client";
import React from "react";
import Image from "next/image";
import Event1 from "../../../public/launchimage.jpg";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "The Ascend Network Launch",
      description:
        "Join us for the grand launch of The Ascend Network — a day to Transcend, Aspire, and Network with some of the most inspiring minds.",
      image: Event1,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-emerald-50 to-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest News & Events
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-3"></div>
        </div>

        {/* News Items */}
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-md ring-1 ring-emerald-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain transition-all duration-700 ease-in-out"
                  unoptimized
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
