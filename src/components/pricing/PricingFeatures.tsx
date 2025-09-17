// src/components/pricing/PricingFeatures.tsx
import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, RefreshCw, Users, Settings } from "lucide-react";

const PricingFeatures = () => {
    // Value-added features included in all packages
    const standardFeatures = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: "6-Month Replacement Guarantee",
            description: "If a placed candidate leaves within 6 months, we provide a replacement at no additional cost."
        },
        {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "30-Day Satisfaction Guarantee",
            description: "If a candidate doesn't meet expectations within 30 days, additional candidates will be provided."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Rapid Delivery Timeline",
            description: "Initial candidates delivered within 7 days, with typical placement timeframe of 7-14 days."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Dedicated Account Manager",
            description: "Personalized support throughout the recruitment process."
        }
    ];

    // Complete Talent Pack exclusive benefits
    const exclusiveFeatures = [
        {
            title: "Priority Candidate Processing",
            description: "Your searches are prioritized in our recruitment queue."
        },
        {
            title: "Enhanced Candidate Filtering",
            description: "Advanced filtering options to quickly identify top matches."
        },
        {
            title: "Integrated Workflow",
            description: "Seamlessly move from Snapshots to DeepDives in a unified experience."
        },
        {
            title: "Custom Screening Questions",
            description: "Tailored questioning across both formats for consistent evaluation."
        },
        {
            title: "Weekly Progress Reports",
            description: "Detailed updates on your recruitment campaign progress."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Standard Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4 text-center">
                            Value-Added Features
                        </h2>
                        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                            Included in all packages at no additional cost
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {standardFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
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

                    {/* Complete Talent Pack Exclusive Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-4 text-center">
                            Complete Talent Pack™ Exclusive Benefits
                        </h2>
                        <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
                            In addition to the 15% price discount, Complete Talent Pack clients receive:
                        </p>

                        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {exclusiveFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 * index }}
                                    >
                                        <div className="bg-[#4F6BFF]/10 text-[#4F6BFF] p-1 rounded-md mt-0.5">
                                            <Settings className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-medium mb-1">{feature.title}</h3>
                                            <p className="text-muted-foreground text-sm">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingFeatures;