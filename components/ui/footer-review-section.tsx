import React, { useState } from "react";
import { 
  Star, 
  CheckCircle2, 
  ArrowUpRight, 
  MessageSquare, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Youtube, 
  Facebook, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Award,
  TrendingUp,
  Clock
} from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  batch: string;
  avatarText: string;
  avatarBg: string;
  rating: number;
  date: string;
  tag: string;
  achievement: string;
  content: string;
  category: "all" | "earnings" | "beginners" | "monetization";
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Tanvir Ahmed",
    role: "Faceless Creator & Student",
    batch: "Batch 14",
    avatarText: "TA",
    avatarBg: "from-purple-600 to-indigo-600",
    rating: 5,
    date: "2 weeks ago",
    tag: "Channel Monetized",
    achievement: "Monetized in 28 Days • $1,420/mo",
    content: "I started with zero experience in video editing. Following the Secret AI Software stack and the exact automation roadmap from Module 6 & 7, my channel got monetized in just 28 days! The 1:1 mentor support is honestly unmatched in Bangladesh.",
    category: "monetization"
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Content Creator & Freelancer",
    batch: "Batch 12",
    avatarText: "NJ",
    avatarBg: "from-pink-500 to-rose-500",
    rating: 5,
    date: "1 month ago",
    tag: "100K+ Subs",
    achievement: "128K Subscribers • Silver Play Button",
    content: "The workflow with ElevenLabs and Midjourney taught here saves me over 15 hours every single week. AIT Institute doesn't teach boring theory—they show real working channels and high-RPM niches that actually pay in dollars.",
    category: "earnings"
  },
  {
    id: 3,
    name: "Sabbir Hossain",
    role: "Full-Time YouTuber",
    batch: "Batch 16",
    avatarText: "SH",
    avatarBg: "from-blue-600 to-cyan-600",
    rating: 5,
    date: "3 weeks ago",
    tag: "3 Active Channels",
    achievement: "3 Channels Monetized • $2,850/mo",
    content: "The community and trainer support alone are worth 10x the course fee. Whenever I had doubts regarding YouTube algorithm updates or copyright policies, the mentors answered within minutes in the VIP group. Truly game changing!",
    category: "earnings"
  },
  {
    id: 4,
    name: "Fahim Rahman",
    role: "University Student & Creator",
    batch: "Batch 11",
    avatarText: "FR",
    avatarBg: "from-emerald-600 to-teal-600",
    rating: 5,
    date: "Just now",
    tag: "Zero to Dollar Earning",
    achievement: "Quit 9-5 Job • Earning in USD",
    content: "Earning dollars from home in Bangladesh felt far away until I enrolled in AIT Institute. The thumbnail psychology module doubled my CTR from 3.2% to 9.4%. Now I manage 2 channels completely on autopilot while pursuing my degree.",
    category: "beginners"
  },
  {
    id: 5,
    name: "Arif Chowdhury",
    role: "Freelance Video Editor",
    batch: "Batch 15",
    avatarText: "AC",
    avatarBg: "from-amber-500 to-orange-600",
    rating: 5,
    date: "1 month ago",
    tag: "High RPM Niche",
    achievement: "$4,100+ Total Channel Revenue",
    content: "Module 14 on High-RPM US and UK targeting was an eye-opener. Even with fewer views, the earnings are 5x higher than local content. The course is crisp, straight to the point, and 100% practical.",
    category: "monetization"
  },
  {
    id: 6,
    name: "Sumaiya Akter",
    role: "Housewife & Part-Time Creator",
    batch: "Batch 13",
    avatarText: "SA",
    avatarBg: "from-violet-600 to-purple-700",
    rating: 5,
    date: "2 months ago",
    tag: "Beginner Friendly",
    achievement: "1st Dollar Check in 45 Days",
    content: "I had never opened Photoshop or CapCut before this. The step-by-step videos and homework reviews gave me the exact confidence I needed. Best decision I made this year for financial independence!",
    category: "beginners"
  }
];

export const FooterReviewSection: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "monetization" | "earnings" | "beginners">("all");

  const filteredReviews = filter === "all" 
    ? REVIEWS 
    : REVIEWS.filter(r => r.category === filter);

  return (
    <div className="relative w-full bg-[#0B0D17] text-white overflow-hidden pt-24 border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* =========================================================================
          REVIEWS & STUDENT TESTIMONIALS SECTION
          ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Real Student Reviews
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Loved by 3,800+ Creators &amp; Students
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            See how our students in Bangladesh and across the world are building sustainable 6-figure faceless YouTube channels and earning in dollars.
          </p>

          {/* Social Proof Capsule */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-6 py-3 px-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-1.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 font-bold text-white text-sm">4.9 / 5.0</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-slate-700" />
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>3,800+ Verified Alumni</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-slate-700" />
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <Award className="w-4 h-4 text-purple-400" />
              <span>94% Success &amp; Satisfaction</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Reviews (3,800+)" },
              { id: "monetization", label: "🚀 Fast Monetization" },
              { id: "earnings", label: "💵 Dollar Earnings" },
              { id: "beginners", label: "🌱 Absolute Beginners" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  filter === tab.id
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 scale-105"
                    : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/20 backdrop-blur-sm"
            >
              {/* Top Row: Rating & Achievement Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    <TrendingUp className="w-3 h-3 text-purple-400" />
                    {review.tag}
                  </span>
                </div>

                {/* Achievement Highlight */}
                <div className="mb-3.5 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800/90 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{review.achievement}</span>
                </div>

                {/* Review Body */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  "{review.content}"
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${review.avatarBg} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                    {review.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors flex items-center gap-1.5">
                      {review.name}
                      <span title="Verified Student">
                        <ShieldCheck className="w-3.5 h-3.5 text-sky-400 inline" />
                      </span>
                    </h4>
                    <p className="text-[11px] text-slate-400">{review.role} • <span className="text-purple-400 font-medium">{review.batch}</span></p>
                  </div>
                </div>

                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-900/40 via-indigo-950/40 to-slate-900 border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ready to write your own success story?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Join the next batch of AIT Institute. Get instant access to all 20 modules, Secret Software stack, and 1:1 mentor guidance.
            </p>
          </div>
          <a
            href="#pricing"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-xl shadow-purple-600/30 hover:scale-105 transition-all duration-200"
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
            
            {/* Column 1: Brand Info (Spans 2 cols on lg) */}
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
