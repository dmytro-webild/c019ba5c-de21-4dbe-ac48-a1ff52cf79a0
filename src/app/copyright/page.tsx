"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import LegalSection from '@/components/legal/LegalSection';

export default function CopyrightPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <LegalSection
        layout="page"
        title="Copyright & Intellectual Property"
        sections={[
          {
            heading: "Ownership",            content: { type: "paragraph", text: "All content, including text, logos, designs, and frameworks presented on this website are the property of Solid Seeds Inc. and protected by international copyright law." }
          },
          {
            heading: "Use of Materials",            content: { type: "list", items: ["You may not reproduce our proprietary frameworks without express written permission", "Unauthorized distribution is strictly prohibited"] }
          }
        ]}
      />
    </ThemeProvider>
  );
}