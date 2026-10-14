"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCta from '@/components/sections/contact/ContactCta';
import FooterSimpleReveal from '@/components/sections/footer/FooterSimpleReveal';
import HeroOverlayStatistics from '@/components/sections/hero/HeroOverlayStatistics';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import MetricsIconCardsAlt from '@/components/sections/metrics/MetricsIconCards';
import NavbarInline from '@/components/ui/NavbarInline';
import ProductVariantCardsHighlight from '@/components/sections/product/ProductVariantCardsHighlight';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="medium"
        background="floatingGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarInline
        logo="Solid Seeds Inc."
        navItems={[
          { name: "Home", href: "#hero" },
          { name: "About", href: "#about" },
          { name: "Services", href: "#services" },
          { name: "Ecosystem", href: "#ecosystem" },
          { name: "Contact", href: "#contact" }
        ]}
        ctaButton={{ text: "Get Started", href: "#contact" }}
      />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayStatistics
        title="Growing Stability, Intentionally."
        description="Solid Seeds Inc. provides strategic clarity through cultural intelligence and real-world expertise."
        primaryButton={{ text: "Book Strategy Session", href: "#contact" }}
        secondaryButton={{ text: "Our Approach", href: "#about" }}
        imageSrc="http://img.b2bpic.net/free-photo/traditional-easter-eggs-concept_23-2148407667.jpg"
        textAnimation="slide-up"
      />
  </div>

  <div id="trust" data-section="trust">
      <SocialProofMarquee
        tag="Partners"
        title="Trusted Collaborators"
        names={["Leadership Co", "Innovate Partners", "Growth Initiative", "Strategy Lab", "Community Roots", "Change Makers", "Future Builders"]}
        textAnimation="fade"
      />
  </div>

  <div id="about" data-section="about">
      <AboutTestimonial
        tag="Our Vision"
        quote="We don't guess. We build from real-world knowledge — the kind earned, not taught."
        author="Mr. Bagley"
        role="COO, Solid Seeds Inc."
        textAnimation="fade-blur"
      />
  </div>

  <div id="ecosystem" data-section="ecosystem">
      <FeaturesMediaCarousel
        tag="Ecosystem"
        title="The Life Navigator System"
        description="Precision-driven frameworks for modern community safety and empowerment."
        items={[
          { title: "Heat Mapping", description: "Real-time risk visualization", buttonIcon: "Shield", imageSrc: "http://img.b2bpic.net/free-photo/business-network-background-connecting-dots-technology-design_53876-160210.jpg" },
          { title: "Guardian Network", description: "Community-powered safety", buttonIcon: "Users", imageSrc: "http://img.b2bpic.net/free-photo/3d-render-network-communications-background-with-low-poly-plexus-design_1048-15687.jpg" }
        ]}
        textAnimation="slide-up"
      />
  </div>

  <div id="services" data-section="services">
      <ProductVariantCardsHighlight
        tag="Services"
        title="Consulting With Purpose"
        description="Strategic consulting frameworks for sustainable, measurable impact."
        products={[
          { name: "Business Consulting", variant: "Strategy", price: "Custom", imageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139370.jpg" },
          { name: "Community Impact", variant: "Outreach", price: "Custom", imageSrc: "http://img.b2bpic.net/free-photo/office-worker-analyzing-business-charts-laptop-using-paperwork-research-information-make-data-report-working-from-home-startup-analysis-with-web-graphs-browsing-internet_482257-50961.jpg" }
        ]}
        textAnimation="slide-up"
      />
  </div>

  <div id="philosophy" data-section="philosophy">
      <MetricsIconCards
        tag="Our Foundation"
        title="The Pillars of Impact"
        metrics={[
          { icon: "Lightbulb", title: "Expertise", value: "10+" },
          { icon: "CheckCircle", title: "Intentional", value: "100%" },
          { icon: "TrendingUp", title: "Growth", value: "Daily" }
        ]}
        textAnimation="slide-up"
      />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialOverlayCards
        tag="Testimonials"
        title="Voices of Change"
        testimonials={[
          { name: "Sarah J.", role: "Leader", company: "Community Org", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-modern-businesswoman-standing_23-2148204492.jpg" }
        ]}
        textAnimation="fade-blur"
      />
  </div>

  <div id="contact" data-section="contact">
      <ContactCta
        tag="Connect"
        text="Ready to build something real? Contact Mr. Bagley today."
        primaryButton={{ text: "Get in Touch", href: "mailto:hello@solidseeds.com" }}
        secondaryButton={{ text: "Schedule Session", href: "#contact" }}
        textAnimation="slide-up"
      />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimpleReveal
        brand="Solid Seeds Inc."
        columns={[
          { title: "Navigation", items: [{ label: "Home", href: "#hero" }, { label: "About", href: "#about" }] },
          { title: "Contact", items: [{ label: "Mr. Bagley", href: "#" }] }
        ]}
        copyright="© 2024 Solid Seeds Inc. All rights reserved."
        links={[{ label: "Privacy", href: "#" }]}
      />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}