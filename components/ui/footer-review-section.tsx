"use client";

import * as React from "react";
import { useState } from "react";
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
  ShieldCheck,
  TrendingUp,
  Sparkles,
  DollarSign,
  ChevronDown
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                               DATA INTERFACES                              */
/* -------------------------------------------------------------------------- */

interface ProofCard {
  id: number;
  badge?: string;
  isTopEarner?: boolean;
  revenue: string;
  revenueAmount: string;
  timeframe: string;
  views: string;
  watchTime: string;
  subscribers: string;
  caption: string;
  theme: "dark" | "light";
  chartColor: string;
  chartPath: string;
}

interface StudentReview {
  id: number;
  name: string;
  studentId: string;
  role: string;
  rating: number;
  avatarColor: string;
  initials: string;
  reviewText: string;
}

/* -------------------------------------------------------------------------- */
/*                        8 YOUTUBE STUDIO PROOF CARDS                        */
/* -------------------------------------------------------------------------- */

const PROOF_CARDS: ProofCard[] = [
  {
    id: 1,
    badge: "6 MONTHS INCOME",
    isTopEarner: true,
    revenue: "$101,417.69",
    revenueAmount: "$101,417.69",
    timeframe: "Last 6 months (180 days)",
    views: "12.1M",
    watchTime: "842.5K",
    subscribers: "+117.4K",
    caption: "গত ৬ মাসে আমাদের শিক্ষার্থীর চ্যানেলের মোট আয় — ১২.১M ভিউ ও ১১৭K+ সাবস্ক্রাইবার।",
    theme: "dark",
    chartColor: "#10B981",
    chartPath: "M0,90 Q40,85 80,75 T160,65 T240,40 T320,30 T400,10"
  },
  {
    id: 2,
    badge: "28 DAYS INCOME",
    isTopEarner: false,
    revenue: "$13,551.26",
    revenueAmount: "$13,551.26",
    timeframe: "Last 28 days",
    views: "150.1M",
    watchTime: "1.2M",
    subscribers: "+115.8K",
    caption: "গত ২৮ দিনে আমাদের শিক্ষার্থীর চ্যানেলের আয় — ১৫০.১M ভিউ ও ১১৫K+ সাবস্ক্রাইবার।",
    theme: "dark",
    chartColor: "#3B82F6",
    chartPath: "M0,80 Q50,70 100,55 T200,60 T300,35 T400,15"
  },
  {
    id: 3,
    badge: "US FACELESS CHANNEL",
    isTopEarner: false,
    revenue: "$24,562.00",
    revenueAmount: "$24,562.00",
    timeframe: "Last 28 days",
    views: "2.4M",
    watchTime: "184.2K",
    subscribers: "+28.2K",
    caption: "২৮ দিনে $24,562.00 আয় — শিক্ষার্থীর ইউএস ফেসলেস চ্যানেলের মোট আয় ও ২.৪M ভিউ।",
    theme: "dark",
    chartColor: "#A855F7",
    chartPath: "M0,85 Q60,80 120,60 T240,45 T360,25 T400,12"
  },
  {
    id: 4,
    badge: "MONTH 3 MILESTONE",
    isTopEarner: false,
    revenue: "$10,452.20",
    revenueAmount: "$10,452.20",
    timeframe: "Last 28 days",
    views: "1.1M",
    watchTime: "78.4K",
    subscribers: "+14.5K",
    caption: "২৮ দিনে $10,452.20 আয় — নতুন চ্যানেল খোলার ৩য় মাসে ২৮ দিনে $10,000+ ডলারের মাইলফলক অর্জন।",
    theme: "light",
    chartColor: "#059669",
    chartPath: "M0,85 Q70,75 140,65 T280,40 T350,25 T400,18"
  },
  {
    id: 5,
    badge: "HIGH RPM NICHE",
    isTopEarner: false,
    revenue: "$21,522.60",
    revenueAmount: "$21,522.60",
    timeframe: "Last 28 days",
    views: "1.8M",
    watchTime: "142.1K",
    subscribers: "+24.1K",
    caption: "২৮ দিনে $21,522.60 আয় — হাই আরপিএম (RPM) ফেসলেস নিশ থেকে গত ২৮ দিনে ডলারে প্যাসিভ রেভিনিউ।",
    theme: "light",
    chartColor: "#10B981",
    chartPath: "M0,80 Q50,75 100,65 T200,45 T300,30 T400,10"
  },
  {
    id: 6,
    badge: "AI AUTOMATED B-ROLL",
    isTopEarner: false,
    revenue: "$18,222.90",
    revenueAmount: "$18,222.90",
    timeframe: "Last 28 days",
    views: "1.5M",
    watchTime: "112.6K",
    subscribers: "+19.8K",
    caption: "২৮ দিনে $18,222.90 আয় — AI ভয়েসক্লোনিং এবং অটোমেটেড বি-রোল দিয়ে পরিচালিত ইউএসএ অডিয়েন্স চ্যানেল।",
    theme: "light",
    chartColor: "#6366F1",
    chartPath: "M0,75 Q60,70 120,55 T240,40 T360,20 T400,14"
  },
  {
    id: 7,
    badge: "RECORD RPM RATE",
    isTopEarner: false,
    revenue: "$27,287.55",
    revenueAmount: "$27,287.55",
    timeframe: "Last 28 days",
    views: "3.1M",
    watchTime: "235.8K",
    subscribers: "+32.6K",
    caption: "২৮ দিনে $27,287.55 আয় — গত ১ মাসের আর্নিং ড্যাশবোর্ড — ৩.১M লং-ফর্ম ভিউ ও রেকর্ড আরপিএম রেট।",
    theme: "light",
    chartColor: "#8B5CF6",
    chartPath: "M0,90 Q50,80 110,65 T220,40 T330,22 T400,8"
  },
  {
    id: 8,
    badge: "AUTOMATION ENGINE",
    isTopEarner: false,
    revenue: "$15,082.50",
    revenueAmount: "$15,082.50",
    timeframe: "Last 28 days",
    views: "1.3M",
    watchTime: "94.2K",
    subscribers: "+16.2K",
    caption: "২৮ দিনে $15,082.50 আয় — কোর্স শেষ করে দ্বিতীয় মাসেই সম্পূর্ণ অটোমেশন সিস্টেমে আয় শুরু।",
    theme: "light",
    chartColor: "#0D9488",
    chartPath: "M0,82 Q65,75 130,60 T260,38 T340,24 T400,15"
  }
];

