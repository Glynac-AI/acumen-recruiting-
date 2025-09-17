// src/components/pricing/PricingFAQ.tsx
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
            answer: "Traditional recruiters typically charge 20-30% of a candidate's first-year salary, which can range from $12,000 to $90,000 per hire. Our model offers much lower upfront costs with transparent product pricing, plus a success fee that's a fraction of traditional costs, ranging from $600 to $6,500 based on role compensation."
        },
        {
            question: "What is included in the success fee?",
            answer: "The success fee is applied when you successfully hire a candidate through our platform. It ensures our incentives are aligned with your successful outcomes. The fee scales based on the role's compensation level: $600 for roles paying 0-60k, $2,200 for roles paying 60k-120k, and $6,500 for roles paying 120k-300k."
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
            answer: "If a placed candidate doesn't meet expectations within the first 30 days, we'll provide additional candidates at no extra charge. Additionally, our 6-month replacement guarantee ensures that if a candidate leaves within this period, we'll find a replacement at no additional cost."
        },
        {
            question: "How quickly can we expect to see candidates after purchasing?",
            answer: "We typically begin delivering candidate videos within 7 days of engagement. The complete process has an average time-to-hire of 7-14 days for most positions, significantly faster than the industry standard of 45-60 days."
        },
        {
            question: "Do you offer volume discounts for multiple positions?",
            answer: "Yes, we offer an additional 5% discount when purchasing packages for multiple positions simultaneously. This makes our services even more cost-effective for firms with multiple hiring needs."
        },
        {
            question: "What's the difference between Talent Snapshot and Talent DeepDive?",
            answer: "Talent Snapshot™ provides brief video introductions that allow you to quickly assess communication style and initial fit. Talent DeepDive™ offers comprehensive structured interviews that thoroughly evaluate skills, experience, and cultural alignment. The Complete Talent Pack™ combines both at a 15% discount for the most comprehensive candidate evaluation."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Common questions about our pricing structure and services
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="border border-gray-200 rounded-lg overflow-hidden"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.05 * index }}
                            >
                                <button
                                    className={`flex justify-between items-center w-full p-5 text-left ${openItems.includes(index) ? "bg-gray-50" : "bg-white"
                                        }`}
                                    onClick={() => toggleItem(index)}
                                >
                                    <span className="font-medium text-gray-900">{item.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform ${openItems.includes(index) ? "transform rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openItems.includes(index) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-5 pt-0 text-muted-foreground">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 bg-gray-50 p-6 rounded-xl flex items-start gap-4">
                        <div className="bg-[#4F6BFF]/10 p-2 rounded-lg text-[#4F6BFF] mt-0.5">
                            <HelpCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-medium text-lg mb-2">Still have questions?</h3>
                            <p className="text-muted-foreground mb-4">
                                Our team is ready to help you find the right recruiting solution for your needs.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center text-sm font-medium text-[#4F6BFF] hover:text-[#3A56E8] transition-colors"
                            >
                                Contact us for a personalized consultation
                                <ChevronDown className="ml-1 w-4 h-4 rotate-270" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingFAQ;