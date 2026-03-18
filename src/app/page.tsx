import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ProductSection from "@/components/ProductSection";
import ProductionSection from "@/components/ProductionSection";
import HeritageJournal from "@/components/HeritageJournal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white">
      <Navbar />
      <Hero />
      <CategorySection />
      
      {/* Immersive Product Catalog */}
      <ProductSection
        category="Burger"
        id="burgers"
      />

      <ProductSection
        category="Breaded"
        id="breaded"
      />

      {/* Brand Lifestyle Layer */}
      <HeritageJournal />

      {/* Industrial Excellence Hub */}
      <ProductionSection />

      <Footer />
    </main>
  );
}
