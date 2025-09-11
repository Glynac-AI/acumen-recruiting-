import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Database, Sliders, Users, RefreshCw, CheckCircle } from "lucide-react";

const CTASection = () => {
  // Value propositions based on the client document
  const valuePropositions = [
    {
      title: "Proven Industry Partner",
      description: "A proven partner with deep wealth management industry experience",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Extensive Candidate Database",
      description: "Access to 2,000+ pre-screened candidates, plus fresh recruiting for every client",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Streamlined Technology",
      description: "Efficient online system delivering videos, resumes, and interviews directly to you",
      icon: <Sliders className="w-5 h-5" />
    },
    {
      title: "Continuous Refinement",
      description: "Feedback loops and dedicated support to optimize your candidate pool",
      icon: <RefreshCw className="w-5 h-5" />
    },
    {
      title: "Transparent Pricing",
      description: "Tiered, transparent pricing model aligned with candidate seniority and selectivity",
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Rich gradient background with deeper colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-ph/95 to-[#3A56E8] pointer-events-none"></div>

      {/* Abstract background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-white/5 rounded-bl-[100px]"></div>
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-white/5 rounded-tr-[200px]"></div>

        {/* Abstract circles with more pronounced borders */}
        <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-white/15"></div>
        <div className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-white/15"></div>
        <div className="absolute top-[60%] left-[30%] w-16 h-16 rounded-full border border-white/15"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-light tracking-wide text-white mb-6">
              Transform Your Talent Acquisition
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Partner with Acumen Recruiting to find exceptional wealth management talent at a fraction of traditional recruiting costs.
            </p>
          </motion.div>

          {/* Value Propositions Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-2xl font-light text-white text-center mb-8">
              With Acumen Recruiting, You Get
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valuePropositions.map((prop, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/15 shadow-lg shadow-black/10"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-white/15 p-2.5 rounded-lg text-white">
                      {prop.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{prop.title}</h4>
                      <p className="text-white/90 text-sm">{prop.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            className="max-w-3xl mx-auto mb-16 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 shadow-lg shadow-black/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <blockquote className="text-white/90 italic text-lg text-center">
              "Acumen helped us find our Senior Wealth Advisor in just 12 days - a position we had been struggling to fill for months."
            </blockquote>
            <div className="mt-4 text-white font-medium text-center">
              — Managing Director, Private Wealth Firm
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-white text-ph font-medium rounded-lg shadow-lg shadow-black/10 flex items-center justify-center gap-2"
              whileHover={{ y: -3, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="/services"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Bottom note */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-white/80">
              Typical time-to-hire: <span className="font-medium text-white">7-14 days</span> | Success rate: <span className="font-medium text-white">93%</span> | Available roles: <span className="font-medium text-white">Wealth management professionals at all levels</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;