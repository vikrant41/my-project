import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import UniverseBackground from "@/components/UniverseBackground"; // ⭐ NEW LINE

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "GlamVybe - Mirage | Numerology & Vastu Services";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <UniverseBackground /> {/* ⭐ ADDED BACKGROUND HERE */}

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
      <Toaster />

      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-yellow-500 text-black shadow-lg z-40 hover:bg-yellow-600 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </div>
  );
}

export default App;
