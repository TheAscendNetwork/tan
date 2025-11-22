"use client";

import React from "react";
import Image from "next/image";

// Define image data with aspect ratio or span classes
const imagesData = [
  {
    src: "/gallery/img1.jpg",
    alt: "Event photo 1",
    span: "md:col-span-2 md:row-span-2",
  }, // Large feature image
  {
    src: "/gallery/img2.jpg",
    alt: "Event photo 2",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/gallery/img3.jpg",
    alt: "Event photo 3",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/gallery/img4.jpg",
    alt: "Event photo 4",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/gallery/img5.jpg",
    alt: "Event photo 5",
    span: "md:col-span-2 md:row-span-1",
  }, // Wide image
  {
    src: "/gallery/img6.jpg",
    alt: "Event photo 6",
    span: "md:col-span-1 md:row-span-2",
  }, // Tall image
  {
    src: "/gallery/img7.jpg",
    alt: "Event photo 7",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/gallery/img8.jpg",
    alt: "Event photo 8",
    span: "md:col-span-1 md:row-span-1",
  },
  // NOTE: You must have more images for the masonry layout to work well.
];

export default function GalleryPage() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-7 lg:mb-20 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
          In Frame: The Ascend Network
        </h2>
    
      </div>

      {/* Gallery Grid: Enhanced Masonry-style Layout */}
      <div
        className="
          max-w-7xl mx-auto 
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          auto-rows-[250px] gap-6 lg:gap-8
        "
      >
        {imagesData.map((item, index) => (
          <div
            key={index}
            // Use item.span for dynamic sizing (masonry effect)
            className={`
              ${item.span || "md:col-span-1 md:row-span-1"} 
              group relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl
              cursor-pointer transform hover:z-10 transition-all duration-500 ease-out
            `}
          >
            {/* Image Container with layout="fill" for optimization */}
            <Image
              src={item.src}
              alt={item.alt}
              // width and height are removed when using layout="fill"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="
                w-full h-full object-cover
                transition-transform duration-700 group-hover:scale-110 
                group-hover:rotate-1
              "
              priority={index < 3} // Load first few images faster
            />

            {/* Interactive Overlay: Darkens and reveals title on hover */}
            <div
              className="
                absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 
                group-hover:opacity-100 transition-opacity duration-500
                flex flex-col items-center justify-center p-4 text-center
              "
            >
              <span className="text-white text-2xl font-bold tracking-wide">
                View Detail
              </span>
              <p className="text-white/80 text-sm mt-1">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
