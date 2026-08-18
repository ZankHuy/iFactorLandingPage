/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "../business/Header";
import Hero from "../business/Hero";
import StrategySection from "../business/StrategySection";
import HowItWorks from "../business/HowItWorks";
import WhatYouLearn from "../business/WhatYouLearn";
import CurriculumSection from "../business/CurriculumSection";
import BootcampSection from "../business/BootcampSection";
import WorkshopSection from "../business/WorkshopSection";
import CooperationSection from "../business/CooperationSection";
import PivotIncludes from "../business/PivotIncludes";
import Coaches from "../business/Coaches";
import AgentTrust from "../business/AgentTrust";
import PricingSection from "../business/PricingSection";
import FAQ from "../business/FAQ";
import Footer from "../business/Footer";
import FloatingHotline from "../individual/FloatingHotline";

export default function BusinessLanding() {
  return (
    <div className="min-h-screen bg-ifactor-cream text-pivot-dark flex flex-col font-sans select-none antialiased">
      <Header />

      <main className="flex-1">
        <Hero />
        <StrategySection />
        <HowItWorks />
        <WhatYouLearn />
        <CurriculumSection />
        <BootcampSection />
        <WorkshopSection />
        <CooperationSection />
        <PivotIncludes />
        <Coaches />
        <AgentTrust />
        <PricingSection />
        <FAQ />
      </main>

      <Footer />
      <FloatingHotline />
    </div>
  );
}
