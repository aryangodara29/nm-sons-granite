
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Intro from "./components/home/Intro";
import ProductsSection from "./components/home/ProductsSection";
import ExportSection from "./components/home/ExportSection";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <ProductsSection />
      <ExportSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
