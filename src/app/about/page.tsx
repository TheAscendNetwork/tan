'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import LoadingSkeleton from '../../components/ui/LoadingSkeleton';
import Tan from '../../../public/TanM.jpg';
import TanCeo from '../../../public/TanCeo.jpg';

// Dynamic import for Card component
const Card = dynamic(() => import('../../components/Card'), {
  loading: () => <LoadingSkeleton type="card" />,
  ssr: true
});

// Since this is a client component, we can't export metadata directly
// The metadata would be handled in layout.tsx or a separate metadata file

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Executive Summary Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-10 sm:space-y-15 lg:space-y-18 mb-12 sm:mb-19 lg:mb-25">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                About <span className="text-emerald-600">The Ascend Network</span>
              </h1>
              <p className="text-base sm:text-md md:text-lg text-slate-500 leading-relaxed max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-0">
                A Pan-African platform committed to transforming the continent through youth empowerment, strategic networking, and sustainable development initiatives.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">Executive Summary</h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed">
                <p>
                  The Network will serve as a leadership and empowerment hub for students committed to personal growth, academic excellence, community service, and purposeful collaboration. Beyond academic and leadership development, TAN aims to create a generational movement of students and youth who are prepared to make meaningful contributions to Africa&rsquo;s long-term growth and transformation.
                </p>
                <p>
                  By fostering strategic partnerships across key industries such as real estate, natural resource extraction, finance, engineering, agro-processing, technology, health, education, manufacturing, logistics, tourism, and green energy, TAN will provide direct access for its members to engage with leaders and innovators shaping Africa&rsquo;s future.
                </p>
                <p>
                  This platform will allow students not only to learn from these sectors but also to co-create sustainable solutions alongside industry professionals.
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <Image
                src= {Tan}
                alt="TAN team members collaborating on African development initiatives"
                width={500}
                height={400}
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Objectives */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {/* Name and Slogan */}
            <div className="text-center space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="text-rose-600">The Ascend Network</span>
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-600">Transform. Aspire. Network.</p>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
                Our name reflects our core belief that every African youth has the potential to ascend to greater heights, transforming themselves, their communities, and the continent as a whole.
              </p>
            </div>

            {/* Vision, Mission, Objectives Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              <Card className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 h-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Vision</h3>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    To empower Africa&rsquo;s youth to rise beyond personal and societal limitations, unlocking their potential to lead lives of meaning, purpose, and legacy. TAN envisions a generation of bold thinkers and change-makers who influence communities, inspire innovation, and drive sustainable transformation across the continent.
                  </p>
                </div>
              </Card>

              <Card className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 h-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Mission</h3>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    To cultivate Africa&rsquo;s next generation of visionary leaders through intentional networking, academic excellence, and professional development. We are committed to nurturing integrity, innovation, and collaboration among young Africans—uniting them toward the shared goal of continental growth and global impact.
                  </p>
                </div>
              </Card>

              <Card className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 h-full sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Objectives</h3>
                  <div className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    <p className="mb-3">To achieve this mission, TAN focuses on six key pillars:</p>
                    <ul className="space-y-2 text-left">
                      <li>• <strong>Network and Collaborations</strong> – building strong professional and peer connections.</li>
                      <li>• <strong>Academic and Intellectual Excellence</strong> – promoting research, learning, and innovation.</li>
                      <li>• <strong>Professional and Corporate Readiness</strong> – preparing members for career excellence.</li>

                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives Detail */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            <div className="text-center space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Our Strategic Objectives</h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-0">
                TAN&apos;s objectives are designed to create measurable impact across multiple dimensions of African development.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-emerald-600 font-bold text-xs sm:text-sm">1</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Youth Leadership Development</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Cultivate a new generation of African leaders through comprehensive leadership training, mentorship programs, and practical experience opportunities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-emerald-600 font-bold text-xs sm:text-sm">2</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Cross-Border Networking</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Facilitate meaningful connections between African youth across different countries, sectors, and disciplines to foster continental integration.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-emerald-600 font-bold text-xs sm:text-sm">3</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Innovation & Entrepreneurship</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Support innovative solutions to African challenges through incubation programs, funding opportunities, and technology transfer initiatives.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-rose-600 font-bold text-xs sm:text-sm">4</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Sustainable Development</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Promote environmentally conscious and economically viable development projects that create lasting positive impact in communities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-rose-600 font-bold text-xs sm:text-sm">5</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Capacity Building</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Develop technical, professional, and life skills that enable African youth to compete globally while addressing local challenges effectively.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-rose-600 font-bold text-xs sm:text-sm">6</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Knowledge Sharing</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Create platforms for sharing best practices, research findings, and innovative solutions across the African continent and beyond.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UN SDGs Alignment Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Alignment with the <span className="text-emerald-600">United Nations</span>
                <br />
                <span className="text-rose-600">Sustainable Development Goals</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-0">
                The Ascend Network aligns its vision with the UN&rsquo;s 2030 Agenda for Sustainable Development to ensure that our leadership and empowerment programs actively contribute to global progress and create meaningful impact across Africa and beyond.
              </p>
            </div>

            {/* SDGs Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* SDG 4 */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="text-slate-600 font-bold text-sm">IV</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black">Quality Education</h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Through our <strong>Skill-Up Series</strong>, <strong>Mentorship Network</strong>, and academic development programs, we ensure accessible, quality education and promote lifelong learning opportunities for African youth.
                </p>
              </div>

              {/* SDG 8 */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="text-slate-600 font-bold text-sm">VIII</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black">Decent Work and Economic Growth</h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Our <strong>Industry Access Pathways</strong> and entrepreneurship training create employment opportunities and promote economic growth through skills development and professional readiness programs.
                </p>
              </div>

              {/* SDG 9 */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="text-slate-600 font-bold text-sm">IX</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black">Industry, Innovation and Infrastructure</h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Through <strong>TAN Talks</strong> and industry partnerships, we foster innovation, promote technological advancement, and build resilient infrastructure for sustainable development.
                </p>
              </div>

              {/* SDG 10 */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="text-slate-600 font-bold text-sm">X</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black">Reduced Inequalities</h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Our inclusive membership model and commitment to gender equality in leadership ensure equal opportunities for all African youth, regardless of background or circumstances.
                </p>
              </div>

              {/* SDG 11 */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="text-slate-600 font-bold text-sm">XI</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black">Sustainable Cities and Communities</h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  The <strong>TAN Community Builders Project</strong> promotes sustainable community development through local impact initiatives that create lasting positive change.
                </p>
              </div>

              {/* SDG 13 */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="text-slate-600 font-bold text-sm">XIII</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black">Climate Action</h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Through strategic collaborations with green energy and sustainable sectors, we promote climate-conscious solutions and environmental stewardship across Africa.
                </p>
              </div>

              {/* SDG 17 - spanning full width */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="text-slate-600 font-bold text-sm">XVII</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-black">Partnerships for the Goals</h3>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  TAN fosters multi-sector collaborations with universities, NGOs, and corporates across Africa, creating a network of partnerships that amplify our collective impact toward achieving all SDGs.
                </p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center space-y-6 bg-gradient-to-br from-emerald-50 to-rose-50 rounded-2xl p-8 sm:p-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
                Shaping Africa&rsquo;s Future Leaders
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Through our unwavering commitment to the UN Sustainable Development Goals, The Ascend Network is shaping young Africans into visionary leaders who drive sustainable change and help Africa rise in harmony with the global development agenda. Together, we are not just building careers—we are building a better world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
