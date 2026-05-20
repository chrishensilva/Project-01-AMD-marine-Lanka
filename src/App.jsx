import React, { useEffect, useRef, useState } from 'react';
import {
  Ship, Anchor, Droplets, Wrench, Zap, Eye, Package,
  Users, Globe, ChevronRight, Mail, Phone, MapPin,
  Shield, Clock, CheckCircle, ArrowRight,
  Linkedin, Facebook, Instagram, Twitter, Youtube,
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
    desc: 'We provide full marine engineering support, focusing on ship repair, proactive maintenance, and technical troubleshooting to keep your maritime assets performing at their best.',
    details: 'Overhaul, diagnostics, repair, optimisation, and emergency interventions for propulsion, heavy machinery, and auxiliary systems.',
    img: '/engineering.webp',
  },
  {
    id: 'mechanical-electrical',
    icon: Zap,
    title: 'Mechanical, Electrical & Automation Engineering',
    desc: 'We offer specialized installation, repair, and commissioning services for mechanical, electrical, electronic, and automation systems in both marine and industrial sectors.',
    details: 'Installation, retrofitting, diagnostics, and modernisation of advanced control and automation systems.',
    img: '/electronic.webp',
  },
  {
    id: 'underwater',
    icon: Droplets,
    title: 'Underwater & Diving Services',
    desc: 'Our certified diving specialists handle subsea maintenance, inspection, and repair to keep your vessel’s hull efficient and compliant.',
    details: 'Underwater hull cleaning, propeller polishing, inspection, condition assessment, repairs, and certified diving contractor coordination.',
    img: '/underwater.webp',
  },
  {
    id: 'ship-repair',
    icon: Ship,
    title: 'Fabrication & Ship Repair',
    desc: 'We offer complete solutions for structural integrity, including afloat repairs and dry-docking coordination. Our team delivers high-quality steelwork and fabrication that meet class standards.',
    details: 'Afloat and dry-docking repair management, steel structural fabrication, hull modifications, and end-to-end project coordination for repairs and shipyard operations.',
    img: '/repair.webp',
  },
  {
    id: 'inspection',
    icon: Eye,
    title: 'Inspection, Testing & NDT Services',
    desc: 'We protect your assets and ensure compliance with thorough testing. Our team also offers technical consultancy and audits for marine and industrial equipment.',
    details: 'Non-destructive testing (NDT), condition assessments, comprehensive marine and industrial equipment audits, technical consultancy for asset life extension, and class-approved inspection procedures.',
    img: '/inspection.webp',
  },
  {
    id: 'ship-management',
    icon: Users,
    title: 'Ship Management Services',
    desc: 'We take complete care of your maritime assets. Our management services help maximize vessel uptime while keeping strict safety standards and meeting international regulations.',
    details: 'Technical, crew, and operational management of fleets. Fleet management, commercial performance, proactive maintenance, safety, regulatory compliance, and maritime consultancy.',
    img: '/managment.webp',
  },
];

