'use client';

import React, { useState } from "react";
import {
  LazyMotion,
  domAnimation,
  MotionConfig,
  m,
  AnimatePresence,
  type Transition,
} from "framer-motion";
import { Play, Users, Layers, Check, ArrowRight } from "lucide-react";

type Tier = "standard" | "mid" | "senior";

type PriceSet = {
  label: string;
  prices: string[];
};

type Product = {
  id: "snapshot" | "deepdive" | "complete";
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  popular?: boolean;               // <- optional everywhere
  pricing: Record<Tier, PriceSet>;
  features: string[];
};

const PricingPlans = () => {
  const [activeTab, setActiveTab] = useState<Tier>("standard");

  // Smooth micro-interactions; no entrance reveals (prevents SSR blink)
  const micro: Transition = { type: "spring", stiffness: 180, damping: 18, mass: 0.4 };

  const products: Product[] = [
    {
      id: "snapshot",
      title: "Talent Snapshot™",
      description:
        "Brief, focused candidate introductions that provide immediate insight into fit and capability.",
      icon: <Play className="w-5 h-5" />,
      color: "#4F6BFF",
      pricing: {
        standard: { label: "0-60k roles", prices: ["20 for $200", "50 for $450", "100 for $800"] },
        mid: { label: "60k-120k roles", prices: ["20 for $400", "50 for $900", "100 for $1,600"] },
        senior: { label: "120k-300k roles", prices: ["20 for $600", "50 for $1,350", "100 for $2,400"] },
      },
      features: [
        "Pre-recorded video introductions",
        "Custom screening questions",
        "Immediate assessment of fit",
        "Secure client portal access",
        "Candidate sharing with team",
      ],
    },
    {
      id: "deepdive",
      title: "Talent DeepDive™",
      description:
        "Structured, in-depth conversations that reveal nuanced understanding of experience and expertise.",
      icon: <Users className="w-5 h-5" />,
      color: "#6366f1",
      pricing: {
        standard: { label: "0-60k roles", prices: ["10 for $300", "20 for $550", "50 for $1,250"] },
        mid: { label: "60k-120k roles", prices: ["10 for $600", "20 for $1,100", "50 for $2,500"] },
        senior: { label: "120k-300k roles", prices: ["10 for $900", "20 for $1,650", "50 for $3,750"] },
      },
      features: [
        "Recruiter-led structured interviews",
        "Comprehensive skill assessment",
        "Behavioral & situational questions",
        "Detailed candidate capabilities",
        "Professional third-party evaluation",
      ],
    },
    {
      id: "complete",
      title: "Complete Talent Pack™",
      description:
        "A comprehensive approach combining both methodologies for thorough talent discovery.",
      icon: <Layers className="w-5 h-5" />,
      color: "#4F6BFF",
      popular: true, // <- only this one sets it to true
      pricing: {
        standard: {
          label: "0-60k roles",
          prices: [
            "Starter: $450 (20 Snapshot + 10 DeepDive)",
            "Growth: $900 (50 Snapshot + 20 DeepDive)",
            "Enterprise: $2,000 (100 Snapshot + 50 DeepDive)",
          ],
        },
        mid: {
          label: "60k-120k roles",
          prices: [
            "Starter: $900 (20 Snapshot + 10 DeepDive)",
            "Growth: $1,800 (50 Snapshot + 20 DeepDive)",
            "Enterprise: $4,000 (100 Snapshot + 50 DeepDive)",
          ],
        },
        senior: {
          label: "120k-300k roles",
          prices: [
            "Starter: $1,350 (20 Snapshot + 10 DeepDive)",
            "Growth: $2,700 (50 Snapshot + 20 DeepDive)",
            "Enterprise: $6,000 (100 Snapshot + 50 DeepDive)",
          ],
        },
      },
      features: [
        "Combined methodologies",
        "Maximum candidate insights",
        "Comprehensive screening",
        "Optimal for senior positions",
        "Complete candidate profile",
      ],
    },
  ];

  const successFees: Record<Tier, { range: string; fee: string }> = {
    standard: { range: "0-60k roles", fee: "$500" },
    mid: { range: "60k-120k roles", fee: "$2,000" },
    senior: { range: "120k-300k roles", fee: "$6,000" },
  };

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig transition={micro}>
        <section className="py-24 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/30 pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px",
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Tabs */}
              <div className="flex flex-col sm:flex-row justify-center mb-16 gap-4">
                {(["standard", "mid", "senior"] as const).map((tab) => {
                  const isActive = activeTab === tab;
                  const label =
                    tab === "standard"
                      ? "Entry Level (0-60k)"
                      : tab === "mid"
                      ? "Mid Level (60k-120k)"
                      : "Senior Level (120k-300k)";
                  return (
                    <m.button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-5 py-3 rounded-lg transition-all transform-gpu will-change-transform ${
                        isActive
                          ? "bg-ph text-white shadow-lg shadow-ph/20"
                          : "bg-white border border-gray-200 text-foreground hover:border-ph/20"
                      }`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      layout
                    >
                      {label}
                    </m.button>
                  );
                })}
              </div>

              {/* Success fee */}
              <div className="mb-16 py-5 px-8 rounded-xl bg-ph/5 border border-ph/10 flex items-center justify-between flex-wrap gap-6 transform-gpu will-change-transform">
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex h-12 w-12 rounded-full bg-white items-center justify-center shadow-sm">
                    <div className="text-ph text-xl font-bold">+</div>
                  </div>
                  <div>
                    <div className="text-lg font-medium text-foreground mb-1">
                      Success Fee:&nbsp;
                      <AnimatePresence initial={false} mode="popLayout">
                        <m.span
                          key={activeTab}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="inline-block"
                        >
                          {successFees[activeTab].fee}
                        </m.span>
                      </AnimatePresence>
                      &nbsp;per hire
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Applied when you successfully hire a candidate, ensuring our incentives are aligned with your outcomes.
                    </p>
                  </div>
                </div>

                <m.a
                  href="/contact"
                  className="px-5 py-2 rounded-lg bg-white text-ph border border-ph/20 flex items-center gap-2 hover:shadow-md transition-all"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </m.a>
              </div>

              {/* Product cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => {
                  const priceSet = product.pricing[activeTab];
                  const isPopular = !!product.popular; // <- OK now
                  return (
                    <m.article
                      key={product.id}
                      initial={false}
                      animate={{ opacity: 1, y: 0 }}
                      className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-300 transform-gpu will-change-transform ${
                        isPopular
                          ? "border-ph/20 ring-1 ring-ph/10 shadow-lg shadow-ph/5"
                          : "border-gray-100 hover:border-ph/10 hover:shadow-md"
                      }`}
                      style={{ y: 0, opacity: 1 }}
                      layout
                    >
                      {/* Header */}
                      <div className="p-6 bg-gradient-to-br from-ph/5 to-transparent border-b border-gray-100">
                        {isPopular && (
                          <div className="bg-ph text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
                            Most Popular
                          </div>
                        )}

                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-ph/10 flex items-center justify-center text-ph">
                            {product.icon}
                          </div>
                          <h3 className="text-xl font-medium text-foreground">{product.title}</h3>
                        </div>

                        <p className="text-muted-foreground text-sm">{product.description}</p>
                      </div>

                      {/* Pricing (cross-fade on tab change) */}
                      <div className="p-6 border-b border-gray-100">
                        <div className="text-sm text-muted-foreground mb-3">{priceSet.label}</div>

                        <AnimatePresence initial={false} mode="wait">
                          <m.div
                            key={`${product.id}-${activeTab}`}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-3"
                          >
                            {priceSet.prices.map((price, idx) => (
                              <div key={idx} className="font-medium text-foreground">
                                {price}
                              </div>
                            ))}
                          </m.div>
                        </AnimatePresence>
                      </div>

                      {/* Features */}
                      <div className="p-6">
                        <div className="text-sm text-muted-foreground mb-4">Includes:</div>

                        <ul className="space-y-3">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-ph shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8">
                          <m.a
                            href="/contact"
                            className={`w-full py-3 flex items-center justify-center gap-2 rounded-lg transition-all ${
                              isPopular
                                ? "bg-ph text-white hover:shadow-lg hover:shadow-ph/20"
                                : "bg-white border border-ph/20 text-ph hover:bg-ph/5"
                            }`}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>Get Started</span>
                            <ArrowRight className="w-4 h-4" />
                          </m.a>
                        </div>
                      </div>
                    </m.article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </MotionConfig>
    </LazyMotion>
  );
};

export default PricingPlans;
