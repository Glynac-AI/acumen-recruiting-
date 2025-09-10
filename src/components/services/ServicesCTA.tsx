import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Shield, Database, Sliders, RefreshCw, Users, ChevronRight, Check } from "lucide-react";

const ServicesCTA = () => {
    // Value propositions from the management document
    const valuePropositions = [
        {
            title: "Proven Industry Partner",
            description: "A proven partner with deep wealth management industry experience",
            icon: <Shield className="w-5 h-5" />
        },
        {
            title: "Extensive Database",
            description: "Access to 2,000+ pre-screened candidates, plus fresh recruiting for every client",
            icon: <Database className="w-5 h-5" />
        },
        {
            title: "Streamlined Technology",
            description: "Efficient online system delivering videos, resumes, and interviews directly to you",
            icon: <Sliders className="w-5 h-5" />
        },
        {
            title: "Continuous Refinement",
            description: "Feedback loops and dedicated support to optimize your candidate pool",
            icon: <RefreshCw className="w-5 h-5" />
        },
        {
            title: "Transparent Pricing",
            description: "Tiered, transparent pricing model aligned with candidate seniority and selectivity",
            icon: <Users className="w-5 h-5" />
        }
    ];

    // Frequently asked questions
    const faqs = [
        {
            question: "How quickly can you deliver candidates?",
            answer: "We typically begin delivering candidate videos within 7 days of engagement, with an average time-to-hire of 7-14 days for most positions."
        },
        {
            question: "What happens if a candidate doesn't work out?",
            answer: "We're committed to your satisfaction. If a placed candidate doesn't meet expectations within the first 30 days, we'll provide additional candidates at no extra charge."
        },
        {
            question: "Do you work with firms of all sizes?",
            answer: "Yes, we work with wealth management firms of all sizes, from boutique advisory practices to large institutions. Our solutions scale to meet your specific needs."
        }
    ];

    return (
        <section className="py-28 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-ph/5 rounded-bl-[100px] opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-ph/5 rounded-tr-[200px] opacity-70"></div>

                {/* Abstract circles */}
                <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-ph/10"></div>
                <div className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-ph/10"></div>
                <div className="absolute top-[60%] left-[30%] w-16 h-16 rounded-full border border-ph/10"></div>

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
                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Ready to Transform Your Talent Acquisition?
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Partner with Acumen Recruiting to find exceptional wealth management talent through our sophisticated, technology-enhanced approach.
                    </motion.p>
                </motion.div>

                {/* Value Propositions Grid */}
                <motion.div
                    className="max-w-5xl mx-auto mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <motion.h3
                        className="text-2xl font-display font-light text-foreground text-center mb-10"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        With Acumen Recruiting, You Get
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {valuePropositions.map((prop, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(79, 107, 255, 0.1)" }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-ph/10 p-2.5 rounded-lg text-ph">
                                        {prop.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-foreground mb-1">{prop.title}</h4>
                                        <p className="text-muted-foreground text-sm">{prop.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    className="max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <motion.h3
                        className="text-2xl font-display font-light text-foreground text-center mb-10"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Frequently Asked Questions
                    </motion.h3>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                whileHover={{ boxShadow: "0 10px 25px -5px rgba(79, 107, 255, 0.1)" }}
                            >
                                <h4 className="text-lg font-medium text-foreground mb-2 flex items-center">
                                    <ChevronRight className="w-5 h-5 text-ph mr-2" />
                                    {faq.question}
                                </h4>
                                <p className="text-muted-foreground pl-7">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <div className="bg-gradient-to-r from-ph/90 to-ph rounded-2xl overflow-hidden shadow-xl">
                        <div className="p-10 md:p-16 relative">
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-[100px]"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full"></div>

                            <div className="relative">
                                <motion.h3
                                    className="text-3xl font-display font-light text-white mb-6"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    Begin Your Talent Discovery Journey
                                </motion.h3>

                                <motion.p
                                    className="text-white/90 text-xl max-w-2xl mb-10"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                >
                                    Schedule a consultation to explore how our approach can enhance your wealth management firm's talent acquisition strategy.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                    <div className="flex flex-col sm:flex-row gap-5 items-center">
                                        <motion.a
                                            href="/contact"
                                            className="px-8 py-4 bg-white text-ph font-medium rounded-lg shadow-lg shadow-ph/20 hover:shadow-xl hover:shadow-ph/30 transition-all w-full sm:w-auto text-center"
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Schedule a Consultation
                                        </motion.a>

                                        <div className="flex items-center gap-3 text-white">
                                            <PhoneCall className="w-5 h-5" />
                                            <span className="font-medium">(773) 430-3534</span>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="mt-10 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                >
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-white/90 mt-0.5" />
                                        <span className="text-white/90">Access to pre-screened wealth management talent</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-white/90 mt-0.5" />
                                        <span className="text-white/90">7-14 days average time-to-hire</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesCTA;