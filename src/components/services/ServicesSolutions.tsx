import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Play, Users, Layers, ArrowRight, Check } from "lucide-react";

const ServicesSolutions = () => {
    const [activeService, setActiveService] = useState("snapshot");
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const titleOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0.05, 0.15], [30, 0]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Services data
    const services = [
        {
            id: "snapshot",
            title: "Talent Snapshot™",
            description: "Brief, focused candidate introductions that provide immediate insight into fit and capability.",
            details: [
                "Pre-recorded video introductions from candidates",
                "Custom screening questions tailored to your requirements",
                "Efficient initial assessment of candidate fit",
                "Immediate access via our secure client portal"
            ],
            benefits: [
                "Quickly review multiple candidates",
                "See authentic personality and communication style",
                "Share candidate videos with team members",
                "Reduce scheduling conflicts and time constraints"
            ],
            icon: <Play className="w-5 h-5" />,
            color: "#4F6BFF",
            pricing: [
                { level: "0-60k roles", price: "20 for $200 | 50 for $450 | 100 for $800" },
                { level: "60k-120k roles", price: "Pricing doubles" },
                { level: "120k-300k roles", price: "Pricing triples" }
            ]
        },
        {
            id: "deepdive",
            title: "Talent DeepDive™",
            description: "Structured, in-depth conversations that reveal nuanced understanding of experience and expertise.",
            details: [
                "Recruiter-led structured interviews",
                "Comprehensive assessment of skills and experience",
                "Behavioral and situational questions",
                "Detailed insights into candidate capabilities"
            ],
            benefits: [
                "Deeper evaluation of technical competencies",
                "Assessment of cultural fit and soft skills",
                "Customized questions for specific role requirements",
                "Professional third-party assessment"
            ],
            icon: <Users className="w-5 h-5" />,
            color: "#6366f1",
            pricing: [
                { level: "0-60k roles", price: "10 for $300 | 20 for $550 | 50 for $1,250" },
                { level: "60k-120k roles", price: "Pricing doubles" },
                { level: "120k-300k roles", price: "Pricing triples" }
            ]
        },
        {
            id: "complete",
            title: "Complete Talent Pack™",
            description: "A comprehensive approach combining both methodologies for thorough talent discovery.",
            details: [
                "Combined Snapshot and DeepDive methodologies",
                "Maximum candidate insights for critical roles",
                "Comprehensive screening across all dimensions",
                "Optimal approach for senior or complex positions"
            ],
            benefits: [
                "Most thorough candidate evaluation",
                "Ideal for high-stakes hiring decisions",
                "Maximum time savings for your team",
                "Complete candidate profile from multiple angles"
            ],
            icon: <Layers className="w-5 h-5" />,
            color: "#4F6BFF",
            pricing: [
                { level: "0-60k roles", price: "Starter: $450 | Growth: $900 | Enterprise: $2,000" },
                { level: "60k-120k roles", price: "Pricing doubles" },
                { level: "120k-300k roles", price: "Pricing triples" }
            ]
        }
    ];

    // Get active service data
    const activeServiceData = services.find(s => s.id === activeService) || services[0];

    return (
        <section
            ref={sectionRef}
            className="py-36 relative overflow-hidden bg-white"
            id="services"
        >
            {/* Background elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/30 pointer-events-none"
                style={{ y: backgroundY }}
            />

            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px'
            }} />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header section */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-24"
                    style={{
                        opacity: titleOpacity,
                        y: titleY
                    }}
                >
                    <motion.span
                        className="inline-block py-1.5 px-4 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Solutions
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Tailored Recruiting Solutions
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Discover our thoughtfully designed approaches to talent identification, each crafted to address specific recruiting needs.
                    </motion.p>
                </motion.div>

                {/* Services Tabs and Content */}
                <div className="max-w-6xl mx-auto">
                    {/* Service Tabs */}
                    <div className="flex flex-col md:flex-row gap-4 mb-16">
                        {services.map((service) => (
                            <motion.button
                                key={service.id}
                                id={`${service.id}`}
                                className={`flex-1 relative py-6 px-6 rounded-xl transition-all duration-300 overflow-hidden ${activeService === service.id
                                        ? "bg-white shadow-md border border-ph/10"
                                        : "bg-white/50 hover:bg-white hover:shadow-sm"
                                    }`}
                                onClick={() => setActiveService(service.id)}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Background gradient for active tab */}
                                {activeService === service.id && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-ph/5 to-transparent -z-10"
                                        layoutId="serviceTabHighlight"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}

                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeService === service.id
                                            ? "bg-ph/10 text-ph"
                                            : "bg-gray-100 text-gray-400"
                                        }`}>
                                        {service.icon}
                                    </div>
                                    <div className="text-left">
                                        <h3 className={`font-medium text-lg ${activeService === service.id ? "text-ph" : "text-foreground"
                                            }`}>
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-1">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Service Detail Panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                {/* Service Content */}
                                <div className="p-10">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                        {/* Left column - Service description */}
                                        <div>
                                            <motion.div
                                                className="flex items-center gap-3 mb-6"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <div className="p-2 rounded-lg" style={{ backgroundColor: `${activeServiceData.color}10` }}>
                                                    <div className="text-ph">{activeServiceData.icon}</div>
                                                </div>
                                                <h3 className="text-2xl font-display font-light text-foreground">
                                                    {activeServiceData.title}
                                                </h3>
                                            </motion.div>

                                            <motion.p
                                                className="text-muted-foreground mb-8"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                            >
                                                {activeServiceData.description}
                                            </motion.p>

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <h4 className="font-medium text-foreground mb-4">Key Features</h4>
                                                <ul className="space-y-3 mb-8">
                                                    {activeServiceData.details.map((detail, index) => (
                                                        <motion.li
                                                            key={index}
                                                            className="flex items-start gap-3"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.3 + index * 0.1 }}
                                                        >
                                                            <Check className="w-5 h-5 text-ph mt-0.5 shrink-0" />
                                                            <span className="text-muted-foreground">{detail}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        </div>

                                        {/* Right column - Benefits and pricing */}
                                        <div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                            >
                                                <h4 className="font-medium text-foreground mb-4">Benefits</h4>
                                                <ul className="space-y-3 mb-8">
                                                    {activeServiceData.benefits.map((benefit, index) => (
                                                        <motion.li
                                                            key={index}
                                                            className="flex items-start gap-3"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.4 + index * 0.1 }}
                                                        >
                                                            <Check className="w-5 h-5 text-ph mt-0.5 shrink-0" />
                                                            <span className="text-muted-foreground">{benefit}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                                className="bg-gray-50 p-6 rounded-xl"
                                            >
                                                <h4 className="font-medium text-foreground mb-4">Pricing</h4>
                                                <div className="space-y-4">
                                                    {activeServiceData.pricing.map((tier, index) => (
                                                        <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                                            <div className="font-medium text-sm mb-1">{tier.level}</div>
                                                            <div className="text-muted-foreground">{tier.price}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-6 pt-4 border-t border-gray-200">
                                                    <div className="text-sm text-muted-foreground flex items-start gap-2">
                                                        <span className="text-ph mt-0.5"><Check className="w-4 h-4" /></span>
                                                        Success fee applies per hire
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Call to action footer */}
                                <div className="bg-gray-50 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <p className="text-muted-foreground text-sm">
                                        Ready to transform your talent acquisition with {activeServiceData.title}?
                                    </p>
                                    <motion.a
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-5 py-2 bg-ph text-white text-sm font-medium rounded-md transition-colors hover:bg-ph-dark"
                                        whileHover={{ x: 3 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Get Started
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Success fee explanation section */}
                <motion.div
                    className="mt-16 max-w-6xl mx-auto bg-ph/5 rounded-xl p-6 border border-ph/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <div className="flex items-start gap-4">
                        <div className="bg-white rounded-lg p-2 text-ph mt-1">
                            <Check className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-foreground mb-2">Success Fee Alignment</h4>
                            <p className="text-muted-foreground">
                                Our success fees ensure our incentives are directly aligned with your successful placements while reflecting the greater
                                selectivity and effort required for higher-compensation candidates. You only pay this fee when you've found your ideal match.
                            </p>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="text-sm text-muted-foreground">0-60k roles</div>
                                    <div className="text-xl text-ph font-light">$500 <span className="text-xs text-muted-foreground">per hire</span></div>
                                </div>
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="text-sm text-muted-foreground">60k-120k roles</div>
                                    <div className="text-xl text-ph font-light">$2,000 <span className="text-xs text-muted-foreground">per hire</span></div>
                                </div>
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                    <div className="text-sm text-muted-foreground">120k-300k roles</div>
                                    <div className="text-xl text-ph font-light">$6,000 <span className="text-xs text-muted-foreground">per hire</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSolutions;