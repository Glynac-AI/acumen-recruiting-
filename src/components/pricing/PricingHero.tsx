// src/components/pricing/PricingHero.tsx
import React from "react";
import { motion } from "framer-motion";
import { CreditCard, BarChart3, DollarSign } from "lucide-react";

const PricingHero = () => {
    return (
        <section className="pt-32 pb-20 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] to-white pointer-events-none z-0"></div>

            {/* Subtle background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(79,107,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(79,107,255,0.015)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none z-0"></div>

            {/* Floating gradient orbs */}
            <div className="absolute top-1/4 right-[15%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#4F6BFF]/5 to-[#3A56E8]/5 blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#4F6BFF]/5 to-[#3A56E8]/5 blur-[60px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.span
                            className="inline-block py-1 px-3 bg-[#4F6BFF]/10 text-[#4F6BFF] font-medium rounded-full text-sm mb-6"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Our Pricing
                        </motion.span>

                        <h1 className="text-5xl md:text-6xl font-display font-light tracking-tight text-foreground mb-6 leading-tight">
                            <span className="relative inline-block">
                                Transparent
                                <motion.span
                                    className="absolute bottom-2 left-0 w-full h-3 bg-[#4F6BFF]/10 -z-10 rounded-sm"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                />
                            </span>{" "}
                            Pricing Structure
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
                            Modern recruiting solutions with predictable costs and exceptional results
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            {[
                                {
                                    icon: <CreditCard className="w-6 h-6" />,
                                    title: "Product-Based Pricing",
                                    description: "Choose from our tailored recruitment packages with clear, transparent pricing."
                                },
                                {
                                    icon: <BarChart3 className="w-6 h-6" />,
                                    title: "Role-Based Scaling",
                                    description: "Pricing adjusted for role seniority, reflecting the talent acquisition complexity."
                                },
                                {
                                    icon: <DollarSign className="w-6 h-6" />,
                                    title: "Success Fees",
                                    description: "Pay for results with our performance-based success fee structure."
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="bg-[#4F6BFF]/10 text-[#4F6BFF] p-3 rounded-lg inline-block mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingHero;