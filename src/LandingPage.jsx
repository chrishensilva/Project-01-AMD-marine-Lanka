import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ChevronRight, Users } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  const logoRef    = useRef(null);
  const taglineRef = useRef(null);
  const descRef    = useRef(null);
  const btnsRef    = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    document.title = "AMD Marine Lanka | Engineering Excellence Across Every Ocean";
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(logoRef.current,    { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, delay: 0.1 })
      .fromTo(dividerRef.current, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.6 }, '-=0.4')
      .fromTo(taglineRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3')
      .fromTo(descRef.current,    { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
      .fromTo(btnsRef.current,    { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3');
  }, []);

  return (
    <div className="portal-root">
      {/* Animated background layers */}
      <div className="portal-bg" />
      <div className="portal-overlay" />

      {/* Floating decorative rings */}
      <div className="portal-ring portal-ring-1" aria-hidden="true" />
      <div className="portal-ring portal-ring-2" aria-hidden="true" />
      <div className="portal-ring portal-ring-3" aria-hidden="true" />

      <main className="portal-card" role="main">

        {/* Logo block */}
        <div ref={logoRef} className="portal-logo-block">
          <img src="/logo.png" alt="AMD Marine Lanka Logo" className="portal-logo-img" />
          <div className="portal-logo-text">
            <h1 className="portal-brand">AMD Marine Lanka</h1>
            <span className="portal-brand-sub">Pvt Ltd</span>
          </div>
        </div>

        {/* Accent divider */}
        <div ref={dividerRef} className="portal-divider" />

        {/* Tagline */}
        <h2 ref={taglineRef} className="portal-tagline">
          Engineering Excellence<br />
          <span className="portal-accent">Across Every Ocean</span>
        </h2>

        {/* Short description */}
        <p ref={descRef} className="portal-desc">
          AMD Marine Lanka Pvt Ltd is Sri Lanka's premier maritime technical partner,
          delivering world-class engineering, ship management, and operational support
          to shipowners and operators worldwide. Please select a section to continue.
        </p>

        {/* Navigation buttons */}
        <div ref={btnsRef} className="portal-btns" role="navigation" aria-label="Section navigation">

          <button
            id="btn-technical"
            className="portal-btn portal-btn-primary"
            onClick={() => navigate('/technical')}
            aria-label="Go to Technical Services"
          >
            <span className="portal-btn-icon portal-btn-icon-primary">
              {/* Ship wheel SVG */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3"/>
                <circle cx="12" cy="12" r="9"/>
                <line x1="12" y1="3" x2="12" y2="1"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="3" y1="12" x2="1" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.9" y1="4.9" x2="3.5" y2="3.5"/>
                <line x1="19.1" y1="4.9" x2="20.5" y2="3.5"/>
                <line x1="4.9" y1="19.1" x2="3.5" y2="20.5"/>
                <line x1="19.1" y1="19.1" x2="20.5" y2="20.5"/>
              </svg>
            </span>
            <span className="portal-btn-label">
              <span className="portal-btn-title">Technical</span>
              <span className="portal-btn-sub">Engineering &amp; Ship Services</span>
            </span>
            <ChevronRight size={20} className="portal-btn-arrow" aria-hidden="true" />
          </button>

          <button
            id="btn-recruitment"
            className="portal-btn portal-btn-ghost"
            onClick={() => navigate('/recruitment')}
            aria-label="Go to Recruitment"
          >
            <span className="portal-btn-icon portal-btn-icon-ghost">
              <Users size={22} aria-hidden="true" />
            </span>
            <span className="portal-btn-label">
              <span className="portal-btn-title">Recruitment</span>
              <span className="portal-btn-sub">Careers &amp; Opportunities</span>
            </span>
            <ChevronRight size={20} className="portal-btn-arrow" aria-hidden="true" />
          </button>

        </div>
      </main>

      {/* Subtle footer credit */}
      <footer className="portal-footer" role="contentinfo">
        <p>&copy; 2026 AMD Marine Lanka Pvt Ltd &mdash; Colombo, Sri Lanka</p>
      </footer>
    </div>
  );
};

export default LandingPage;
