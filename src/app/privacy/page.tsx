"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import LegalSection from '@/components/legal/LegalSection';

export default function PrivacyPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <LegalSection
        layout="page"
        title="Privacy Policy"
        subtitle="Last updated: 2025"
        sections={[
          {
            heading: "Data Collection",            content: { type: "paragraph", text: "We collect minimal information necessary to provide our consulting services, including contact details and project-specific data provided voluntarily." }
          },
          {
            heading: "Data Usage",            content: { type: "list", items: ["To communicate project updates", "To fulfill contractual obligations", "To improve our service offerings"] }
          }
        ]}
      />
    </ThemeProvider>
  );
}