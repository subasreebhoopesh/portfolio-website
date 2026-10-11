import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  return (
    <section ref={ref} id="contact" className="bg-[#0b0b0b] w-full min-h-screen relative overflow-hidden flex items-center justify-center py-32 border-t border-white/10 select-none">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 opacity-10"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-red-600 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
        >
          CONTACT
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-xs font-mono uppercase tracking-widest text-red-500">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
              <span>CONTACT // GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              Let's Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700">
                Together
              </span>
            </h2>
            <p className="text-white/60 text-base md:text-lg font-light max-w-2xl">
              Have an idea, a workflow that needs automating, or a problem you want to solve? Let's turn it into a working digital solution.
            </p>
          </div>

          {/* Email Section */}
          <div className="bg-[#141414]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 md:p-12 hover:border-red-600/40 transition-all duration-500 group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold mb-3">Email Me</h3>
                <a 
                  href="mailto:sreesuba219.2005@gmail.com" 
                  className="text-2xl md:text-3xl font-bold text-white hover:text-red-500 transition-colors break-all"
                >
                  sreesuba219.2005@gmail.com
                </a>
              </div>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('sreesuba219.2005@gmail.com');
                  alert('Email copied to clipboard!');
                }}
                className="px-6 py-3 rounded bg-white/5 hover:bg-red-600 text-white border border-white/10 hover:border-red-600 text-sm font-mono uppercase tracking-wider transition-all flex items-center gap-2 group-hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                </svg>
                Copy
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <a 
              href="https://github.com/subasreebhoopesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#141414]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-red-600/40 hover:bg-[#1a1a1a] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-mono text-white/40 uppercase tracking-wider">GitHub</h4>
                  <p className="text-white font-semibold group-hover:text-red-500 transition-colors">@subasreebhoopesh</p>
                </div>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/subasree-d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#141414]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-red-600/40 hover:bg-[#1a1a1a] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-mono text-white/40 uppercase tracking-wider">LinkedIn</h4>
                  <p className="text-white font-semibold group-hover:text-red-500 transition-colors">Connect →</p>
                </div>
              </div>
            </a>

            <a 
              href="mailto:sreesuba219.2005@gmail.com" 
              className="bg-[#141414]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-red-600/40 hover:bg-[#1a1a1a] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-mono text-white/40 uppercase tracking-wider">Email</h4>
                  <p className="text-white font-semibold group-hover:text-red-500 transition-colors">Send Mail →</p>
                </div>
              </div>
            </a>
          </div>

          {/* Bottom Note */}
          <p className="text-xs text-white/40 font-mono tracking-wider pt-8">
            // OPEN TO OPPORTUNITIES • B.TECH IT 2027
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
