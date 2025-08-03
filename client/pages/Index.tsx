import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Work />
        <Process />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
