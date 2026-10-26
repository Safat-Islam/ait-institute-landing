import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface CurriculumCard {
  id: number;
  title: string;
  description: string;
  color: string;
  badge?: string;
  topics?: string[];
}

/**
 * 20 Comprehensive Modules for the AI & YouTube Automation Program
 * Grounded directly on aitinstitutebd.com "The full curriculum"
 */
export const cardData: CurriculumCard[] = [
  {
    id: 1,
    title: "Module 01: Foundation & Business Mindset",
    description: "Core principles, mindset shift from consumer to digital asset owner, and building long-term recurring revenue systems.",
    color: "rgba(124, 58, 237, 0.8)",
    badge: "Orientation",
    topics: ["Creator vs Owner Mindset", "Long-term Compound Growth", "Setting Up Global Digital Assets"]
  },
  {
    id: 2,
    title: "Module 02: Digital Assets & Passive Income Architecture",
    description: "Understanding digital real estate, cash-flow channels, and automated revenue streams that pay 24/7 in USD.",
    color: "rgba(99, 102, 241, 0.8)",
    badge: "Core Strategy",
    topics: ["Digital Real Estate Framework", "Multi-Stream Monetization", "Asset Valuation & Longevity"]
  },
  {
    id: 3,
    title: "Module 03: Full YouTube Automation Overview",
    description: "End-to-end breakdown of faceless YouTube channels: team structure, automation tools, and multi-channel management.",
    color: "rgba(139, 92, 246, 0.8)",
    badge: "Systems",
    topics: ["Faceless Channel Mechanics", "Automation Tech Stack", "Solo Creator to Channel Owner"]
  },
  {
    id: 4,
    title: "Module 04: Complete Workflow: From Idea to Upload",
    description: "The complete step-by-step pipeline to streamline production from initial brainstorming to published video in hours.",
    color: "rgba(168, 85, 247, 0.8)",
    badge: "Workflow",
    topics: ["Production Pipeline Setup", "Asset Management System", "Batch Production Strategies"]
  },
  {
    id: 5,
    title: "Module 05: High-CPM Niche Research & Validation",
    description: "Secrets to uncovering profitable, high-paying niches with low competition before investing time and effort.",
    color: "rgba(79, 70, 229, 0.8)",
    badge: "Research",
    topics: ["High CPM Geography (US/UK/EU)", "Niche Profitability Matrix", "Evergreen vs Trending Analysis"]
  },
  {
    id: 6,
    title: "Module 06: Market Demand & Competition Analysis",
    description: "Evaluate audience demand, analyze top competitor channels, and discover unsaturated content gaps with data tools.",
    color: "rgba(99, 102, 241, 0.8)",
    badge: "Analytics",
    topics: ["Outlier Video Identification", "Gap Analysis Blueprint", "Keyword Volume & Velocity"]
  },
  {
    id: 7,
    title: "Module 07: Content & AI Scriptwriting Mastery",
    description: "Leverage ChatGPT, Claude, and proprietary prompt libraries to generate viral scripts using the Hook-Story-Payoff framework.",
    color: "rgba(124, 58, 237, 0.8)",
    badge: "AI Creation",
    topics: ["Proprietary AI Prompt Library", "Hook-Story-Payoff Formula", "Retention Script Structuring"]
  },
  {
    id: 8,
    title: "Module 08: Viewer Psychology & Watch-Time Retention",
    description: "Master dopamine loops, open loops, narrative pacing, and cliffhangers to skyrocket Average View Duration (AVD).",
    color: "rgba(217, 70, 239, 0.8)",
    badge: "Psychology",
    topics: ["Open Loops & Curiosity Gaps", "Visual Reset Intervals", "AVD Maximization Tactics"]
  },
  {
    id: 9,
    title: "Module 09: Human-Like AI Voiceover System",
    description: "Produce indistinguishable, realistic AI voiceovers using ElevenLabs, managing emotion, breathing, pacing, and audio polishing.",
    color: "rgba(139, 92, 246, 0.8)",
    badge: "Audio AI",
    topics: ["ElevenLabs Voice Cloning & Tuning", "Pacing & Inflection Control", "Audio Mixing & EQ in Audition"]
  },
  {
    id: 10,
    title: "Module 10: Advanced AI Visuals & B-Roll Generation",
    description: "Generate breathtaking, consistent visuals and cinematic video clips using Midjourney, Flux AI, Leonardo AI, and Hailuo AI.",
    color: "rgba(99, 102, 241, 0.8)",
    badge: "Visual AI",
    topics: ["Midjourney & Flux Photorealism", "Cinematic Prompt Engineering", "AI Video Generation (Hailuo/Runway)"]
  },
  {
    id: 11,
    title: "Module 11: Cinematic Editing & Sound Design",
    description: "Fast, dynamic video editing workflows in CapCut and Premiere Pro with motion graphics, SFX, and soundscape layering.",
    color: "rgba(124, 58, 237, 0.8)",
    badge: "Production",
    topics: ["CapCut Pro Fast Assembly", "Premiere Pro Color & Master", "Layered Sound Design & SFX"]
  },
  {
    id: 12,
    title: "Module 12: High-CTR Thumbnail Design & Psychology",
    description: "Design magnetic 12%+ CTR thumbnails using Canva & Photoshop, applying rule of thirds, contrast, and visual tension.",
    color: "rgba(236, 72, 153, 0.8)",
    badge: "Design",
    topics: ["Clickable Visual Hierarchy", "Color Psychology & Faces", "A/B Thumbnail Testing System"]
  },
  {
    id: 13,
    title: "Module 13: Copyright Protection & Channel Safety",
    description: "Navigate Fair Use law, copyright claims, safe stock platforms (Storyblocks, Pexels), and bulletproof your channel against strikes.",
    color: "rgba(139, 92, 246, 0.8)",
    badge: "Compliance",
    topics: ["Fair Use Legal Guidelines", "Safe Stock Footage & Music", "Copyright Strike Prevention Protocol"]
  },
  {
    id: 14,
    title: "Module 14: YouTube SEO & Algorithm Hacking",
    description: "Master metadata, tags, semantic titles, search volume, and trigger YouTube recommendation algorithms for browse features.",
    color: "rgba(79, 70, 229, 0.8)",
    badge: "Algorithm",
    topics: ["Search vs Browse Algorithms", "Semantic Metadata & Description", "Suggested Video Triggering"]
  },
  {
    id: 15,
    title: "Module 15: Upload Strategy & Batch Scheduling",
    description: "Data-backed publishing schedules, optimal upload times, automated scheduling, and playlist structuring for binge loops.",
    color: "rgba(124, 58, 237, 0.8)",
    badge: "Growth",
    topics: ["Optimal Publishing Windows", "Batch Scheduling Automation", "End-Screen & Binge Playlists"]
  },
  {
    id: 16,
    title: "Module 16: Channel Monetization Beyond AdSense",
    description: "Unlock high-ticket affiliate marketing, brand deals, digital product sales, and automated lead generation.",
    color: "rgba(16, 185, 129, 0.8)",
    badge: "Revenue",
    topics: ["High-Ticket Affiliate Funnels", "Brand Sponsorship Pitching", "Digital Product Backend Sales"]
  },
  {
    id: 17,
    title: "Module 17: Analytics Deep Dive & Growth Troubleshooting",
    description: "Diagnose retention drops, impressions-to-clicks funnels, traffic source breakdowns, and fix stagnant channels.",
    color: "rgba(99, 102, 241, 0.8)",
    badge: "Data",
    topics: ["YouTube Studio Analytics Audit", "Fixing Low CTR & Drop-offs", "Algorithm Shift Navigation"]
  },
  {
    id: 18,
    title: "Module 18: Scaling into a Multi-Channel Media Empire",
    description: "Hire, train, and manage virtual assistants and freelance editors to run 3+ channels simultaneously on autopilot.",
    color: "rgba(139, 92, 246, 0.8)",
    badge: "Scale",
    topics: ["Virtual Assistant Hiring SOPs", "Delegation & Quality Control", "Portfolio Diversification"]
  },
  {
    id: 19,
    title: "Module 19: High-Ticket Client Acquisition & Agency Model",
    description: "Package your skills to manage channels for foreign businesses, YouTubers, and corporate clients charging $1k-$3k/mo.",
    color: "rgba(245, 158, 11, 0.8)",
    badge: "Freelance",
    topics: ["Global Client Outreach on Upwork/LinkedIn", "High-Ticket Retainer Proposals", "Agency Delivery Systems"]
  },
  {
    id: 20,
    title: "Module 20: 1:1 Mentorship, Case Studies & Exit Strategies",
    description: "Real-world earning case studies, portfolio audits, channel flipping / sales on marketplaces, and long-term wealth roadmap.",
    color: "rgba(124, 58, 237, 0.8)",
    badge: "Mastery",
    topics: ["Real 6-Figure Channel Audits", "Flipping & Selling Channels", "Lifelong Alumni Community Access"]
  }
];
