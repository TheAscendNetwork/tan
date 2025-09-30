'use client';

import React from 'react';
import Image from 'next/image';
import TanCeo from '../../../public/TanCeo.jpg';

export default function Team() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Meet Our <span className="text-emerald-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The visionary leaders and dedicated team members driving The Ascend Network&rsquo;s mission to empower African youth across the continent.
            </p>
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
                    Kwabena Sarfo Kantanka is the founder of The Ascend Network, a pan-African student initiative focused on leadership, innovation, and continental transformation. Kwabena is driven by a deep belief that Africa&rsquo;s future lies in the hands of its youth—and that students, when empowered with the right tools, intentional networking, and a supportive community, can become architects of lasting change.
                  </p>
                  <p>
                    With a strong passion for personal growth, strategic collaboration, and purposeful impact, Kwabena created TAN to bridge the gap between academic life and real-world leadership. His goal is to build a vibrant network of students across Africa who are ready to rise, connect, and co-create solutions for the continent&rsquo;s most pressing challenges.
                  </p>
                  <p>
                    Through TAN, Kwabena continues to champion a new generation of thinkers and doers—students who aspire not just to succeed, but to lead with meaning, influence, and legacy.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <Image
                src={TanCeo}
                alt="Kwabena Sarfo Kantanka, Founder and Lead of The Ascend Network"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Co-founders Section - Placeholder for future content */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Co-founders &amp; Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated leaders working alongside our founder to drive TAN&rsquo;s mission across Africa.
            </p>
          </div>
          
          {/* Placeholder for co-founders */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <p className="text-lg text-gray-600">
                Co-founder profiles coming soon. Stay tuned to meet the amazing leaders who are part of The Ascend Network&rsquo;s journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}