// src/pages/Contact.tsx
import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Mail,
  PhoneCall,
  CheckCircle2,
  Loader2,
  ChevronDown,
  AlertCircle,
  ShieldCheck,
  Timer,
  Users,
} from "lucide-react";

/* ---------------------- Tiny toast helper ---------------------- */
function useToast() {
  const [toast, setToast] = React.useState<{
    type: "success" | "error";
    message: string;
    open: boolean;
  }>({ type: "success", message: "", open: false });

  const show = (type: "success" | "error", message: string, ms = 2800) => {
    setToast({ type, message, open: true });
    window.setTimeout(() => setToast((t) => ({ ...t, open: false })), ms);
  };

  const Toast = () =>
    toast.open ? (
      <div
        role="status"
        aria-live="polite"
        className={[
          "fixed left-1/2 -translate-x-1/2 bottom-6 z-[60] rounded-xl shadow-lg px-4 py-3",
          "text-sm font-medium",
          toast.type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white",
        ].join(" ")}
      >
        {toast.message}
      </div>
    ) : null;

  return { Toast, show };
}

/* ---------------------- FAQ data ---------------------- */
type QA = { id: string; q: string; a: React.ReactNode };

const faqs: QA[] = [
  {
    id: "process",
    q: "What does your recruiting process look like?",
    a: (
      <p>
        Discovery → calibrated profile → targeted sourcing → structured pre-screens → curated shortlist with insights.
        We coordinate interviews, references, and offer strategy through to close.
      </p>
    ),
  },
  {
    id: "timing",
    q: "How long does a typical search take?",
    a: (
      <p>
        Most shortlists arrive in <strong>7–14 days</strong>. Offers typically finalize in{" "}
        <strong>21–35 days</strong>, depending on seniority and market conditions.
      </p>
    ),
  },
  {
    id: "guarantee",
    q: "Do you offer a guarantee?",
    a: (
      <p>
        Yes — a <strong>replacement guarantee</strong> during the agreed window. If a hire exits for a covered reason, we
        re-open the search at no additional fee.
      </p>
    ),
  },
  {
    id: "fees",
    q: "How do fees work?",
    a: (
      <p>
        Transparent, outcome-tied pricing. Clients choose <strong>milestone-based</strong> or{" "}
        <strong>success-based</strong>. Both include sourcing, pre-screens, and shortlist presentations.
      </p>
    ),
  },
  {
    id: "confidential",
    q: "Can you handle confidential or hard-to-fill roles?",
    a: (
      <p>
        Absolutely — discreet outreach and targeted mapping surface off-market talent. Communications are controlled and
        signal-safe throughout.
      </p>
    ),
  },
  {
    id: "prescreen",
    q: "What makes candidates ‘pre-screened’?",
    a: (
      <p>
        We validate role alignment, compensation band, regulatory standing, and team-fit indicators before submission.
        Fewer resumes, stronger signal per interview.
      </p>
    ),
  },
  {
    id: "support",
    q: "What support is provided after the hire?",
    a: (
      <p>
        Post-placement support with <strong>30-60-90 day check-ins</strong> to ensure onboarding success and retention
        alignment.
      </p>
    ),
  },
];

/* ---------------------- Page ---------------------- */
const Contact: React.FC = () => {
  const reduced = useReducedMotion();
  const { Toast, show } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const submitBtnRef = React.useRef<HTMLButtonElement | null>(null);

  const [fields, setFields] = React.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    message: "",
    honey: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const emailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());

  const validate = () => {
    const next: Record<string, string> = {};
    if (!fields.name.trim()) next.name = "Please enter your full name.";
    if (!emailValid(fields.email)) next.email = "Enter a valid email address.";
    if (!fields.message.trim()) next.message = "Please share a brief message.";
    return next;
  };

  const onChange =
    (key: keyof typeof fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.value;
      setFields((f) => ({ ...f, [key]: value }));
      setErrors((prev) => (prev[key] ? { ...prev, [key]: "" } : prev));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      show("error", "Please fix the highlighted fields.");
      return;
    }
    if (fields.honey.trim().length > 0) return;

    setLoading(true);
    setSent(false);
    try {
      // Hook up your API or service here
      await new Promise((r) => setTimeout(r, 1400));
      formRef.current?.reset();
      setFields({ name: "", email: "", company: "", phone: "", role: "", message: "", honey: "" });
      setSent(true);
      submitBtnRef.current?.focus();
      show("success", "Message sent! We’ll reply within one business day.");
    } catch {
      show("error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* --- top progress bar during submit (subtle UX cue) --- */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: reduced ? 0 : 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 h-0.5 bg-[#4F6BFF] z-50"
          />
        )}
      </AnimatePresence>

      {/* ---------------------- HERO (enhanced) ---------------------- */}
      <section className="relative bg-background">
        <div className="container mx-auto px-6 pt-28 pb-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Credibility pill */}
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-emerald-700/90">Trusted by leading wealth firms</span>
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-display font-light tracking-wide">
              Let’s Build Your Team
            </h1>

            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Share your mandate and ideal profile. We’ll respond with a clear next step and timeline — fast,
              transparent, and tailored to your goals.
            </p>
            <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
              From senior advisors to compliance and operations talent, our proven process delivers pre-screened,
              culture-fit candidates in days, not months.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact-form"
                className="rounded-full bg-[#4F6BFF] px-6 py-3 text-white font-medium shadow-sm hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F6BFF]"
              >
                Start the conversation
              </a>
              <a
                href="tel:+17734303534"
                className="rounded-full border border-input bg-white px-6 py-3 font-medium hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F6BFF]"
              >
                Call (773) 430-3534
              </a>
            </div>
          </motion.div>

          {/* Trust highlights + stat row */}
          <motion.div
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {[
              { icon: <Timer className="h-5 w-5" />, title: "Fast Response", desc: "Shortlists in 7–14 days." },
              { icon: <Users className="h-5 w-5" />, title: "Specialized Focus", desc: "Wealth, advisory, ops, compliance." },
              { icon: <ShieldCheck className="h-5 w-5" />, title: "Guarantee Included", desc: "Replacement during window." },
            ].map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border bg-white p-6 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border bg-white">
                  {card.icon}
                </div>
                <h3 className="text-base font-medium">{card.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{card.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {[
              { value: "350+", label: "Successful Placements" },
              { value: "12 days", label: "Avg. Shortlist Delivery" },
              { value: "95%", label: "12-Month Retention Rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center rounded-xl border bg-white px-6 py-5 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-2xl font-semibold text-[#4F6BFF]">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* -------- CONTACT FORM + DETAILS -------- */}
      <section id="contact-form" className="bg-background">
        <div className="container mx-auto px-6 pb-12">
          {/* Success banner */}
          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="max-w-5xl mx-auto mb-6 rounded-xl border border-emerald-200 bg-emerald-50/60 px-4 py-3 text-sm text-emerald-900"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" />
                  <p>Thanks! Your message was sent. We’ll get back to you shortly.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto"
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            {/* Form */}
            <div className="relative rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
              <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#4F6BFF]/40 to-transparent" />
              <h2 className="text-2xl font-light mb-6">Send us a message</h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* honeypot */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  className="hidden"
                  autoComplete="off"
                  value={fields.honey}
                  onChange={onChange("honey")}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field
                    id="name"
                    label="Full Name"
                    required
                    value={fields.name}
                    onChange={onChange("name")}
                    placeholder="John Smith"
                    error={errors.name}
                    autoComplete="name"
                  />
                  <Field
                    id="email"
                    label="Email Address"
                    required
                    type="email"
                    value={fields.email}
                    onChange={onChange("email")}
                    placeholder="john@example.com"
                    error={errors.email}
                    autoComplete="email"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field
                    id="company"
                    label="Firm Name"
                    value={fields.company}
                    onChange={onChange("company")}
                    placeholder="Your Wealth Management Firm"
                    autoComplete="organization"
                  />
                  <Field
                    id="phone"
                    label="Phone"
                    value={fields.phone}
                    onChange={onChange("phone")}
                    placeholder="(773) 430-3534"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-1.5">
                    Role you’re hiring for
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={fields.role}
                    onChange={onChange("role")}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    aria-label="Role you are hiring for"
                  >
                    <option value="">Select role type</option>
                    <option value="wealth-manager">Wealth Manager / Advisor</option>
                    <option value="financial-planner">Financial Planner</option>
                    <option value="tax-advisor">Tax Advisor</option>
                    <option value="estate-planning">Estate Planning Specialist</option>
                    <option value="compliance">Compliance Officer</option>
                    <option value="operations">Operations / Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Field
                  id="message"
                  label="Message"
                  as="textarea"
                  rows={6}
                  required
                  value={fields.message}
                  onChange={onChange("message")}
                  placeholder="Tell us about your search, timeline, and goals..."
                  error={errors.message}
                />

                <button
                  ref={submitBtnRef}
                  type="submit"
                  disabled={loading}
                  className={[
                    "w-full py-3 rounded-md font-medium transition-colors",
                    "bg-[#4F6BFF] text-white hover:bg-[#4F6BFF]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F6BFF]",
                    loading ? "opacity-80 cursor-not-allowed" : "",
                  ].join(" ")}
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Send Message <Mail className="w-4 h-4" />
                    </span>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted about your request. We respect your privacy.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col justify-center">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-light mb-4">Prefer to talk?</h3>

                {/* Fixed contact cards (wrapping email) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <a
                    href="tel:+17734303534"
                    className="group rounded-xl border bg-white p-4 hover:shadow-md transition-all w-full h-full"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="rounded-full border bg-white w-10 h-10 flex items-center justify-center shrink-0">
                        <PhoneCall className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-muted-foreground">Call us</div>
                        <div className="font-medium group-hover:underline break-words leading-tight">
                          (773) 430-3534
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@acumenrecruiting.com"
                    className="group rounded-xl border bg-white p-4 hover:shadow-md transition-all w-full h-full"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="rounded-full border bg-white w-10 h-10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="font-medium group-hover:underline break-words leading-tight">
                          info@acumenrecruiting.com
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="rounded-xl border bg-white p-4">
                  <div className="text-sm text-muted-foreground">Office</div>
                  <div className="font-medium">4753 N. Broadway, Chicago IL 60640</div>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Pre-screened, industry-specific candidates",
                    "12–21 day average time-to-accept*",
                    "Advisor, Ops, Compliance, Tax & Estate roles",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-4">*Varies by role complexity and market dynamics.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------------- FAQ ---------------------- */}
      <section className="bg-background pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-light tracking-wide">General FAQ</h2>
            <p className="text-muted-foreground mt-3">Clear answers to what we’re asked most.</p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border bg-white shadow-sm divide-y">
            {faqs.map((it) => (
              <FAQItem key={it.id} id={it.id} q={it.q}>
                {it.a}
              </FAQItem>
            ))}
          </div>
        </div>
      </section>

      <Toast />
    </>
  );
};

/* ---------- Reusable Field (with a11y/error) ---------- */
type FieldBaseProps = {
  id: string;
  label: string;
  error?: string;
};

type FieldInputProps = FieldBaseProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    as?: "input";
  };

type FieldTextareaProps = FieldBaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
  };

type FieldProps = FieldInputProps | FieldTextareaProps;

const Field: React.FC<FieldProps> = (props) => {
  const { id, label, error } = props;
  const base =
    "w-full px-4 py-3 rounded-md border border-input bg-background placeholder:text-muted-foreground/70 " +
    "focus:outline-none focus:ring-2 focus:ring-primary transition-all";

  if (props.as === "textarea") {
    const { className, ...rest } = props as FieldTextareaProps;
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium mb-1.5">
          {label}
          {"required" in rest && rest.required ? <span className="text-red-500"> *</span> : null}
        </label>
        <textarea id={id} className={[base, className || ""].join(" ")} {...rest} />
        {error && (
          <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }

  const { className, ...rest } = props as FieldInputProps;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">
        {label}
        {"required" in rest && rest.required ? <span className="text-red-500"> *</span> : null}
      </label>
      <input id={id} className={[base, className || ""].join(" ")} {...rest} />
      {error && (
        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

/* ---------- Single FAQ item ---------- */
const FAQItem: React.FC<{ id: string; q: string; children: React.ReactNode }> = ({ id, q, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="px-5 md:px-6">
      <button
        className="group w-full py-5 md:py-6 flex items-start justify-between gap-4 text-left"
        aria-expanded={open}
        aria-controls={`faq-${id}`}
        onClick={() => setOpen((v) => !v)}
        id={`faq-control-${id}`}
      >
        <span className="text-base md:text-lg font-medium">{q}</span>
        <ChevronDown className={`mt-1 h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-${id}`}
            role="region"
            aria-labelledby={`faq-control-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 md:pb-6 text-muted-foreground leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
