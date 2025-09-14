// src/components/services/ServicesSolutions.tsx
import React, { useRef, useState, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Play,
  Users,
  Layers,
  ArrowRight,
  Check,
  PhoneCall,
  Palette,
  Search,
  ListChecks,
  Handshake,
  ChevronRight,
} from "lucide-react";

/**
 * Notes on smoothness (no blinking):
 * - Removed AnimatePresence for the tab body swap to avoid mount/unmount flashes.
 * - Use `initial={false}` everywhere swapping keyed content so nothing re-animates from 0 → 1 on each tab change.
 * - Preserve container height with a minHeight so layout doesn’t jump when content length differs.
 * - Use spring transitions and `layout` where helpful for buttery moves without opacity flicker.
 * - Respect `prefers-reduced-motion` via CSS (tailwind) and by limiting intensive animations.
 */

const ServicesSolutions = () => {
  const [activeService, setActiveService] = useState("snapshot");
  const [activeStep, setActiveStep] = useState("consultation");
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Scroll-based animations for header
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.15], [16, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  // Services data (tabs)
  const services = [
    {
      id: "snapshot",
      title: "Talent Snapshot™",
      description:
        "Brief, focused candidate introductions that provide immediate insight into fit and capability.",
      details: [
        "Pre-recorded video introductions from candidates",
        "Custom screening questions tailored to your requirements",
        "Efficient initial assessment of candidate fit",
        "Immediate access via our secure client portal",
      ],
      benefits: [
        "Quickly review multiple candidates",
        "See authentic personality and communication style",
        "Share candidate videos with team members",
        "Reduce scheduling conflicts and time constraints",
      ],
      icon: <Play className="w-5 h-5" />,
      color: "#4F6BFF",
      pricing: [
        { level: "0-60k roles", price: "20 for $200 | 50 for $450 | 100 for $800" },
        { level: "60k-120k roles", price: "Pricing doubles" },
        { level: "120k-300k roles", price: "Pricing triples" },
      ],
    },
    {
      id: "deepdive",
      title: "Talent DeepDive™",
      description:
        "Structured, in-depth conversations that reveal nuanced understanding of experience and expertise.",
      details: [
        "Recruiter-led structured interviews",
        "Comprehensive assessment of skills and experience",
        "Behavioral and situational questions",
        "Detailed insights into candidate capabilities",
      ],
      benefits: [
        "Deeper evaluation of technical competencies",
        "Assessment of cultural fit and soft skills",
        "Customized questions for specific role requirements",
        "Professional third-party assessment",
      ],
      icon: <Users className="w-5 h-5" />,
      color: "#6366f1",
      pricing: [
        { level: "0-60k roles", price: "10 for $300 | 20 for $550 | 50 for $1,250" },
        { level: "60k-120k roles", price: "Pricing doubles" },
        { level: "120k-300k roles", price: "Pricing triples" },
      ],
    },
    {
      id: "complete",
      title: "Complete Talent Pack™",
      description:
        "A comprehensive approach combining both methodologies for thorough talent discovery.",
      details: [
        "Combined Snapshot and DeepDive methodologies",
        "Maximum candidate insights for critical roles",
        "Comprehensive screening across all dimensions",
        "Optimal approach for senior or complex positions",
      ],
      benefits: [
        "Most thorough candidate evaluation",
        "Ideal for high-stakes hiring decisions",
        "Maximum time savings for your team",
        "Complete candidate profile from multiple angles",
      ],
      icon: <Layers className="w-5 h-5" />,
      color: "#4F6BFF",
      pricing: [
        { level: "0-60k roles", price: "Starter: $450 | Growth: $900 | Enterprise: $2,000" },
        { level: "60k-120k roles", price: "Pricing doubles" },
        { level: "120k-300k roles", price: "Pricing triples" },
      ],
    },
  ] as const;

  const activeServiceData = services.find((s) => s.id === activeService) ?? services[0];

  // --- ACUMEN EXPERIENCE (redesigned) ---
  const steps = [
    {
      id: "consultation",
      no: "01",
      title: "Consultation",
      blurb:
        "Focused conversation to map goals, constraints, team dynamics and the ideal profile.",
      bullets: [
        "Success criteria & culture mapping",
        "Stakeholder alignment & timelines",
        "Target profiles and exclusions",
      ],
      icon: <PhoneCall className="w-5 h-5" />,
    },
    {
      id: "curation",
      no: "02",
      title: "Curation",
      blurb:
        "A tailored approach that mirrors how your firm evaluates talent—and how candidates engage.",
      bullets: [
        "Interview plan & process design",
        "Screening rubric & brief creation",
        "Sourcing channels & messaging",
      ],
      icon: <Palette className="w-5 h-5" />,
    },
    {
      id: "discovery",
      no: "03",
      title: "Discovery",
      blurb:
        "Signal-rich pipeline from outbound, referrals and our private network to calibrate quickly.",
      bullets: [
        "Warm outreach & referrals",
        "Competency-based pre-screens",
        "Market feedback loop",
      ],
      icon: <Search className="w-5 h-5" />,
    },
    {
      id: "shortlist",
      no: "04",
      title: "Shortlist",
      blurb:
        "Comparable candidate packets with the same artifacts so decisions are fast and fair.",
      bullets: [
        "Structured profile packets",
        "Recorded intros & notes",
        "Next-step recommendations",
      ],
      icon: <ListChecks className="w-5 h-5" />,
    },
    {
      id: "placement",
      no: "05",
      title: "Placement",
      blurb:
        "Offer design and close support, then proactive onboarding touchpoints to ensure outcomes.",
      bullets: [
        "Compensation & reference checks",
        "Close strategy & acceptance",
        "Post-start onboarding support",
      ],
      icon: <Handshake className="w-5 h-5" />,
    },
  ] as const;

  const spring = { type: "spring", stiffness: 260, damping: 28, mass: 0.6 } as const;

  return (
    <section ref={sectionRef} className="py-36 relative overflow-hidden bg-white" id="services">
      {/* Background wash */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/30 pointer-events-none"
        style={{ y: backgroundY }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        aria-hidden
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Solutions header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-24 motion-safe:transition"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <motion.span
            className="inline-block py-1.5 px-4 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            Our Solutions
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            Tailored Recruiting Solutions
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
          >
            Discover our thoughtfully designed approaches to talent identification, each crafted to address specific recruiting needs.
          </motion.p>
        </motion.div>

        {/* Services Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-16">
            {services.map((service) => {
              const isActive = activeService === service.id;
              return (
                <motion.button
                  key={service.id}
                  id={`${service.id}`}
                  type="button"
                  className={`flex-1 relative py-6 px-6 rounded-xl transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "bg-white shadow-md border border-ph/10"
                      : "bg-white/50 hover:bg-white hover:shadow-sm"
                  }`}
                  onClick={() => setActiveService(service.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.995 }}
                  transition={spring}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-ph/5 to-transparent -z-10"
                      layoutId="serviceTabHighlight"
                      transition={spring}
                    />
                  )}

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isActive ? "bg-ph/10 text-ph" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div className="text-left">
                      <h3
                        className={`font-medium text-lg ${
                          isActive ? "text-ph" : "text-foreground"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-1">{service.description}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Service Details (no blinking) */}
          <motion.div
            key={activeService}
            layout
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left */}
                  <div>
                    <motion.div
                      className="flex items-center gap-3 mb-6"
                      initial={false}
                      animate={{ opacity: 1, x: 0 }}
                      transition={spring}
                    >
                      <div className="p-2 rounded-lg bg-ph/10 text-ph">{activeServiceData.icon}</div>
                      <h3 className="text-2xl font-display font-light text-foreground">
                        {activeServiceData.title}
                      </h3>
                    </motion.div>

                    <motion.p
                      className="text-muted-foreground mb-8"
                      initial={false}
                      animate={{ opacity: 1 }}
                      transition={spring}
                    >
                      {activeServiceData.description}
                    </motion.p>

                    <motion.div initial={false} animate={{ opacity: 1 }} transition={spring}>
                      <h4 className="font-medium text-foreground mb-4">Key Features</h4>
                      <ul className="space-y-3 mb-8">
                        {activeServiceData.details.map((detail, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-3"
                            initial={false}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ ...spring, delay: 0.02 * index }}
                          >
                            <Check className="w-5 h-5 text-ph mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Right */}
                  <div>
                    <motion.div initial={false} animate={{ opacity: 1 }} transition={spring}>
                      <h4 className="font-medium text-foreground mb-4">Benefits</h4>
                      <ul className="space-y-3 mb-8">
                        {activeServiceData.benefits.map((benefit, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-3"
                            initial={false}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ ...spring, delay: 0.02 * index }}
                          >
                            <Check className="w-5 h-5 text-ph mt-0.5 shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={false}
                      animate={{ opacity: 1 }}
                      transition={spring}
                      className="bg-gray-50 p-6 rounded-xl"
                    >
                      <h4 className="font-medium text-foreground mb-4">Pricing</h4>
                      <div className="space-y-4">
                        {activeServiceData.pricing.map((tier, index) => (
                          <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                            <div className="font-medium text-sm mb-1">{tier.level}</div>
                            <div className="text-muted-foreground">{tier.price}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <div className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-ph mt-0.5">
                            <Check className="w-4 h-4" />
                          </span>
                          Success fee applies per hire
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* CTA footer */}
              <div className="bg-gray-50 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-muted-foreground text-sm">
                  Ready to transform your talent acquisition with {activeServiceData.title}?
                </p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-ph text-white text-sm font-medium rounded-md transition-colors hover:bg-ph-dark"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={spring}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------- ACUMEN EXPERIENCE (2026 UX) ---------- */}
        <section id="acumen-experience" className="mt-28 relative">
          {/* soft radial bg just for this section */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(900px 500px at 50% -10%, rgba(79,107,255,0.08), transparent 60%)",
            }}
          />

          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#4F6BFF]/10 text-[#4F6BFF] px-3 py-1 text-xs font-medium">
              Our Process
            </span>
            <h3 className="mt-4 text-4xl md:text-5xl font-display font-light tracking-tight text-[#0A2540]">
              The Acumen Experience
            </h3>
            <p className="mt-4 text-[#505c6e] text-lg max-w-3xl mx-auto">
              A modern, signal-first journey from consultation to placement—designed for clarity, speed,
              and better decisions.
            </p>
          </div>

          {/* Grid: sticky rail + cards */}
          <div className="grid lg:grid-cols-[280px,1fr] gap-10">
            {/* Sticky progress rail */}
            <aside className="hidden lg:block relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4F6BFF]/15 to-transparent" />
              <div className="sticky top-28 space-y-2">
                {steps.map((s, i) => {
                  const isActive = activeStep === s.id;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-2 transition-colors ${
                        isActive ? "bg-[#4F6BFF]/5" : "hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`relative grid place-items-center w-10 h-10 rounded-full border transition-colors ${
                          isActive ? "border-[#4F6BFF]" : "border-gray-200"
                        }`}
                      >
                        <span className={`text-sm font-medium ${isActive ? "text-[#4F6BFF]" : "text-gray-500"}`}>
                          {s.no}
                        </span>
                        <span
                          className={`absolute inset-0 rounded-full -z-10 blur-md transition-opacity ${
                            isActive ? "opacity-100 bg-[#4F6BFF]/20" : "opacity-0"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm ${isActive ? "text-[#0A2540]" : "text-gray-600"}`}>{s.title}</div>
                        <div className="text-xs text-gray-400">Step {i + 1} of {steps.length}</div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#4F6BFF]" : "text-gray-300"}`} />
                    </a>
                  );
                })}
              </div>
            </aside>

            {/* Cards column */}
            <div className="space-y-8">
              {steps.map((s, idx) => (
                <motion.article
                  id={s.id}
                  key={s.id}
                  className="relative rounded-2xl border border-gray-100 bg-white/70 backdrop-blur-sm shadow-sm overflow-hidden scroll-mt-28"
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ ...spring, delay: idx * 0.03 }}
                  onViewportEnter={() => setActiveStep(s.id)}
                >
                  {/* accent bar */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#4F6BFF] via-[#4F6BFF]/60 to-transparent" />
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-[#4F6BFF]/10 text-[#4F6BFF] grid place-items-center">
                        {s.icon}
                      </div>
                      <div className="text-sm text-[#4F6BFF]">{s.no}</div>
                      <h4 className="text-xl md:text-2xl font-medium text-[#0A2540]">{s.title}</h4>
                    </div>

                    <p className="text-[#505c6e] leading-relaxed mb-6">{s.blurb}</p>

                    <ul className="grid sm:grid-cols-2 gap-3">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-[#4F6BFF]" />
                          <span className="text-sm text-[#505c6e]">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}

              {/* Process CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 rounded-2xl border border-[#4F6BFF]/20 bg-[#4F6BFF]/5 p-6">
                <p className="text-sm text-[#505c6e]">Ready to run this process for your next role?</p>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#4F6BFF] text-white text-sm font-medium rounded-md hover:bg-[#445fe6]"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={spring}
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default memo(ServicesSolutions);