/* -------------------------------------------------------------------------- */
/*                     14 AUTHENTIC STUDENT REVIEWS                           */
/* -------------------------------------------------------------------------- */

const STUDENT_REVIEWS: StudentReview[] = [
  {
    id: 1,
    name: "RONTU CHANDA",
    studentId: "Student - AITP00085",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-purple-500 to-indigo-600",
    initials: "RC",
    reviewText: "বর্তমানে AIT Institute-এর AI & YouTube Automation Academy-তে আমার ক্লাস চলছে। শুরুতে AI ও YouTube Automation নিয়ে অনেক কনফিউশন ও দ্বিধা ছিল। কিন্তু ক্লাস করার পর ধীরে ধীরে বিষয়গুলো অনেক পরিষ্কার হচ্ছে। বিশেষ করে AI Tools, Content Creation, YouTube Automation এবং Practical Workflow সম্পর্কে ভালো ধারণা পাচ্ছি। শুধু থিওরি নয়, বাস্তবে কীভাবে কাজ করতে হয়—সেটাও শেখানো হচ্ছে। আগে মনে হতো, “অনলাইনে কাজ করা কি সত্যিই সম্ভব?” এখন মনে হয়, সঠিক Skill ও Direction থাকলে অবশ্যই সম্ভব। ধন্যবাদ AIT Institute ও আমাদের Mentors।"
  },
  {
    id: 2,
    name: "ATM Mostofa Sarwar",
    studentId: "Student - AITP00044",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-blue-500 to-cyan-600",
    initials: "MS",
    reviewText: "I am really happy with my experience at AIT as a student of the YouTube Automation Course. The course has given me a clear understanding of how YouTube automation works, from choosing the right niche and creating engaging content to channel management and monetization strategies. What I appreciate most is the hands-on guidance and real-world strategies that I can apply to my own channel."
  },
  {
    id: 3,
    name: "Rabiul Islam",
    studentId: "Student - AITP00072",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-emerald-500 to-teal-600",
    initials: "RI",
    reviewText: "আমি আগে ইউটিউব চ্যানেল নিয়ে কাজ করতে চাইলেও কোথা থেকে শুরু করব, কী ধরনের ভিডিও বানাব বা নিয়মিত কনটেন্ট কীভাবে তৈরি করব—এসব নিয়ে অনেক কনফিউশনে ছিলাম। AIT Institute-এ ভর্তি হওয়ার পর প্রতিটি ধাপ ধরে ধরে শেখানো হয়েছে। বিশেষ করে টাইটেল সিলেকশন, হাই-আরপিএম নিশ সিলেকশন এবং ভয়েস জেনারেশন আমাকে অনেক দূর এগিয়ে দিয়েছে।"
  },
  {
    id: 4,
    name: "Md. Kamrul Hasan",
    studentId: "Student - AITP00018",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-amber-500 to-orange-600",
    initials: "KH",
    reviewText: "AIT-এর YouTube Automation কোর্সটি করে আমি সত্যিই অনেক উপকৃত হয়েছি। কোর্সটিতে YouTube Automation সম্পর্কে বেসিক থেকে শুরু করে ধাপে ধাপে প্রয়োজনীয় বিষয়গুলো খুব সহজভাবে শিখানো হয়েছে। কীভাবে Niche রিসার্চ করতে হয়, ভালো স্ক্রিপ্ট তৈরি করতে হয়, AI টুলস ব্যবহার করে অডিও ও ভিডিও বানাতে হয়—সবকিছু চমৎকারভাবে বুঝিয়ে দেওয়া হয়েছে।"
  },
  {
    id: 5,
    name: "Faisal Chowdhury",
    studentId: "Student - AITP00057",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-rose-500 to-pink-600",
    initials: "FC",
    reviewText: "Before enrolling in the YouTube Automation course, I thought that YouTube meant uploading videos whenever and however I wanted. But after enrolling in AIT, I learned that YouTube is a proper digital business. The content strategy, SEO, thumbnail psychology, and automated pipelines are unmatched."
  },
  {
    id: 6,
    name: "Nusrat Jahan Kaspia",
    studentId: "Student - AITP00038",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-violet-500 to-purple-600",
    initials: "NK",
    reviewText: "AIT Institute-এর YouTube Automation Mastery Course-এ শেখার অভিজ্ঞতা আমার কাছে সত্যিই দারুণ ও উপকারী। বর্তমানে AI এবং YouTube Automation-এর চাহিদা দ্রুত বাড়ছে, আর এই কোর্সে একদম বাস্তবমুখী ও কার্যকর কৌশলগুলো সহজভাবে উপস্থাপন করা হয়েছে। মেন্টরদের ডেডিকেশন অতুলনীয়।"
  },
  {
    id: 7,
    name: "Bijoy Das",
    studentId: "Student - AITP00025",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-indigo-500 to-blue-600",
    initials: "BD",
    reviewText: "প্রথমেই আইয়ান ভাইকে জানাই আন্তরিকভাবে অনেক অনেক ধন্যবাদ ও কৃতজ্ঞতা। ভাইয়ের ফ্রি ক্লাসগুলো করার আগে YouTube Automation কী, সেটাই আমি ভালোভাবে জানতাম না। ক্লাসের প্রতিটি বিষয় এত সহজভাবে এবং হাতে-কলমে বুঝিয়ে দেওয়া হয় যে শেখার সময় একদমই মনে হয় না দূর থেকে ক্লাস করছি। মনে হয় সামনে বসে একজন শিক্ষক নিজে ধরে শেখাচ্ছেন।"
  },
  {
    id: 8,
    name: "Mahmud Iqbal (Mamun)",
    studentId: "Student - AITP00083",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-teal-500 to-emerald-600",
    initials: "MI",
    reviewText: "AIT Institute is an excellent platform for learning, skill development, and personal growth. I was impressed by the professional approach and positive learning environment. Ayaan Choudhury's vision, guidance, and dedication make the institute truly inspiring. The learning approach is modern and focused on real-world skills."
  },
  {
    id: 9,
    name: "Basudeb kirtania Rahul",
    studentId: "Student - AITP00028",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-cyan-500 to-blue-600",
    initials: "BR",
    reviewText: "আমার জীবনের লক্ষ্য ছিল ইউটিউব অটোমেশন থেকে কিছু একটা করার। কিন্তু আমি হতাশ ছিলাম, আমি কিভাবে কি করবো কিছুই বুঝতে পারছিলাম না। হঠাৎ আমি এই প্রতিষ্ঠানটির খোঁজ পাই। এখানে ক্লাস করার পর নিজের ভেতর আসল মনোবল খুঁজে পেয়েছি। আমাদের মেন্টর স্যার অনেক ভালোভাবে ক্লাস পরিচালনা করেন। চোখ বন্ধ করে বিশ্বাস করার মতো প্রতিষ্ঠান।"
  },
  {
    id: 10,
    name: "AR-RAFI RAHMAN",
    studentId: "Student - AITP00082",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-fuchsia-500 to-purple-600",
    initials: "AR",
    reviewText: "আমি এই YouTube Automation কোর্সে ভর্তি হয়ে এখন পর্যন্ত বেশ ভালো অভিজ্ঞতা পাচ্ছি। কোর্সের বিষয়গুলো খুব সুন্দরভাবে সাজানো এবং গুরুত্বপূর্ণ বিষয়গুলো সহজভাবে বোঝানো হয়েছে। বিশেষ করে Niche Research, Content Strategy, Scripting এবং Channel Growth নিয়ে চমৎকার গাইডলাইন পেয়েছি।"
  },
  {
    id: 11,
    name: "MD Hasan Hasan sheikhhj",
    studentId: "Student - AIT000105",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-emerald-500 to-green-600",
    initials: "MH",
    reviewText: "Good mentor in BD. AIT Institute provides honest guidelines, practical frameworks, and responsive support whenever needed. The automated systems taught in this course give complete clarity on scaling channels globally."
  },
  {
    id: 12,
    name: "Shahariya Tanha Runa",
    studentId: "Student - AITP00067",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-pink-500 to-rose-600",
    initials: "SR",
    reviewText: "YouTube Automation কোর্সের ক্লাসগুলো বেশ সুন্দর ও গুছানো ছিল। বিষয়গুলো সহজভাবে বুঝিয়ে দেওয়া হচ্ছে এবং প্রয়োজনীয় বিষয়গুলো হাতে-কলমে শেখানোর চেষ্টা করা হচ্ছে। এখন পর্যন্ত অভিজ্ঞতা চমৎকার হয়েছে। আশা করছি বাস্তব জীবনে এটি আমার সবচেয়ে বড় ইনভেস্টমেন্ট হবে।"
  },
  {
    id: 13,
    name: "Md Ariful Islam",
    studentId: "Student - AITP00090",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-blue-600 to-indigo-700",
    initials: "AI",
    reviewText: "আমি এখানে অত্যন্ত সুন্দর ভাবে শিখতে পারছি। এখানে ক্লাস অত্যন্ত সুন্দর ও সুপরিকল্পিত ভাবে আমাদের শিক্ষা দেওয়া হচ্ছে। মেন্টরদের ধৈর্য ও দিকনির্দেশনা আমাকে আত্মবিশ্বাসী করে তুলেছে। আমার বিশ্বাস আমি এখান থেকে সফল কাম হব ইনশাআল্লাহ।"
  },
  {
    id: 14,
    name: "Farhana khan Esita",
    studentId: "Student - AITP00095",
    role: "Batch Student",
    rating: 5,
    avatarColor: "from-purple-600 to-indigo-700",
    initials: "FE",
    reviewText: "AIT Institute provides practical and professional learning opportunities. It helps students develop useful skills through hands-on training. The learning environment is supportive, informative, and career-focused."
  }
];

