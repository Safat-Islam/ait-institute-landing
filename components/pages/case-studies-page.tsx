import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Eye, 
  CheckCircle2, 
  ArrowUpRight, 
  Calendar,
  Sparkles,
  BarChart3,
  Globe
} from "lucide-react";

interface CaseStudiesPageProps {
  onNavigateHome: () => void;
  onNavigatePricing: () => void;
}

interface CaseStudy {
  id: number;
  channelName: string;
  niche: string;
  creator: string;
  batch: string;
  revenue: string;
  subscribers: string;
  views: string;
  rpm: string;
  timeline: string;
  summary: string;
  keyTactics: string[];
  image: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    channelName: "The AI Chronicle",
    niche: "AI & Future Tech (US Audience)",
    creator: "Tanvir Ahmed",
    batch: "Batch 14",
    revenue: "$1,420 / month",
    subscribers: "48,500+",
    views: "1.2M views",
    rpm: "$14.80 RPM",
    timeline: "28 Days to Monetization",
    summary: "Started with zero editing background. By focusing on trending AI tool comparisons with Claude scripts and ElevenLabs audio, the channel triggered the US algorithm within 3 weeks.",
    keyTactics: [
      "Targeted US & UK high-RPM search keywords",
      "Dynamic thumbnail psychology with 9.2% average CTR",
      "Automated b-roll compilation using Midjourney + CapCut"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    channelName: "Echoes of History",
    niche: "Historical Mysteries & Docu-Series",
    creator: "Nusrat Jahan",
    batch: "Batch 12",
    revenue: "$3,850 / month",
    subscribers: "128,000+",
    views: "3.4M views",
    rpm: "$12.20 RPM",
    timeline: "Silver Play Button in 5 Months",
    summary: "A purely faceless documentary channel producing 12-minute deep dives. Reached 100K subscribers in 5 months using Flux AI visual prompts and cinematic sound design.",
    keyTactics: [
      "Story retention hooks in the first 15 seconds",
      "Audio mixing in Adobe Audition for deep immersive narration",
      "Sponsorships + AdSense dual monetization pipeline"
    ],
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    channelName: "Billionaire Habits",
    niche: "Luxury & Wealth Psychology",
    creator: "Sabbir Hossain",
    batch: "Batch 16",
    revenue: "$2,850 / month",
    subscribers: "84,000+",
    views: "2.1M views",
    rpm: "$18.40 RPM",
    timeline: "Monetized in 34 Days",
    summary: "High-paying financial niche with Tier-1 advertisers. Operating completely on autopilot with an outsourced thumbnail designer and automated AI voiceover pipeline.",
    keyTactics: [
      "High commercial intent keywords attracting $20+ CPMs",
      "Batch-producing 4 videos every Sunday in under 3 hours",
      "Affiliate links in pinned comments adding $600/mo extra"
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    channelName: "Cosmos Unveiled",
    niche: "Space Science & Astronomy",
    creator: "Fahim Rahman",
    batch: "Batch 11",
    revenue: "$2,100 / month",
    subscribers: "62,000+",
    views: "1.8M views",
    rpm: "$11.50 RPM",
    timeline: "Monetized in 40 Days",
    summary: "Created while completing university degree in Dhaka. Using free NASA public domain 4K footage combined with AI voice narration and dramatic pacing.",
    keyTactics: [
      "Zero camera or studio equipment needed",
      "Viral community tab polling to drive browse features",
      "Direct payout to Dutch-Bangla Bank in USD without delays"
    ],
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80"
  }
];

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ 
  onNavigateHome, 
  onNavigatePricing 
}) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen bg-[#07090E] text-white pt-24 pb-28 px-4 sm:px-6 lg:px-8 selection:bg-purple-600 selection:text-white"
    >
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-widest mb-4">
            <BarChart3 className="w-3.5 h-3.5 text-purple-400" />
            Proven Channel Breakdowns
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Real Student Channel Case Studies
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Transparent analytics, revenue metrics, and exact step-by-step methodologies from students who built 6-figure faceless channels from scratch.
          </p>
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/60 overflow-hidden hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Top Image & Channel Banner */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-black">
                <img
                  src={study.image}
                  alt={study.channelName}
                  className="w-full h-full object-cover opacity-75 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-bold bg-purple-600 text-white px-3 py-1 rounded-full shadow-lg">
                    {study.niche}
                  </span>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                    {study.timeline}
                  </span>
                </div>

                <div className="absolute bottom-4 left-5">
                  <h3 className="text-xl font-bold text-white">{study.channelName}</h3>
                  <p className="text-xs text-zinc-300">Creator: {study.creator} • {study.batch}</p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 mb-5 text-center">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold block mb-0.5">Monthly Rev</span>
                    <span className="text-sm sm:text-base font-extrabold text-emerald-400">{study.revenue}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold block mb-0.5">Subscribers</span>
                    <span className="text-sm sm:text-base font-extrabold text-white">{study.subscribers}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase font-semibold block mb-0.5">Audience RPM</span>
                    <span className="text-sm sm:text-base font-extrabold text-purple-400">{study.rpm}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                  {study.summary}
                </p>

                {/* Key Tactics Checklist */}
                <div className="space-y-2 pt-4 border-t border-zinc-800/80">
                  <span className="text-xs font-bold text-zinc-200 uppercase tracking-wider block mb-2">
                    Key Strategies Applied:
                  </span>
                  {study.keyTactics.map((tactic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{tactic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-zinc-900 border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1.5">
              Want to replicate these exact results?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Get access to the step-by-step video lessons, prompt sheets, and 1:1 mentorship that built these channels.
            </p>
          </div>
          <button
            onClick={onNavigatePricing}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-105"
          >
            <span>View Pricing &amp; Enrollment</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default CaseStudiesPage;
