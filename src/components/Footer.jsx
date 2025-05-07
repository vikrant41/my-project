
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-yellow-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/425244c5-e8bb-4589-aff0-8bb9a2a339a3/bad87dc20500454ccebdaa6650d431fa.jpg"
                alt="GlamVybe Logo"
                className="h-12 w-auto bg-white rounded-full p-1"
              />
              <div>
                <h2 className="text-xl font-bold text-white">GlamVybe</h2>
                <p className="text-xs text-yellow-300">Mirage</p>
              </div>
            </div>
            <p className="text-yellow-100 mb-6">
              Unlock the hidden patterns in your life with our expert numerology and Vastu services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-yellow-700 flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-yellow-700 flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-yellow-700 flex items-center justify-center hover:bg-yellow-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-yellow-100 hover:text-white transition-colors">Mobile Number Consultation</a>
              </li>
              <li>
                <a href="#services" className="text-yellow-100 hover:text-white transition-colors">Loshu Grid Analysis</a>
              </li>
              <li>
                <a href="#services" className="text-yellow-100 hover:text-white transition-colors">Name Fixing</a>
              </li>
              <li>
                <a href="#services" className="text-yellow-100 hover:text-white transition-colors">Personal Consultation</a>
              </li>
              <li>
                <a href="#services" className="text-yellow-100 hover:text-white transition-colors">Business Consultation</a>
              </li>
              <li>
                <a href="#services" className="text-yellow-100 hover:text-white transition-colors">Vastu Shastra</a>
              </li>
              <li>
                <a href="#services" className="text-yellow-100 hover:text-white transition-colors">Crystals</a>
              </li>
              <li>
                <a href="#services" className="text-yellow-100 hover:text-white transition-colors">Tarot Reading</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-yellow-100 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-yellow-100 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-yellow-100 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-yellow-100 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-yellow-100 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-yellow-100 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-yellow-300">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-yellow-300" />
                <span className="text-yellow-100">9537351125</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-yellow-300" />
                <span className="text-yellow-100">glamvybe@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-yellow-700 mt-12 pt-8 text-center">
          <p className="text-yellow-200">
            &copy; {new Date().getFullYear()} GlamVybe Mirage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
