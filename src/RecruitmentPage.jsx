import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users, Ship, Anchor, Wrench, Shield, Globe,
  CheckCircle, ArrowLeft, Mail, Phone, MapPin,
  ChevronRight, ArrowRight, ClipboardCheck, Briefcase,
  LifeBuoy, Award
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Data ─────────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'marine-crewing',
    icon: Ship,
    title: 'Marine Crewing',
    desc: 'Qualified seafarers for all vessel types worldwide, from deck and engine departments to catering crews.',
    details: 'Deck Department (Masters to Cadets), Engine Department (Chief Engineers to Fitters), and onboard Catering Teams.',
    img: '/crew.webp'
  },
  {
    id: 'hospitality-crew',
    icon: Users,
    title: 'Passenger & Hospitality Crew',
    desc: 'Trained hospitality personnel for cruise vessels and onboard service operations with excellent communication.',
    details: 'Stewards, F&B Staff, Galley Utility, and Guest Service Assistants with service-oriented attitudes.',
    img: './catering.webp'
  },
  {
    id: 'technical-crew',
    icon: Wrench,
    title: 'Technical & Specialized Crew',
    desc: 'Skilled personnel for maintenance, shipyard activities, and offshore projects including riding squads.',
    details: 'Riding Squads, Dry Dock Teams, NDT Technicians, Fitters, Welders, and Electrical Technicians.',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'shore-recruitment',
    icon: Globe,
    title: 'Shore Recruitment',
    desc: 'Manpower solutions for land-based operations, particularly in industrial catering across the Middle East.',
    details: 'Cooks, Bakers, Utility Staff for Industrial Camps, Oil & Gas sites, and Facilities Management.',
    img: '/shore.webp'
  }
];

const STRENGTHS = [
  { icon: ClipboardCheck, label: 'Efficient Screening', desc: 'Rigorous selection process to ensure only the most competent candidates are shortlisted.' },
  { icon: Shield, label: 'STCW & MLC Compliant', desc: 'Strict adherence to international maritime standards including MLC 2006 and STCW.' },
  { icon: Globe, label: 'Global Mobilization', desc: 'Fast and reliable deployment capability to major ports and industrial sites worldwide.' },
  { icon: Award, label: 'Ethical Practices', desc: 'Committed to transparent and ethical recruitment, building trust with clients and crew.' }
];

/* ── Animate helper ──────────────────────────────────────────────────────── */
function fadeUp(targets, trigger, stagger = 0) {
  gsap.fromTo(
    targets,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger,
        start: 'top 82%',
        once: true,
      },
    }
  );
}

