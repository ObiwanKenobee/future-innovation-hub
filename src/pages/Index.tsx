import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { VisionBuilder } from "@/components/VisionBuilder";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Timeline />
        <VisionBuilder />
      </main>
    </div>
  );
};

export default Index;