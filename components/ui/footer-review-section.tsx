"use client";

import * as React from "react";
import { 
  Star,
  CheckCircle2, 
  ArrowUpRight, 
  MessageSquare, 
  Youtube, 
  Facebook, 
  Send, 
  Mail, 
  Phone, 
  MapPin,
  ShieldCheck
} from "lucide-react";

interface SimpleReview {
  id: number;
  name: string;
  role: string;
  batch: string;
  avatar: string;
  highlight: string;
  content: string;
}

const REVIEWS: SimpleReview[] = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    role: "Faceless Creator",
    batch: "Batch 14",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    highlight: "Monetized in 28 Days",
    content: "The secret software stack and thumbnail psychology completely changed my approach. My first channel got monetized in just 28 days with zero prior video editing experience.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Content Creator",
    batch: "Batch 12",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    highlight: "128K Subscribers",
    content: "Module 6 & 7 on voice cloning and AI b-roll saved me over 15 hours a week. AIT Institute provides real, working channel blueprints rather than theoretical fluff.",
  },
  {
    id: 3,
    name: "Sabbir Hossain",
    role: "Full-Time Creator",
    batch: "Batch 16",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    highlight: "$2,850/mo Revenue",
    content: "The 1:1 mentor support is truly the best in Bangladesh. Whenever I faced copyright or RPM questions, mentors gave precise solutions within minutes.",
  },
  {
    id: 4,
    name: "Fahim Rahman",
    role: "University Student",
    batch: "Batch 11",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    highlight: "Earning in USD",
    content: "As a student, earning dollars from home felt distant. Following the High-RPM US niche formula, I'm now running two channels profitably on autopilot.",
  },
  {
    id: 5,
    name: "Arif Chowdhury",
    role: "Video Producer",
    batch: "Batch 15",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    highlight: "4x Higher RPM",
    content: "Targeting Tier-1 English audiences increased my RPM by 4x compared to local content. The course is crisp, practical, and delivers measurable results.",
  },
  {
    id: 6,
    name: "Sumaiya Akter",
    role: "Part-Time Creator",
    batch: "Batch 13",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    highlight: "1st Payout in 45 Days",
    content: "The step-by-step guidance from scratch gave me the confidence to start. Within 45 days, my first AdSense payment cleared directly into my bank account.",
  },
];

export const FooterReviewSection: React.FC = () => {
  return (
    <div className="relative w-full bg-[#0B0D17] text-white overflow-hidden pt-20 border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* =========================================================================
          SIMPLE & PROFESSIONAL REVIEWS SECTION
          ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real experiences from creators and entrepreneurs who built profitable automated YouTube channels with AIT Institute.
          </p>
        </div>

        {/* Clean 6-Card Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200 backdrop-blur-sm"
            >
              <div>
                {/* Rating Stars & Achievement Highlight */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    {review.highlight}
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  "{review.content}"
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-slate-700"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                    {review.name}
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {review.role} • <span className="text-purple-400">{review.batch}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-slate-900 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              Ready to build your automated channel?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Join the next batch of AIT Institute with full access to 20 modules and 1:1 mentor support.
            </p>
          </div>
          <a
            href="#pricing"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-purple-600/30 transition-all duration-200"
          >
            <span>Enroll in Next Batch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </section>

      {/* =========================================================================
          PROFESSIONAL SIMPLE FOOTER
          ========================================================================= */}
      <footer className="relative border-t border-slate-800/80 bg-slate-950/90 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Main Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
            
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2.5 mb-4 group">
                <svg className="w-10 h-7" viewBox="0 0 76 34" fill="none">
                  <path
                    d="M12.5 8C8.35786 8 5 11.3579 5 15.5C5 19.6421 8.35786 23 12.5 23C14.85 23 16.92 21.91 18.25 20.2V22.5H23V8.5H18.25V10.8C16.92 9.09 14.85 8 12.5 8ZM14 18.5C12.3431 18.5 11 17.1569 11 15.5C11 13.8431 12.3431 12.5 14 12.5C15.6569 12.5 17 13.8431 17 15.5C17 17.1569 15.6569 18.5 14 18.5Z"
                    fill="url(#footer_logo_grad)"
                  />
                  <circle cx="30" cy="9.5" r="3" fill="url(#footer_logo_grad)" />
                  <rect x="27.5" y="14" width="5" height="8.5" rx="2.5" fill="url(#footer_logo_grad)" />
                  <path
                    d="M41 9V14H45.5V17.5H41V21C41 21.8 41.5 22.5 42.5 22.5H45.5V26H41.5C38.5 26 36.5 24.2 36.5 21V17.5H33V14H36.5V10L41 9Z"
                    fill="url(#footer_logo_grad)"
                  />
                  <defs>
                    <linearGradient id="footer_logo_grad" x1="5" y1="8" x2="45" y2="26" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A855F7" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="font-extrabold text-lg tracking-wider text-white group-hover:text-purple-300 transition-colors">
                  AIT INSTITUTE
                </span>
              </a>

              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Bangladesh’s premier learning academy for AI-powered YouTube automation, digital media systems, and passive dollar income streams.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-rose-600 hover:border-rose-600 transition-all duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-200"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-200 mb-4">
                Explore
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a href="#curriculum" className="hover:text-purple-400 transition-colors">
                    20 Core Modules
                  </a>
                </li>
                <li>
                  <a href="#software" className="hover:text-purple-400 transition-colors">
                    Secret Software
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-purple-400 transition-colors">
                    Tuition &amp; Pricing
                  </a>
                </li>
                <li>
                  <a href="#us-vs-others" className="hover:text-purple-400 transition-colors">
                    Us VS Others
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-400 transition-colors">
                    Free Masterclass
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Learning Programs */}
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-200 mb-4">
                Programs
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <span className="hover:text-purple-400 transition-colors cursor-pointer">
                    Faceless YouTube System
                  </span>
                </li>
                <li>
                  <span className="hover:text-purple-400 transition-colors cursor-pointer">
                    Midjourney &amp; Flux AI
                  </span>
                </li>
                <li>
                  <span className="hover:text-purple-400 transition-colors cursor-pointer">
                    ElevenLabs Voice Mastery
                  </span>
                </li>
                <li>
                  <span className="hover:text-purple-400 transition-colors cursor-pointer">
                    High RPM US Niches
                  </span>
                </li>
                <li>
                  <span className="hover:text-purple-400 transition-colors cursor-pointer">
                    1:1 VIP Mentorship
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Support */}
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-200 mb-4">
                Direct Contact
              </h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <a href="mailto:support@aitinstitutebd.com" className="hover:text-white transition-colors">
                    support@aitinstitutebd.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <a href="tel:+8801800000000" className="hover:text-white transition-colors">
                    +880 1800-000000
                  </a>
                </li>
                <li className="pt-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    24/7 Trainer Support Live
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Divider & Legal Bar */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} AIT Institute (aitinstitutebd.com). All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default FooterReviewSection;
