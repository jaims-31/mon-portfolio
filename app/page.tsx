'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="bg-[#0a192f] min-h-screen text-[#94a3b8] font-sans selection:bg-[#5eead4]/30"
      style={{
        backgroundColor: '#0a192f',
        backgroundImage: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.05), transparent 80%)`,
        backgroundAttachment: 'fixed'
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .mon-tiret {
          display: inline-block;
          height: 1px;
          background-color: #ffffff;
          width: 32px;
          margin-right: 1rem;
          transition: width 0.3s ease;
        }
        .group:hover .mon-tiret {
          width: 64px;
        }
        html {
          scroll-behavior: smooth;
        }
        .project-card {
          transition: all 0.3s ease;
          border: 1px solid transparent;
          cursor: pointer;
          text-decoration: none;
          display: flex;
        }
        .project-card:hover {
          background-color: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }
        .tech-badge {
          display: inline-flex;
          align-items: center;
          background-color: rgba(45, 212, 191, 0.1);
          color: #5eead4;
          padding: 6px 16px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 14px;
          margin-right: 10px;
          margin-bottom: 10px;
        }
      `}} />

      <div className="max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="font-bold tracking-tight text-white" 
                  style={{ fontSize: '4rem', lineHeight: '1', marginBottom: '0px', marginLeft: '150px', paddingTop: '60px' }}>
                <a href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Franck Barry</a>
              </h1>

              <h2 className="font-medium tracking-tight text-[#e2e8f0]" 
                  style={{ fontSize: '3rem', marginTop: '0px', marginLeft: '150px' }}>
                iOS Developer
              </h2>

              <p className="leading-normal text-[#94a3b8]" 
                  style={{ fontSize: '1.5rem', marginTop: '20px', maxWidth: '600px', marginLeft: '150px' }}>
                I build accessible, pixel-perfect digital experiences for the web and mobile.
              </p>

              <nav className="nav mt-16 block" style={{ marginLeft: '110px' }}>
                <ul className="w-max list-none p-0 m-0">
                  <li className="mb-6">
                    <a className="group flex items-center py-3 no-underline" href="#about">
                      <span className="mon-tiret"></span>
                      <span className="font-bold uppercase tracking-widest text-[#e2e8f0] group-hover:text-white transition-all" 
                            style={{ fontSize: '1.5rem' }}>About</span>
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="group flex items-center py-3 no-underline" href="#experience">
                      <span className="mon-tiret"></span>
                      <span className="font-bold uppercase tracking-widest text-[#64748b] group-hover:text-[#e2e8f0] transition-all" 
                            style={{ fontSize: '1.5rem' }}>Experience</span>
                    </a>
                  </li>
                  <li className="mb-6">
                    <a className="group flex items-center py-3 no-underline" href="#projects">
                      <span className="mon-tiret"></span>
                      <span className="font-bold uppercase tracking-widest text-[#64748b] group-hover:text-[#e2e8f0] transition-all" 
                            style={{ fontSize: '1.5rem' }}>Projects</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <main id="content" className="lg:w-1/2 lg:py-24">
            
            <section id="about" className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" 
                     style={{ marginTop: '-120px' }}>
              <p className="leading-relaxed text-[#94a3b8] hover:text-[#e2e8f0] transition-colors duration-500" 
                 style={{ fontSize: '1.8rem', lineHeight: '1.4', maxWidth: '700px', marginLeft: 'auto', marginRight: '60px' }}>
                I’m an iOS developer who builds accessible, pixel‑perfect apps focused on clean code and smooth user experiences. I love turning ideas into polished products using Swift and SwiftUI.
              </p>
            </section>

            <section id="projects" className="scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: '60px', marginTop: '100px' }}>
                
                {/* PROJET 1 : PIANOREAD -> REDIRECTION GITHUB */}
                <a 
                  href="https://github.com/jaims-31/PianoRead" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-card group p-6 flex flex-row gap-8 items-start" 
                  style={{ marginBottom: '60px' }}
                >
                  <div style={{ 
                    width: '100px', 
                    height: '180px', 
                    flexShrink: 0, 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '4px',
                    border: '1px solid rgba(148, 163, 184, 0.1)'
                  }}>
                    <img src="/piano-auth.png" alt="Pianoread" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#e2e8f0] font-bold group-hover:text-[#5eead4] transition-colors flex items-center gap-2" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
                      Pianoread <span className="text-sm">↗</span>
                    </h3>
                    <p className="leading-relaxed text-[#94a3b8]" style={{ fontSize: '1.2rem', lineHeight: '1.5', marginBottom: '16px' }}>
                       An educational app designed to help users learn how to read musical notes in the treble and bass clefs.
                    </p>
                    <div className="flex flex-wrap mt-4">
                      {["SwiftUI", "Firebase", "AVFoundation"].map((tech) => (
                        <span key={tech} className="tech-badge" style={{ color: '#5eead4' }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </a>

                {/* PROJET 2 : PORTFOLIO (PRÊT POUR LIEN) */}
                <a 
                  href="#" 
                  className="project-card group p-6 flex flex-row gap-8 items-start"
                >
                  <div style={{ 
                    width: '100px', 
                    height: '190px', 
                    flexShrink: 0, 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    fontSize: '2rem',
                    border: '1px solid rgba(148, 163, 184, 0.1)'
                  }}>
                    💻
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#e2e8f0] font-bold group-hover:text-[#5eead4] transition-colors flex items-center gap-2" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
                      Interactive Portfolio <span className="text-sm">↗</span>
                    </h3>
                    <p className="leading-relaxed text-[#94a3b8]" style={{ fontSize: '1.2rem', lineHeight: '1.5', marginBottom: '16px' }}>
                      A portfolio site built with Gatsby.
                    </p>
                    <div className="flex flex-wrap mt-4">
                      {["Gatsby.js", "Styled Components", "React", "Netlify"].map((tech) => (
                        <span key={tech} className="tech-badge" style={{ color: '#5eead4' }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </a>

              </div>
            </section>
            
            <div className="h-[30vh]"></div>
          </main>
          
        </div>
      </div>
    </div>
  );
}