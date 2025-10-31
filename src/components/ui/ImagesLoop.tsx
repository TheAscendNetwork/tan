"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Tan1 from "../../../public/TanM.jpg";
import Tan2 from "../../../public/Tan2.jpg";
import Tan3 from "../../../public/Tan3.jpg";
import Tan4 from "../../../public/Tan.jpg";
import Tan5 from "../../../public/TanM.jpg";
import Link from "next/link";


const ImagesLoop = () => {
  const [currentIndex, setCurrentIndex] = useState(3);
  const images = [Tan1, Tan2, Tan3, Tan4, Tan5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // slowed down for a smoother UX
    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);

  return (
    <section className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Carousel */}
        <div className="relative flex justify-center">
          <div className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-emerald-100">
            <Image
              src={images[currentIndex]}
              alt="The Ascend Network"
              className="object-cover w-full h-full transition-all duration-700 ease-in-out"
              priority
            />
          </div>

          {/* Small dot indicators */}
          <div className="absolute bottom-4 flex gap-2 justify-center w-full">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  idx === currentIndex ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-gray-900 leading-snug">
            The Ascend Network 🌍
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Welcomes students who are passionate about personal growth, leadership, innovation, and making a positive impact in their communities and on the continent
            
          </p>
          <Link 
  href="https://discord.gg/DQrSBddd" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg transition duration-300">
    Join the Network
  </button>
</Link>

          
        </div>
      </div>
    </section>
  );
};

export default ImagesLoop;
