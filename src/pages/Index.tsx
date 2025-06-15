
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import AppScreenshots from "@/components/AppScreenshots";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Hero />
      <Features />
      <AppScreenshots />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
