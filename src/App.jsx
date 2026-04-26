import React, { useEffect, useRef, useState } from 'react';
import {
  Ship, Anchor, Droplets, Wrench, Zap, Eye, Package,
  Users, Globe, ChevronRight, Mail, Phone, MapPin,
  Shield, Clock, CheckCircle, ArrowRight,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Data ─────────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'marine-engineering',
    icon: Wrench,
    title: 'Marine Engineering & Technical Services',
    desc: 'Full marine engineering support focusing on ship repair, proactive maintenance, and technical troubleshooting to keep your maritime assets performing at their best.',
    details: 'Overhaul, diagnostics, repair, optimisation, and emergency interventions for propulsion, heavy machinery, and auxiliary systems.',
    img: '/engineering.png',
  },
  {
    id: 'mechanical-electrical',
    icon: Zap,
    title: 'Mechanical, Electrical & Automation Engineering',
    desc: 'Specialized installation, repair, and commissioning services for mechanical, electrical, electronic, and automation systems in marine and industrial sectors.',
    details: 'Installation, retrofitting, diagnostics, and modernisation of advanced control and automation systems.',
    img: '/electronic.jpg',
  },
  {
    id: 'underwater',
    icon: Droplets,
    title: 'Underwater & Diving Services',
    desc: "Certified diving specialists handle subsea maintenance, inspection, and repair to keep your vessel's hull efficient and compliant.",
    details: 'Underwater hull cleaning, propeller polishing, inspection, condition assessment, repairs, and certified diving contractor coordination.',
    img: '/underwater.png',
  },
  {
    id: 'ship-repair',
    icon: Ship,
    title: 'Fabrication & Ship Repair',
    desc: 'Complete solutions for structural integrity, including afloat repairs and dry-docking coordination. High-quality steelwork and fabrication that meet class standards.',
    details: 'Afloat and dry-docking repair management, steel and structural fabrication, hull modifications, and end-to-end project coordination.',
    img: '/repair.jpg',
  },
  {
    id: 'inspection',
    icon: Eye,
    title: 'Inspection, Testing & NDT Services',
    desc: 'Protecting your assets and ensuring compliance with thorough testing. Technical consultancy and audits for marine and industrial equipment.',
    details: 'Non-destructive testing (NDT), condition assessments, comprehensive marine and industrial equipment audits, class-approved inspection procedures.',
    img: '/inspection.jpg',
  },
  {
    id: 'ship-management',
    icon: Users,
    title: 'Ship Management Services',
    desc: 'Complete care of your maritime assets. Our management services maximise vessel uptime while keeping strict safety standards and meeting international regulations.',
    details: 'Technical, crew, and operational management of fleets. Fleet management, commercial performance, proactive maintenance, safety, and regulatory compliance.',
    img: '/managment.jpg',
  },
];

const WHY_US = [
  { icon: Shield, label: 'Safety-First Execution', desc: 'We strictly follow international maritime safety standards on every project.' },
  { icon: Wrench, label: 'Multi-Disciplinary Capability', desc: 'Complete engineering, management, and repair solutions under one roof.' },
  { icon: Clock, label: 'Rapid Response', desc: '24/7 availability for urgent vessel troubleshooting and maintenance.' },
  { icon: CheckCircle, label: 'Compliance-Focused', desc: 'We ensure all assets meet regulatory and environmental requirements.' },
  { icon: Globe, label: 'Global Reach', desc: 'Sri Lanka base with full international capabilities to serve clients worldwide.' },
  { icon: Users, label: 'Project Coordination', desc: 'Expert supervision from first consultation to final commissioning.' },
];

const STATS = [
  { num: '15+', label: 'Years of Expertise' },
  { num: '500+', label: 'Vessels Serviced' },
  { num: '24/7', label: 'Emergency Support' },
  { num: '30+', label: 'Countries Reached' },
];

/* ── Animate helper (safe: always visible even if trigger fails) ───────────── */
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

