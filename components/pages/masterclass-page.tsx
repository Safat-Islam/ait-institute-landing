import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  Video,
  Award
} from "lucide-react";

interface MasterclassPageProps {
  onNavigateHome: () => void;
  onNavigatePricing: () => void;
}

export const MasterclassPage: React.FC<MasterclassPageProps> = ({ 
  onNavigateHome, 
  onNavigatePricing 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setRegistered(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-[#07090E] text-white pt-24 pb-28 px-4 sm:px-6 lg:px-8 selection:bg-purple-600 selection:text-white"
    >
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-widest mb-4">
            <Video className="w-3.5 h-3.5 text-purple-400" />
            Free 45-Minute Masterclass
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-6">
            From $0 to $3,000/mo: The Faceless YouTube Blueprint
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Discover the exact secret AI software stack and high-RPM automation framework our students use to generate passive dollar income without showing their face.
          </p>
        </div>

        {/* Masterclass Video Player Container */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-950/40 bg-black mb-12">
          {!isPlaying ? (
            <div className="relative w-full h-full flex items-center justify-center group cursor-pointer" onClick={() => setIsPlaying(true)}>
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80"
                alt="Masterclass thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-2xl shadow-purple-600/50 group-hover:scale-110 group-hover:bg-purple-500 transition-all duration-300 mb-4">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <span className="text-sm font-semibold tracking-wide text-zinc-200">
                  Click to Watch Masterclass (45:12)
                </span>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-full border-none"
              src="https://www.youtube.com/embed/nz-Z9ubuS3c?autoplay=1"
              title="AIT Institute Masterclass"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Key Takeaways & Registration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: What You Will Learn (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              What You Will Learn in This Masterclass
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: "High-RPM US & UK Niche Selection",
                  desc: "Why certain niches pay $25+ RPM while local content pays $1, and how to pick the most profitable topic."
                },
                {
                  title: "The 30-Minute AI Video Production Pipeline",
                  desc: "Generate scripts with Claude, realistic voiceovers with ElevenLabs, and cinematic visuals with Flux AI."
                },
                {
                  title: "Thumbnail Psychology for 10%+ CTR",
                  desc: "Visual composition, contrast tricks, and typography secrets that get pushed by the YouTube recommendation engine."
                },
                {
                  title: "Fast-Track Monetization Strategy",
                  desc: "Legitimate algorithmic optimization to reach 1,000 subscribers and 4,000 watch hours within 30-45 days."
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-zinc-950/40 border border-zinc-800/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-zinc-100 mb-1">{item.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-purple-400" />
                45 Minutes Pure Content
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-purple-400" />
                12,400+ Creators Watched
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-purple-400" />
                Updated for 2026
              </span>
            </div>
          </div>

          {/* Right Column: Q&A Registration Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-purple-950/40 via-zinc-900/80 to-zinc-900 border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-xl">
            {!registered ? (
              <>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Join the Next Live Q&A Session
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                  Get your questions answered directly by the AIT Institute lead instructors in our upcoming private Zoom room.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tanvir Ahmed"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">WhatsApp / Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+880 1700-000000"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02]"
                  >
                    Reserve Free Seat Now
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    100% Free • No credit card required
                  </p>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Seat Confirmed!</h4>
                <p className="text-xs text-zinc-400 mb-6">
                  Thank you <strong className="text-white">{name}</strong>. We've sent the Zoom session link and VIP calendar invite to <strong className="text-purple-300">{email}</strong>.
                </p>
                <button
                  onClick={onNavigatePricing}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-md"
                >
                  <span>Explore Full Course Tiers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default MasterclassPage;
