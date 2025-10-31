'use client';

import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import { FiMail, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <main className="bg-gradient-to-b from-white via-brand-green-50/30 to-brand-blue-50/40 text-gray-800">
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-white to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-brand-black leading-tight mb-6">
            Let’s Build <span className="text-emerald-600">Africa’s Future</span> Together
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Whether you’re a student, mentor, or partner, this is your chance to shape the next
            generation of visionary African leaders. Reach out — we’d love to connect.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white border-t border-gray-100 -mt-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              The Future Belongs to Those Who <span className="text-emerald-600">Take Initiative</span>
            </h2>
            <p className="text-lg text-gray-600">
              At <strong>The Ascend Network</strong>, we believe in empowering Africa’s youth through mentorship,
              leadership development, and global collaboration. Your voice and actions matter — together,
              we can redefine what’s possible for our continent.
            </p>
            <a
              href="https://discord.gg/DQrSBddd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 hover:shadow-emerald-200 transition-transform transform hover:-translate-y-0.5 duration-300"
            >
              Join the Movement
            </a>
          </div>

          {/* Right Side */}
          <div className="relative bg-gradient-to-br from-emerald-50 to-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-200/40 blur-3xl rounded-full" />
            <h3 className="relative text-2xl font-semibold mb-8 text-gray-900">Why Connect with TAN?</h3>
            <ul className="relative space-y-6 text-gray-700">
              {[
                { title: "Pan-African Network", desc: "Engage with change-makers and innovators from every African nation." },
                { title: "Impact-Driven Projects", desc: "Collaborate on initiatives that create measurable social transformation." },
                { title: "Mentorship & Leadership", desc: "Access guidance from influential leaders shaping Africa’s industries." },
                { title: "Career Acceleration", desc: "Find exclusive opportunities to grow, serve, and lead." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-full mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact + Social Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Let’s Connect Beyond Borders 
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with us directly — we’re always open to partnerships, collaborations, and meaningful conversations that shape Africa’s future.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-10 text-gray-700 text-lg">
            <a
              href="mailto: THEASCENDN@GMAIL"
              className="flex items-center gap-2 hover:text-emerald-600 transition"
            >
              <FiMail className="text-emerald-600" size={22} />
               THEASCENDN@GMAIL
            </a>
            <a
              href="https://www.google.com/maps/place/Accra,+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-600 transition"
            >
              <FiMapPin className="text-emerald-600" size={22} />
              Accra, Ghana
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/company/theascendnetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 rounded-full font-medium hover:bg-blue-100 transition"
            >
              <FaLinkedin className="text-blue-600" size={20} /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/the.ascendnetwork?igsh=bXllNzN5MG11cW9j&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-rose-50 text-pink-700 rounded-full font-medium hover:bg-rose-100 transition"
            >
              <FaInstagram className="text-pink-600" size={20} /> Instagram
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbB5XVLHgZWan9Mb4I2X"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-green-50 text-green-700 rounded-full font-medium hover:bg-green-100 transition"
    >
  <FaWhatsapp className="text-green-600" size={20} /> WhatsApp
</a>
            <a
              href="https://discord.gg/DQrSBddd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full font-medium hover:bg-green-100 transition"
            >
              <FaDiscord className="text-indigo-600" size={20} />Discord
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
