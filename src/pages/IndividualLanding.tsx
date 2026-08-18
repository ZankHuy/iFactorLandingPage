/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "../individual/Header";
import Hero from "../individual/Hero";
import StrategySection from "../individual/StrategySection";
import HowItWorks from "../individual/HowItWorks";
import WhatYouLearn from "../individual/WhatYouLearn";
import Coaches from "../individual/Coaches";
import PivotIncludes from "../individual/PivotIncludes";
import BenefitsComparison from "../individual/BenefitsComparison";
import AgentTrust from "../individual/AgentTrust";
import PricingSection from "../individual/PricingSection";
import FAQ from "../individual/FAQ";
import Footer from "../individual/Footer";
import FloatingHotline from "../individual/FloatingHotline";

export default function IndividualLanding() {
  return (
    <div className="min-h-screen bg-ifactor-cream text-pivot-dark flex flex-col font-sans select-none antialiased">
      <Header />

      <main className="flex-1">
        <Hero />
        <StrategySection />
        <HowItWorks />
        <WhatYouLearn />
        <Coaches />
        <PivotIncludes />
        <BenefitsComparison />
        <AgentTrust />
        <PricingSection />
        <FAQ />
      </main>

      <Footer />
      <FloatingHotline />
    </div>
  );
}