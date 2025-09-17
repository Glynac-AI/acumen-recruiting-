// src/components/pricing/PricingCTA.tsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, CheckCircle, DollarSign } from "lucide-react";

const PricingCTA = () => {
    return (
        <section className="py-28 relative overflow-hidden">
            {/* Rich gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F6BFF]/95 to-[#3A56E8] pointer-events-none"></div>

            {/* Abstract background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-white/5 rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-white/5 rounded-tr-[200px]"></div>

                {/* Abstract circles with more pronounced borders */}
                <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-white/15"></div>
                <div className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-white/15"></div>
                <div className="absolute top-[60%] left-[30%] w-16 h-16 rounded-full border border-white/15"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-display font-light tracking-wide text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            Transform Your Talent Acquisition
                        </motion.h2>
                        <motion.p
                            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Partner with Acumen Recruiting to find exceptional wealth management talent
                            at a fraction of traditional recruiting costs
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                icon: <Clock className="w-6 h-6" />,
                                title: "70% Faster Hiring",
                                description: "Average time-to-hire of just 7-14 days compared to the industry standard of 45-60 days."
                            },
                            {
                                icon: <DollarSign className="w-6 h-6" />,
                                title: "60-80% Cost Savings",
                                description: "Save tens of thousands in recruiting fees compared to traditional agencies."
                            },
                            {
                                icon: <Shield className="w-6 h-6" />,
                                title: "6-Month Guarantee",
                                description: "Peace of mind with our comprehensive 6-month replacement guarantee."
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/15"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="bg-white/15 p-3 rounded-lg text-white inline-block mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-white text-xl font-medium mb-2">{benefit.title}</h3>
                                <p className="text-white/80">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <a
                            href="/contact"
                            className="inline-flex items-center bg-white text-[#4F6BFF] py-4 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-lg"
                        >
                            Get Started
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <p className="mt-4 text-white/80">
                            No long-term contracts. Cancel anytime.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingCTA;