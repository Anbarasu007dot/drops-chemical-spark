
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { LatestBlogs } from "@/components/LatestBlogs";
import { QuickContact } from "@/components/QuickContact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Expertise />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
        <LatestBlogs />
        <QuickContact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
