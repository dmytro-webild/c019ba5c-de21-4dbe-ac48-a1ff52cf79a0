"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import LegalSection from '@/components/legal/LegalSection';

export default function TermsPage() {
  return (
    <ThemeProvider>
      <LegalSection
        layout="page"
        title="Terms of Service"
        sections={[
          {
            heading: "Agreement to Terms",            content: {
              type: "paragraph",              text: "By accessing or using our website, you agree to comply with these terms of service."
            }
          },
          {
            heading: "Consulting Engagements",            content: {
              type: "numbered-list",              items: ["All engagements are subject to a signed agreement", "Intellectual property remains with its respective owner unless otherwise contracted", "Payments are due as per individual project schedules"]
            }
          }
        ]}
      />
    </ThemeProvider>
  );
}