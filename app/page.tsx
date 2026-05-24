import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DashboardPreview from "@/components/landing/DashboardPreview";
import FeatureCards from "@/components/landing/FeatureCards";

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <FeatureCards />
    </main>
  );
}