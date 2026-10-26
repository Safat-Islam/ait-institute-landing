"use client";

import * as React from "react";
import { 
  CheckCircle2, 
  ArrowUpRight, 
  MessageSquare, 
  Youtube, 
  Facebook, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Video
} from "lucide-react";
import TestimonialCard, { Testimonial } from "@/components/ui/multi-media-testimonial";

const testimonials: Testimonial[] = [
  {
    name: "Tanvir Ahmed",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    title: "Monetized in 28 Days • $1,420/mo",
    designation: "Faceless Creator (Batch 14)",
    content:
      "Ruvy and AIT Institute transformed the way I build faceless YouTube channels. The secret AI software stack and 1:1 mentor support are unmatched in Bangladesh!",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Nusrat Jahan",
    profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    title: "128K Subscribers • Silver Play Button",
    designation: "Content Creator (Batch 12)",
    content:
      "The workflow with ElevenLabs and Midjourney taught here saves me over 15 hours every single week. Perfect for anyone wanting dollar earnings from home.",
    thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Sabbir Hossain",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    title: "3 Monetized Channels on Autopilot",
    designation: "Full-Time Creator (Batch 16)",
    content: "The mentor support alone is worth 10x the course fee. Managing multiple high-RPM automated channels is now completely streamlined.",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
  },
  {
    type: "text",
    name: "Diana Prince",
    profile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    title: "Flawless Scheduling & Production",
    designation: "Full Stack Creator",
    content:
      "The UI is sleek, intuitive, and makes scheduling video production a breeze. 10/10 experience!",
    rating: 5,
  },
  {
    name: "Fahim Rahman",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    title: "Doubled CTR from 3.2% to 9.4%",
    designation: "University Student (Batch 11)",
    content:
      "The Photoshop thumbnail psychology module doubled my click-through rate. Earning in USD right from Dhaka while continuing my studies.",
  },
  {
    name: "Fiona Gallagher",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    title: "Smooth and Intuitive AI Interface",
    designation: "Digital Creator",
    content: "Creating cinematic b-roll with Flux AI and Hailuo makes my channels stand out immediately.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "George Martin",
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    title: "Visually Stunning Faceless Videos",
    designation: "Video Producer",
    content: "The combination of CapCut Pro shortcuts and audio mixing tricks made video editing fast and fun.",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Hannah Lee",
    profile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80",
    title: "Efficient Automation Workflow",
    designation: "AI Strategist",
    content:
      "Testing different high-RPM niches has become effortless with the templates provided in the course.",
  },
  {
    type: "text",
    name: "Ian Wright",
    profile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80",
    title: "Time-Saving Secret Tools",
    designation: "Content Entrepreneur",
    content:
      "I can now generate full-length voiceovers and scripts without leaving my workspace. Saves so much time!",
  },
  {
    name: "Jane Doe",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    title: "Clean Visual Presentation",
    designation: "AI Researcher",
    content: "Real practical insights instead of theoretical fluff. Every module is action-oriented.",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Kyle Brown",
    profile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
    title: "Smooth Playback & Video Editing",
    designation: "Motion Designer",
    content: "The video editing secrets for YouTube retention helped push my latest video to 500K+ views.",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Laura Kim",
    profile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    title: "Simple Yet Powerful Framework",
    designation: "Freelance Editor",
    content:
      "The simplicity of this system is unmatched. Perfect for beginners and busy individuals looking for passive income.",
  },
  {
    name: "Michael Scott",
    profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
    title: "Organized Channel Management",
    designation: "Team Lead",
    content:
      "I manage 4 channels effortlessly with my small team. Love the clean methodology and responsiveness of mentors.",
  },
  {
    name: "Nina Patel",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    title: "Elegant Production Workflow",
    designation: "Media Specialist",
    content: "From script writing in Claude to ElevenLabs voices, the pipeline runs like clockwork.",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Oscar Wilde",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    title: "Impressive User Flow & Monetization",
    designation: "Content Strategist",
    content: "Within 45 days of following the curriculum, my first check cleared directly to my local bank account.",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Pam Beesly",
    profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    title: "Showcasing Real Student Results",
    designation: "Graphic Designer",
    content:
      "Love the community vibe and how easy it is to ask questions and get direct feedback on videos.",
  },
  {
    name: "Quentin Tarantino",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    title: "Perfect for Creative Storytellers",
    designation: "Director & Editor",
    content: "The pacing and retention techniques taught in Module 8 are pure gold for viral reach.",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Rachel Green",
    profile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80",
    title: "Enhanced Monetization & RPM",
    designation: "Marketing Specialist",
    content: "Targeting Tier 1 countries (US/UK/Canada) increased my channel RPM by over 400%!",
    mediaUrl: "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/crm(1)(1)(1).mp4",
    thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Steve Rogers",
    profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    title: "Streamlined Creation Process",
    designation: "Team Lead",
    content:
      "This system streamlines our content production pipeline like never before. Highly efficient and scalable!",
  },
  {
    name: "Sumaiya Akter",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    title: "Beautifully Structured Curriculum",
    designation: "Creator (Batch 13)",
    content:
      "Clean, intuitive, and extremely beginner-friendly. I had zero editing background and now run a profitable channel!",
  },
];

export const FooterReviewSection: React.FC = () => {
  return (
    <div className="relative w-full bg-[#0B0D17] text-white overflow-hidden pt-20 border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* =========================================================================
          MULTI-MEDIA TESTIMONIALS & REVIEWS SECTION
          ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-5">
            <Video className="w-3.5 h-3.5 text-purple-400" />
            Real Student Success Stories
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Our students love learning with us because we deliver real results.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            See how creators, freelancers, and entrepreneurs are building 6-figure automated YouTube channels and generating passive dollar income with AI.
          </p>
        </div>

        {/* Multi-Media Masonry Grid */}
        {Array.isArray(testimonials) && testimonials.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No testimonials yet.
          </p>
        )}

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
