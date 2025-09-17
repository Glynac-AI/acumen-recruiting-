'use client';

import React from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  MotionConfig,
  type Variants,
  type Transition,
  useReducedMotion,
} from "framer-motion";
import {
  PhoneCall, Shield, Database, Sliders, RefreshCw, Users, ChevronRight, Check
} from "lucide-react";

const ServicesCTA = () => {
  // Hooks at the top level (no conditional calls)
  const prefersReduced = useReducedMotion();

  // Global default transition (used only for hover/tap)
  const baseTransition: Transition = prefersReduced
    ? { type: "tween", duration: 0 }
    : { type: "spring", stiffness: 110, damping: 24, mass: 0.5 };

  // Single “show” state so SSR == CSR. No hidden state on mount.
  const showOnly: Variants = { show: { opacity: 1, y: 0 } };

  const valuePropositions = [
    { title: "Proven Industry Partner", description: "A proven partner with deep wealth management industry experience", icon: <Shield className="w-5 h-5" /> },
    { title: "Extensive Database", description: "Access to 2,000+ pre-screened candidates, plus fresh recruiting for every client", icon: <Database className="w-5 h-5" /> },
    { title: "Streamlined Technology", description: "Efficient online system delivering videos, resumes, and interviews directly to you", icon: <Sliders className="w-5 h-5" /> },
    { title: "Continuous Refinement", description: "Feedback loops and dedicated support to optimize your candidate pool", icon: <RefreshCw className="w-5 h-5" /> },
    { title: "Transparent Pricing", description: "Tiered, transparent pricing model aligned with candidate seniority and selectivity", icon: <Users className="w-5 h-5" /> }
  ];

  const faqs = [
    { question: "How quickly can you deliver candidates?", answer: "We typically begin delivering candidate videos within 7 days of engagement, with an average time-to-hire of 7-14 days for most positions." },
    { question: "What happens if a candidate doesn't work out?", answer: "We're committed to your satisfaction. If a placed candidate doesn't meet expectations within the first 30 days, we'll provide additional candidates at no extra charge." },
    { question: "Do you work with firms of all sizes?", answer: "Yes, we work with wealth management firms of all sizes, from boutique advisory practices to large institutions. Our solutions scale to meet your specific needs." }
  ];

  return (
    <LazyMotion features={domAnimation}>
      {/* MotionConfig applies reducedMotion + default transition to children */}
      <MotionConfig reducedMotion="user" transition={baseTransition}>
        <section className="py-28 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ph/5 rounded-bl-[100px] opacity-70" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-ph/5 rounded-tr-[200px] opacity-70" />
            <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-ph/10" />
            <div className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-ph/10" />
            <div className="absolute top-[60%] left-[30%] w-16 h-16 rounded-full border border-ph/10" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Header (no entrance anim; static render) */}
            <m.div
              initial={false}
              animate="show"
              variants={showOnly}
              className="max-w-3xl mx-auto text-center mb-16 transform-gpu will-change-transform"
            >
              <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6">
                Ready to Transform Your Talent Acquisition?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Partner with Acumen Recruiting to find exceptional wealth management talent through our sophisticated, technology-enhanced approach.
              </p>
            </m.div>

            {/* Value Propositions */}
            <m.div
              initial={false}
              animate="show"
              variants={showOnly}
              className="max-w-5xl mx-auto mb-24 transform-gpu will-change-transform"
            >
              <h3 className="text-2xl font-display font-light text-foreground text-center mb-10">
                With Acumen Recruiting, You Get
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {valuePropositions.map((prop) => (
                  <m.div
                    key={prop.title}
                    initial={false}
                    animate="show"
                    variants={showOnly}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 transform-gpu will-change-transform hover:shadow-md"
                    whileHover={prefersReduced ? {} : { y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-ph/10 p-2.5 rounded-lg text-ph">{prop.icon}</div>
                      <div>
                        <h4 className="text-lg font-medium text-foreground mb-1">{prop.title}</h4>
                        <p className="text-muted-foreground text-sm">{prop.description}</p>
                      </div>
                    </div>
                  </m.div>
                ))}
              </div>
            </m.div>

            {/* FAQ */}
            <m.div
              initial={false}
              animate="show"
              variants={showOnly}
              className="max-w-3xl mx-auto mb-20 transform-gpu will-change-transform"
            >
              <h3 className="text-2xl font-display font-light text-foreground text-center mb-10">
                Frequently Asked Questions
              </h3>

              <div className="space-y-6">
                {faqs.map((faq) => (
                  <m.div
                    key={faq.question}
                    initial={false}
                    animate="show"
                    variants={showOnly}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all transform-gpu will-change-transform hover:shadow-[0_10px_25px_-5px_rgba(79,107,255,0.1)]"
                  >
                    <h4 className="text-lg font-medium text-foreground mb-2 flex items-center">
                      <ChevronRight className="w-5 h-5 text-ph mr-2" />
                      {faq.question}
                    </h4>
                    <p className="text-muted-foreground pl-7">{faq.answer}</p>
                  </m.div>
                ))}
              </div>
            </m.div>

            {/* CTA */}
            <m.div
              initial={false}
              animate="show"
              variants={showOnly}
              className="max-w-4xl mx-auto transform-gpu will-change-transform"
            >
              <div className="bg-gradient-to-r from-ph/90 to-ph rounded-2xl overflow-hidden shadow-xl">
                <div className="p-10 md:p-16 relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-[100px]" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full" />

                  <div className="relative">
                    <h3 className="text-3xl font-display font-light text-white mb-6">
                      Begin Your Talent Discovery Journey
                    </h3>

                    <p className="text-white/90 text-xl max-w-2xl mb-10">
                      Schedule a consultation to explore how our approach can enhance your wealth management firm's talent acquisition strategy.
                    </p>

                    <div>
                      <div className="flex flex-col sm:flex-row gap-5 items-center">
                        <m.a
                          href="/contact"
                          className="px-8 py-4 bg-white text-ph font-medium rounded-lg shadow-lg shadow-ph/20 hover:shadow-xl hover:shadow-ph/30 transition-all w-full sm:w-auto text-center transform-gpu will-change-transform"
                          whileHover={prefersReduced ? {} : { y: -3 }}
                          whileTap={prefersReduced ? {} : { scale: 0.98 }}
                        >
                          Schedule a Consultation
                        </m.a>

                        <div className="flex items-center gap-3 text-white">
                          <PhoneCall className="w-5 h-5" />
                          <span className="font-medium">(773) 430-3534</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-white/90 mt-0.5" />
                        <span className="text-white/90">Access to pre-screened wealth management talent</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-white/90 mt-0.5" />
                        <span className="text-white/90">7-14 days average time-to-hire</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </section>
      </MotionConfig>
    </LazyMotion>
  );
};

export default ServicesCTA;
