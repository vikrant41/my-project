
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-300 rounded-full opacity-50"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-100">
              <img   
                class="w-full h-auto object-cover"
                alt="Numerology consultation with crystals and tarot cards"
                src="https://images.unsplash.com/photo-1559439044-3b58bb362414" />
            </div>
            
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg border-2 border-yellow-200">
              <img   
                class="w-20 h-20 rounded-full object-cover"
                alt="Tarot cards and crystals"
                src="https://images.unsplash.com/photo-1561439741-6549987b8c66" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-800">
              About <span className="text-yellow-600">GlamVybe</span>
            </h2>
            
            <div className="w-20 h-1 bg-yellow-500 mb-8"></div>
            
            <p className="text-gray-700 mb-6 text-lg">
              At GlamVybe, we believe that numbers, crystals, and ancient wisdom hold the key to understanding the universe and our place within it. Our mission is to help you unlock the hidden patterns in your life through the ancient wisdom of numerology, Vastu, crystals, and tarot.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg">
              With years of experience and a deep understanding of these mystical principles, our experts provide personalized consultations that can transform your life, business, and relationships.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">Our Vision</h3>
                <p className="text-gray-600">To empower individuals through the transformative power of numerology, Vastu, crystals, and tarot principles.</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">Our Approach</h3>
                <p className="text-gray-600">We combine ancient wisdom with modern understanding to provide practical, actionable insights.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