const RecruitmentPage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const strengthsRef = useRef(null);
  const aboutRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    document.title = "Careers & Recruitment | AMD Marine Lanka - Global Manpower Solutions";
    /* Hero entrance */
    gsap.fromTo('.recruit-hero-badge', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2 });
    gsap.fromTo('.recruit-hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.4 });
    gsap.fromTo('.recruit-hero-sub', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.6 });
    gsap.fromTo('.recruit-hero-btns', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.8 });

    /* Scroll triggered */
    fadeUp('.recruit-service-card', servicesRef.current, 0.1);
    fadeUp('.recruit-strength-card', strengthsRef.current, 0.1);
    fadeUp('.recruit-about-content', aboutRef.current, 0);
    fadeUp('.recruit-cta-card', ctaRef.current, 0);

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <div className={`app recruit-page-root${menuOpen ? ' nav-open-active' : ''}`}>

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="fixed-nav glass" role="navigation" aria-label="Main navigation">
        <div className="container nav-container">
          <a href="/" className="logo" aria-label="AMD Marine Lanka home">
            <img src="/Logo.webp" alt="AMD Marine Lanka Logo" className="logo-img" decoding="async" />
            <div className="logo-text">
              <span className="logo-brand">AMD Marine Lanka</span>
              <span className="logo-sub">Pvt Ltd</span>
            </div>
          </a>

          <div className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#apply" onClick={() => setMenuOpen(false)}>Careers</a>
            <a href="/" onClick={() => setMenuOpen(false)}>Back to Portal</a>
            <a href="#apply" className="btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
              Join Our Crew
            </a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="hero recruit-hero">
        <div className="hero-bg" style={{ backgroundImage: 'url("/recruitment_hero.png")' }} />
        <div className="hero-overlay" />
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge recruit-hero-badge">Crewing & Recruitment Specialists</div>
            <h1 className="hero-title recruit-hero-title">
              Connecting Talent<br />
              <span className="hero-accent">To Maritime Excellence</span>
            </h1>
            <p className="hero-sub recruit-hero-sub">
              AMD Marine Lanka (Pvt) Ltd provides qualified marine, technical, and shore-based personnel
              to clients across the Middle East and the global maritime industry.
              Delivering the right people at the right time.
            </p>
            <div className="hero-btns recruit-hero-btns">
              <a href="#apply" className="btn-primary btn-lg">
                Join Our Network <ChevronRight size={18} />
              </a>
              <a href="#services" className="btn-ghost btn-lg">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────── */}
      <section id="about" ref={aboutRef} className="section-padding recruit-about">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text recruit-about-content">
              <span className="eyebrow">About Our Services</span>
              <h2>Professional Crewing & Shore-Based Solutions</h2>
              <p>
                We provide professional recruitment and crewing services to shipowners,
                offshore operators, shipyards, and international employers.
                Our team is committed to supplying competent, certified, and well-screened personnel.
              </p>
              <p>
                Our operations align strictly with international maritime standards,
                ensuring compliance with the Maritime Labour Convention (MLC) 2006
                and the STCW Convention for all seafarers we deploy.
              </p>
              <div className="reach-item" style={{ marginTop: '20px' }}>
                <CheckCircle size={18} className="reach-icon" />
                <span>Access to a strong pool of qualified Sri Lankan seafarers</span>
              </div>
              <div className="reach-item">
                <CheckCircle size={18} className="reach-icon" />
                <span>Dedicated coordination and 24/7 client support</span>
              </div>
            </div>
            <div className="overview-aside">
              <div className="vision-card glass">
                <h3>Our Commitment</h3>
                <p>
                  We follow ethical recruitment practices and aim to build long-term partnerships
                  based on trust and performance, ensuring both employer and crew thrive.
                </p>
              </div>
              <div className="mission-card">
                <h3>Our Specialized Focus</h3>
                <p>
                  "Delivering the right people at the right time — efficiently, reliably,
                  and in full compliance with global regulations."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────── */}
      <section id="services" ref={servicesRef} className="section-padding services-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Recruitment Specializations</span>
            <h2>Global Manpower Solutions</h2>
            <p>From deep-sea tankers to land-based hospitality, we cover the full spectrum of recruitment.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map(s => {
              const Icon = s.icon;
              return (
                <div key={s.id} className="service-card recruit-service-card">
                  <div 
                    className="service-img" 
                    style={{ backgroundImage: `url("${s.img}")` }}
                    role="img"
                    aria-label={`${s.title} illustration`}
                  >
                    <div className="service-img-overlay" />
                    <div className="service-img-icon"><Icon size={28} /></div>
                  </div>
                  <div className="service-body">
                    <h3>{s.title}</h3>
                    <p className="service-desc">{s.desc}</p>
                    <p className="service-details">{s.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Strengths ───────────────────────────────────────────────────── */}
      <section ref={strengthsRef} className="section-padding why-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Strengths</span>
            <h2>Why Partners Choose Us</h2>
            <p>Our focus on quality, compliance, and speed sets us apart in the industry.</p>
          </div>
          <div className="why-grid">
            {STRENGTHS.map(s => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="why-card glass recruit-strength-card">
                  <div className="why-icon-wrap"><Icon size={26} /></div>
                  <h3>{s.label}</h3>
                  <p>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Apply / CTA ─────────────────────────────────────────────────── */}
      <section id="apply" ref={ctaRef} className="section-padding recruit-cta-section">
        <div className="container">
          <div className="recruit-cta-card glass">
            <div className="recruit-cta-content">
              <span className="eyebrow">Join Our Network</span>
              <h2>Start Your Journey With AMD Marine Lanka</h2>
              <p>
                We welcome qualified and motivated candidates to join our network.
                Opportunities are available for Deck & Engine Ratings, Catering Crew,
                and Technical Personnel (Fitters, Welders, NDT Technicians).
              </p>
              <div className="cta-email-box">
                <div className="email-icon-wrap"><Mail size={24} /></div>
                <div className="email-text">
                  <span>Send your CV to:</span>
                  <a href="mailto:amdmarinecrew@gmail.com">amdmarinecrew@gmail.com</a>
                </div>
              </div>
              <p className="cta-note">
                Shortlisted candidates will be contacted based on current and upcoming opportunities.
              </p>
            </div>
            <div className="recruit-cta-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=2000&auto=format&fit=crop")' }} />
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo" style={{ marginBottom: '20px' }}>
                <img src="/Logo.webp" alt="AMD Marine Lanka Logo" className="logo-img" decoding="async" loading="lazy" />
                <div className="logo-text">
                  <span className="logo-brand">AMD Marine Lanka</span>
                  <span className="logo-sub">Pvt Ltd</span>
                </div>
              </div>
              <p>Providing professional recruitment and crewing services to the global maritime and industrial sectors.</p>
            </div>
            <div className="footer-col">
              <h4>Recruitment</h4>
              <a href="#services">Marine Crewing</a>
              <a href="#services">Technical Manpower</a>
              <a href="#services">Shore Hospitality</a>
              <a href="#services">Compliance</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <button onClick={() => navigate('/technical')} className="footer-link-btn">Technical Services</button>
              <a href="#apply">Join Our Crew</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <span><Mail size={13} /> amdmarinecrew@gmail.com</span>
              <span><MapPin size={13} /> Sri Lanka</span>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 AMD Marine Lanka Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecruitmentPage;
