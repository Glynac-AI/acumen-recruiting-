import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const ContactFAQ = () => {
    const sectionRef = useRef(null);
    // State to track which FAQ items are open
    const [openItems, setOpenItems] = useState([0]); // First item open by default

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Toggle function for FAQ items
    const toggleItem = (index) => {
        if (openItems.includes(index)) {
            setOpenItems(openItems.filter(item => item !== index));
        } else {
            setOpenItems([...openItems, index]);
        }
    };

    // FAQ data
    const faqItems = [
        {
            question: "How quickly can you deliver candidates?",
            answer: "We typically begin delivering candidate videos within 7 days of engagement, with an average time-to-hire of 7-14 days for most positions. This is significantly faster than the industry standard of 45-60 days."
        },
        {
            question: "What happens if a candidate doesn't work out?",
            answer: "We're committed to your satisfaction. If a placed candidate doesn't meet expectations within the first 30 days, we'll provide additional candidates at no extra charge."
        },
        {
            question: "Do you work with firms of all sizes?",
            answer: "Yes, we work with wealth management firms of all sizes, from boutique advisory practices to large institutions. Our solutions scale to meet your specific needs."
        },
        {
            question: "How does your pricing compare to traditional recruiters?",
            answer: "Traditional recruiters typically charge 20-30% of a candidate's first-year salary, which can range from $12,000 to $90,000 per hire. Our model offers much lower upfront costs with transparent product pricing, plus a success fee that's a fraction of traditional costs, ranging from $500 to $6,000 based on role compensation."
        },
        {
            question: "What information do I need to start the process?",
            answer: "To get started, we need a basic description of the role you're looking to fill, location requirements, compensation range, and any specific qualifications or experience needed. Our account managers will guide you through our initial consultation to gather all necessary details."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-white relative overflow-hidden"
        >
            {/* Subtle background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"
                    style={{ y: backgroundY }}
                />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.span
                        className="text-sm font-medium text-ph tracking-wider uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Questions & Answers
                    </motion.span>

                    <motion.h2
                        className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Frequently Asked Questions
                    </motion.h2>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Find answers to common questions about our services and process. If you don't see what you're looking for, please contact us directly.
                    </motion.p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full text-left glass-card p-6 rounded-xl flex justify-between items-center group"
                            >
                                <span className="font-medium text-foreground pr-4">{item.question}</span>
                                <motion.div
                                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-ph/10 text-ph p-1 rounded-full"
                                >
                                    <ChevronDown className="w-5 h-5" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openItems.includes(index) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 py-4 border-x border-b border-gray-100 rounded-b-xl bg-white">
                                            <p className="text-muted-foreground leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Additional questions prompt */}
                <motion.div
                    className="max-w-2xl mx-auto mt-12 pt-8 border-t border-gray-100 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <p className="text-muted-foreground mb-4">
                        Have a question that's not covered here?
                    </p>
                    <a
                        href="#contact-form"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-ph/10 text-ph font-medium rounded-lg transition-colors hover:bg-ph/15"
                    >
                        <HelpCircle className="w-4 h-4" />
                        <span>Ask us directly</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactFAQ;