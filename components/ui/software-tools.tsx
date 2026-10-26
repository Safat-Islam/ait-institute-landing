import React from 'react';

// App Icon Data representing all course software & creator tools
interface AppIcon {
  name: string;
  bg: string;
  svg: React.ReactNode;
}

const APPS: AppIcon[] = [
  // 1. ChatGPT
  {
    name: "ChatGPT",
    bg: "bg-[#10A37F]",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
        <path
          d="M20.5 10.2a5.2 5.2 0 0 0-.4-4.2 5.3 5.3 0 0 0-4.8-2.6 5.3 5.3 0 0 0-1.8.3A5.2 5.2 0 0 0 9.2 2a5.3 5.3 0 0 0-4.9 3.5 5.2 5.2 0 0 0-3 3.6 5.3 5.3 0 0 0 .9 5.3 5.2 5.2 0 0 0 .4 4.2 5.3 5.3 0 0 0 4.8 2.6c.6 0 1.2-.1 1.8-.3A5.2 5.2 0 0 0 13.4 22a5.3 5.3 0 0 0 4.9-3.5 5.2 5.2 0 0 0 3-3.6 5.3 5.3 0 0 0-.8-4.7z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  // 2. Obsidian / AI
  {
    name: "Obsidian",
    bg: "bg-[#7C3AED]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M12 2L3 8l3 12 6 2 6-2 3-12-9-6z" />
      </svg>
    ),
  },
  // 3. Outlook / Mail
  {
    name: "Outlook",
    bg: "bg-[#0078D4]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm3.5 2.5l6.5 4.5 6.5-4.5h-13z" />
      </svg>
    ),
  },
  // 4. Messenger / Discord
  {
    name: "Messenger",
    bg: "bg-gradient-to-tr from-[#006AFF] to-[#00C6FF]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.5 5.43 3.86 7.02V22l3.77-2.07c.75.21 1.54.32 2.37.32 5.52 0 10-4.03 10-9s-4.48-9-10-9zm1.18 11.75l-2.73-2.91-5.32 2.91 5.86-6.22 2.8 2.91 5.25-2.91-5.86 6.22z" />
      </svg>
    ),
  },
  // 5. Notion
  {
    name: "Notion",
    bg: "bg-[#FFFFFF] text-black",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2 2 0 0 1 2 2v15.5a2.5 2.5 0 0 1-2.5 2.5H6a2 2 0 0 1-2-2V4.5zm4.5 2.5v10l3-5.5v5.5h2v-10l-3 5.5V7h-2z" />
      </svg>
    ),
  },
  // 6. Claude / Anthropic
  {
    name: "Claude",
    bg: "bg-[#D97706]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M12 2L13.8 8.6L20.4 6.8L16.2 12L20.4 17.2L13.8 15.4L12 22L10.2 15.4L3.6 17.2L7.8 12L3.6 6.8L10.2 8.6L12 2Z" />
      </svg>
    ),
  },
  // 7. ElevenLabs
  {
    name: "ElevenLabs",
    bg: "bg-[#1E1B4B]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-purple-400">
        <rect x="7" y="4" width="3.5" height="16" rx="1.75" />
        <rect x="13.5" y="4" width="3.5" height="16" rx="1.75" />
      </svg>
    ),
  },
  // 8. Mail
  {
    name: "Mail",
    bg: "bg-[#007AFF]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  // 9. Instagram
  {
    name: "Instagram",
    bg: "bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4]",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  // 10. Figma
  {
    name: "Figma",
    bg: "bg-[#1E1E1E]",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E" />
        <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262" />
        <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF" />
        <path d="M12 7h4a2.5 2.5 0 0 1 0 5h-4V7z" fill="#1ABCFE" />
        <path d="M8 12h4v5a2.5 2.5 0 1 1-4-2.5V12z" fill="#0ACF83" />
      </svg>
    ),
  },
  // 11. Evernote
  {
    name: "Evernote",
    bg: "bg-[#00A82D]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M19.5 4c-.8-.8-2-1-3-1H7C4.8 3 3 4.8 3 7v10c0 2.2 1.8 4 4 4h9c2.2 0 4-1.8 4-4V7c0-1.1-.4-2.2-1-3l.5-.5V4z" />
      </svg>
    ),
  },
  // 12. Gmail
  {
    name: "Gmail",
    bg: "bg-[#FFFFFF]",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M4 6l8 6 8-6v12H4V6z" fill="#EA4335" />
        <path d="M4 6l8 6 8-6" fill="none" stroke="#EA4335" strokeWidth="2" />
      </svg>
    ),
  },
  // 13. Messages / Speech Bubble
  {
    name: "Messages",
    bg: "bg-[#34C759]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      </svg>
    ),
  },
  // 14. GitHub
  {
    name: "GitHub",
    bg: "bg-[#181717]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  // 15. Google Docs
  {
    name: "Docs",
    bg: "bg-[#4285F4]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM8 12h8v2H8v-2zm0 4h5v2H8v-2z" />
      </svg>
    ),
  },
  // 16. CapCut
  {
    name: "CapCut",
    bg: "bg-[#000000] border border-white/20",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-400">
        <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-7 13.5l-5-4 5-4v8zm6-4l-4 3.2V9.3l4 3.2z" />
      </svg>
    ),
  },
  // 17. Zoom
  {
    name: "Zoom",
    bg: "bg-[#2D8CFF]",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
        <path d="M4 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm13 2.5l4-2.5v10l-4-2.5v-5z" />
      </svg>
    ),
  },
  // 18. Midjourney
  {
    name: "Midjourney",
    bg: "bg-[#EA580C]",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
        <path d="M12 3L2 19h20L12 3z" />
        <path d="M12 9v10M8 15h8" />
      </svg>
    ),
  },
  // 19. Premiere Pro
  {
    name: "Premiere",
    bg: "bg-[#00005B]",
    svg: (
      <span className="text-sm font-black font-sans text-[#EA77FF]">Pr</span>
    ),
  },
  // 20. Notes / Script
  {
    name: "Notes",
    bg: "bg-[#FEF08A] text-amber-900",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-800">
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
];

