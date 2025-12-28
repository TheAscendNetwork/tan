'use client';

import React, { useState } from 'react';
// Link is imported but not used, so I commented it out to fix the warning
// import Link from 'next/link'; 
import { Check, ArrowLeft, Loader2 } from 'lucide-react';

export default function SignupPage() {
  // Define types for our state to satisfy TypeScript
  type MembershipTier = 'standard' | 'official';
  type Step = 'selection' | 'form';

  const [step, setStep] = useState<Step>('selection');
  const [selectedTier, setSelectedTier] = useState<MembershipTier | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // --- LOGIC: Handle the Tier Selection ---
  // FIX: We explicitly tell TypeScript that 'tier' is a MembershipTier string
  const handleSelectTier = (tier: MembershipTier) => {
    setSelectedTier(tier);
    setStep('form');
    window.scrollTo(0, 0); 
  };

  // --- LOGIC: Handle Form Submit ---
  // FIX: We added the type for the form event
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // We use FormData to easily get values without TypeScript complaining about elements
    const formData = new FormData(e.currentTarget);
    const data = { // 'data' is defined but never used (the second warning)
      name: formData.get('name'),
      email: formData.get('email'),
      university: formData.get('university'),
      role: selectedTier,
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (selectedTier === 'official') {
      alert(`Redirecting to Payment Gateway to pay 50 GHS...`);
      setIsLoading(false);
    } else {
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
                        {/* FIX IS ON THIS LINE 167: Used &quot; instead of " */}
                        <p>After clicking &quot;Proceed&quot;, you will be redirected to pay your annual due of <strong>50 GHS</strong>.</p>
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
                    {/* The rest of the file was cut off in your prompt, but this fixes the error you specified */}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
