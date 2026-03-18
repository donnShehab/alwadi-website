import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ProductSection from "@/components/ProductSection";
import ProductionSection from "@/components/ProductionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <CategorySection />

      <ProductionSection />

      <ProductSection
        category="Burger"
        id="burgers"
      />

      <ProductSection
        category="Breaded"
        id="breaded"
      />

      <Footer />
    </main>
  );
}
