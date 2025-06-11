import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Preloader } from "@/components/Preloader";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  // Show preloader on route changes
  useEffect(() => {
    setLoading(true);
    setShowPreloader(true);
    setContentReady(false);
    
    const timer = setTimeout(() => {
      setLoading(false);
      setContentReady(true);
    }, 2200); // Reduced from 2700 to 2200

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Show preloader on initial load
  useEffect(() => {
    setLoading(true);
    setShowPreloader(true);
    setContentReady(false);
    
    const timer = setTimeout(() => {
      setLoading(false);
      setContentReady(true);
    }, 2200); // Reduced from 2700 to 2200

    return () => clearTimeout(timer);
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  // Show preloader while loading
  if (loading && showPreloader) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  // Show content immediately after preloader without white flash
  return (
    <div className={`min-h-screen transition-opacity duration-300 ${contentReady ? 'opacity-100' : 'opacity-0'}`}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;