const WHY_US = [
  { icon: Shield, label: 'Safety-First Execution', desc: 'We strictly follow international maritime safety standards on every project.' },
  { icon: Wrench, label: 'Multi-Disciplinary Capability', desc: 'We offer complete engineering, management, and repair solutions.' },
  { icon: Clock, label: 'Rapid Response', desc: 'Our team is available 24/7 for urgent vessel troubleshooting and maintenance.' },
  { icon: CheckCircle, label: 'Compliance-Focused Support', desc: 'We make sure your assets meet all regulatory and environmental requirements.' },
  { icon: Globe, label: 'Global Reach', desc: 'Our Sri Lanka base lets us serve clients worldwide with full international capabilities.' },
  { icon: Users, label: 'Project Coordination', desc: 'Our experts supervise every step, from the first consultation to final commissioning.' },
  { icon: Anchor, label: 'Core Strength', desc: 'Highly skilled engineering and diving personnel with deep maritime knowledge.' },
  { icon: Package, label: 'Cost-Effective', desc: 'End-to-end technical solutions with cost-effective operational management.' },
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
    document.title = "Marine Engineering & Technical Services | AMD Marine Lanka";
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

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);

  return (
    <div className={`app${menuOpen ? ' nav-open-active' : ''}`}>

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="fixed-nav glass" role="navigation" aria-label="Main navigation">
        <div className="container nav-container">
          <a href="#home" className="logo" aria-label="AMD Marine Lanka home">
            <img src="/logo.png" alt="AMD Marine Lanka Logo" className="logo-img" decoding="async" />
            <div className="logo-text">
              <h1 className="logo-brand">AMD Marine Lanka</h1>
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
        <div className="hero-bg" style={{ backgroundImage: 'url("/hero.webp")' }} />
        <div className="hero-overlay" />
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">Sri Lanka's Premier Maritime Partner</div>
            <h2 className="hero-title">
              Engineering Excellence<br />
              <span className="hero-accent">Across Every Ocean</span>
            </h2>
            <p className="hero-sub">
              AMD Marine Lanka Pvt Ltd offers marine engineering, ship management, inspection,
              repair, and operational support services. Based in Sri Lanka, we provide fast,
              reliable, and cost-effective technical solutions to shipowners worldwide.
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
                We aim to be a global leader in technical ship management and engineering services,
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
                  'Extensive business operations across Sri Lanka and internationally',
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
              <div className="industrial-solutions" style={{ marginTop: '2rem' }}>
                <h3>Industrial & General Engineering</h3>
                <p>
                  Our support goes beyond marine services to include land-based industries through
                  specialized contracting and consultancy for offshore infrastructure and cross-industry
                  mechanical support.
                </p>
              </div>
            </div>
            <div className="about-image glass">
              <div className="about-img-inner" style={{ backgroundImage: 'url("/newship.webp")' }} />
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
            <div className="chandling-image" style={{ backgroundImage: 'url("/shipsupport.webp")' }} />
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
                title: 'Acting as Managing Agents',
                body: 'We act as local and international managing agents, providing dedicated representation for shipowners, operators, and engineering firms.',
              },
              {
                title: 'Commercial Facilitation',
                body: 'Facilitation of commercial agreements, port agency, and logistics support to ensure smooth business growth and operational efficiency.',
              },
              {
                title: 'Global Outreach',
                body: 'Securing strategic contracts with international organizations and providing steady support across the globe through seamless supply chain integration.',
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

      {/* ── Contact ─────────────────────────────────────────────────────────── */}
      <section id="contact" ref={contactRef} className="section-padding contact-section" aria-label="Contact AMD Marine Lanka">
        {/* Decorative glow blobs */}
        <div className="ct-blob ct-blob-1" aria-hidden="true" />
        <div className="ct-blob ct-blob-2" aria-hidden="true" />

        <div className="container ct-inner">

          {/* Header */}
          <div className="section-header">
            <span className="eyebrow light">Get In Touch</span>
            <h2 className="ct-heading">Connect With Us</h2>
            <p className="ct-sub">
              Our team is available around the clock. Reach out through any channel
              and we'll respond as quickly as possible.
            </p>
          </div>

          {/* Info cards */}
          <div className="ct-cards">

            <div className="ct-card">
              <div className="ct-icon">
                <Phone size={26} aria-hidden="true" />
              </div>
              <span className="ct-label">Phone</span>
              <a href="tel:+94770020462" className="ct-value">+94 77 002 0462</a>
              <span className="ct-badge">Available 24 / 7</span>
            </div>

            <div className="ct-card">
              <div className="ct-icon">
                <Mail size={26} aria-hidden="true" />
              </div>
              <span className="ct-label">Email</span>
              <a href="mailto:amdmarinelanka@gmail.com" className="ct-value">amdmarinelanka@gmail.com</a>
              <span className="ct-badge">Quick Response</span>
            </div>

            <div className="ct-card">
              <div className="ct-icon">
                <MapPin size={26} aria-hidden="true" />
              </div>
              <span className="ct-label">Address</span>
              <p className="ct-value">Colombo, Sri Lanka</p>
              <span className="ct-badge">Indian Ocean Region</span>
            </div>

          </div>

          {/* Social media */}
          <div className="ct-social">
            <p className="ct-social-label">Follow us on social media</p>
            <div className="ct-social-links" role="list" aria-label="Social media links">
              <a href="#" className="ct-social-btn" aria-label="LinkedIn" role="listitem" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="#" className="ct-social-btn" aria-label="Facebook" role="listitem" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="#" className="ct-social-btn" aria-label="Instagram" role="listitem" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="#" className="ct-social-btn" aria-label="Twitter / X" role="listitem" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="#" className="ct-social-btn" aria-label="YouTube" role="listitem" target="_blank" rel="noopener noreferrer">
                <Youtube size={20} />
              </a>
            </div>
          </div>

        </div>
      </section>
      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo" style={{ marginBottom: '20px' }}>
                <img src="/logo.png" alt="AMD Marine Lanka Logo" className="logo-img" decoding="async" loading="lazy" />
                <div className="logo-text">
                  <span className="logo-brand">AMD Marine Lanka</span>
                  <span className="logo-sub">Pvt Ltd</span>
                </div>
              </div>
              <p>Engineering Excellence Across Every Ocean. Your complete maritime technical partner based in Colombo, Sri Lanka.</p>
              <div className="footer-contact-list">
                <span><Mail size={13} /> amdmarinelanka@gmail.com</span>
                <span><Phone size={13} /> +94 77 002 0462</span>
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
