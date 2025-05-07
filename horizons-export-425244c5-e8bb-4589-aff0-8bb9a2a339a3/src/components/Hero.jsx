
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-yellow-50 opacity-50 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-800">
              Discover Your <span className="text-yellow-600">Destiny</span> Through Numerology
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Unlock the hidden patterns in your life with GlamVybe's expert numerology and Vastu services. Transform your future with our personalized consultations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-6 h-auto">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-yellow-500 text-yellow-700 hover:bg-yellow-50 text-lg px-8 py-6 h-auto">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-yellow-200">
              <div className="loshu-grid mb-4">
                {[4, 9, 2, 3, 5, 7, 8, 1, 6].map((num, index) => (
                  <motion.div
                    key={index}
                    className="loshu-cell"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {num}
                  </motion.div>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-center text-yellow-800 mb-2">Loshu Grid Analysis</h3>
              <p className="text-gray-600 text-center">
                Discover the balance of energies in your life through ancient numerological wisdom
              </p>
            </div>
            
            <img  
              className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 animate-float"
              alt="Decorative numerology symbol"
             src="https://images.unsplash.com/photo-1496996770840-0461588b52f6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
