'use client';

import React from 'react';
import Image from 'next/image';

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: "TAN InterVarsity Leadership Conference",
      description:
        "A rotating annual conference bringing together student leaders from various African universities with the theme: 'Africa by Africans'.",
      features: [
        "Annual rotating conference across African universities",
        "Student leadership development workshops",
        "Pan-African networking sessions",
        "Africa by Africans themed discussions",
        "Cross-university collaboration projects",
      ],
      image: "/youthleader.jpg",
      duration: "Annual",
      participants: "500+ student leaders",
    },
    {
      id: 2,
      title: "TAN Talks",
      description:
        "Like TEDx but Africa-focused, inviting industry experts, entrepreneurs, academics, and activists to discuss real-world solutions, Pan-African innovation, and inspirational stories.",
      features: [
        "Industry expert speaker sessions",
        "Entrepreneur success stories",
        "Academic research presentations",
        "Pan-African innovation showcases",
        "Real-world solution discussions",
      ],
      image: "/innovation.jpg",
      duration: "Monthly",
      participants: "1000+ per event",
    },
    {
      id: 3,
      title: "TAN Skill-Up Series",
      description:
        "Regular masterclasses and webinars covering essential professional and personal development skills for African youth.",
      features: [
        "CV building and LinkedIn optimization",
        "Public speaking skills development",
        "Business writing and proposal creation",
        "African history and global relations",
        "Skills Development (Women in carpentry, shoemaking, and other skills)",
      ],
      image: "/SkillsDevelopment.jpg",
      duration: "Weekly sessions",
      participants: "2000+ learners",
    },
    {
      id: 4,
      title: "TAN Community Builders Project",
      description:
        "An initiative focused on regularly giving back to society through community development and service projects across Africa.",
      features: [
        "Regular community service projects",
        "Local impact initiatives",
        "Volunteer coordination programs",
        "Community needs assessment",
        "Social impact measurement",
      ],
      image: "/sustainable.jpg",
      duration: "Ongoing",
      participants: "500+ volunteers",
    },
    {
      id: 5,
      title: "TAN Mentorship Network",
      description:
        "Pairing students with professionals across different industries in Africa, while encouraging peer mentorship between senior and junior students.",
      features: [
        "Professional-student mentorship matching",
        "Cross-industry mentor network",
        "Peer mentorship programs",
        "Senior-junior student connections",
        "Career guidance and development",
      ],
      image: "/crossborder.jpg",
      duration: "6-12 months",
      participants: "1000+ mentorship pairs",
    },
    {
      id: 6,
      title: "TAN Industry Access Pathways",
      description:
        "A dynamic program connecting students with professionals in key economic sectors through immersion, collaboration, and networking opportunities.",
      features: [
        "Industry immersion days",
        "Collaborative improvement dialogues",
        "Internship and shadowing opportunities",
        "Sector-focused networking forums",
        "Professional pathway guidance",
      ],
      image: "/KnowledgeSharing.jpg",
      duration: "Ongoing",
      participants: "Unlimited access",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Our Strategic Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              TAN&apos;s comprehensive suite of programs is designed to empower
              African youth through targeted interventions that address key
              development challenges while building sustainable capacity for
              long-term impact.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                <div
                  className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-brand-green-600 font-bold text-lg">
                          {program.id}
                        </span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        {program.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-brand-green-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Duration: {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-brand-green-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="text-gray-600">
                        {program.participants}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Key Features:
                    </h3>
                    <ul className="space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 bg-brand-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg
                              className="w-3 h-3 text-brand-green-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-600 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Image
                    src={program.image}
                    alt={`${program.title} - TAN program illustration`}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
