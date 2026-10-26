import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  CheckCircle, 
  Circle, 
  Download, 
  ExternalLink, 
  Play, 
  Video, 
  Calendar, 
  Sparkles, 
  MessageSquare, 
  ShieldCheck, 
  ArrowLeft,
  Search,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { cardData } from "../../lib/utils";

interface DashboardPageProps {
  onNavigateHome: () => void;
  onNavigateCurriculum: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ 
  onNavigateHome, 
  onNavigateCurriculum 
}) => {
  const [activeTab, setActiveTab] = useState<"modules" | "resources" | "sessions">("modules");
  const [completedModules, setCompletedModules] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleModule = (id: number) => {
    setCompletedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const progressPercent = Math.round((completedModules.length / cardData.length) * 100);

  const filteredCards = cardData.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen bg-[#080A11] text-white pt-24 pb-28 px-4 sm:px-6 lg:px-8 selection:bg-purple-600 selection:text-white"
    >
      {/* Background glow */}
      <div className="absolute top-12 left-1/4 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Top Navigation Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Landing Page</span>
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Active Student License • Lifetime VIP Access
          </div>
        </div>

        {/* Welcome Header & Progress Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900/90 via-slate-900/90 to-purple-950/40 border border-zinc-800 shadow-2xl mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-xl shadow-purple-600/30">
                TA
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black text-white">Welcome back, Tanvir!</h1>
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                </div>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Enrolled in <span className="text-purple-300 font-semibold">YouTube Automation &amp; AI Media Mastery 2026</span> • Batch 14
                </p>
              </div>
            </div>

            {/* Overall Progress Widget */}
            <div className="lg:w-72 bg-black/50 border border-zinc-800 p-4 rounded-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-zinc-400 font-medium">Course Completion</span>
                <span className="text-purple-400 font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full transition-all duration-500" 
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-[11px] text-zinc-500">
                {completedModules.length} of {cardData.length} core modules completed
              </p>
            </div>

          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 mb-8 overflow-x-auto">
          {[
            { id: "modules", label: "My Modules & Curriculum", icon: BookOpen },
            { id: "resources", label: "Download Vault (Prompt Sheets & Presets)", icon: Download },
            { id: "sessions", label: "Live Q&A Sessions", icon: Calendar },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                    : "bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: MODULES LIST */}
        {activeTab === "modules" && (
          <div>
            {/* Search filter row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter curriculum topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="text-xs text-zinc-400">
                Tip: Click on any module checkbox to mark as complete
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCards.map((card) => {
                const isCompleted = completedModules.includes(card.id);
                return (
                  <div
                    key={card.id}
                    className={`p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                      isCompleted 
                        ? "bg-zinc-950/40 border-zinc-800/60 opacity-85" 
                        : "bg-zinc-900/60 border-zinc-800 hover:border-purple-500/40"
                    }`}
                  >
                    <button
                      onClick={() => toggleModule(card.id)}
                      className="mt-1 flex-shrink-0 text-purple-400 hover:scale-110 transition-transform"
                      title={isCompleted ? "Mark as uncompleted" : "Mark as completed"}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-emerald-400 fill-emerald-500/20" />
                      ) : (
                        <Circle className="w-5 h-5 text-zinc-600 hover:text-zinc-400" />
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest">
                          MODULE {String(card.id).padStart(2, '0')}
                        </span>
                        {isCompleted && (
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.2 rounded-full font-medium">
                            Completed
                          </span>
                        )}
                      </div>
                      <h3 className={`text-sm font-bold text-zinc-100 mb-1.5 ${isCompleted ? "line-through text-zinc-400" : ""}`}>
                        {card.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-3 line-clamp-2">
                        {card.description}
                      </p>

                      <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-800/80">
                        <span>{card.badge || "Core Module"} • {card.topics ? card.topics.length : 3} Lessons</span>
                        <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1">
                          <span>Watch Lesson</span>
                          <Play className="w-3 h-3 fill-current" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: RESOURCES VAULT */}
        {activeTab === "resources" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Viral Script Prompts 2026",
                category: "ChatGPT & Claude",
                size: "2.4 MB (PDF + TXT)",
                downloads: "3,400+ downloads"
              },
              {
                title: "Midjourney & Flux Photorealism Cheatsheet",
                category: "Image Gen Prompts",
                size: "18 MB (PDF + Images)",
                downloads: "2,850+ downloads"
              },
              {
                title: "CapCut Pro 4K Transition & Sound FX Pack",
                category: "Editing Assets",
                size: "450 MB (ZIP Archive)",
                downloads: "4,100+ downloads"
              },
              {
                title: "Photoshop 10%+ CTR Thumbnail PSD Templates",
                category: "Design Presets",
                size: "120 MB (5 PSD Files)",
                downloads: "3,100+ downloads"
              },
              {
                title: "High-RPM US & UK Niche Database (200+ Topics)",
                category: "Spreadsheet",
                size: "1.1 MB (Google Sheet / Excel)",
                downloads: "2,900+ downloads"
              },
              {
                title: "YouTube Channel Setup & Security Checklist",
                category: "Security & AdSense",
                size: "850 KB (PDF)",
                downloads: "3,750+ downloads"
              }
            ].map((res, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between hover:border-purple-500/30 transition-all">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {res.category}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {res.title}
                  </h4>
                  <p className="text-xs text-zinc-500 mb-4">{res.size} • {res.downloads}</p>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-purple-600 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors">
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resource</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: LIVE SESSIONS */}
        {activeTab === "sessions" && (
          <div className="space-y-4">
            {[
              {
                title: "Live Channel Breakdown & CTR Optimization",
                host: "Head Mentor • AIT Institute",
                date: "This Friday • 9:00 PM (BST)",
                status: "Upcoming Live",
                linkText: "Join Zoom Room (Passcode in VIP Telegram)"
              },
              {
                title: "AdSense Tax Form & USD Banking Setup Guide",
                host: "Guest Financial Consultant",
                date: "Next Tuesday • 8:30 PM (BST)",
                status: "Scheduled",
                linkText: "Set Calendar Reminder"
              },
              {
                title: "Deep-Dive into Flux AI & Hailuo Video Animation",
                host: "Lead AI Engineer",
                date: "Recorded Session (Available Now)",
                status: "Recording Ready",
                linkText: "Watch 1h 45m Recording"
              }
            ].map((sess, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-md inline-block mb-1">
                      {sess.status}
                    </span>
                    <h4 className="text-base font-bold text-white mb-1">{sess.title}</h4>
                    <p className="text-xs text-zinc-400">{sess.host} • <span className="text-zinc-300 font-medium">{sess.date}</span></p>
                  </div>
                </div>

                <button className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors">
                  <span>{sess.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </motion.div>
  );
};

export default DashboardPage;
