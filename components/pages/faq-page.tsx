import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  HelpCircle, 
  ShieldCheck, 
  MessageSquare, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

interface FAQPageProps {
  onNavigateHome: () => void;
  onNavigatePricing: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
  category: "enrollment" | "course" | "earnings" | "support";
}

const FAQS: FAQItem[] = [
  {
    category: "course",
    question: "Do I need prior video editing or AI skills to join?",
    answer: "No prior experience is needed. We start from the absolute fundamentals (Module 1-3) and walk you through every mouse click in CapCut, Photoshop, ElevenLabs, and ChatGPT. Many of our top-earning students had never edited a video before joining."
  },
  {
    category: "earnings",
    question: "How long before I start seeing results and earning?",
    answer: "While results depend on student consistency, most dedicated students who upload 2-3 videos per week following our high-RPM niche guidelines achieve YouTube Partner Program monetization within 30 to 60 days. Several students have monetized in under 4 weeks."
  },
  {
    category: "course",
    question: "What computer or laptop specifications do I need?",
    answer: "A basic laptop or desktop with 8GB RAM and an internet connection is sufficient. Because all heavy AI tasks (image generation, scriptwriting, voiceover) run in the cloud on the software servers, you do not need an expensive gaming PC or graphics card."
  },
  {
    category: "support",
    question: "How does the 1:1 trainer support work?",
    answer: "You receive 24/7 access to our VIP trainer support group. If you get stuck with thumbnail design, video pacing, or YouTube algorithm issues, our dedicated senior mentors review your work and provide direct screen recordings and actionable feedback."
  },
  {
    category: "enrollment",
    question: "What is your refund and satisfaction guarantee policy?",
    answer: "We offer a risk-free 30-day money-back guarantee. If you complete the initial coursework and feel that the program did not deliver on its promises, simply contact our support team for a full, prompt refund. No hassles."
  },
  {
    category: "earnings",
    question: "How do I withdraw YouTube earnings in Bangladesh?",
    answer: "YouTube earnings from Google AdSense transfer directly into any scheduled Bangladeshi bank account (e.g., Dutch-Bangla, City Bank, Islami Bank, BRAC Bank) via international wire transfer in US Dollars, automatically converted to Bangladeshi Taka without hassle."
  },
  {
    category: "course",
    question: "Do I have to show my face or use my own voice?",
    answer: "Absolutely not! 100% of the curriculum is focused exclusively on 'faceless' YouTube channels. We use photorealistic AI visuals and human-like voice synthesis models (ElevenLabs), meaning your identity remains completely private."
  },
  {
    category: "support",
    question: "How long do I have access to the course and community?",
    answer: "You receive lifetime access to the 20 core video modules, all future course updates, and 3 full years of VIP community & mentor support access."
  }
];

export const FAQPage: React.FC<FAQPageProps> = ({ 
  onNavigateHome, 
  onNavigatePricing 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<string>("all");

  const filteredFaqs = filter === "all" 
    ? FAQS 
    : FAQS.filter(f => f.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen bg-[#07090E] text-white pt-24 pb-28 px-4 sm:px-6 lg:px-8 selection:bg-purple-600 selection:text-white"
    >
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Back Link */}
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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            Got Questions? We Have Answers.
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about the curriculum, earnings potential, hardware requirements, and our 30-day guarantee.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Questions" },
              { id: "course", label: "Course & Software" },
              { id: "earnings", label: "Earnings & RPM" },
              { id: "support", label: "Mentor Support" },
              { id: "enrollment", label: "Guarantee & Refund" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                    : "bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3.5 mb-14">
          {filteredFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-zinc-100">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-purple-600 text-white" : "text-zinc-400"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 30-Day Guarantee Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-purple-950/30 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                100% Risk-Free 30-Day Money-Back Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Enroll with confidence. If you don't find value in the course, we will return your entire tuition without questions.
              </p>
            </div>
          </div>

          <button
            onClick={onNavigatePricing}
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
          >
            Enroll Risk-Free
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default FAQPage;
