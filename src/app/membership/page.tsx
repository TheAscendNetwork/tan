'use client';

import React from 'react';
import Link from 'next/link';

export default function Membership() {
  const membershipBenefits = [
    {
      title: "Network Access",
      description: "Connect with like-minded students and professionals across all 54 African countries",
      icon: "🌍"
    },
    {
      title: "Leadership Development",
      description: "Access to exclusive leadership training programs and workshops",
      icon: "👑"
    },
    {
      title: "Mentorship Opportunities",
      description: "Get paired with industry professionals and senior students for guidance",
      icon: "🤝"
    },
    {
      title: "Skills Training",
      description: "Participate in our Skill-Up Series covering professional and technical skills",
      icon: "📚"
    },
    {
      title: "Industry Access",
      description: "Connect directly with professionals in key economic sectors across Africa",
      icon: "🏢"
    },
    {
      title: "Community Impact",
      description: "Join our Community Builders Project and make a difference in society",
      icon: "❤️"
    }
  ];

  const requirements = [
    "Must be a current student at any African university or institution",
    "Demonstrated passion for personal growth and leadership",
    "Commitment to making a positive impact in your community",
    "Willingness to actively participate in network activities",
    "Alignment with TAN's values of transformation, aspiration, and networking"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Join The <span className="text-emerald-600">Network</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Ascend Network welcomes students who are passionate about personal growth, leadership, innovation, and making a positive impact in their communities and on the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Why Join TAN?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Become part of a transformative movement that empowers African youth to rise beyond limitations and lead lives of meaning, influence, and legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Requirements */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Membership Requirements
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We welcome students who share our vision and commitment to African development and youth empowerment.
                </p>
              </div>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex-shrink-0 text-emerald-600 mt-0.5">✓</div>
                    <p className="text-gray-700 leading-relaxed">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Ready to Join?</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Take the first step towards transforming your future and contributing to Africa&rsquo;s development.
              </p>
              
              <div className="space-y-4">
                <Link 
                  href="https://whatsapp.com/channel/0029VbB5XVLHgZWan9Mb4I2X" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                >
                  Join Our WhatsApp Channel
                </Link>
                
                <Link 
                  href="/contact"
                  className="block w-full bg-slate-100 hover:bg-slate-200 text-gray-900 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                >
                  Contact Us for More Info
                </Link>
              </div>
              
              <p className="text-sm text-gray-500 text-center">
                Join our growing community of African student leaders making a difference across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Transform. Aspire. Network.
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Your journey towards meaningful impact and continental transformation starts here. Join thousands of African students who are already part of the movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="https://whatsapp.com/channel/0029VbB5XVLHgZWan9Mb4I2X" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Learn More About TAN
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
