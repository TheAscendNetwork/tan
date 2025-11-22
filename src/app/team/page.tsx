"use client";

import React from "react";
import Image from "next/image";
import PatronImage from "../../../public/Patron.jpg"; // replace with actual
import TanCeo from "../../../public/TanCeo.jpg"; // founder
import Sitso from "../../../public/Sitso.jpeg"; // Sitso
import David from "../../../public/David.jpg"; // David

export default function Team() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Meet Our <span className="text-emerald-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The visionary leaders and dedicated team members driving The
              Ascend Network’s mission to empower African youth across the
              continent.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 lg:py-15 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-x-8 lg:gap-x-12 items-center">
            <div>
              <Image
                src={PatronImage}
                alt="Madam Aba Amoa, Patron of The Ascend Network"
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
            <div>
              <div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Madam Aba Amoa
                  </h2>
                  <p className="text-xl font-semibold text-emerald-600">
                    Patron
                  </p>
                </div>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    With over 18 years of experience in real estate and
                    facilities management, our Patron is the CEO of BDZ
                    Properties Limited in Ghana. A certified Valuation and
                    Estate Surveyor and member of the Ghana Institution of
                    Surveyors (MGhIS), she specializes in sustainable and green
                    building solutions, and is also a member of the
                    International Facility Management Association (IFMA).
                    Renowned as a leader, mentor, and trainer, she is deeply
                    committed to creating positive impact in communities and
                    empowering individuals through her work and guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Kwabena Sarfo Kantanka
                  </h2>
                  <p className="text-xl font-semibold text-emerald-600">
                    Founder and Lead
                  </p>
                </div>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Kwabena Sarfo Kantanka is the founder of The Ascend Network,
                    a pan African student initiative that promotes leadership,
                    innovation, and positive change. He believes Africa’s
                    progress depends on empowering young people with the skills,
                    connections, and support they need to lead effectively.
                    Driven by a passion for personal growth and collaboration,
                    he created TAN to connect academic learning with real
                    leadership opportunities and to build a strong community of
                    students across the continent. Through this work, he
                    continues to inspire a new generation of young people who
                    aim to create meaningful impact and lasting progress for
                    Africa.
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 text-center">
                <p className="text-xl lg:text-2xl font-serif italic text-gray-700">
                  &quot;The future belongs to those who prepare for it
                  today&quot;
                </p>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <Image
                src={TanCeo}
                alt="Kwabena Sarfo Kantanka, Founder and Lead of The Ascend Network"
                width={300}
                height={300}
                className="rounded-2xl shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team / Co-founders Section */}
      <section className="py-20 bg-white">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet the dedicated team members supporting the vision of The Ascend
            Network.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 justify-items-center">
          {/* Member 1 */}
          <div className="flex flex-col items-center max-w-xs w-full">
            {/* Image card */}
            <div className="w-full aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={Sitso}
                alt="Sitso, Co-founder"
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            {/* Separate caption */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Dennis Sitsofe Kwame Lagble
              </h3>
              <p className="text-gray-600">Co-founder</p>
            </div>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center max-w-xs w-full">
            <div className="w-full aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={David}
                alt="David, Co-founder"
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {" "}
                Mgbonyebi David Mudiagakoghene Ovie
              </h3>
              <p className="text-gray-600">Co-founder</p>
            </div>
          </div>

          {/* Add more members here in the same pattern */}
        </div>
      </section>
    </div>
  );
}
