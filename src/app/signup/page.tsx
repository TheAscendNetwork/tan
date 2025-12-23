'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowLeft, Loader2 } from 'lucide-react';

export default function SignupPage() {
  // State to track which screen we are on: 'selection' or 'form'
  const [step, setStep] = useState('selection');
  
  // State to track which membership they picked
  const [selectedTier, setSelectedTier] = useState(null); // 'standard' or 'official'
  
  // State for form submission loading
  const [isLoading, setIsLoading] = useState(false);

  // --- LOGIC: Handle the Tier Selection ---
  const handleSelectTier = (tier) => {
    setSelectedTier(tier);
    setStep('form');
    window.scrollTo(0, 0); // Scroll to top
  };

  // --- LOGIC: Handle Form Submit ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      university: e.target.university.value,
      role: selectedTier, // 'standard' or 'official'
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (selectedTier === 'official') {
      // TODO: Replace this with your Paystack/Flutterwave logic
      alert(`Redirecting to Payment Gateway to pay 50 GHS...`);
      setIsLoading(false);
    } else {
      // TODO: Replace this with your backend save logic
      alert(`Welcome Standard Member! Account created.`);
      setIsLoading(false);
      // router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {step === 'selection' ? 'Choose Your Path' : 'Create Your Account'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {step === 'selection' 
              ? 'Select the membership tier that fits your goals.' 
              : `You are signing up as a ${selectedTier === 'official' ? 'Official' : 'Standard'} Member`}
          </p>
        </div>

        {/* --- STEP 1: SELECTION VIEW --- */}
        {step === 'selection' && (
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            
            {/* Standard Card */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900">Standard Member</h3>
              <p className="mt-2 text-gray-500">Join the network and access basic resources.</p>
              <p className="my-6 text-4xl font-bold text-gray-900">Free</p>
              
              <ul className="space-y-3 mb-8">
                {['Network Access', 'Basic Events', 'Newsletter'].map((feat) => (
                  <li key={feat} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-emerald-500 mr-2" /> {feat}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSelectTier('standard')}
                className="w-full py-3 px-4 border-2 border-emerald-600 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-colors"
              >
                Join for Free
              </button>
            </div>

            {/* Official Card */}
            <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 relative shadow-xl transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                RECOMMENDED
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Official Member</h3>
              <p className="mt-2 text-gray-500">Full access to leadership training & mentors.</p>
              <div className="my-6">
                <p className="text-4xl font-bold text-gray-900">50 GHS</p>
                <p className="text-sm text-gray-500">per year</p>
              </div>

              <ul className="space-y-3 mb-8">
                {['Everything in Standard', 'Exclusive Workshops', 'Mentorship Program', 'Voting Rights'].map((feat) => (
                  <li key={feat} className="flex items-center text-gray-700 font-medium">
                    <Check className="w-5 h-5 text-emerald-600 mr-2" /> {feat}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSelectTier('official')}
                className="w-full py-3 px-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-md"
              >
                Join & Pay
              </button>
            </div>
          </div>
        )}

        {/* --- STEP 2: FORM VIEW --- */}
        {step === 'form' && (
          <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-gray-100 max-w-md mx-auto">
            
            <button 
              onClick={() => setStep('selection')} 
              className="flex items-center text-sm text-gray-500 hover:text-emerald-600 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Change Plan
            </button>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1">
                  <input name="name" type="text" required className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <div className="mt-1">
                  <input name="email" type="email" required className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                <div className="mt-1">
                  <input name="Phone Number" type="text" required className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">University / Institution</label>
                <div className="mt-1">
                  <input name="university" type="text" required className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                </div>
              </div>

              {/* Payment Notice for Official Members */}
              {selectedTier === 'official' && (
                <div className="rounded-lg bg-emerald-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-emerald-800">Payment Required</h3>
                      <div className="mt-2 text-sm text-emerald-700">
                        <p>After clicking "Proceed", you will be redirected to pay your annual due of <strong>50 GHS</strong>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                      Processing...
                    </>
                  ) : (
                    selectedTier === 'official' ? 'Proceed to Payment' : 'Create Account'
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}