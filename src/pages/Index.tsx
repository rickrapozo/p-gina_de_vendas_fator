import { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { EnemySection } from "@/components/sections/EnemySection";
import { FailedSolutionsSection } from "@/components/sections/FailedSolutionsSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { PurchaseNotification } from "@/components/PurchaseNotification";
import { UrgentBanner } from "@/components/UrgentBanner";

const Index = () => {
  const [availableSpots, setAvailableSpots] = useState(52);

  const handleCounterUpdate = (updateFn: (prev: number) => number) => {
    setAvailableSpots(prev => Math.max(0, updateFn(prev)));
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <UrgentBanner 
        message="AVISO: O que você vai descobrir nos próximos 2 minutos pode causar uma falha na sua percepção da realidade. Essa Página Sairá do AR a Qualquer Momento.. "
        className="fixed top-0 left-0 right-0 z-50"
      />
      <div className="pt-0">
        <HeroSection />
        <StorySection />
        <EnemySection />
        <FailedSolutionsSection />
        <MethodSection />
        <ProductSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection availableSpots={availableSpots} />
        <GuaranteeSection />
        <FinalCTASection availableSpots={availableSpots} />
      </div>
      <PurchaseNotification 
        onCounterUpdate={handleCounterUpdate}
        currentCount={availableSpots}
      />
    </main>
  );
};

export default Index;
