// src/components/FAQ.tsx
import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type QA = { id: string; q: string; a: React.ReactNode };

const defaultFaqs: QA[] = [
  {
    id: "process",
    q: "What does your recruiting process look like?",
    a: (
      <p>
        We begin with a focused discovery to define outcomes, competencies, and
        culture. Then: calibrated profile → targeted sourcing → structured
        pre-screens → curated shortlist with written insights. We guide
        interviews, references, and offer strategy to a clean close.
      </p>
    ),
  },
  {
    id: "timing",
    q: "How long does a typical search take?",
    a: (
      <p>
        Most Advisor, Ops, and Compliance searches deliver a shortlist in{" "}
        <strong>7–14 days</strong>. Offers typically finalize in{" "}
        <strong>21–35 days</strong>, with senior/niche mandates extending as
        market dynamics require.
      </p>
    ),
  },
  {
    id: "guarantee",
    q: "What guarantees do you provide?",
    a: (
      <p>
        We include a <strong>replacement guarantee</strong> during the agreed
        window. If a hire exits for a covered reason, we re-open the search at
        no additional fee—same rigor, same tempo.
      </p>
    ),
  },
  {
    id: "fees",
    q: "How do fees work?",
    a: (
      <p>
        Transparent, outcome-tied pricing. Clients typically choose{" "}
        <strong>milestone-based</strong> (progress-linked) or{" "}
        <strong>success-based</strong> (upon hire). Both models include sourcing,
        pre-screens, and shortlist presentations—no surprises.
      </p>
    ),
  },
  {
    id: "confidential",
    q: "Can you handle confidential or hard-to-fill roles?",
    a: (
      <p>
        Yes. We run discreet outreach, message-market fit testing, and targeted
        mapping to surface off-market talent. Communication is controlled and
        signal-safe at every step.
      </p>
    ),
  },
  {
    id: "prescreen",
    q: "What makes candidates ‘pre-screened’?",
    a: (
      <p>
        We validate role alignment, compensation band, regulatory standing (when
        applicable), and team-fit indicators before submission. You see fewer
        resumes—and stronger signal per interview.
      </p>
    ),
  },
  {
    id: "industries",
    q: "Which industries do you specialize in?",
    a: (
      <p>
        We focus exclusively on the{" "}
        <strong>wealth management and financial services ecosystem</strong>,
        including advisory, compliance, operations, and executive leadership.
      </p>
    ),
  },
  {
    id: "global",
    q: "Do you work with firms outside our region?",
    a: (
      <p>
        Yes. We support mandates globally, with a concentration in{" "}
        <strong>North America, Europe, and the GCC</strong>. Local compliance
        expertise ensures smooth execution across jurisdictions.
      </p>
    ),
  },
  {
    id: "diversity",
    q: "How do you approach diversity in hiring?",
    a: (
      <p>
        Every search embeds <strong>Diversity, Equity & Inclusion (DEI)</strong>{" "}
        goals. We expand pipelines, challenge bias through structured
        assessments, and benchmark diverse shortlists against market data.
      </p>
    ),
  },
  {
    id: "tech",
    q: "Do you use technology in your search process?",
    a: (
      <p>
        Absolutely. We combine advanced sourcing tech, market analytics, and
        human judgment. Technology accelerates reach, while advisors ensure fit
        and context.
      </p>
    ),
  },
  {
    id: "support",
    q: "What support do you provide after the hire?",
    a: (
      <p>
        We remain engaged post-placement with{" "}
        <strong>30-60-90 day check-ins</strong>, ensuring onboarding success and
        long-term retention alignment.
      </p>
    ),
  },
];

/* ---------- JSON-LD helpers ---------- */
function isReactElement(
  node: React.ReactNode
): node is React.ReactElement<{ children?: React.ReactNode }> {
  return React.isValidElement(node);
}
function toText(node: React.ReactNode): string {
  if (node == null || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join(" ");
  if (isReactElement(node)) return toText(node.props.children);
  try {
    return JSON.stringify(node);
  } catch {
    return "";
  }
}
function toJsonLd(items: QA[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: toText(it.a) },
    })),
  };
}

/* ---------- Component ---------- */
const FAQ: React.FC<{ id?: string; title?: string; items?: QA[] }> = ({
  id = "faq",
  title = "General FAQ",
  items = defaultFaqs,
}) => {
  const prefersReduced = useReducedMotion();
  const [openId, setOpenId] = React.useState<string | null>(items[0]?.id ?? null);
  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  const anim = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: prefersReduced ? 0 : 0.22, ease: "easeOut" as const },
  };

  return (
    <section id={id} className="py-20 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toJsonLd(items)) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-light tracking-wide">
            {title}
          </h2>
          <p className="text-muted-foreground mt-3">
            Clear answers to the questions we hear most.
          </p>
        </div>

        <div className="rounded-2xl border bg-white shadow-sm divide-y">
          {items.map((it) => {
            const isOpen = openId === it.id;
            return (
              <div key={it.id} className="px-5 md:px-6">
                <button
                  className="group w-full py-5 md:py-6 flex items-start justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${it.id}`}
                  onClick={() => toggle(it.id)}
                >
                  <span className="text-base md:text-lg font-medium">{it.q}</span>
                  <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${it.id}`}
                      role="region"
                      aria-label={it.q}
                      initial={anim.initial}
                      animate={anim.animate}
                      exit={anim.exit}
                      transition={anim.transition}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 md:pb-6 text-muted-foreground leading-relaxed">
                        {it.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
