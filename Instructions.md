# Project Requirements: AMD Marine Lanka Pvt Ltd Website

## 1. Project Overview
[cite_start]Development of a professional, modern, and minimalistic website for **AMD Marine Lanka Pvt Ltd**[cite: 2]. [cite_start]The site must convey reliability, global reach, and technical expertise in marine engineering and ship management[cite: 2, 3].

## 2. Business Requirements
### Brand Identity & Messaging
* [cite_start]**Core Value Proposition:** Focus on reducing vessel downtime, improving asset performance, and delivering safety-focused technical solutions[cite: 3, 8].
* [cite_start]**Vision & Mission:** Integrate the goal of becoming a global leader in maritime innovation and maintaining high standards of quality[cite: 6, 7, 8].
* [cite_start]**Key Differentiators:** Highlight 24/7 rapid response, safety-first execution, and multi-disciplinary capabilities[cite: 10, 11, 12].

### Functional Sections
* [cite_start]**Hero Section:** High-impact visual representing global maritime operations with a clear Call to Action (CTA)[cite: 4, 15].
* **Service Catalog:** Dedicated interactive sections for:
    * [cite_start]Marine Engineering & Technical Services[cite: 17].
    * [cite_start]Mechanical, Electrical & Automation[cite: 21].
    * [cite_start]Fabrication & Underwater Solutions (Diving)[cite: 25, 32].
    * [cite_start]Inspection, Testing & NDT Services[cite: 37].
    * [cite_start]Ship Chandling & Marine Support[cite: 45].
    * [cite_start]Ship Management & Commercial Representation[cite: 49, 53].
* [cite_start]**Industrial Solutions:** Section detailing land-based engineering and offshore infrastructure support[cite: 59, 62].
* [cite_start]**Global Presence:** A section emphasizing the Sri Lankan headquarters as a hub for Indian Ocean and international operations[cite: 81, 82].

## 3. Technical Requirements
### Tech Stack
* **Framework:** React (via Vite) for a fast, component-based architecture.
* **Styling:** Tailwind CSS (via CDN or PostCSS) for a utility-first, clean design system.
* **Animation:** GSAP (GreenSock) for high-performance motion, scroll-triggered reveals, and micro-interactions.
* **Standards:** Semantic HTML5 and clean ES6+ JavaScript.

### Design System (Apple/Stripe Aesthetic)
* **Color Palette:**
    * Primary: Ocean Blue (e.g., `#0047AB` or a deep navy).
    * Secondary: Crisp White (`#FFFFFF`).
    * Accents: Professional Slate/Gray for text and borders.
* **Typography:** Sans-serif fonts (e.g., Inter or SF Pro style) for a modern, readable feel.
* **UI Components:** * Prioritize white space and "breathable" layouts.
    * Use glassmorphism effects for cards or navigation bars.
    * High-quality imagery (vessels, underwater diving, industrial machinery).

### Motion & Interaction (GSAP)
* [cite_start]**Scroll Trigger:** Fade-in and slide-up animations as the user scrolls through service cards[cite: 19, 30].
* **Hero Animation:** Smooth parallax effect on the background maritime imagery.
* **Hover States:** Subtle scale or shadow transitions on service boxes to enhance interactivity.
* **Loading State:** A minimalist pre-loader reflecting the maritime theme (e.g., a pulsing anchor or horizon line).

## 4. SEO & Performance
* [cite_start]**Global Reach:** Optimize for keywords related to "Marine Engineering Sri Lanka," "Ship Management Indian Ocean," and "Underwater Hull Cleaning"[cite: 4, 34, 81].
* **Asset Optimization:** Ensure large maritime images are compressed and lazy-loaded to maintain fast performance.
* **Accessibility:** Ensure all interactive elements have high contrast and ARIA labels.

## 5. Deployment & Infrastructure
* **Hosting:** Deploy the React frontend via Vercel for optimal speed and global edge delivery.
* **Security:** Ensure SSL configuration (Standard for professional engineering firms).