export const SoftwareToolsSection: React.FC = () => {
  return (
    <div className="relative w-full bg-[#0d0f0e] text-white overflow-hidden" id="software">
      
      {/* =========================================================================
          Top Hero Section: Editorial Headline + Flowing Curved Arc of App Icons
          ========================================================================= */}
      <section className="relative pt-24 pb-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto min-h-[580px] flex flex-col justify-between">
        
        {/* Left Column: Editorial Headline & Copy */}
        <div className="relative z-20 max-w-lg mb-12 lg:mb-0">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-normal tracking-tight text-[#FAF9F5] leading-[1.12] mb-6">
            What Secret Software<br />
            We Use
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans font-light leading-relaxed max-w-sm mb-8">
            The secret AI tools and software stack powering our 6-figure faceless YouTube automation channels.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#F5F4EE] text-[#18181B] font-sans font-medium text-sm shadow-md hover:bg-white hover:scale-105 transition-all duration-200"
          >
            Watch in action
          </a>
        </div>

        {/* The Flowing Curved S-Shape Arc of App Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle curved background path guideline */}
          <svg className="absolute w-full h-full inset-0 opacity-15" preserveAspectRatio="none" viewBox="0 0 1200 600">
            <path
              d="M -50 320 C 300 350, 450 250, 700 150 C 900 80, 1100 60, 1250 80"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          </svg>

          {/* Curved Stream of App Icons along the Arc */}
          <div className="absolute right-0 top-12 w-full lg:w-[68%] h-[480px]">
            {APPS.map((app, i) => {
              // Mathematical calculation along the sweeping S-curve
              const t = i / (APPS.length - 1); // 0 to 1
              // S-curve X and Y coordinates
              const leftPercent = 2 + t * 94; // 2% to 96%
              // Cubic bezier parametric curve for Y: rises then curves
              const yOffset = Math.sin(t * Math.PI * 0.95) * -110 + (1 - t) * 160; 

              return (
                <div
                  key={app.name}
                  className="pointer-events-auto absolute group cursor-pointer transition-all duration-300 hover:scale-125 hover:z-50"
                  style={{
                    left: `${leftPercent}%`,
                    top: `calc(48% + ${yOffset}px)`,
                    transform: `translate(-50%, -50%) rotate(${Math.sin(t * 4) * 8}deg)`,
                  }}
                  title={app.name}
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 ring-1 ring-white/20 ${app.bg}`}
                    style={{
                      boxShadow: '0 12px 28px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.3)',
                    }}
                  >
                    {app.svg}
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-black/90 text-white text-[10px] font-sans px-2 py-0.5 rounded shadow">
                    {app.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
};

export default SoftwareToolsSection;
