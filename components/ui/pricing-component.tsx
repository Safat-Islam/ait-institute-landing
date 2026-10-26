import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const plans = [
    {
      name: "Free Starter",
      price: "0 TK",
      description: "For beginners starting their journey",
      features: [
        "Access to Class 01 Fundamentals",
        "Free AI Automation starter cheatsheets",
        "Access to community Telegram / Facebook group",
        "Weekly newsletter & algorithm updates",
        "Standard community forum support"
      ],
      cta: "Get Started Free",
      highlighted: false
    },
    {
      name: "Full Automation Program",
      price: isAnnual ? "7,500 TK" : "8,200 TK",
      description: "Our complete 20-module flagship program",
      features: [
        "All 20 comprehensive modules from A to Z",
        "12 Months continuous Live Trainer Support",
        "1:1 Live doubt resolution sessions",
        "Proprietary AI Prompts & Script Library",
        "Premiere Pro & CapCut viral editing presets",
        "Opportunity to be hired for in-house channels",
        "Verified Professional Freelancer Certificate"
      ],
      cta: "Enroll Now",
      highlighted: true
    },
    {
      name: "VIP 1:1 Mentorship",
      price: "50,000 TK",
      description: "Direct channel incubation with founder",
      features: [
        "Everything included in Full Automation Program",
        "1-on-1 personal channel incubation & blueprint",
        "Custom niche selection & competition validation",
        "Direct review of your first 10 scripts & thumbnails",
        "Direct private WhatsApp & weekly Zoom hotline",
        "Guaranteed in-house project contracts & revenue share"
      ],
      cta: "Apply for VIP",
      highlighted: false
    }
  ];

  return (
    <div className="bg-white dark:bg-black py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-3">
            Investment & Plans
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-4 tracking-tight">
            Plans and Pricing
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Choose the right track for your AI automation journey and start building real digital assets.
          </p>

          <div className="inline-flex items-center bg-black/[0.04] dark:bg-white/[0.06] rounded-full p-1.5 border border-black/5 dark:border-white/10">
            <button
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${!isAnnual
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              onClick={() => setIsAnnual(false)}
            >
              Standard Batch
            </button>
            <button
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${isAnnual
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/25'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              onClick={() => setIsAnnual(true)}
            >
              Early Bird (Save 700 TK)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border flex flex-col justify-between ${plan.highlighted
                  ? 'border-purple-500/40 bg-gradient-to-b from-purple-500/[0.06] to-transparent dark:from-purple-500/[0.12] scale-[1.03] shadow-2xl shadow-purple-500/15 ring-2 ring-purple-500/30'
                  : 'border-black/[0.08] dark:border-white/[0.08] bg-black/[0.01] dark:bg-white/[0.02] hover:border-purple-500/30'
                } p-8 transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-[4px]" />
                    <div className="relative px-4 py-1.5 bg-purple-600 text-white rounded-full text-xs font-bold tracking-wider uppercase shadow-md shadow-purple-500/30 flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      {plan.price === "0 TK" ? "Free" : "One-Time"}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">{plan.description}</p>
                </div>

                <div className="space-y-3.5 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full p-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full py-3.5 px-5 rounded-2xl text-sm font-bold transition-all shadow-sm ${plan.highlighted
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/35 hover:-translate-y-0.5'
                    : 'border border-black/10 dark:border-white/15 text-black dark:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
