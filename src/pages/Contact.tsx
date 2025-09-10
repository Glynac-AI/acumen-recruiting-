// src/pages/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, PhoneCall, CheckCircle2, Loader2 } from "lucide-react";

/** Lightweight toast component (no external deps) */
function useToast() {
  const [toast, setToast] = React.useState<{
    type: "success" | "error";
    message: string;
    open: boolean;
  }>({ type: "success", message: "", open: false });

  const show = (type: "success" | "error", message: string, ms = 3000) => {
    setToast({ type, message, open: true });
    setTimeout(() => setToast((t) => ({ ...t, open: false })), ms);
  };

  const Toast = () =>
    toast.open ? (
      <div
        role="status"
        aria-live="polite"
        className={[
          "fixed left-1/2 -translate-x-1/2 bottom-6 z-[60] rounded-xl shadow-lg px-4 py-3",
          "text-sm font-medium",
          toast.type === "success"
            ? "bg-emerald-600 text-white"
            : "bg-red-600 text-white",
        ].join(" ")}
      >
        {toast.message}
      </div>
    ) : null;

  return { Toast, show };
}

const Contact: React.FC = () => {
  const { Toast, show } = useToast();
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const submitBtnRef = React.useRef<HTMLButtonElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Basic client-side validation
    const fd = new FormData(formRef.current);
    // spam honeypot
    if (String(fd.get("company_website") || "").length > 0) return;

    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !email || !message) {
      show("error", "Please complete all required fields.");
      return;
    }

    setLoading(true);
    try {
      // TODO: Replace with your API call (Formspree/EmailJS/own endpoint)
      // await fetch("/api/contact", { method: "POST", body: fd });
      await new Promise((r) => setTimeout(r, 1200)); // mock

      formRef.current.reset();
      submitBtnRef.current?.focus();
      show("success", "Message sent! We’ll reply within one business day.");
    } catch (err) {
      show("error", "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* SEO JSON-LD for ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "Acumen Recruiting",
              url: "https://acumenrecruit.com/contact",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+1-773-430-3534",
                email: "info@acumenrecruiting.com",
                areaServed: "US",
                availableLanguage: ["en"],
              },
            },
          }),
        }}
      />

      <section className="min-h-screen bg-background py-28">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-light tracking-wide mb-4">
              Contact Acumen Recruiting
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tell us about your hiring needs. Expect a thoughtful response and
              a clear next step within one business day.
            </p>
          </motion.div>

          {/* Grid: form + details */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Form */}
            <div className="bg-white rounded-xl p-8 border shadow-sm">
              <h2 className="text-2xl font-light mb-6">Send us a message</h2>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  className="hidden"
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1.5"
                    >
                      Full Name<span className="text-red-500"> *</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 rounded-md border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1.5"
                    >
                      Email Address<span className="text-red-500"> *</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-md border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-1.5"
                    >
                      Firm Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className="w-full px-4 py-3 rounded-md border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your Wealth Management Firm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      inputMode="tel"
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-md border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="(773) 430-3534"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Role You’re Hiring For
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    defaultValue=""
                    aria-label="Role you are hiring for"
                  >
                    <option value="" disabled>
                      Select role type
                    </option>
                    <option value="wealth-manager">Wealth Manager / Advisor</option>
                    <option value="financial-planner">Financial Planner</option>
                    <option value="tax-advisor">Tax Advisor</option>
                    <option value="estate-planning">Estate Planning Specialist</option>
                    <option value="compliance">Compliance Officer</option>
                    <option value="operations">Operations / Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Message<span className="text-red-500"> *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Tell us about your search, timeline, and goals..."
                  />
                </div>

                <button
                  ref={submitBtnRef}
                  type="submit"
                  disabled={loading}
                  className={[
                    "w-full py-3 rounded-md font-medium transition-colors",
                    "bg-primary text-white hover:bg-primary/90",
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
                  By submitting this form, you agree to be contacted about your
                  request. We respect your privacy.
                </p>
              </form>
            </div>

            {/* Sidebar: Contact Info & Trust */}
            <div className="flex flex-col justify-center">
              <div className="p-6 rounded-xl border bg-white shadow-sm space-y-3 mb-8">
                <h3 className="text-2xl font-light mb-2">Prefer to talk?</h3>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 shrink-0" />
                  <a
                    href="tel:+17734303534"
                    className="hover:underline underline-offset-4"
                  >
                    (773) 430-3534
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0" />
                  <a
                    href="mailto:info@acumenrecruiting.com"
                    className="hover:underline underline-offset-4"
                  >
                    info@acumenrecruiting.com
                  </a>
                </div>
                <div>4753 N. Broadway, Chicago IL 60640</div>
              </div>

              <ul className="space-y-3 text-sm text-muted-foreground">
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

              <p className="text-xs text-muted-foreground mt-4">
                *Varies by role complexity and market dynamics.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Toast />
    </>
  );
};

export default Contact;
