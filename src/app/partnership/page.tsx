'use client';

import React from 'react';

export default function Partnership() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Our <span className="text-rose-600">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Strategic alliances and collaborations that amplify our impact across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships Content - Placeholder */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Building Strategic Alliances
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe in the power of collaboration. Our partnerships span across industries, institutions, and organizations that share our vision for African youth empowerment.
            </p>
          </div>
          
          {/* Placeholder for partnerships content */}
          <div className="mt-16 text-center">
            <div className="bg-slate-50 rounded-2xl shadow-lg p-12">
              <p className="text-lg text-gray-600">
                Partnership details coming soon. We are actively building relationships with organizations, universities, and industry leaders across Africa to create meaningful opportunities for our network members.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}