/* -------------------------------------------------------------------------- */
/*                    YOUTUBE STUDIO MOCK COMPONENT                           */
/* -------------------------------------------------------------------------- */

const StudioDashboardMock: React.FC<{ card: ProofCard }> = ({ card }) => {
  const isDark = card.theme === "dark";

  return (
    <div className={`w-full rounded-xl overflow-hidden border ${isDark ? "bg-[#18181B] border-slate-700/80 text-white" : "bg-[#F8FAFC] border-slate-200 text-slate-800"}`}>
      
      {/* Studio Top Navigation Bar */}
      <div className={`px-4 py-2.5 border-b flex items-center justify-between text-xs ${isDark ? "bg-[#27272A] border-slate-700" : "bg-white border-slate-200"}`}>
        <div className="flex items-center gap-2">
          {/* YouTube Play Icon */}
          <div className="w-5 h-3.5 bg-red-600 rounded-sm flex items-center justify-center">
            <div className="w-0 h-0 border-y-[3px] border-y-transparent border-l-[5px] border-l-white ml-0.5" />
          </div>
          <span className="font-semibold tracking-tight text-[11px] sm:text-xs">
            Channel analytics
          </span>
        </div>

        {/* Date Filter Pill */}
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-medium border ${isDark ? "bg-[#18181B] border-slate-700 text-slate-300" : "bg-slate-100 border-slate-300 text-slate-700"}`}>
          <span>{card.timeframe}</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </div>
      </div>

      {/* Analytics Tabs Bar */}
      <div className={`px-4 pt-2.5 pb-2 border-b flex items-center gap-6 text-[11px] font-medium ${isDark ? "bg-[#1F1F23] border-slate-700/60 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-500"}`}>
        <span className={`pb-1 border-b-2 font-semibold ${isDark ? "text-white border-white" : "text-slate-900 border-slate-900"}`}>
          Overview
        </span>
        <span className="hover:text-slate-300 cursor-pointer transition-colors">Content</span>
        <span className="hover:text-slate-300 cursor-pointer transition-colors">Audience</span>
        <span className="hover:text-slate-300 cursor-pointer transition-colors text-purple-400 font-semibold">
          Revenue
        </span>
      </div>

      {/* 4 Stats Metric Cards Grid */}
      <div className={`grid grid-cols-4 border-b divide-x ${isDark ? "border-slate-700/60 divide-slate-700/60 bg-[#18181B]" : "border-slate-200 divide-slate-200 bg-white"}`}>
        
        {/* Metric 1: Views */}
        <div className="p-2.5 sm:p-3 text-center">
          <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Views</p>
          <p className="text-xs sm:text-sm font-bold tracking-tight">{card.views}</p>
        </div>

        {/* Metric 2: Watch Time */}
        <div className="p-2.5 sm:p-3 text-center">
          <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Watch time (hrs)</p>
          <p className="text-xs sm:text-sm font-bold tracking-tight">{card.watchTime}</p>
        </div>

        {/* Metric 3: Subscribers */}
        <div className="p-2.5 sm:p-3 text-center">
          <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Subscribers</p>
          <p className="text-xs sm:text-sm font-bold tracking-tight text-emerald-500">{card.subscribers}</p>
        </div>

        {/* Metric 4: Estimated Revenue (HIGHLIGHTED WITH ACCENT & ARROW) */}
        <div className={`relative p-2.5 sm:p-3 text-center ${isDark ? "bg-emerald-950/20" : "bg-emerald-50/70"}`}>
          
          {/* Red Callout Indicator Pointer */}
          <div className="absolute -top-2.5 right-2 sm:right-3 px-1.5 py-0.5 rounded bg-rose-600 text-[8px] font-bold text-white uppercase tracking-wider shadow-sm flex items-center gap-0.5 animate-bounce">
            <span>Verified</span>
          </div>

          <p className="text-[9px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider mb-0.5">
            Your estimated revenue
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
            {card.revenueAmount}
          </p>
        </div>

      </div>

      {/* SVG Analytics Graph Chart */}
      <div className={`p-4 relative ${isDark ? "bg-[#18181B]" : "bg-slate-50/50"}`}>
        
        {/* Subtle grid lines */}
        <div className="absolute inset-x-4 inset-y-4 flex flex-col justify-between pointer-events-none opacity-10">
          <div className="border-b border-current w-full" />
          <div className="border-b border-current w-full" />
          <div className="border-b border-current w-full" />
        </div>

        <svg viewBox="0 0 400 100" className="w-full h-24 sm:h-28 overflow-visible" fill="none">
          <defs>
            <linearGradient id={`grad-${card.id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={card.chartColor} stopOpacity="0.3" />
              <stop offset="100%" stopColor={card.chartColor} stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Area fill under curve */}
          <path
            d={`${card.chartPath} L400,100 L0,100 Z`}
            fill={`url(#grad-${card.id})`}
          />

          {/* Animated/Glowing smooth line */}
          <path
            d={card.chartPath}
            stroke={card.chartColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Final end point indicator */}
          <circle cx="400" cy="10" r="4" fill={card.chartColor} className="animate-pulse" />
        </svg>

        {/* Date labels on X-axis */}
        <div className="flex justify-between items-center text-[9px] text-slate-400 pt-2 border-t border-slate-700/20">
          <span>Day 1</span>
          <span>Day 14</span>
          <span>Day 28</span>
          <span className="font-semibold text-emerald-500">Peak Earning</span>
        </div>

      </div>

    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                         MAIN COMPONENT EXPORT                              */
/* -------------------------------------------------------------------------- */

export const FooterReviewSection: React.FC = () => {
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  const toggleReview = (id: number) => {
    setExpandedReviews(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* =========================================================================
          SECTION 1: OUR STUDENTS' REAL RESULTS (SCREENSHOT 1)
          Background: Clean light with subtle lavender/purple ambient glow
          ========================================================================= */}
      <section className="relative z-10 bg-[#FAF9FE] text-slate-900 pt-24 pb-20 border-t border-purple-100">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-200/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Area */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            
            {/* Top Pill Badge: শিক্ষার্থীদের ফলাফল */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200 text-xs font-bold tracking-wide shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>শিক্ষার্থীদের ফলাফল</span>
            </div>

            {/* Main Title: আমাদের শিক্ষার্থীদের আসল ফলাফল */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              আমাদের শিক্ষার্থীদের{" "}
              <span className="text-purple-600 relative inline-block">
                আসল ফলাফল
              </span>
            </h2>

            {/* Subtitle: নিচের স্ক্রিনশটগুলোতে YouTube Studio ড্যাশবোর্ড থেকে নেওয়া — কোনো এডিট ছাড়া। */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              নিচের স্ক্রিনশটগুলোতে YouTube Studio ড্যাশবোর্ড থেকে নেওয়া — কোনো এডিট ছাড়া।
            </p>

            {/* Accent Underline Rule */}
            <div className="h-1 w-16 bg-purple-600 rounded-full mx-auto mt-4" />
          </div>

          {/* 8 Proof Cards Grid (2 Columns on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {PROOF_CARDS.map((card) => (
              <div
                key={card.id}
                className="group relative flex flex-col justify-between bg-white rounded-2xl border border-purple-100/90 shadow-[0_4px_25px_-5px_rgba(147,51,234,0.06)] hover:shadow-[0_12px_35px_-5px_rgba(147,51,234,0.14)] hover:border-purple-300 transition-all duration-300 p-5 sm:p-6"
              >
                
                {/* Top Badge & Metric Title */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {card.badge && (
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${card.isTopEarner ? "bg-amber-100 text-amber-800 border-amber-300" : "bg-purple-50 text-purple-700 border-purple-200"}`}>
                        {card.badge}
                      </span>
                    )}
                    {card.isTopEarner && (
                      <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold border border-rose-200">
                        ⭐ TOP EARNER #1
                      </span>
                    )}
                  </div>

                  {/* Revenue Pill */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{card.timeframe}</span>
                  </div>
                </div>

                {/* Realistic YouTube Studio Dashboard Graphic */}
                <div className="mb-5 shadow-sm rounded-xl overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
                  <StudioDashboardMock card={card} />
                </div>

                {/* Bottom Caption and Revenue Callout */}
                <div className="pt-2">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-xl sm:text-2xl font-black text-emerald-600 tracking-tight">
                      {card.revenue}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      মোট রেভিনিউ
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal mb-3">
                    {card.caption}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 border-t border-slate-100 pt-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>সরাসরি স্টুডেন্ট চ্যানেল ড্যাশবোর্ড থেকে সংগৃহীত</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Guarantee / Authenticity Social Proof Bar */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-purple-100 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center flex-shrink-0 text-purple-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  ১০০% বাস্তব ও ভেরিফাইড পরিসংখ্যান
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  AIT Institute কোনো ফেক আর্নিং স্ক্রিনশট বা ম্যানুপুলেটেড তথ্য প্রদান করে না। প্রতিটি ডেটা সরাসরি স্টুডেন্টদের ইউটিউব চ্যানেল ড্যাশবোর্ড ভিত্তিক।
                </p>
              </div>
            </div>

            <a
              href="#pricing"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-purple-600/20 transition-all duration-200"
            >
              <span>কোর্সে ভর্তি হন</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: AUTHENTIC STUDENT REVIEWS GRID (SCREENSHOT 2)
          Background: Light crisp clean layout matching media_1793125215854_f1ddf589.png
          ========================================================================= */}
      <section className="relative z-10 bg-white text-slate-900 py-24 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200 text-xs font-bold tracking-wide shadow-sm mb-4">
              <Star className="w-3.5 h-3.5 fill-purple-600 text-purple-600" />
              <span>শিক্ষার্থীদের রিভিউ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              আমাদের শিক্ষার্থীরা{" "}
              <span className="text-purple-600">
                কী বলছেন?
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              AIT Institute-এর AI &amp; YouTube Automation কোর্সের শিক্ষার্থীদের সরাসরি ও সৎ মতামত।
            </p>
            <div className="h-1 w-16 bg-purple-600 rounded-full mx-auto mt-4" />
          </div>

          {/* 3-Column Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDENT_REVIEWS.map((review) => {
              const isExpanded = expandedReviews[review.id];
              const isLongText = review.reviewText.length > 220;
              const displayText = isLongText && !isExpanded 
                ? `${review.reviewText.substring(0, 220)}...` 
                : review.reviewText;

              return (
                <div
                  key={review.id}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-purple-100/90 hover:border-purple-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_-4px_rgba(147,51,234,0.1)] transition-all duration-200"
                >
                  <div>
                    {/* 5 Purple Stars (★★★★★) matching screenshot 2 */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-purple-600 text-purple-600" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-700 text-sm leading-relaxed font-normal mb-4 whitespace-pre-line">
                      "{displayText}"
                    </p>

                    {/* Read More toggle for lengthy reviews */}
                    {isLongText && (
                      <button
                        onClick={() => toggleReview(review.id)}
                        className="text-xs font-semibold text-purple-600 hover:text-purple-700 mb-4 inline-flex items-center gap-1 cursor-pointer focus:outline-none"
                      >
                        {isExpanded ? "সংক্ষেপ করুন" : "আরও পড়ুন..."}
                      </button>
                    )}
                  </div>

                  {/* Reviewer Profile */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    {/* Avatar Initials Circle */}
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${review.avatarColor} text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      {review.initials}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        {review.name}
                        <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {review.studentId}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Enroll Call to Action */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black mb-2 text-white">
                আপনিও শুরু করুন আপনার অটোমেশন জার্নি
              </h3>
              <p className="text-xs sm:text-sm text-purple-200 max-w-xl">
                AIT Institute-এর সম্পূর্ণ গাইডলাইন এবং ১:১ ট্রেইনার সহায়তায় তৈরি করুন আপনার প্যাসিভ আয়ের ইউটিউব চ্যানেল।
              </p>
            </div>
            <a
              href="#pricing"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-sm shadow-lg shadow-purple-500/30 transition-all duration-200"
            >
              <span>পরবর্তী ব্যাচে সিট বুক করুন</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          PROFESSIONAL DARK FOOTER
          Preserved clean footer with all company details, links, and branding
          ========================================================================= */}
      <footer className="relative border-t border-slate-800 bg-[#0B0D17] text-white pt-16 pb-12">
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
