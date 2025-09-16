'use client'

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Trophy, Award, Clock } from "lucide-react";

const Expertise: React.FC = () => {
  // Refs for scroll-based animations
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Hydration-safe mount guard (prevents SSR→CSR flicker)
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const prefersReduced = useReducedMotion();

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Derived motion values (declared once → smoother & no re-creation each render)
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const rightBlobX = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rightBlobScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const leftBlobX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const leftBlobScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);

  // Animation timings (respect reduced motion)
  const baseEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const dur = prefersReduced ? 0 : 0.7;

  // Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.15,
        delayChildren: prefersReduced ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: baseEase },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: dur, ease: baseEase },
    },
  };

  const trackRecordContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.08,
        delayChildren: prefersReduced ? 0 : 0.2,
        ease: baseEase,
        duration: prefersReduced ? 0 : 0.8,
      },
    },
  };

  const trackRecordItemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0 : 0.8, ease: baseEase },
    },
  };

  // Stable viewport config across elements to avoid repeated re-evaluation → no flicker
  const viewport = { once: true, amount: 0.25 } as const;

  // Expertise categories with enhanced visual elements
  const expertiseCategories = [
    {
      title: "Wealth Management",
      roles: ["Portfolio Managers", "Financial Advisors", "Investment Strategists"],
      count: 500,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-4 text-ph"
          aria-hidden
        >
          <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-7h-2c0-1-1.5-2-3-2z" />
          <path d="M2 9v1c0 1.1.9 2 2 2h1" />
          <path d="M16 19h3a2 2 0 0 0 2-2v-3" />
        </svg>
      ),
    },
    {
      title: "Planning & Advisory",
      roles: ["Financial Planners", "Tax Advisors", "Estate Specialists"],
      count: 450,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-4 text-ph"
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <path d="M13 8h.01" />
          <path d="M13 12h.01" />
          <path d="M13 16h.01" />
          <path d="M17 8h.01" />
          <path d="M17 12h.01" />
          <path d="M17 16h.01" />
        </svg>
      ),
    },
    {
      title: "Operations & Compliance",
      roles: ["Compliance Officers", "Operations Leaders", "Client Service Professionals"],
      count: 1050,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-4 text-ph"
          aria-hidden
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
  ];

  const trackRecordStats = [
    { label: "Wealth Managers", count: "30+", icon: <Trophy className="w-5 h-5" /> },
    { label: "Financial Planners", count: "20", icon: <Trophy className="w-5 h-5" /> },
    { label: "Tax Advisors", count: "8", icon: <Trophy className="w-5 h-5" /> },
    { label: "Estate Planning Specialists", count: "15", icon: <Trophy className="w-5 h-5" /> },
    { label: "Compliance Officers", count: "5", icon: <Trophy className="w-5 h-5" /> },
    { label: "Support Staff", count: "100s", icon: <Trophy className="w-5 h-5" /> },
  ];

  // Remount key to allow client-only animation after hydration without SSR mismatch
  const hydrationKey = mounted ? "mounted" : "ssr";

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Enhanced background with GPU acceleration to avoid paint jank */}
      <motion.div
        key={`${hydrationKey}-bg`}
        className="absolute inset-0 bg-gradient-to-b from-white to-ph-light/5 z-0 transform-gpu will-change-transform"
        style={{ opacity: backgroundOpacity, scale: backgroundScale, backfaceVisibility: "hidden" }}
        initial={false}
        animate={{}}
      />

      {/* Animated background decorative elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-ph/5 rounded-full blur-3xl -z-10 opacity-50 transform-gpu will-change-transform"
        style={{ x: rightBlobX, scale: rightBlobScale, backfaceVisibility: "hidden" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-ph/5 rounded-full blur-3xl -z-10 opacity-50 transform-gpu will-change-transform"
        style={{ x: leftBlobX, scale: leftBlobScale, backfaceVisibility: "hidden" }}
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none select-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          key={`${hydrationKey}-title`}
          className="max-w-3xl mx-auto text-center mb-20"
          variants={titleVariants}
          initial={mounted && !prefersReduced ? "hidden" : false}
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span
            className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
            initial={mounted && !prefersReduced ? { opacity: 0, y: -10 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: dur }}
            viewport={viewport}
          >
            Our Expertise
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-display font-light tracking-wide text-foreground mb-6"
            initial={mounted && !prefersReduced ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: dur, ease: baseEase }}
            viewport={viewport}
          >
            Curated Talent for Wealth Management
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={mounted && !prefersReduced ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: dur, ease: baseEase }}
            viewport={viewport}
          >
            We specialize exclusively in wealth management talent, bringing precision and insight
            to every search.
          </motion.p>
        </motion.div>

        {/* Categories */}
        <motion.div
          key={`${hydrationKey}-grid`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial={mounted && !prefersReduced ? "hidden" : false}
          whileInView="visible"
          viewport={viewport}
        >
          {expertiseCategories.map((category, index) => (
            <motion.div key={category.title} className="relative" variants={itemVariants}>
              <motion.div
                className="glass-card rounded-xl overflow-hidden h-full flex flex-col transition-transform duration-500 transform-gpu will-change-transform"
                whileHover={prefersReduced ? {} : { y: -6 }}
              >
                {/* Card header with gradient */}
                <div className={`p-8 bg-gradient-to-br from-ph/10 to-transparent`}>
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-ph mb-5 shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">{category.title}</h3>
                </div>

                {/* Card content */}
                <div className="p-8 pt-2 flex-grow bg-white">
                  {/* Use a single in-view trigger for the list to avoid per-item flicker */}
                  <motion.ul
                    className="space-y-4 mb-6"
                    variants={containerVariants}
                    initial={mounted && !prefersReduced ? "hidden" : false}
                    whileInView="visible"
                    viewport={viewport}
                  >
                    {category.roles.map((role) => (
                      <motion.li key={role} className="flex items-center" variants={itemVariants}>
                        <div className="w-1.5 h-1.5 rounded-full bg-ph/70 mr-3"></div>
                        <span className="text-muted-foreground">{role}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Candidate count indicator */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Candidate Database</span>
                      <span className="text-ph font-medium">{category.count}+</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-ph rounded-full transform-gpu will-change-transform"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(100, (category.count / 2000) * 100)}%` }}
                        transition={{ duration: prefersReduced ? 0 : 1, delay: 0.2 }}
                        viewport={viewport}
                      />
                    </div>
                  </div>
                </div>

                {/* Connecting lines between cards (desktop only) */}
                {index < expertiseCategories.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2">
                    <motion.div
                      className="w-12 h-px bg-ph/20 transform-gpu will-change-transform"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: prefersReduced ? 0 : 0.7, delay: 0.3 }}
                      viewport={viewport}
                    />
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Track Record Section */}
        <motion.div
          key={`${hydrationKey}-track`}
          className="mt-24 max-w-5xl mx-auto"
          initial={mounted && !prefersReduced ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: prefersReduced ? 0 : 0.8, ease: baseEase }}
        >
          <div className="glass-card rounded-xl p-8 border border-ph/10 shadow-sm relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-ph/5 to-transparent blur-3xl opacity-40" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-ph" />
                <h3 className="text-2xl font-display font-light text-foreground">Proven Track Record</h3>
              </div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
                variants={trackRecordContainerVariants}
                initial={mounted && !prefersReduced ? "hidden" : false}
                whileInView="visible"
                viewport={viewport}
              >
                {trackRecordStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="bg-white rounded-lg p-4 border border-gray-100 text-center group transform-gpu will-change-transform"
                    variants={trackRecordItemVariants}
                    whileHover={prefersReduced ? {} : { y: -4 }}
                  >
                    <div className="flex justify-center mb-2">
                      <motion.div
                        className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph"
                        whileHover={prefersReduced ? {} : { scale: 1.05 }}
                      >
                        {stat.icon}
                      </motion.div>
                    </div>
                    <div className="text-2xl font-light text-foreground mb-1 group-hover:text-ph transition-colors duration-300">
                      {stat.count}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 text-center text-muted-foreground text-sm"
                initial={mounted && !prefersReduced ? { opacity: 0, y: 10 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ delay: prefersReduced ? 0 : 0.2, duration: prefersReduced ? 0 : 0.6, ease: baseEase }}
              >
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
                  <Clock className="w-4 h-4 text-ph/70" />
                  <span>Successfully placed with an average of 7-14 days time-to-hire</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Database highlights */}
        <motion.div
          key={`${hydrationKey}-db`}
          className="mt-24 py-10 px-8 rounded-2xl glass-card border border-ph/10 overflow-hidden relative"
          initial={mounted && !prefersReduced ? { opacity: 0, y: 30 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: prefersReduced ? 0 : 0.7, delay: prefersReduced ? 0 : 0.2 }}
        >
          {/* Background gradient */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-ph/5 to-transparent" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-light mb-3">Extensive Talent Network</h3>
                <p className="text-muted-foreground max-w-md">
                  Our database of pre-screened candidates covers the entire spectrum of wealth
                  management roles, ensuring precise matches for your specific needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <motion.div className="text-center" initial={mounted && !prefersReduced ? { opacity: 0, scale: 0.96 } : false} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: prefersReduced ? 0 : 0.5 }} viewport={viewport}>
                  <motion.div className="text-5xl font-light text-foreground" initial={mounted && !prefersReduced ? { y: 16 } : false} whileInView={{ y: 0 }} transition={{ duration: prefersReduced ? 0 : 0.5, delay: prefersReduced ? 0 : 0.1 }} viewport={viewport}>
                    2,000<span className="text-ph">+</span>
                  </motion.div>
                  <div className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">Pre-screened candidates</div>
                </motion.div>

                <div className="h-14 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden sm:block" />

                <motion.div className="text-center" initial={mounted && !prefersReduced ? { opacity: 0, scale: 0.96 } : false} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: prefersReduced ? 0 : 0.5, delay: prefersReduced ? 0 : 0.1 }} viewport={viewport}>
                  <motion.div className="text-5xl font-light text-foreground" initial={mounted && !prefersReduced ? { y: 16 } : false} whileInView={{ y: 0 }} transition={{ duration: prefersReduced ? 0 : 0.5, delay: prefersReduced ? 0 : 0.2 }} viewport={viewport}>
                    7-14
                  </motion.div>
                  <div className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">Days average time-to-hire</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA to About page expertise section */}
        <motion.div
          key={`${hydrationKey}-cta`}
          className="mt-12 text-center"
          initial={mounted && !prefersReduced ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: prefersReduced ? 0 : 0.2, duration: prefersReduced ? 0 : 0.6 }}
        >
          <motion.a
            href="/about#expertise"
            className="group inline-flex items-center text-ph font-medium hover:text-ph-dark transition-colors"
            whileHover={prefersReduced ? {} : { x: 5 }}
            transition={{ duration: prefersReduced ? 0 : 0.2 }}
          >
            <span className="relative">
              Explore our full expertise
              <motion.span
                className="absolute bottom-0 left-0 w-full h-px bg-ph"
                initial={false}
                whileHover={{ scaleX: 1 }}
                style={{ transformOrigin: "left", scaleX: 0 }}
                transition={{ duration: prefersReduced ? 0 : 0.3 }}
              />
            </span>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 transition-all duration-300"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
