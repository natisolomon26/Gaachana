// app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen">
      
      {/* Background Effects - kept in main page as it's a global element */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative">
        <HeroSection />
        <TrustedBySection />
        <ValueProposition />
        <FeaturesGrid />
        <ArchitectureSection />
        <CTASection />
      </div>
    </div>
  );
}