import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Certification Data
const certificationsData = [
  {
    name: "Prodigy InfoTech Certificate",
    issuer: "Prodigy InfoTech",
    date: "2024",
    link: "/certificates/certificate1.pdf",
    description: "Web Development Certification"
  },
  {
    name: "Cognifyz Technologies Certificate",
    issuer: "Cognifyz Technologies",
    date: "2024",
    link: "/certificates/cognifyz.pdf",
    description: "Software Development Certification"
  },
  {
    name: "TCS iON Career Edge Certificate",
    issuer: "Tata Consultancy Services",
    date: "2024",
    link: "/certificates/tcs.pdf",
    description: "Professional Skills Certification"
  },
  {
    name: "Udemy Course Completion",
    issuer: "Udemy",
    date: "2024",
    link: "/certificates/udemy.pdf",
    description: "Online Course Certificate"
  }
];

const Certifications = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Cinematic Stagger Entrance
    gsap.fromTo(
      cardRefs.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Interactive Mouse Spotlight
    const cards = cardRefs.current;
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach((card) => {
      if (!card) return;
      const listener = (e) => handleMouseMove(e, card);
      card.addEventListener('mousemove', listener);
      return () => card.removeEventListener('mousemove', listener);
    });

  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050505] text-white py-20 px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
    >
      {/* Background Cinematic Red Ambient Glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">ACHIEVEMENTS</span>
            <span className="text-white/40">|</span>
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            CERTIFICATIONS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              & ACHIEVEMENTS.
            </span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={addToRefs}
              className="p-6 md:p-8 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl flex flex-col justify-between relative group hover:border-red-600/60 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Real-time mouse hover spotlight highlight */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(229,9,20,0.15), transparent 70%)'
                }}
              ></div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight group-hover:text-red-500 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <span className="font-semibold text-white/80">{cert.issuer}</span>
                      <span className="text-white/40">•</span>
                      <span>{cert.date}</span>
                    </div>
                    {cert.description && (
                      <p className="text-xs text-white/50 font-light">{cert.description}</p>
                    )}
                  </div>
                </div>

                {/* View Certificate Link */}
                <div className="flex items-center gap-2 text-xs font-mono text-red-500 group-hover:text-red-400 transition-colors">
                  <span>VIEW CERTIFICATE</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Red Glowing Corner Accent */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-red-600 group-hover:shadow-[0_0_10px_#E50914] z-10 transition-all"></div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
