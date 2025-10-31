import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center">
                <span className="text-rose-600">T</span>
                <span className="text-emerald-600">A</span>
                <span className="text-rose-600">N</span>
              </h3>
              <p className="text-emerald-600 font-semibold text-lg">
                Transform. Aspire. Network.
              </p>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Empowering African youth through strategic programs, mentorship, and sustainable development initiatives across the continent.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-emerald-600 border-b-2 border-emerald-600 inline-block pb-2">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-slate-300 hover:text-emerald-600 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-slate-300 hover:text-emerald-600 transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <Link 
                href="/programs" 
                className="text-slate-300 hover:text-emerald-600 transition-colors duration-200 font-medium"
              >
                Programs
              </Link>
              <Link 
                href="/membership" 
                className="text-slate-300 hover:text-emerald-600 transition-colors duration-200 font-medium"
              >
                Membership
              </Link>
              <Link 
                href="/contact" 
                className="text-slate-300 hover:text-emerald-600 transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-emerald-600 border-b-2 border-emerald-600 inline-block pb-2">
              Connect With Us
            </h4>
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="font-medium text-white">Email</p>
                <a 
                  href="mailto:THEASCENDN@GMAIL" 
                  className="text-slate-300 hover:text-emerald-600 transition-colors duration-200 block"
                >
                  THEASCENDN@GMAIL
                </a>
              </div>
              
              <div className="space-y-3">
                <p className="font-medium text-white">Location</p>
                <p className="text-slate-300">Accra,Ghana</p>
              </div>

              <div className="space-y-4">
                <p className="font-medium text-white">Follow Us</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-emerald-600 transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-500 transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800"
                    aria-label="Discord"
                  >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.078.037c-.211.375-.444.864-.608 1.249-1.84-.276-3.68-.276-5.486 0-.164-.398-.398-.874-.61-1.249a.077.077 0 00-.078-.037 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.032.027C1.205 9.04.79 13.58 1.12 18.061a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.018.078.078 0 00.084-.027c.462-.63.875-1.294 1.226-1.993a.076.076 0 00-.041-.105c-.652-.246-1.274-.546-1.873-.892a.077.077 0 01-.008-.127c.125-.093.25-.188.368-.287a.074.074 0 01.078-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.119.1.244.195.369.288a.077.077 0 01-.007.127 12.298 12.298 0 01-1.875.891.076.076 0 00-.04.106c.36.698.773 1.362 1.225 1.993a.078.078 0 00.084.027 19.876 19.876 0 005.995-3.018.082.082 0 00.031-.056c.5-6.177-.838-10.68-3.548-13.665a.06.06 0 00-.03-.029zM8.02 15.331c-1.182 0-2.155-1.085-2.155-2.419 0-1.333.955-2.419 2.155-2.419 1.21 0 2.174 1.096 2.155 2.419 0 1.334-.955 2.419-2.155 2.419zm7.975 0c-1.182 0-2.155-1.085-2.155-2.419 0-1.333.955-2.419 2.155-2.419 1.21 0 2.174 1.096 2.155 2.419 0 1.334-.945 2.419-2.155 2.419z" />
                  </svg>
                  </a>
                  
                  
                  <a
                    href="#"
                    className="text-slate-400 hover:text-rose-600 transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} The Ascend Network. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Transforming Africa through <span className="text-emerald-600 font-medium">unity</span> and <span className="text-rose-600 font-medium">innovation</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
