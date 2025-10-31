'use client';

import React from 'react';

export default function Programs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
              Our Strategic Programs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
              TAN&apos;s objectives are designed to create measurable impact across multiple dimensions of African development.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">

            {/* Program 1 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                <span className="text-emerald-600 font-bold text-xs sm:text-sm">1</span>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  TAN InterVarsity Leadership Conference
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  A rotating annual conference bringing together student leaders from various African universities. Themes: “Africa by Africans”
                </p>
              </div>
            </div>

            {/* Program 2 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                <span className="text-emerald-600 font-bold text-xs sm:text-sm">2</span>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  TAN Talks (Like TEDx but Africa-focused)
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Invite industry experts, entrepreneurs, academics, and activists to discuss matters of the future, focusing on real-world solutions, Pan-African innovation, and inspirational stories.
                </p>
              </div>
            </div>

            {/* Program 3 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                <span className="text-emerald-600 font-bold text-xs sm:text-sm">3</span>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  TAN Skill-Up Series
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Regular masterclasses and webinars on:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-slate-500 leading-relaxed space-y-1">
                  <li>CV building, LinkedIn optimization</li>
                  <li>Public speaking skills</li>
                  <li>Business writing, proposal creation</li>
                  <li>African history and global relations</li>
                </ul>
              </div>
            </div>

            {/* Program 4 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                <span className="text-rose-600 font-bold text-xs sm:text-sm">4</span>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  TAN Community Builders Project
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  An act of regularly giving back to society.
                </p>
              </div>
            </div>

            {/* Program 5 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                <span className="text-rose-600 font-bold text-xs sm:text-sm">5</span>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  TAN Mentorship Network
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Pair students with professionals across different industries in Africa. It would also encourage peer mentorship: senior students mentoring juniors across Africa.
                </p>
              </div>
            </div>

            {/* Program 6 */}
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                <span className="text-rose-600 font-bold text-xs sm:text-sm">6</span>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  TAN Industry Access Pathways
                </h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  A dynamic program to connect students with professionals in key economic sectors through:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-slate-500 leading-relaxed space-y-1">
                  <li>Industry immersion days</li>
                  <li>Collaborative improvement dialogues</li>
                  <li>Internship and shadowing opportunities</li>
                  <li>Sector-focused networking forums</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
