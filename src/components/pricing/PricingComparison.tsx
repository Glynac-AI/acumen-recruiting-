import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const PricingComparison = () => {
    const sectionRef = useRef(null);

    // Parallax effect
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Comparison data
    const comparisonData = [
        {
            feature: "Candidate Quality",
            acumen: "Pre-screened, qualified candidates specific to wealth management",
            traditional: "Variable quality, often requiring extensive screening"
        },
        {
            feature: "Time Investment",
            acumen: "Minimal - review pre-recorded videos and interviews",
            traditional: "Extensive - conduct initial interviews and screening calls"
        },
        {
            feature: "Industry Expertise",
            acumen: "Deep wealth management specialization",
            traditional: "Often generalized across multiple industries"
        },
        {
            feature: "Cost Structure",
            acumen: "Transparent, value-based pricing with lower upfront costs",
            traditional: "High percentage of first-year salary (20-30%)"
        },
        {
            feature: "Process Visibility",
            acumen: "Complete transparency through client portal",
            traditional: "Limited visibility into candidate sourcing"
        },
        {
            feature: "Candidate Insights",
            acumen: "Rich multi-dimensional profiles with video",
            traditional: "Typically limited to resume and recruiter notes"
        },
        {
            feature: "Success Fee",
            acumen: "Aligned to role complexity ($500-$6,000)",
            traditional: "20-30% of first-year salary ($12,000-$90,000)"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-28 relative overflow-hidden"
        >
            {/* Background with parallax effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"
                style={{
                    opacity: backgroundOpacity,
                    y: backgroundY
                }}
            />

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large gradient sphere */}
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-ph/10 to-transparent blur-3xl opacity-50"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-ph/10 to-transparent blur-3xl opacity-50"></div>

                {/* Subtle grain texture */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.span
                        className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Value Comparison
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        How We Compare
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        See how our modern approach compares to traditional recruiting firms in quality, value, and transparency.
                    </motion.p>
                </motion.div>

                {/* Comparison table */}
                <motion.div
                    className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    {/* Table header */}
                    <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-100">
                        <div className="col-span-4 p-5 font-medium text-foreground">Feature</div>
                        <div className="col-span-4 p-5 text-center font-medium text-ph border-x border-gray-100">
                            Acumen Recruiting
                        </div>
                        <div className="col-span-4 p-5 text-center font-medium text-gray-500">
                            Traditional Recruiters
                        </div>
                    </div>

                    {/* Table rows */}
                    <div className="divide-y divide-gray-100">
                        {comparisonData.map((row, index) => (
                            <motion.div
                                key={index}
                                className="grid grid-cols-12 hover:bg-gray-50/50 transition-colors"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                            >
                                <div className="col-span-4 p-5 text-foreground font-medium">
                                    {row.feature}
                                </div>
                                <div className="col-span-4 p-5 border-x border-gray-100 text-muted-foreground">
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span>{row.acumen}</span>
                                    </div>
                                </div>
                                <div className="col-span-4 p-5 text-muted-foreground">
                                    <div className="flex items-start gap-3">
                                        {row.feature === "Cost Structure" || row.feature === "Success Fee" ? (
                                            <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        ) : (
                                            <div className="w-5 h-5 shrink-0 mt-0.5 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                            </div>
                                        )}
                                        <span>{row.traditional}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <motion.a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-ph text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Experience the Difference
                        <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingComparison;