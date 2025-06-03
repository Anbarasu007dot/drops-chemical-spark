
import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { LatestBlogs } from "@/components/LatestBlogs";
import { QuickContact } from "@/components/QuickContact";
import { LogoCarousel } from "@/components/LogoCarousel";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    // Slight delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 50);
  };

  useEffect(() => {
    // Check if we should skip preloader (already shown this session)
    const hasSeenPreloader = sessionStorage.getItem('preloader-shown');
    
    if (hasSeenPreloader) {
      // Skip preloader entirely
      setIsLoading(false);
      setShowContent(true);
      return;
    }

    // Prevent scrolling during preloader if it will run
    document.body.style.overflow = 'hidden';

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className={`min-h-screen ${showContent ? 'main-content-fade-in' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <Expertise />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
        <LogoCarousel />
        <LatestBlogs />
        <QuickContact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
