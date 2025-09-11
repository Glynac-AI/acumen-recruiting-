import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const PricingFAQ = () => {
    // State to track which FAQ items are open
    const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

    // Toggle function for FAQ items
    const toggleItem = (index: number) => {
        if (openItems.includes(index)) {
            setOpenItems(openItems.filter(item => item !== index));
        } else {
            setOpenItems([...openItems, index]);
        }
    };

    // FAQ data
    const faqItems = [
        {
            question: "How does your pricing compare to traditional recruiters?",
            answer: "Traditional recruiters typically charge 20-30% of a candidate's first-year salary, which can range from $12,000 to $90,000 per hire. Our model offers much lower upfront costs with transparent product pricing, plus a success fee that's a fraction of traditional costs, ranging from $500 to $6,000 based on role compensation."
        },
        {
            question: "What is included in the success fee?",
            answer: "The success fee is applied when you successfully hire a candidate through our platform. It ensures our incentives are aligned with your successful outcomes. The fee scales based on the role's compensation level: $500 for roles paying 0-60k, $2,000 for roles paying 60k-120k, and $6,000 for roles paying 120k-300k."
        },
        {
            question: "Can I purchase additional candidate videos or interviews?",
            answer: "Yes, you can purchase additional Talent Snapshot™ videos or Talent DeepDive™ interviews at any time. We offer flexible packages to accommodate your specific hiring needs, and you can scale up as required during your search process."
        },
        {
            question: "Do you offer refunds if we don't find a suitable candidate?",
            answer: "While we don't offer refunds for the product packages, we continue delivering candidates until you find your match. If your search expands beyond your initial package, we can discuss additional options. Our success rate is high due to our specialized focus on wealth management roles and pre-screened candidate database."
        },
        {
            question: "What happens if a placed candidate doesn't work out?",
            answer: "If a placed candidate doesn't meet expectations within the first 30 days, we'll provide additional candidates at no extra charge. We're committed to your satisfaction and the success of each placement."
        },
        {
            question: "How quickly can we expect to see candidates after purchasing?",
            answer: "We typically begin delivering candidate videos within 7 days of engagement. The complete process has an average time-to-hire of 7-14 days for most positions, significantly faster than the industry standard of 45-60 days."
        },
        {
            question: "Do you require any payment upfront?",
            answer: "Yes, payment for the product package (Talent Snapshot™, Talent DeepDive™, or Complete Talent Pack™) is required upfront. The success fee is only charged when you successfully hire a candidate through our platform."
        },
        {
            question: "Do you work with firms of all sizes?",
            answer: "Yes, we work with wealth management firms of all sizes, from boutique advisory practices to large institutions. Our solutions scale to meet the specific needs of your organization."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
            {/* Subtle background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Decorative patterns */}
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-ph/5 to-transparent blur-3xl opacity-60"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-ph/5 to-transparent blur-3xl opacity-60"></div>

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
                        className="inline-flex items-center gap-2 py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <HelpCircle className="w-4 h-4" />
                        <span>Frequently Asked Questions</span>
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Common Questions About Pricing
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Find answers to frequently asked questions about our pricing structure, fees, and value proposition.
                    </motion.p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (index * 0.05), duration: 0.5 }}
                            >
                                <button
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                    onClick={() => toggleItem(index)}
                                    aria-expanded={openItems.includes(index)}
                                >
                                    <h3 className="font-medium text-foreground">{item.question}</h3>
                                    <motion.div
                                        animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${openItems.includes(index) ? 'bg-ph text-white' : 'bg-gray-100 text-gray-500'
                                            }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openItems.includes(index) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-5 text-muted-foreground border-t border-gray-100 pt-4">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Additional help prompt */}
                <motion.div
                    className="max-w-3xl mx-auto mt-10 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <p className="text-muted-foreground">
                        Have additional questions about our pricing? <a href="/contact" className="text-ph font-medium hover:underline">Contact us</a> for personalized assistance.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingFAQ;