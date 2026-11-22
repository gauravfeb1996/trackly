import { CtaBanner } from "@/app/_components/landing/cta-banner";
import { DashboardSection } from "@/app/_components/landing/dashboard-section";
import { FaqSection } from "@/app/_components/landing/faq-section";
import { FeatureGrid } from "@/app/_components/landing/feature-grid";
import { HeroSection } from "@/app/_components/landing/hero-section";
import { PricingSection } from "@/app/_components/landing/pricing-section";
import { SiteHeader } from "@/app/_components/landing/site-header";
import { Testimonials } from "@/app/_components/landing/testimonials";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden text-foreground">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[48rem] bg-gradient-to-b from-secondary to-background"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-16 size-[32rem] rounded-full bg-primary/15 blur-3xl"
        aria-hidden
      />
      <div className="relative">
        <SiteHeader />
        <main>
          <HeroSection />
          <FeatureGrid />
          <DashboardSection />
          <Testimonials />
          {/* <PricingSection /> */}
          <FaqSection />
          <CtaBanner />
        </main>
      </div>
    </div>
  );
}
