import * as React from "react";
import { motion } from "framer-motion";

type CTA = { label: string; href: string; variant?: "primary" | "outline" };

type Props = {
  title: string;                 // main quote
  subtitle?: string;             // sub-quote
  ctas?: CTA[];                  // buttons
  className?: string;
  /**
   * If you want exact control: pass your navbar height (e.g., 80).
   * The hero will be 100vh minus that value.
   */
  navbarHeightPx?: number;
};

export default function Hero({
  title,
  subtitle,
  ctas = [],
  className = "",
  navbarHeightPx,
}: Props) {
  // Height: either (100vh - navbar) or a safe default (matches typical sticky nav)
  const style: React.CSSProperties | undefined = navbarHeightPx
    ? { minHeight: `calc(100vh - ${navbarHeightPx}px)` }
    : undefined;

  return (
    <section
      style={style}
      className={[
        // uniform height and spacing; avoids cropping under sticky nav
        navbarHeightPx ? "pt-0" : "pt-24",
        "relative w-full min-h-[86vh] md:min-h-[88vh] flex items-center bg-white",
        className,
      ].join(" ")}
      aria-label="Page hero"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle ? (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-5 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          ) : null}

          {ctas.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {ctas.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className={
                    c.variant === "outline"
                      ? "px-5 py-2.5 rounded-full border border-gray-300 text-gray-900 hover:bg-gray-50 transition"
                      : "px-5 py-2.5 rounded-full bg-black text-white hover:bg-gray-900 transition"
                  }
                >
                  {c.label}
                </a>
              ))}
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
