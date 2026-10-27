import React, { useState, useEffect, useRef, Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PerspectiveTunnelHero from "@/components/ui/perspective-tunnel-hero";
import { StackedCards } from "@/components/ui/glass-cards";
import Pricing from "@/components/ui/pricing-component";
import SoftwareToolsSection from "@/components/ui/software-tools";
import FooterReviewSection from "@/components/ui/footer-review-section";

// High-performance dynamic lazy loading for non-initial sub-pages
const MasterclassPage = lazy(() => import("@/components/pages/masterclass-page"));
const DashboardPage = lazy(() => import("@/components/pages/dashboard-page"));
const FAQPage = lazy(() => import("@/components/pages/faq-page"));
const CaseStudiesPage = lazy(() => import("@/components/pages/case-studies-page"));
const AboutPage = lazy(() => import("@/components/pages/about-page"));
const ContactPage = lazy(() => import("@/components/pages/contact-page"));

gsap.registerPlugin(ScrollTrigger);

export type PageView = "home" | "masterclass" | "dashboard" | "faq" | "case-studies" | "about" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>("home");
  const [wordIndex, setWordIndex] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  const words = [
    "Passive Income",
    "Dollar Earning",
    "YouTube Automation",
    "Content Creation",
  ];

  // High-performance Lenis Smooth Momentum Scroll Engine synchronized with GSAP
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.85, // Ultra-responsive, silky smooth momentum
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      syncTouch: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const rafHandler = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafHandler);
    gsap.ticker.lagSmoothing(500, 33); // Smooth frame drops prevention

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafHandler);
    };
  }, []);

  // Text Rotator Interval
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  // Handle page changes: reset scroll to top and refresh triggers
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
    return () => clearTimeout(timer);
  }, [currentPage]);

  // Smooth scroll handler for anchor links
  const handleNavigation = (target: string) => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        if (target.startsWith("#") && lenisRef.current) {
          lenisRef.current.scrollTo(target, { offset: -20, duration: 1.2 });
        }
      }, 150);
    } else {
      if (target.startsWith("#")) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(target, { offset: -20, duration: 1.2 });
        } else {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] text-[#0F172A] font-sans antialiased overflow-x-hidden">
      {/* Background Glows (Hardware composited) */}
      <div className="bg-glow-hardware fixed -top-24 -left-24 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="bg-glow-hardware fixed top-12 -right-24 w-[450px] h-[450px] bg-indigo-200/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-50 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentPage("home"); }} 
          className="flex items-center gap-2 group"
        >
          <svg className="w-12 h-7" viewBox="0 0 76 34" fill="none">
            <path
              d="M12.5 8C8.35786 8 5 11.3579 5 15.5C5 19.6421 8.35786 23 12.5 23C14.85 23 16.92 21.91 18.25 20.2V22.5H23V8.5H18.25V10.8C16.92 9.09 14.85 8 12.5 8ZM14 18.5C12.3431 18.5 11 17.1569 11 15.5C11 13.8431 12.3431 12.5 14 12.5C15.6569 12.5 17 13.8431 17 15.5C17 17.1569 15.6569 18.5 14 18.5Z"
              fill="url(#header_logo_grad)"
            />
            <circle cx="30" cy="9.5" r="3" fill="url(#header_logo_grad)" />
            <rect x="27.5" y="14" width="5" height="8.5" rx="2.5" fill="url(#header_logo_grad)" />
            <path
              d="M41 9V14H45.5V17.5H41V21C41 21.8 41.5 22.5 42.5 22.5H45.5V26H41.5C38.5 26 36.5 24.2 36.5 21V17.5H33V14H36.5V10L41 9Z"
              fill="url(#header_logo_grad)"
            />
            <defs>
              <linearGradient id="header_logo_grad" x1="5" y1="8" x2="45" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7C3AED" />
                <stop offset="1" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-extrabold text-lg tracking-wider text-slate-900 group-hover:text-purple-600 transition-colors">
            INSTITUTE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-slate-600 text-xs sm:text-sm">
          <button 
            onClick={() => setCurrentPage("home")}
            className={`transition-colors relative py-1 ${currentPage === "home" ? "text-purple-600 font-bold" : "hover:text-purple-600"}`}
          >
            Home
            {currentPage === "home" && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-purple-600 rounded-full" />
            )}
          </button>
          
          <button 
            onClick={() => setCurrentPage("masterclass")}
            className={`transition-colors relative py-1 flex items-center gap-1.5 ${currentPage === "masterclass" ? "text-purple-600 font-bold" : "hover:text-purple-600"}`}
          >
            <span>Masterclass</span>
            <span className="text-[10px] bg-purple-600 text-white font-bold px-1.5 py-0.2 rounded-full">
              FREE
            </span>
            {currentPage === "masterclass" && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-purple-600 rounded-full" />
            )}
          </button>

          <button 
            onClick={() => setCurrentPage("case-studies")}
            className={`transition-colors relative py-1 ${currentPage === "case-studies" ? "text-purple-600 font-bold" : "hover:text-purple-600"}`}
          >
            Case Studies
            {currentPage === "case-studies" && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-purple-600 rounded-full" />
            )}
          </button>

          <button 
            onClick={() => handleNavigation("#curriculum")}
            className="hover:text-purple-600 transition-colors"
          >
            Curriculum
          </button>

          <button 
            onClick={() => handleNavigation("#software")}
            className="hover:text-purple-600 transition-colors"
          >
            Software
          </button>

          <button 
            onClick={() => handleNavigation("#pricing")}
            className="hover:text-purple-600 transition-colors"
          >
            Pricing
          </button>

          <button 
            onClick={() => setCurrentPage("about")}
            className={`transition-colors relative py-1 ${currentPage === "about" ? "text-purple-600 font-bold" : "hover:text-purple-600"}`}
          >
            Mentors
            {currentPage === "about" && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-purple-600 rounded-full" />
            )}
          </button>

          <button 
            onClick={() => setCurrentPage("faq")}
            className={`transition-colors relative py-1 ${currentPage === "faq" ? "text-purple-600 font-bold" : "hover:text-purple-600"}`}
          >
            FAQ
            {currentPage === "faq" && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-purple-600 rounded-full" />
            )}
          </button>

          <button 
            onClick={() => setCurrentPage("contact")}
            className={`transition-colors relative py-1 ${currentPage === "contact" ? "text-purple-600 font-bold" : "hover:text-purple-600"}`}
          >
            Contact
            {currentPage === "contact" && (
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-purple-600 rounded-full" />
            )}
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setCurrentPage("dashboard")}
            className={`font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full shadow-md transition-all flex items-center gap-2 ${
              currentPage === "dashboard"
                ? "bg-purple-700 text-white shadow-purple-600/40"
                : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-500/25 hover:shadow-lg hover:scale-105"
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <span>Student Portal</span>
          </button>
        </div>
      </header>

      {/* Animated Multi-Page View Transition Switcher */}
      <Suspense
        fallback={
          <div className="min-h-[70vh] flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-3 border-purple-600 border-t-transparent animate-spin" />
          </div>
        }
      >
        <AnimatePresence mode="wait">
        
        {/* PAGE 1: FREE MASTERCLASS */}
        {currentPage === "masterclass" && (
          <MasterclassPage 
            key="masterclass"
            onNavigateHome={() => setCurrentPage("home")} 
            onNavigatePricing={() => {
              setCurrentPage("home");
              setTimeout(() => {
                if (lenisRef.current) lenisRef.current.scrollTo("#pricing", { offset: -20 });
              }, 150);
            }} 
          />
        )}

        {/* PAGE 2: STUDENT PORTAL / DASHBOARD */}
        {currentPage === "dashboard" && (
          <DashboardPage 
            key="dashboard"
            onNavigateHome={() => setCurrentPage("home")} 
            onNavigateCurriculum={() => {
              setCurrentPage("home");
              setTimeout(() => {
                if (lenisRef.current) lenisRef.current.scrollTo("#curriculum", { offset: -20 });
              }, 150);
            }} 
          />
        )}

        {/* PAGE 3: CASE STUDIES */}
        {currentPage === "case-studies" && (
          <CaseStudiesPage 
            key="case-studies"
            onNavigateHome={() => setCurrentPage("home")}
            onNavigatePricing={() => {
              setCurrentPage("home");
              setTimeout(() => {
                if (lenisRef.current) lenisRef.current.scrollTo("#pricing", { offset: -20 });
              }, 150);
            }}
          />
        )}

        {/* PAGE 4: ABOUT & MENTORS */}
        {currentPage === "about" && (
          <AboutPage 
            key="about"
            onNavigateHome={() => setCurrentPage("home")}
            onNavigatePricing={() => {
              setCurrentPage("home");
              setTimeout(() => {
                if (lenisRef.current) lenisRef.current.scrollTo("#pricing", { offset: -20 });
              }, 150);
            }}
          />
        )}

        {/* PAGE 5: FAQ & GUARANTEES */}
        {currentPage === "faq" && (
          <FAQPage 
            key="faq"
            onNavigateHome={() => setCurrentPage("home")} 
            onNavigatePricing={() => {
              setCurrentPage("home");
              setTimeout(() => {
                if (lenisRef.current) lenisRef.current.scrollTo("#pricing", { offset: -20 });
              }, 150);
            }} 
          />
        )}

        {/* PAGE 6: CONTACT & CONSULTATION */}
        {currentPage === "contact" && (
          <ContactPage 
            key="contact"
            onNavigateHome={() => setCurrentPage("home")}
          />
        )}

        {/* PAGE 7 (DEFAULT): FULL RESPONSIVE LANDING PAGE */}
        {currentPage === "home" && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Section */}
            <section className="relative z-10 max-w-5xl mx-auto px-4 pt-6 pb-20 text-center flex flex-col items-center" id="home">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full mb-7">
                <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                <span className="text-xs font-bold tracking-wider text-purple-600 uppercase">
                  AI Automation Program 2026
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-8">
                Master AI Automation
                <br />
                Before{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  The World
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                  Leaves You Behind
                </span>
              </h1>

              {/* Stats Pill */}
              <div className="inline-flex items-center gap-7 bg-white/95 border border-purple-100 shadow-sm shadow-purple-500/5 px-8 py-2.5 rounded-full mb-10 text-sm">
                <div><strong className="text-purple-600 font-extrabold text-base">3,800+</strong> <span className="text-slate-800 font-semibold">Students</span></div>
                <div><strong className="text-purple-600 font-extrabold text-base">70+</strong> <span className="text-slate-800 font-semibold">Hours</span></div>
                <div><strong className="text-purple-600 font-extrabold text-base">12</strong> <span className="text-slate-800 font-semibold">Months Live Support</span></div>
              </div>

              {/* Video Card */}
              <div className="w-full max-w-[991px] aspect-[991/557] rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/20 bg-black relative">
                <iframe
                  className="w-full h-full border-none"
                  src="https://www.youtube.com/embed/nz-Z9ubuS3c"
                  title="Class 01: YouTube Automation Fundamentals A-Z | Professional Faceless YouTube Channel Setup 2026"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-sm text-slate-500">Watch the video carefully...</p>
            </section>

            {/* AI + Automation + Animated Capsule Section */}
            <section className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center flex flex-col items-center" id="course">
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6 flex flex-col items-center gap-3">
                <span>AI + Automation +</span>
                <span className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 text-white px-9 py-2 rounded-2xl shadow-xl shadow-purple-500/40 text-3xl sm:text-5xl transition-all duration-300">
                  {words[wordIndex]}
                </span>
              </h2>

              <p className="text-lg text-slate-600 max-w-xl mb-10 leading-relaxed">
                Everything in one place. Our AI automation program is built with the{" "}
                <strong className="text-slate-900 font-bold">best support system</strong> in the country.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
                <a
                  href="#pricing"
                  onClick={(e) => { e.preventDefault(); handleNavigation("#pricing"); }}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg shadow-purple-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <span>Enroll now</span>
                  <span>&rarr;</span>
                </a>
                <button
                  onClick={() => setCurrentPage("masterclass")}
                  className="bg-white border-2 border-purple-600 text-purple-600 font-bold text-base px-8 py-3.5 rounded-full hover:bg-purple-50 transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>Watch Free Masterclass</span>
                </button>
              </div>

              <div className="w-full max-w-2xl h-px bg-slate-200 mb-10" />

              <div className="w-full max-w-xl flex items-center justify-between">
                <div className="flex-1 text-center">
                  <div className="text-3xl font-black text-slate-900">24/7</div>
                  <div className="text-xs font-bold text-slate-500 tracking-wider">EXPERT SUPPORT</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="flex-1 text-center">
                  <div className="text-3xl font-black text-slate-900">3,800+</div>
                  <div className="text-xs font-bold text-slate-500 tracking-wider">ACTIVE ALUMNI</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="flex-1 text-center">
                  <div className="text-3xl font-black text-slate-900">4.9/5</div>
                  <div className="text-purple-600 text-sm tracking-wide">★★★★★</div>
                </div>
              </div>
            </section>

            {/* Us VS Others Section */}
            <section id="us-vs-others" className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
              <span className="text-xs font-extrabold tracking-widest text-purple-600 uppercase">THE DIFFERENCE</span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-2 mb-3">Us VS Others</h2>
              <p className="text-purple-600 font-bold text-lg mb-2">Why is our program the best?</p>
              <p className="text-slate-600 mb-12">Don't just learn automation learn real-world, in-demand skills.</p>

              <div className="bg-white rounded-2xl border border-purple-100 shadow-xl shadow-purple-500/5 overflow-hidden text-left mb-10">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-8 py-5 flex font-extrabold text-sm tracking-wider">
                  <div className="flex-1">FEATURES</div>
                  <div className="w-24 text-center">US</div>
                  <div className="w-24 text-center">OTHERS</div>
                </div>

                {[
                  "Free community access for 3 full years",
                  "The best trainer support system in Bangladesh",
                  "Proven strategies for faster results",
                  "Live 1:1 support system",
                  "Opportunity to be hired for in-house projects",
                  "Regular updates on latest trending topics",
                  "Professional Freelancer Certificate",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className={`flex items-center px-8 py-5 border-b border-purple-50 last:border-none ${
                      i % 2 === 1 ? "bg-purple-50/30" : "bg-white"
                    }`}
                  >
                    <div className="flex-1 font-semibold text-slate-800 text-sm sm:text-base">{feature}</div>
                    <div className="w-24 flex justify-center">
                      <span className="w-7 h-7 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md shadow-purple-600/30">
                        ✓
                      </span>
                    </div>
                    <div className="w-24 flex justify-center">
                      <span className="w-7 h-7 bg-purple-100 text-purple-300 rounded-full flex items-center justify-center text-xs font-bold">
                        ✕
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* The 20-Module Glass Cards Stacking Curriculum Section */}
            <div id="curriculum" className="cv-auto gpu-layer">
              <StackedCards />
            </div>

            {/* Software & Tools We Use Section */}
            <div id="software" className="cv-auto gpu-layer">
              <SoftwareToolsSection />
            </div>

            {/* The Pricing Section (0 TK, 8,200 TK, 50,000 TK) */}
            <div id="pricing" className="cv-auto gpu-layer">
              <Pricing />
            </div>

            {/* 3D Perspective Tunnel Hero */}
            <section className="relative border-t border-slate-200 gpu-layer cv-auto">
              <PerspectiveTunnelHero />
            </section>

            {/* Professional Simple Footer & Student Reviews Section */}
            <div id="reviews" className="cv-auto gpu-layer">
              <FooterReviewSection />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </Suspense>
    </div>
  );
}
