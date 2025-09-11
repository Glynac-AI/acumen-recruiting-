import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, ArrowRight, MessageSquare } from "lucide-react";

const AboutCTA = () => {
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left column - Text content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <motion.h2
                                className="text-4xl md:text-5xl font-display font-light tracking-wide text-white mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                            >
                                Ready to Transform Your Talent Acquisition?
                            </motion.h2>

                            <motion.p
                                className="text-xl text-white/90 max-w-xl leading-relaxed mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                Schedule a consultation to explore how our approach can enhance your wealth management firm's talent acquisition strategy.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-5"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                <motion.a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ph font-medium rounded-lg shadow-lg shadow-black/10"
                                    whileHover={{ y: -3, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Schedule a Consultation
                                    <PhoneCall className="w-4 h-4" />
                                </motion.a>

                                <motion.a
                                    href="/services"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Explore Our Services
                                    <ArrowRight className="w-4 h-4" />
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Right column - Contact information */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-8 border border-white/15 shadow-lg shadow-black/10">
                                <motion.h3
                                    className="text-2xl font-display font-light text-white mb-6"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    Get in Touch
                                </motion.h3>

                                <motion.div
                                    className="space-y-6"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/15 p-2.5 rounded-lg text-white shrink-0 mt-1">
                                            <PhoneCall className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium mb-1">Phone</div>
                                            <p className="text-white/80">
                                                <a href="tel:+17734303534" className="hover:text-white transition-colors">
                                                    (773) 430-3534
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/15 p-2.5 rounded-lg text-white shrink-0 mt-1">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-white font-medium mb-1">Email</div>
                                            <p className="text-white/80">
                                                <a href="mailto:info@acumenrecruiting.com" className="hover:text-white transition-colors">
                                                    info@acumenrecruiting.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/10 mt-6">
                                        <p className="text-white/80 text-sm">
                                            Our team is available Monday through Friday, 9am to 5pm CST. We aim to respond to all inquiries within 24 hours.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;