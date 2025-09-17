'use client';

import React, { useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  MotionConfig,
  m,
  useScroll,
  useTransform,
  type Transition,
  type Variants
} from "framer-motion";
import { Trophy, Award, Clock, Check, ArrowRight } from "lucide-react";

const AboutExpertise = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Parallax (scroll-linked) – safe w/ SSR, no mount flicker
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const backgroundY       = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Only micro-interactions – no reveal animations
  const hoverTransition: Transition = { type: "spring", stiffness: 180, damping: 18, mass: 0.4 };

  // Stable state so SSR == CSR (no flicker)
  const showOnly: Variants = { show: { opacity: 1, y: 0 } };

  const trackRecordStats = [
    { label: "Wealth Managers", count: "30+", icon: <Trophy className="w-5 h-5" /> },
    { label: "Financial Planners", count: "20", icon: <Trophy className="w-5 h-5" /> },
    { label: "Tax Advisors", count: "8", icon: <Trophy className="w-5 h-5" /> },
    { label: "Estate Planning Specialists", count: "15", icon: <Trophy className="w-5 h-5" /> },
    { label: "Compliance Officers", count: "5", icon: <Trophy className="w-5 h-5" /> },
    { label: "Support Staff", count: "100s", icon: <Trophy className="w-5 h-5" /> }
  ];

  const expertiseCategories = [
    {
      title: "Industry Knowledge",
      description: "Deep understanding of wealth management roles, responsibilities, and qualifications.",
      details: ["Wealth management career paths", "Regulatory requirements", "Compensation structures", "Performance benchmarks"]
    },
    {
      title: "Technology Platform",
      description: "Proprietary systems designed specifically for wealth management recruitment.",
      details: ["Candidate video platform", "Structured interview recording", "Client portal access", "Collaborative hiring tools"]
    },
    {
      title: "Assessment Methodology",
      description: "Refined processes for evaluating candidates across multiple dimensions.",
      details: ["Technical skill verification", "Cultural fit assessment", "Communication evaluation", "Long-term potential analysis"]
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig transition={hoverTransition}>
        <section ref={sectionRef} className="py-28 relative overflow-hidden" id="expertise">
          {/* Parallax background (no mount animation) */}
          <m.div
            className="absolute inset-0 bg-gradient-to-b from-white to-ph/5"
            style={{ opacity: backgroundOpacity, y: backgroundY }}
            initial={false}
            animate="show"
            variants={showOnly}
          />

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-ph/10 to-transparent blur-3xl opacity-50" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-ph/10 to-transparent blur-3xl opacity-50" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-full h-40 opacity-[0.03]"
              style={{ backgroundImage: `radial-gradient(#4F6BFF 1px, transparent 1px)`, backgroundSize: "24px 24px" }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Header (static; no reveal) */}
            <m.div initial={false} animate="show" variants={showOnly} className="max-w-3xl mx-auto text-center mb-20 transform-gpu will-change-transform">
              <span className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6">Proven Track Record</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our team has successfully placed professionals across all wealth management specialties, with exceptional results.
              </p>
            </m.div>

            {/* Track record stats (no reveal; smooth hover only) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 max-w-5xl mx-auto mb-24">
              {trackRecordStats.map((stat) => (
                <m.div
                  key={stat.label}
                  initial={false}
                  animate="show"
                  variants={showOnly}
                  className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 text-center transition-all duration-300 transform-gpu will-change-transform hover:shadow-md hover:-translate-y-1"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-light text-foreground mb-1">{stat.count}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </m.div>
              ))}
            </div>

            {/* Expertise categories (no reveal; smooth hover only) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {expertiseCategories.map((category) => (
                <m.div
                  key={category.title}
                  initial={false}
                  animate="show"
                  variants={showOnly}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 transform-gpu will-change-transform hover:shadow-md"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(79, 107, 255, 0.1)", borderColor: "rgba(79, 107, 255, 0.2)" }}
                >
                  <div className="p-6">
                    <div className="p-2 rounded-lg bg-ph/10 text-ph w-12 h-12 flex items-center justify-center mb-4">
                      <div className="w-3 h-3 rounded-full bg-ph" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{category.description}</p>
                    <ul className="space-y-2">
                      {category.details.map((detail) => (
                        <li key={detail} className="flex items-center text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-ph mr-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </m.div>
              ))}
            </div>

            {/* Success metrics (static) */}
            <m.div
              initial={false}
              animate="show"
              variants={showOnly}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-5xl mx-auto transform-gpu will-change-transform"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mx-auto mb-3">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-light text-foreground mb-1">
                    93<span className="text-ph">%</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Success rate</div>
                </div>

                <div className="text-center p-4 border-t md:border-t-0 md:border-l md:border-r border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mx-auto mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-light text-foreground mb-1">7-14</div>
                  <div className="text-sm text-muted-foreground">Days average time-to-hire</div>
                </div>

                <div className="text-center p-4 border-t md:border-t-0 border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph mx-auto mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-light text-foreground mb-1">
                    2,000<span className="text-ph">+</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Pre-screened candidates</div>
                </div>
              </div>
            </m.div>

            {/* CTA button (micro-interactions only) */}
            <m.div initial={false} animate="show" variants={showOnly} className="text-center mt-12 transform-gpu will-change-transform">
              <m.a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ph text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </m.a>
            </m.div>
          </div>
        </section>
      </MotionConfig>
    </LazyMotion>
  );
};

export default AboutExpertise;
