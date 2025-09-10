import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Super simplified navigation - just the core pages
  const mainLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" }
  ];

  return (
    <footer className="border-t border-gray-100 py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Logo and company info */}
          <div className="max-w-md">
            <Link to="/" className="inline-flex items-center mb-4">
              <span className="text-2xl font-display tracking-tight">
                <span className="text-[#4F6BFF] font-normal">Acumen</span> <span className="text-[#0A2540] font-light">Recruiting</span>
              </span>
            </Link>
            
            <p className="text-[#505c6e] mb-6 leading-relaxed">
              Connecting elite wealth management talent with leading firms through a sophisticated, technology-enhanced approach.
            </p>
            
            <div className="flex items-center mb-4 text-[#505c6e]">
              <MapPin className="w-5 h-5 text-[#4F6BFF]/70 mr-3 shrink-0" />
              4753 N. Broadway, Chicago IL 60640
            </div>
            
            <div className="flex items-center mb-4 text-[#505c6e]">
              <Phone className="w-5 h-5 text-[#4F6BFF]/70 mr-3 shrink-0" />
              (773) 430-3534
            </div>
            
            <div className="flex items-center text-[#505c6e]">
              <Mail className="w-5 h-5 text-[#4F6BFF]/70 mr-3 shrink-0" />
              info@acumenrecruiting.com
            </div>
          </div>

          {/* Right section with links and CTA */}
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8">
              {mainLinks.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.link} 
                  className="text-[#505c6e] hover:text-[#4F6BFF] transition-colors text-sm py-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="self-start"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#4F6BFF] text-white text-sm font-medium rounded-md transition-colors hover:bg-[#3A56E8]"
              >
                Request Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Simple copyright line */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#505c6e] mb-4 md:mb-0">
            © {currentYear} Acumen Recruiting. All rights reserved.
          </p>
          
          <Link to="/privacy" className="text-sm text-[#505c6e] hover:text-[#4F6BFF] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;