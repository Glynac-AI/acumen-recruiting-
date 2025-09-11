import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Play, Users, Layers, ArrowRight, Check,
  CalendarRange, Sparkles, Workflow, Handshake,
  FileText, Search
} from "lucide-react";


const kbdRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F6BFF] focus-visible:ring-offset-white";

const ServiceTab: React.FC<{
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}> = ({ active, onClick, icon, title, description, tabIndex = 0, onKeyDown }) => (
  <button
    onClick={onClick}
    onKeyDown={onKeyDown}
    tabIndex={tabIndex}
    aria-pressed={active}
    className={`flex-1 relative py-6 px-6 rounded-xl transition-all duration-300 overflow-hidden text-left ${kbdRing} ${
      active ? "bg-white shadow-md border border-[#4F6BFF1A]"
             : "bg-white/60 hover:bg-white hover:shadow-sm border border-gray-200/70"
    }`}
  >
    {active && (
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#4F6BFF0D] to-transparent -z-10"
        layoutId="serviceTabHighlight"
        transition={{ duration: 0.35 }}
      />
    )}
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
        active ? "bg-[#4F6BFF1A] text-[#4F6BFF]" : "bg-gray-100 text-gray-400"
      }`}>
        {icon}
      </div>
      <div>
        <div className={`text-base font-medium ${active ? "text-[#0A2540]" : "text-gray-900"}`}>{title}</div>
        <p className="text-sm text-gray-500 line-clamp-1">{description}</p>
      </div>
    </div>
  </button>
);

const ServicesSolutions: React.FC = () => {
  const [activeService, setActiveService] = useState<"snapshot"|"deepdive"|"complete">("snapshot");
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  // Scroll decor
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.15], [30, 0]);

  const services = useMemo(() => ([
    {
      id: "snapshot" as const,
      title: "Talent Snapshot™",
      description: "Focused candidate introductions for immediate signal.",
      icon: <Play className="w-5 h-5" />,
      color: "#4F6BFF",
      details: [
        "Pre-recorded video introductions",
        "Role-aligned screening prompts",
        "Rapid shortlists with scannable notes",
        "Immediate access via secure client portal",
      ],
      benefits: [
        "Review more candidates in less time",
        "See communication style authentically",
        "Easy shareability with stakeholders",
        "Fewer scheduling conflicts",
      ],
      pricing: [
        { level: "0–60k roles", price: "20 for $200 · 50 for $450 · 100 for $800" },
        { level: "60k–120k roles", price: "Pricing doubles" },
        { level: "120k–300k roles", price: "Pricing triples" },
      ]
    },
    {
      id: "deepdive" as const,
      title: "Talent DeepDive™",
      description: "Structured interviews for nuanced capability mapping.",
      icon: <Users className="w-5 h-5" />,
      color: "#6366f1",
      details: [
        "Recruiter-led structured interviews",
        "Behavioral + situational prompts",
        "Competency scorecard and notes",
        "Clear strengths/risks callouts",
      ],
      benefits: [
        "Deeper technical & non-technical signal",
        "Bias-reducing comparability",
        "Role-specific probes",
        "Third-party professionalism",
      ],
      pricing: [
        { level: "0–60k roles", price: "10 for $300 · 20 for $550 · 50 for $1,250" },
        { level: "60k–120k roles", price: "Pricing doubles" },
        { level: "120k–300k roles", price: "Pricing triples" },
      ]
    },
    {
      id: "complete" as const,
      title: "Complete Talent Pack™",
      description: "Snapshot + DeepDive for critical roles.",
      icon: <Layers className="w-5 h-5" />,
      color: "#4F6BFF",
      details: [
        "Combined methodologies",
        "Maximum signal density",
        "Comprehensive screening",
        "Ideal for senior/complex roles",
      ],
      benefits: [
        "Highest decision confidence",
        "Time saved for your panel",
        "Multi-angle candidate view",
        "Smoother close plan",
      ],
      pricing: [
        { level: "0–60k roles", price: "Starter $450 · Growth $900 · Enterprise $2,000" },
        { level: "60k–120k roles", price: "Pricing doubles" },
        { level: "120k–300k roles", price: "Pricing triples" },
      ]
    }
  ]), []);

  const active = services.find(s => s.id === activeService)!;

  // Keyboard nav for tabs
  const tabOrder = services.map(s => s.id);
  const onTabKey = (e: React.KeyboardEvent, id: typeof activeService) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const idx = tabOrder.indexOf(id);
      setActiveService(tabOrder[(idx + 1) % tabOrder.length]);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const idx = tabOrder.indexOf(id);
      setActiveService(tabOrder[(idx - 1 + tabOrder.length) % tabOrder.length]);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      // already selects via focus; noop
    }
  };

  return (
    <section ref={sectionRef} id="services" className="relative bg-white py-28 overflow-hidden">
      {/* Ambient gradient */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[radial-gradient(1000px_420px_at_50%_-10%,rgba(79,107,255,0.06),transparent)]" />
      </motion.div>

      {/* micro texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "220px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <span className="inline-block py-1.5 px-4 bg-[#4F6BFF1A] text-[#4F6BFF] font-medium rounded-full text-sm mb-6">
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-[#0A2540]">
            Tailored Recruiting Solutions
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#505c6e]">
            Calm, structured, and outcome-focused—from first shortlist to signed offer.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-10" role="tablist" aria-label="Recruiting solutions">
            {services.map((s) => (
              <ServiceTab
                key={s.id}
                active={activeService === s.id}
                onClick={() => setActiveService(s.id)}
                onKeyDown={(e) => onTabKey(e, s.id)}
                icon={s.icon}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>

          {/* Active panel */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div className="rounded-3xl border border-gray-200/70 bg-white/70 backdrop-blur shadow-sm overflow-hidden">
                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* left */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${active.color}1A` }}
                        >
                          <div className="text-[#4F6BFF]">{active.icon}</div>
                        </div>
                        <h3 className="text-2xl font-display font-light text-[#0A2540]">
                          {active.title}
                        </h3>
                      </div>
                      <p className="text-[#505c6e] mb-8">
                        {active.description}
                      </p>
                      <div>
                        <h4 className="font-medium text-[#0A2540] mb-3">Key features</h4>
                        <ul className="space-y-3">
                          {active.details.map((d, i) => (
                            <li key={i} className="flex gap-3 text-[#505c6e]">
                              <Check className="w-5 h-5 text-[#4F6BFF] mt-0.5 shrink-0" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* right */}
                    <div>
                      <h4 className="font-medium text-[#0A2540] mb-3">Benefits</h4>
                      <ul className="space-y-3 mb-8">
                        {active.benefits.map((b, i) => (
                          <li key={i} className="flex gap-3 text-[#505c6e]">
                            <Check className="w-5 h-5 text-[#4F6BFF] mt-0.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                        <h4 className="font-medium text-[#0A2540] mb-3">Pricing</h4>
                        <div className="space-y-4">
                          {active.pricing.map((t, i) => (
                            <div key={i} className="pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                              <div className="text-sm font-medium text-[#0A2540]">{t.level}</div>
                              <div className="text-[#505c6e]">{t.price}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-[#505c6e] flex gap-2">
                          <Check className="w-4 h-4 text-[#4F6BFF] mt-0.5" />
                          Success fee applies per hire.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* panel footer */}
                <div className="bg-gray-50/80 border-t border-gray-200 p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="text-sm text-[#505c6e]">
                    Ready to move a role forward with {active.title}?
                  </p>
                  <a
                    href="/contact"
                    className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#4F6BFF] text-white text-sm hover:bg-[#445fe6] transition ${kbdRing}`}
                  >
                    Get started <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================
            ACUMEN EXPERIENCE (2026)
           ================ */}
        <div id="experience" className="max-w-6xl mx-auto mt-20">
          <div className="rounded-3xl border border-gray-200/70 bg-white/70 backdrop-blur shadow-sm overflow-hidden">
            {/* header row */}
            <div className="p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <span className="inline-block py-1 px-3 text-xs rounded-full bg-[#4F6BFF1A] text-[#4F6BFF]">Our Process</span>
                <h3 className="mt-3 text-3xl md:text-4xl font-display font-light text-[#0A2540]">
                  The Acumen Experience
                </h3>
                <p className="mt-3 text-[#505c6e]">
                  A deliberately calm journey—clear scorecards, tight feedback loops, and no guesswork.
                </p>
              </div>
              <a
                href="/contact"
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-900 transition ${kbdRing}`}
              >
                Talk to us <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* body */}
            <div className="px-8 md:px-10 pb-10">
              <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
                {/* sticky rail */}
                <div className="lg:sticky lg:top-24 h-fit">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="text-sm font-medium text-[#0A2540] mb-4">Overview</div>
                    <ol className="space-y-3 text-sm text-[#505c6e]">
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[12px] font-medium">01</div>
                        Consultation
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[12px] font-medium">02</div>
                        Sourcing
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[12px] font-medium">03</div>
                        Interviews
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-[12px] font-medium">04</div>
                        Decision & Close
                      </li>
                    </ol>
                  </div>
                </div>

                {/* steps grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Consultation",
                      icon: <CalendarRange className="w-5 h-5" />,
                      copy:
                        "Define the scorecard, align the panel, and set a predictable timeline. We remove ambiguity from day one."
                    },
                    {
                      title: "Sourcing",
                      icon: <Sparkles className="w-5 h-5" />,
                      copy:
                        "Targeted outreach and calibration cycles produce crisp shortlists with scannable notes you can trust."
                    },
                    {
                      title: "Interviews",
                      icon: <Workflow className="w-5 h-5" />,
                      copy:
                        "We handle prep and scheduling, then keep tight feedback loops so momentum never stalls."
                    },
                    {
                      title: "Decision & Close",
                      icon: <Handshake className="w-5 h-5" />,
                      copy:
                        "References, offer strategy, close plan, and 30/60/90 onboarding check-ins to ensure success."
                    }
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
                      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 text-[#0A2540] flex items-center justify-center">
                          {s.icon}
                        </div>
                        <div className="text-lg font-medium text-[#0A2540]">{s.title}</div>
                      </div>
                      <p className="mt-3 text-[#505c6e]">{s.copy}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* deliverables + options */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h4 className="text-lg font-medium text-[#0A2540]">Deliverables you’ll receive</h4>
                  <ul className="mt-4 space-y-3 text-[#505c6e]">
                    {[
                      "Role scorecard & intake brief",
                      "Calibrated shortlist with structured notes",
                      "Interview coordination & debrief templates",
                      "Reference snapshots and risk flags",
                      "Offer support and close plan",
                      "30/60/90 onboarding check-ins",
                    ].map((l, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[#0A2540]" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h4 className="text-lg font-medium text-[#0A2540]">Engagement options</h4>
                  <div className="mt-4 grid sm:grid-cols-3 gap-4">
                    {[
                      { t: "Snapshot™", i: <Search className="w-5 h-5" />, d: "Fast video intros to gauge communication & fit." },
                      { t: "DeepDive™", i: <FileText className="w-5 h-5" />, d: "Structured interviews for deeper capability." },
                      { t: "Complete Pack™", i: <Sparkles className="w-5 h-5" />, d: "Both methods combined for critical roles." },
                    ].map((c, i) => (
                      <div key={i} className="rounded-xl border border-gray-200 p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-gray-100 text-[#0A2540] flex items-center justify-center">
                            {c.i}
                          </div>
                          <div className="font-medium text-sm text-[#0A2540]">{c.t}</div>
                        </div>
                        <p className="text-sm text-[#505c6e] mt-2">{c.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success fee (kept, no metrics) */}
        <motion.div
          className="mt-16 max-w-6xl mx-auto bg-[#4F6BFF0D] rounded-2xl p-6 border border-[#4F6BFF1A]"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-start gap-4">
            <div className="bg-white rounded-lg p-2 text-[#4F6BFF] mt-1 border border-[#4F6BFF1A]">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-[#0A2540]">Success Fee Alignment</h4>
              <p className="text-[#505c6e]">
                Our incentives align with yours. Success fees reflect the selectivity and effort for higher-comp roles—and are paid only when you hire.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-sm text-[#505c6e]">0–60k roles</div>
                  <div className="text-xl text-[#4F6BFF] font-light">$500 <span className="text-xs text-[#505c6e]">per hire</span></div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-sm text-[#505c6e]">60k–120k roles</div>
                  <div className="text-xl text-[#4F6BFF] font-light">$2,000 <span className="text-xs text-[#505c6e]">per hire</span></div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-sm text-[#505c6e]">120k–300k roles</div>
                  <div className="text-xl text-[#4F6BFF] font-light">$6,000 <span className="text-xs text-[#505c6e]">per hire</span></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSolutions;
