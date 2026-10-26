import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Award, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  Compass, 
  HeartHandshake,
  Youtube,
  ArrowUpRight
} from "lucide-react";

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigatePricing: () => void;
}

interface Mentor {
  name: string;
  role: string;
  experience: string;
  channelsManaged: string;
  avatar: string;
  bio: string;
  specialty: string[];
}

const MENTORS: Mentor[] = [
  {
    name: "Sikder Safat",
    role: "Founder & Lead YouTube Strategist",
    experience: "7+ Years in Digital Media",
    channelsManaged: "14+ Monetized Channels",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    bio: "Pioneered faceless YouTube channel automation frameworks in South Asia. Helped over 3,800 students transition from local freelance gigs into sustainable dollar-earning channel portfolios.",
    specialty: ["High RPM Niches", "Algorithmic Growth", "Commercial Monetization"]
  },
  {
    name: "Arif Al Mamun",
    role: "Head of AI & Audio Engineering",
    experience: "5+ Years in Machine Learning Media",
    channelsManaged: "8+ Automation Networks",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    bio: "Specializes in realistic voice synthesis with ElevenLabs, automated scripting with Claude 3.5, and automated thumbnail production pipelines with Midjourney & Flux.",
    specialty: ["Voice Synthesis", "Prompt Engineering", "Workflow Automation"]
  },
  {
    name: "Zubair Hossain",
    role: "Retention & Visual Director",
    experience: "6+ Years in Video Production",
    channelsManaged: "Over 50M+ Views Driven",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    bio: "Focuses on audience retention psychology, dramatic sound design in Adobe Audition, and high-CTR thumbnail composition that commands 10%+ click-through rates.",
    specialty: ["Thumbnail Psychology", "CapCut 4K Mastercuts", "Story Hooks"]
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({ 
  onNavigateHome, 
  onNavigatePricing 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen bg-[#07090E] text-white pt-24 pb-28 px-4 sm:px-6 lg:px-8 selection:bg-purple-600 selection:text-white"
    >
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            Our Mission &amp; Instructors
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Empowering Next-Generation Digital Creators
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            AIT Institute was founded with one clear mission: to provide practical, world-class AI automation skills so individuals can build sustainable, high-paying dollar income streams from home.
          </p>
        </div>

        {/* Mission & Story Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 mb-16 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-3">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Practical Over Theory</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We believe in zero fluff. Every lesson is screen-recorded step-by-step with real, active channels showing what works right now.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Unmatched 1:1 Support</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                The biggest reason students fail elsewhere is lack of guidance. Our dedicated mentors review your homework and channels individually.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Global Dollar Revenue</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We guide students specifically toward US, UK, and European audiences to unlock $12-$25+ RPMs instead of low local rates.
              </p>
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">
              Meet Your Senior Mentors
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Learn directly from operators running multiple 6-figure channel networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MENTORS.map((m, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 ring-2 ring-purple-500/30">
                    <img
                      src={m.avatar}
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white flex items-center gap-1.5 mb-1">
                    {m.name}
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                  </h3>
                  <p className="text-xs text-purple-400 font-medium mb-3">{m.role}</p>
                  
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {m.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80">
                  <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block mb-2">
                    Core Expertise
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {m.specialty.map((spec, idx) => (
                      <span key={idx} className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-md">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-zinc-900 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
              Ready to learn directly from our senior team?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Join the next upcoming batch and get 1:1 mentor access.
            </p>
          </div>
          <button
            onClick={onNavigatePricing}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-purple-600/30 transition-all hover:scale-105"
          >
            <span>Check Course Pricing</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default AboutPage;
