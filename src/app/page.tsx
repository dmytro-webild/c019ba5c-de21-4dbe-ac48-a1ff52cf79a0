"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

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
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "services"},
        {
          name: "Ecosystem",          id: "ecosystem"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Solid Seeds Inc."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Solid Seeds Inc."
      description="Where strategy, culture, and innovation grow into long-term stability."
      buttons={[
        {
          text: "Book Your Strategy Session",          href: "#contact"},
        {
          text: "Learn More",          href: "#about"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/traditional-easter-eggs-concept_23-2148407667.jpg",          imageAlt: "Hero growth illustration"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-composition-wallpaper-background-concept_1194-616972.jpg",          imageAlt: "Luxury consulting abstract"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/white-background-with-geometric-golden-lines_361591-5461.jpg",          imageAlt: "Growth rings visualization"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-gold-black-textured-painting_191095-100209.jpg",          imageAlt: "Innovation lines"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-frame-with-equal-rights-symbol_23-2148415330.jpg",          imageAlt: "Strategic stability"},
        {
          imageSrc: "http://img.b2bpic.net/free-vector/golden-lines-background-premium-styles_1017-37444.jpg",          imageAlt: "Cultural intelligence"},
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Leadership Co",        "Innovate Partners",        "Growth Initiative",        "Strategy Lab",        "Community Roots",        "Change Makers",        "Future Builders"]}
      title="Trusted Partners"
      description="Trusted by community leaders, entrepreneurs, and organizations committed to real change."
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="A Non-Traditional Consulting Agency"
      description="Solid Seeds Inc. blends lived experience, cultural intelligence, and strategic clarity to help individuals, businesses, and communities grow with intention. We don't guess. We build from real-world knowledge — the kind earned, not taught. Your main contact is Mr. Bagley, COO."
      metrics={[
        {
          value: "10+",          title: "Years Experience"},
        {
          value: "100%",          title: "Intentional"},
        {
          value: "Real",          title: "Impact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/gray-concrete-pillars_181624-1500.jpg"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="ecosystem" data-section="ecosystem">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",          title: "Real-Time Heat Maps",          author: "Systems",          description: "See risk as it emerges, not after the fact.",          tags: [
            "Safety",            "Data"],
          imageSrc: "http://img.b2bpic.net/free-photo/business-network-background-connecting-dots-technology-design_53876-160210.jpg"},
        {
          id: "f2",          title: "Verified Guardian Network",          author: "Community",          description: "Community-powered safety and communication.",          tags: [
            "Safety",            "Growth"],
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-network-communications-background-with-low-poly-plexus-design_1048-15687.jpg"},
        {
          id: "f3",          title: "SCR Incentive System",          author: "Value",          description: "Earn value by contributing verified truth.",          tags: [
            "Value",            "Truth"],
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-digital-tunnel_23-2152020936.jpg"},
      ]}
      title="The Life Navigator Ecosystem"
      description="A real-time safety and empowerment system built for modern communities."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "s1",          name: "Business & Creative Consulting",          brand: "Strategy",          price: "Custom",          rating: 5,
          reviewCount: "10+",          imageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139370.jpg"},
        {
          id: "s2",          name: "Community Impact",          brand: "Outreach",          price: "Custom",          rating: 5,
          reviewCount: "10+",          imageSrc: "http://img.b2bpic.net/free-photo/office-worker-analyzing-business-charts-laptop-using-paperwork-research-information-make-data-report-working-from-home-startup-analysis-with-web-graphs-browsing-internet_482257-50961.jpg"},
        {
          id: "s3",          name: "Program Design",          brand: "Learning",          price: "Custom",          rating: 5,
          reviewCount: "10+",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-analyzing-annual-report_1098-3061.jpg"},
        {
          id: "s4",          name: "Organizational Structure",          brand: "Ops",          price: "Custom",          rating: 5,
          reviewCount: "10+",          imageSrc: "http://img.b2bpic.net/free-photo/financial-broker-analyzing-stock-trade-market-computer-using-exchange-hedge-fund-statistics-create-investment-profit-entrepreneur-working-with-forex-real-time-sales-trend-handheld-shot_482257-40951.jpg"},
        {
          id: "s5",          name: "Risk Strategy",          brand: "Safety",          price: "Custom",          rating: 5,
          reviewCount: "10+",          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-science-fiction-tunnel-corridor-with-lines-gold-brown-yellow-lights_181624-34489.jpg"},
        {
          id: "s6",          name: "Framework Development",          brand: "Growth",          price: "Custom",          rating: 5,
          reviewCount: "10+",          imageSrc: "http://img.b2bpic.net/free-photo/business-chart-visual-graphics-report-concept_53876-167093.jpg"},
      ]}
      title="Consulting With Purpose"
      description="Precision-driven consulting frameworks designed to transform complex challenges into sustainable, measurable impact. Reach out to Mr. Bagley, COO, to learn more."
    />
  </div>

  <div id="philosophy" data-section="philosophy">
      <MetricCardTwo
      textboxLayout="default"
      gridVariant="bento-grid"
      animationType="slide-up"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "10+",          description: "Years of lived expertise"},
        {
          id: "m2",          value: "100%",          description: "Community-centered innovation"},
        {
          id: "m3",          value: "Daily",          description: "Real-time safety solutions"},
      ]}
      title="Plant the Seed. Build the Roots. Grow the Future."
      description="We design systems that help people rise — not systems that punish them for struggling. Every strategy we create is intentional, culturally grounded, and built for long-term impact."
    />
  </div>

  <div id="impact" data-section="impact">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Our Work in Action"
      description="We partner with local organizations and communities to implement frameworks that drive sustainable safety, empowerment, and economic growth through verified, culturally-aligned intelligence."
      metrics={[
        {
          value: "100+",          title: "Projects"},
        {
          value: "50+",          title: "Communities"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/growth-status-technology-online-website-concept_53876-21396.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="opacity"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="Working with Solid Seeds Inc. shifted our entire community safety protocol. Their framework is human-centered and incredibly effective."
      rating={5}
      author="Sarah J., Community Leader"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/afroamerican-businessman-wearing-headphones_23-2148508923.jpg",          alt: "Sarah J"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-modern-businesswoman-standing_23-2148204492.jpg",          alt: "Michael C"},
        {
          src: "http://img.b2bpic.net/free-photo/businessman-smiling-looking-camera_23-2148112827.jpg",          alt: "Emily R"},
        {
          src: "http://img.b2bpic.net/free-photo/black-businessman-sad-expression_1194-2583.jpg",          alt: "David K"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-transgender-wearing-shells-necklace_23-2149105401.jpg",          alt: "Jessica L"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready to Build Something Real?"
      description="Let’s turn your vision into structure, strategy, and long-term stability. Direct your inquiries to Mr. Bagley, COO. Receive a consultation response within 48 hours."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-adult-businesswoman-talking-phone_23-2148452718.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Solid Seeds Inc.",          items: [
            {
              label: "Experience-Driven Consulting",              href: "#"},
          ],
        },
        {
          title: "Navigate",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About",              href: "#about"},
            {
              label: "Services",              href: "#services"},
            {
              label: "Ecosystem",              href: "#ecosystem"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Contact Person",          items: [
            {
              label: "Mr. Bagley, COO",              href: "#"},
            {
              label: "Email Us",              href: "mailto:hello@solidseeds.com"},
          ],
        },
      ]}
      logoText="Solid Seeds Inc."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}