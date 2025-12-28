'use client';

import React from 'react';
import Link from 'next/link';
import {
  Globe,
  Crown,
  Handshake,
  BookOpen,
  Briefcase,
  HeartHandshake,
  UserPlus,
  CheckCircle
} from 'lucide-react';

export default function Membership() {
  const membershipBenefits = [
    {
      title: "Network Access",
      description:
        "Connect with like-minded students and professionals across all 54 African countries",
      icon: Globe
    },
    {
      title: "Leadership Development",
      description:
        "Access to exclusive leadership training programs and workshops",
      icon: Crown
    },
    {
      title: "Mentorship Opportunities",
      description:
        "Get paired with industry professionals and senior students for guidance",
      icon: Handshake
    },
    {
      title: "Skills Training",
      description:
        "Participate in our Skill-Up Series covering professional and technical skills",
      icon: BookOpen
    },
    {
      title: "Industry Access",
      description:
        "Connect directly with professionals in key economic sectors across Africa",
      icon: Briefcase
    },
    {
      title: "Community Impact",
      description:
        "Join our Community Builders Project and make a difference in society",
      icon: HeartHandshake
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Join The <span className="text-emerald-600">Network</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The Ascend Network welcomes students who are passionate about personal
            growth, leadership, innovation, and making a positive impact in their
            communities and on the continent.
          </p>
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
              Become part of a transformative movement that empowers African youth
              to rise beyond limitations and lead lives of meaning, influence,
              and legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-slate-50 rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <benefit.icon className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Requirements */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Membership Requirements
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We welcome students who share our vision and commitment to
                  African development and youth empowerment.
                </p>
              </div>

              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{req}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Ready to Join?
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Take the first step towards transforming your future and
                contributing to Africa&rsquo;s development.
              </p>

              <div className="space-y-3">
                <Link
                  href="/signup"
                  className="group relative flex items-center justify-center w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  <UserPlus className="w-5 h-5 mr-2 opacity-90" />
                  Become a Member
                  <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
                </Link>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-400 font-medium tracking-wider">
                      Or join our community
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="https://discord.gg/DQrSBddd"
                    target="_blank"
                    className="flex items-center justify-center bg-[#5865F2] hover:bg-[#4752c4] text-white font-semibold py-3 rounded-lg text-sm transition-colors"
                  >
                    Discord
                  </Link>
                  <Link
                    href="https://whatsapp.com/channel/0029VbB5XVLHgZWan9Mb4I2X"
                    target="_blank"
                    className="flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 rounded-lg text-sm transition-colors"
                  >
                    WhatsApp
                  </Link>
                </div>

                <Link
                  href="/contact"
                  className="block w-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-medium py-3 rounded-lg text-center text-sm transition-colors"
                >
                  Contact Us for More Info
                </Link>
              </div>

              <p className="text-xs text-slate-400 text-center pt-2">
                Already a member?{" "}
                <Link href="/login" className="text-emerald-600 hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Transform. Aspire. Network.
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Your journey towards meaningful impact and continental
            transformation starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-white text-emerald-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Get Started Today
            </Link>
            <Link
              href="/about"
              className="border-2 border-white py-3 px-8 rounded-lg hover:bg-white hover:text-emerald-600 transition"
            >
              Learn More About TAN
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
