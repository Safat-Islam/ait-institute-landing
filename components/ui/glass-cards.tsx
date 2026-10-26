import React, { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData, CurriculumCard } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

export const StackedCards: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const stageRef = useRef<HTMLDivElement>(null);
    const activeIndexRef = useRef<number>(0);
    const [currentModuleIndex, setCurrentModuleIndex] = useState<number>(0);
    const [selectedPhase, setSelectedPhase] = useState<'all' | 'p1' | 'p2' | 'p3' | 'p4'>('all');

    // Filter modules by phase for convenient exploration
    const activeCards = useMemo(() => {
        if (selectedPhase === 'p1') return cardData.filter(c => c.id >= 1 && c.id <= 5);
        if (selectedPhase === 'p2') return cardData.filter(c => c.id >= 6 && c.id <= 11);
        if (selectedPhase === 'p3') return cardData.filter(c => c.id >= 12 && c.id <= 16);
        if (selectedPhase === 'p4') return cardData.filter(c => c.id >= 17 && c.id <= 20);
        return cardData;
    }, [selectedPhase]);

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        const cards = gsap.utils.toArray<HTMLElement>('.stacked-module-card');
        const overlays = gsap.utils.toArray<HTMLElement>('.card-dim-layer');
        if (cards.length === 0) return;

        // Reset all cards initial GPU states
        cards.forEach((card, i) => {
            gsap.set(card, {
                yPercent: i === 0 ? 0 : 115,
                scale: 1,
                zIndex: 10 + i,
                transformOrigin: "center top",
                force3D: true,
            });
        });

        // Reset dimming overlays
        overlays.forEach((overlay) => {
            gsap.set(overlay, { opacity: 0 });
        });

        // Generous scroll runway so scrolling feels gradual, controlled, and buttery
        const scrollDistance = cards.length * 750;

        // Master pinned timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: stage,
                start: "top top",
                end: `+=${scrollDistance}`,
                pin: true,
                scrub: 1.2, // Silky smooth inertia damping
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    const step = Math.min(
                        cards.length - 1,
                        Math.floor(self.progress * cards.length)
                    );
                    // Prevent per-frame re-renders: only update state when card actually changes
                    if (step !== activeIndexRef.current) {
                        activeIndexRef.current = step;
                        setCurrentModuleIndex(step);
                    }
                }
            }
        });

        // Chain animations: Linear 1:1 motion + opacity dimming (zero GPU jank)
        cards.forEach((card, i) => {
            if (i > 0) {
                const label = `step-${i}`;
                const prevCard = cards[i - 1];
                const prevOverlay = overlays[i - 1];

                // Previous card scales down and dims via GPU-accelerated opacity (no CSS filter jank)
                tl.to(prevCard, {
                    scale: 0.93,
                    yPercent: -4,
                    ease: "none",
                    duration: 1
                }, label);

                if (prevOverlay) {
                    tl.to(prevOverlay, {
                        opacity: 0.45,
                        ease: "none",
                        duration: 1
                    }, label);
                }

                // Current card glides smoothly from bottom to top over previous card
                tl.to(card, {
                    yPercent: 0,
                    ease: "none",
                    duration: 1
                }, label);
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [activeCards]);

    return (
        <main ref={sectionRef} style={{ background: '#070510', position: 'relative', overflow: 'hidden' }}>
            
            {/* Ambient Lighting */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Curriculum Introduction */}
            <section className="relative z-10 pt-20 pb-10 px-4 text-center max-w-4xl mx-auto text-white">
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        linear-gradient(to right, rgba(124, 58, 237, 0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(124, 58, 237, 0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 70%, transparent 100%)',
                    pointerEvents: 'none'
                }} />

                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    Interactive 3D Stacking Cards
                </span>
                <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4 leading-tight">
                    The Full Curriculum
                </h2>
                <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto mb-8">
                    Scroll down to watch each card glide from bottom to top over the previous card.
                </p>

                {/* Interactive Phase Filter Buttons */}
                <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md flex-wrap justify-center mb-4">
                    <button
                        onClick={() => setSelectedPhase('all')}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                            selectedPhase === 'all' 
                                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30' 
                                : 'text-zinc-400 hover:text-white'
                        }`}
                    >
                        All Modules ({cardData.length})
                    </button>
                    <button
                        onClick={() => setSelectedPhase('p1')}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                            selectedPhase === 'p1' 
                                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30' 
                                : 'text-zinc-400 hover:text-white'
                        }`}
                    >
                        Phase 1 (1–5)
                    </button>
                    <button
                        onClick={() => setSelectedPhase('p2')}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                            selectedPhase === 'p2' 
                                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30' 
                                : 'text-zinc-400 hover:text-white'
                        }`}
                    >
                        Phase 2 (6–11)
                    </button>
                    <button
                        onClick={() => setSelectedPhase('p3')}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                            selectedPhase === 'p3' 
                                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30' 
                                : 'text-zinc-400 hover:text-white'
                        }`}
                    >
                        Phase 3 (12–16)
                    </button>
                    <button
                        onClick={() => setSelectedPhase('p4')}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                            selectedPhase === 'p4' 
                                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30' 
                                : 'text-zinc-400 hover:text-white'
                        }`}
                    >
                        Phase 4 (17–20)
                    </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs font-mono text-purple-400/80 uppercase tracking-widest mt-2">
                    <span>Active: Module {String(activeCards[currentModuleIndex]?.id || 1).padStart(2, '0')} / {activeCards.length}</span>
                    <span>&bull;</span>
                    <span>Scroll to Stack &darr;</span>
                </div>
            </section>

            {/* Pinned Stacking Viewport Stage */}
            <div 
                ref={stageRef}
                className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
            >
                {activeCards.map((card, index) => (
                    <div
                        key={card.id}
                        className="stacked-module-card absolute w-[90%] max-w-[860px] h-[450px]"
                        style={{
                            isolation: 'isolate',
                            willChange: 'transform',
                            transform: 'translate3d(0, 0, 0)',
                        }}
                    >
                        {/* Electric Conic Border Effect */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: '-3px',
                                borderRadius: '27px',
                                padding: '3px',
                                background: `conic-gradient(
                                    from 0deg,
                                    transparent 0deg,
                                    ${card.color} 60deg,
                                    ${card.color.replace('0.8', '0.6')} 120deg,
                                    transparent 180deg,
                                    ${card.color.replace('0.8', '0.4')} 240deg,
                                    transparent 360deg
                                )`,
                                zIndex: -1,
                            }}
                        />

                        {/* Main Glass Card Content */}
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                borderRadius: '24px',
                                background: `
                                    linear-gradient(145deg, 
                                        rgba(18, 14, 34, 0.94), 
                                        rgba(8, 6, 18, 0.98)
                                    )
                                `,
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                border: '1px solid rgba(255, 255, 255, 0.18)',
                                boxShadow: `
                                    0 24px 60px rgba(0, 0, 0, 0.65),
                                    0 2px 8px rgba(0, 0, 0, 0.4),
                                    inset 0 1px 0 rgba(255, 255, 255, 0.3),
                                    inset 0 -1px 0 rgba(255, 255, 255, 0.1)
                                `,
                                overflow: 'hidden',
                                padding: '2.5rem',
                            }}
                        >
                            {/* GPU Accelerated Black Dimming Overlay */}
                            <div 
                                className="card-dim-layer absolute inset-0 bg-black pointer-events-none rounded-[24px] z-20"
                                style={{ willChange: 'opacity' }}
                            />

                            {/* Glass reflection overlay */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '60%',
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.04) 50%, transparent 100%)',
                                pointerEvents: 'none',
                                borderRadius: '24px 24px 0 0',
                            }} />

                            {/* Top glass shine */}
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                right: '10px',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
                                borderRadius: '1px',
                                pointerEvents: 'none',
                            }} />

                            {/* Side glass reflection */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '2px',
                                height: '100%',
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
                                borderRadius: '24px 0 0 24px',
                                pointerEvents: 'none',
                            }} />

                            {/* Frosted texture */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundImage: `
                                    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 2px),
                                    radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 1px, transparent 2px),
                                    radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 1px, transparent 2px)
                                `,
                                backgroundSize: '30px 30px, 25px 25px, 35px 35px',
                                pointerEvents: 'none',
                                borderRadius: '24px',
                                opacity: 0.7,
                            }} />

                            {/* Module Details */}
                            <div className="relative z-10 flex flex-col justify-between h-full text-white">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                            {card.badge || `Phase 0${Math.ceil(card.id / 5)}`}
                                        </span>
                                        <span className="text-xs font-mono font-semibold text-white/50 tracking-widest uppercase">
                                            MODULE {String(card.id).padStart(2, '0')} / {cardData.length}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3 leading-snug">
                                        {card.title}
                                    </h3>

                                    <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
                                        {card.description}
                                    </p>
                                </div>

                                {card.topics && card.topics.length > 0 && (
                                    <div className="border-t border-white/10 pt-4 mt-2">
                                        <div className="text-[11px] uppercase font-mono tracking-widest text-purple-300/80 mb-2">
                                            Key Takeaways & Deliverables
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {card.topics.map((t, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="text-xs bg-white/[0.08] border border-white/10 text-white/95 px-3 py-1 rounded-lg backdrop-blur-sm"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Spacer */}
            <div className="h-16 w-full" />
        </main>
    );
};

export default StackedCards;