/* ── App ──────────────────────────────────────────────────────────────────── */
const App = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const aboutRef = useRef(null);
  const statsRef = useRef(null);
  const overviewRef = useRef(null);
  const chandlingRef = useRef(null);
  const agencyRef = useRef(null);
  const contactRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    /* Hero entrance — runs immediately, no scrolltrigger */
    gsap.fromTo('.hero-badge',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo('.hero-title',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.45 }
    );
    gsap.fromTo('.hero-sub',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.7 }
    );
    gsap.fromTo('.hero-btns',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.9 }
    );

    /* Hero parallax */
    gsap.to('.hero-bg', {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    /* Scroll-triggered sections */
    fadeUp('.stat-item', statsRef.current, 0.12);
    fadeUp('.overview-text', overviewRef.current, 0);
    fadeUp('.vision-card', overviewRef.current, 0);
    fadeUp('.mission-card', overviewRef.current, 0.15);
    fadeUp('.service-card', servicesRef.current, 0.1);
    fadeUp('.why-card', whyRef.current, 0.1);
    fadeUp('.about-content', aboutRef.current, 0);
    fadeUp('.about-image', aboutRef.current, 0.15);
    fadeUp('.chandling-card', chandlingRef.current, 0);
    fadeUp('.agency-card', agencyRef.current, 0.1);
    fadeUp('.contact-card', contactRef.current, 0);

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="app">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="fixed-nav glass" role="navigation" aria-label="Main navigation">
        <div className="container nav-container">
          <a href="#home" className="logo" aria-label="AMD Marine Lanka home">
            <Anchor size={26} />
            <div className="logo-text">
              <span className="logo-brand">AMD Marine Lanka</span>
              <span className="logo-sub">Pvt Ltd</span>
            </div>
          </a>

          <div className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#contact" className="btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
              Get a Quote
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
      <section ref={heroRef} id="home" className="hero" aria-label="Hero section">
        <div className="hero-bg" style={{ backgroundImage: 'url("/hero.png")' }} />
        <div className="hero-overlay" />
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">Sri Lanka's Premier Maritime Partner</div>
            <h1 className="hero-title">
              Engineering Excellence<br />
              <span className="hero-accent">Across Every Ocean</span>
            </h1>
            <p className="hero-sub">
              AMD Marine Lanka Pvt Ltd delivers complete, safety-focused, and cost-effective
              technical solutions — from underwater hull cleaning to full fleet management
              — for shipowners worldwide.
            </p>
            <div className="hero-btns">
              <a href="#services" className="btn-primary btn-lg">
                Our Services <ChevronRight size={18} />
              </a>
              <a href="#contact" className="btn-ghost btn-lg">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────────────── */}
      <section ref={statsRef} className="stats-bar" aria-label="Key statistics">
        <div className="container stats-grid">
          {STATS.map(s => (
            <div key={s.label} className="stat-item">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Overview ────────────────────────────────────────────────────── */}
      <section ref={overviewRef} className="section-padding overview-section" aria-label="Company overview">
        <div className="container overview-grid">
          <div className="overview-text">
            <span className="eyebrow">Company Overview</span>
            <h2>Your Complete Maritime Technical Partner</h2>
            <p>
              AMD Marine Lanka Pvt Ltd offers marine engineering, ship management, inspection,
              repair, and operational support services. We focus on reducing downtime and
              improving asset performance by using our broad expertise to deliver strong
              technical solutions for shipowners and industrial operators around the world.
            </p>
            <p>
              Based in Sri Lanka, we provide fast, reliable, and cost-effective services to
              vessels everywhere — from the Indian Ocean to international ports across the globe.
            </p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '12px' }}>
              Partner With Us <ArrowRight size={18} />
            </a>
          </div>
          <div className="overview-aside">
            <div className="vision-card glass">
              <h3>Our Vision</h3>
              <p>
                To be a global leader in technical ship management and engineering services,
                setting high standards for quality, reliability, and innovation in the maritime
                industry.
              </p>
            </div>
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                "We deliver complete, safety-focused, and cost-effective technical solutions to
                shipowners worldwide. Our goal is to reduce vessel downtime, ensure compliance,
                and build long-term partnerships through skilled project management and excellent
                service."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────────── */}
      <section id="services" ref={servicesRef} className="section-padding services-section" aria-label="Our services">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Core Services</span>
            <h2>Our Specialized Expertise</h2>
            <p>Precision-engineered solutions across every aspect of maritime operations.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map(s => {
              const Icon = s.icon;
              return (
                <div key={s.id} className="service-card" id={`svc-${s.id}`}>
                  <div className="service-img" style={{ backgroundImage: `url("${s.img}")` }}>
                    <div className="service-img-overlay" />
                    <div className="service-img-icon"><Icon size={28} /></div>
                  </div>
                  <div className="service-body">
                    <h3>{s.title}</h3>
                    <p className="service-desc">{s.desc}</p>
                    <p className="service-details">{s.details}</p>
                    <a href="#contact" className="service-link">
                      Get a Quote <ChevronRight size={15} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Us ──────────────────────────────────────────────────────── */}
      <section id="why-us" ref={whyRef} className="section-padding why-section" aria-label="Why choose AMD Marine Lanka">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Choose AMD Marine Lanka</span>
            <h2>The Standard for Maritime Excellence</h2>
            <p>Six pillars that define our commitment to delivering world-class maritime solutions.</p>
          </div>
          <div className="why-grid">
            {WHY_US.map(w => {
              const Icon = w.icon;
              return (
                <div key={w.label} className="why-card glass">
                  <div className="why-icon-wrap"><Icon size={26} /></div>
                  <h3>{w.label}</h3>
                  <p>{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────────────────── */}
      <section id="about" ref={aboutRef} className="section-padding about-section" aria-label="About AMD Marine Lanka">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="eyebrow">About Us</span>
              <h2>Built in Sri Lanka.<br />Serving the World.</h2>
              <p>
                With our headquarters in Sri Lanka, we provide strategic benefits for vessels
                in the Indian Ocean and beyond. We quickly dispatch parts, personnel, and
                technical teams to major international ports across the globe.
              </p>
              <p>
                Our industrial solutions extend beyond marine services to land-based industries
                through specialised contracting and consultancy. We handle engineering contracts
                for various industrial sectors worldwide.
              </p>
              <div className="about-reach">
                {[
                  'Extensive operations across Sri Lanka and internationally',
                  'Contracting with global shipowners, operators, and agents',
                  'Partnerships with international shipyards and offshore companies',
                  'Seamless integration into global supply chains',
                ].map(item => (
                  <div key={item} className="reach-item">
                    <CheckCircle size={18} className="reach-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-image glass">
              <div className="about-img-inner" style={{ backgroundImage: 'url("/newship.jpg")' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Ship Chandling ───────────────────────────────────────────────── */}
      <section ref={chandlingRef} className="section-padding chandling-section" aria-label="Ship chandling">
        <div className="container">
          <div className="chandling-card">
            <div className="chandling-content">
              <span className="eyebrow light">Marine Support</span>
              <h2>Ship Chandling &amp; Marine Support Services</h2>
              <p>
                A reliable supply chain keeps your operations running smoothly.
                We are your main source for consumables and essential ship spares.
              </p>
              <p>
                Provision supply, spare parts delivery, equipment sourcing, and timely
                vessel replenishment — handled by our expert logistics team.
              </p>
              <a href="#contact" className="btn-primary btn-white">
                Request Supply <ArrowRight size={18} />
              </a>
            </div>
            <div className="chandling-image" style={{ backgroundImage: 'url("/shipsupport.jpg")' }} />
          </div>
        </div>
      </section>

      {/* ── Agency & Representation ──────────────────────────────────────── */}
      <section ref={agencyRef} className="section-padding agency-section" aria-label="Agency and representation">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Commercial Services</span>
            <h2>Agency, Representation &amp; Commercial Services</h2>
            <p>Your reliable partner on the ground for shipping firms and engineering organisations.</p>
          </div>
          <div className="agency-grid">
            {[
              {
                title: 'Local & International Representation',
                body: 'Acting as local and international managing agents for shipowners, operators, and engineering firms.',
              },
              {
                title: 'Commercial Facilitation',
                body: 'Facilitation of commercial agreements, port agency, and logistics support to ensure smooth operations.',
              },
              {
                title: 'International Operations',
                body: 'Extensive business operations across Sri Lanka and internationally — contracting with global shipowners, operators, and agents.',
              },
            ].map(a => (
              <div key={a.title} className="agency-card">
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      {/*<section id="contact" ref={contactRef} className="section-padding contact-section" aria-label="Contact us">
        <div className="container">
          <div className="contact-card">
            <div className="contact-info">
              <span className="eyebrow light">Get In Touch</span>
              <h2>Partner with<br />AMD Marine Lanka</h2>
              <p>
                In the fast-paced maritime industry, having a reliable technical partner is key
                to success. AMD Marine Lanka Pvt Ltd offers expert knowledge, a strong focus on
                safety, and wide-ranging engineering solutions to keep your fleet running.
              </p>
              <div className="contact-links">
                <div className="link-item">
                  <Mail size={18} aria-hidden="true" />
                  <a href="mailto:info@amdmarinelanka.com">info@amdmarinelanka.com</a>
                </div>
                <div className="link-item">
                  <Phone size={18} aria-hidden="true" />
                  <a href="tel:+94112345678">+94 11 234 5678</a>
                </div>
                <div className="link-item">
                  <MapPin size={18} aria-hidden="true" />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={e => e.preventDefault()}
              aria-label="Contact form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">Full Name</label>
                  <input id="fname" type="text" placeholder="John Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="femail">Email Address</label>
                  <input id="femail" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="fcompany">Company / Vessel Name</label>
                <input id="fcompany" type="text" placeholder="Your Company or Vessel" />
              </div>
              <div className="form-group">
                <label htmlFor="fservice">Service Required</label>
                <select id="fservice">
                  <option value="">Select a Service</option>
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                  <option value="other">Other / General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="fmessage">Message</label>
                <textarea id="fmessage" placeholder="Tell us about your requirements..." rows="4" required />
              </div>
              <button type="submit" className="btn-primary btn-lg">
                Send Inquiry <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>*/}
      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo" style={{ marginBottom: '20px' }}>
                <Anchor size={28} />
                <div className="logo-text">
                  <span className="logo-brand">AMD Marine Lanka</span>
                  <span className="logo-sub">Pvt Ltd</span>
                </div>
              </div>
              <p>Engineering Excellence Across Every Ocean. Your complete maritime technical partner based in Colombo, Sri Lanka.</p>
              <div className="footer-contact-list">
                <span><Mail size={13} /> info@amdmarinelanka.com</span>
                <span><Phone size={13} /> +94 11 234 5678</span>
                <span><MapPin size={13} /> Colombo, Sri Lanka</span>
              </div>
            </div>
            <div className="footer-col">
              <h4>Core Services</h4>
              <a href="#services">Marine Engineering</a>
              <a href="#services">Underwater Diving</a>
              <a href="#services">Ship Management</a>
              <a href="#services">Inspection &amp; NDT</a>
              <a href="#services">Fabrication &amp; Repair</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#why-us">Why Choose Us</a>
              <a href="#contact">Contact</a>
              <a href="#contact">Book Consultation</a>
            </div>
            <div className="footer-col">
              <h4>Industries</h4>
              <span>Commercial Shipping</span>
              <span>Offshore Industry</span>
              <span>Naval Operations</span>
              <span>Industrial Sector</span>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 AMD Marine Lanka Pvt Ltd. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
