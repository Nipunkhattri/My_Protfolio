import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialQuote from "@/components/TestimonialQuote";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TestimonialQuote />
      <ServicesSection />
      <AboutSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
