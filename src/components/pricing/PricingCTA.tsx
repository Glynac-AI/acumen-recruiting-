import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Database, CheckCircle, Clock } from "lucide-react";

const PricingCTA = () => {
    return (
        <section className="py-28 relative overflow-hidden">
            {/* Rich gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-ph/95 to-[#3A56E8] pointer-events-none"></div>

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
                            Partner with Acumen Recruiting to find exceptional wealth management talent at a fraction of traditional recruiting costs.
                        </motion.p>
                    </motion.div>

                    {/* Benefits and stats grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        {[
                            {
                                icon: <Shield className="w-6 h-6" />,
                                title: "Specialized Focus",
                                description: "100% dedicated to wealth management recruiting"
                            },
                            {
                                icon: <Database className="w-6 h-6" />,
                                title: "Talent Database",
                                description: "2,000+ pre-screened candidates ready for review"
                            },
                            {
                                icon: <CheckCircle className="w-6 h-6" />,
                                title: "Success Rate",
                                description: "93% of searches successfully filled"
                            },
                            {
                                icon: <Clock className="w-6 h-6" />,
                                title: "Time Savings",
                                description: "7-14 days average time-to-hire"
                            }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/15 backdrop-blur-sm rounded-lg p-6 border border-white/15 shadow-lg shadow-black/10"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                whileHover={{
                                    y: -5,
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                }}
                            >
                                <div className="bg-white/15 p-3 rounded-lg text-white mb-4 w-12 h-12 flex items-center justify-center">
                                    {stat.icon}
                                </div>
                                <h3 className="text-white font-medium mb-2">{stat.title}</h3>
                                <p className="text-white/80 text-sm">{stat.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        <motion.a
                            href="/contact"
                            className="px-8 py-4 bg-white text-ph font-medium rounded-lg shadow-lg shadow-black/10 flex items-center justify-center gap-2"
                            whileHover={{ y: -3, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Schedule a Consultation
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>

                        <motion.a
                            href="/services"
                            className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Explore Our Services
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PricingCTA;