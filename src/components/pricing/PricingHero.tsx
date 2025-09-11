// src/components/pricing/PricingHero.tsx
import * as React from "react";
import { motion } from "framer-motion";

export default function PricingHero() {
  return (
    <section className="relative w-full min-h-[86vh] md:min-h-[88vh] flex items-center bg-white pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main quote */}
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight"
          >
            Transparent pricing. No surprises.
          </motion.h1>

          {/* Sub-quote */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-5 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Simple tiers tailored to your search complexity and urgency.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#plans"
              className="px-5 py-2.5 rounded-full bg-black text-white hover:bg-gray-900 transition"
            >
              Compare Plans
            </a>
            <a
              href="/contact"
              className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-900 hover:bg-gray-50 transition"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
