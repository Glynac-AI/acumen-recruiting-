import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Users, Layers, Check, ArrowRight } from "lucide-react";

const PricingPlans = () => {
    const [activeTab, setActiveTab] = useState("standard"); // standard, mid, senior

    // Define product data
    const products = [
        {
            id: "snapshot",
            title: "Talent Snapshot™",
            description: "Brief, focused candidate introductions that provide immediate insight into fit and capability.",
            icon: <Play className="w-5 h-5" />,
            color: "#4F6BFF",
            pricing: {
                standard: { label: "0-60k roles", prices: ["20 for $200", "50 for $450", "100 for $800"] },
                mid: { label: "60k-120k roles", prices: ["20 for $400", "50 for $900", "100 for $1,600"] },
                senior: { label: "120k-300k roles", prices: ["20 for $600", "50 for $1,350", "100 for $2,400"] }
            },
            features: [
                "Pre-recorded video introductions",
                "Custom screening questions",
                "Immediate assessment of fit",
                "Secure client portal access",
                "Candidate sharing with team"
            ]
        },
        {
            id: "deepdive",
            title: "Talent DeepDive™",
            description: "Structured, in-depth conversations that reveal nuanced understanding of experience and expertise.",
            icon: <Users className="w-5 h-5" />,
            color: "#6366f1",
            pricing: {
                standard: { label: "0-60k roles", prices: ["10 for $300", "20 for $550", "50 for $1,250"] },
                mid: { label: "60k-120k roles", prices: ["10 for $600", "20 for $1,100", "50 for $2,500"] },
                senior: { label: "120k-300k roles", prices: ["10 for $900", "20 for $1,650", "50 for $3,750"] }
            },
            features: [
                "Recruiter-led structured interviews",
                "Comprehensive skill assessment",
                "Behavioral & situational questions",
                "Detailed candidate capabilities",
                "Professional third-party evaluation"
            ]
        },
        {
            id: "complete",
            title: "Complete Talent Pack™",
            description: "A comprehensive approach combining both methodologies for thorough talent discovery.",
            icon: <Layers className="w-5 h-5" />,
            color: "#4F6BFF",
            popular: true,
            pricing: {
                standard: {
                    label: "0-60k roles",
                    prices: [
                        "Starter: $450 (20 Snapshot + 10 DeepDive)",
                        "Growth: $900 (50 Snapshot + 20 DeepDive)",
                        "Enterprise: $2,000 (100 Snapshot + 50 DeepDive)"
                    ]
                },
                mid: {
                    label: "60k-120k roles",
                    prices: [
                        "Starter: $900 (20 Snapshot + 10 DeepDive)",
                        "Growth: $1,800 (50 Snapshot + 20 DeepDive)",
                        "Enterprise: $4,000 (100 Snapshot + 50 DeepDive)"
                    ]
                },
                senior: {
                    label: "120k-300k roles",
                    prices: [
                        "Starter: $1,350 (20 Snapshot + 10 DeepDive)",
                        "Growth: $2,700 (50 Snapshot + 20 DeepDive)",
                        "Enterprise: $6,000 (100 Snapshot + 50 DeepDive)"
                    ]
                }
            },
            features: [
                "Combined methodologies",
                "Maximum candidate insights",
                "Comprehensive screening",
                "Optimal for senior positions",
                "Complete candidate profile"
            ]
        }
    ];

    // Success fee data
    const successFees = {
        standard: { range: "0-60k roles", fee: "$500" },
        mid: { range: "60k-120k roles", fee: "$2,000" },
        senior: { range: "120k-300k roles", fee: "$6,000" }
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/30 pointer-events-none"></div>

            {/* Subtle grain texture */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px'
            }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Salary range tabs */}
                    <div className="flex flex-col sm:flex-row justify-center mb-16 gap-4">
                        <motion.button
                            className={`px-5 py-3 rounded-lg transition-all ${activeTab === "standard"
                                    ? "bg-ph text-white shadow-lg shadow-ph/20"
                                    : "bg-white border border-gray-200 text-foreground hover:border-ph/20"
                                }`}
                            onClick={() => setActiveTab("standard")}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Entry Level (0-60k)
                        </motion.button>

                        <motion.button
                            className={`px-5 py-3 rounded-lg transition-all ${activeTab === "mid"
                                    ? "bg-ph text-white shadow-lg shadow-ph/20"
                                    : "bg-white border border-gray-200 text-foreground hover:border-ph/20"
                                }`}
                            onClick={() => setActiveTab("mid")}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Mid Level (60k-120k)
                        </motion.button>

                        <motion.button
                            className={`px-5 py-3 rounded-lg transition-all ${activeTab === "senior"
                                    ? "bg-ph text-white shadow-lg shadow-ph/20"
                                    : "bg-white border border-gray-200 text-foreground hover:border-ph/20"
                                }`}
                            onClick={() => setActiveTab("senior")}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Senior Level (120k-300k)
                        </motion.button>
                    </div>

                    {/* Success fee highlight */}
                    <motion.div
                        className="mb-16 py-5 px-8 rounded-xl bg-ph/5 border border-ph/10 flex items-center justify-between flex-wrap gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex h-12 w-12 rounded-full bg-white items-center justify-center shadow-sm">
                                <div className="text-ph text-xl font-bold">+</div>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-foreground mb-1">Success Fee: {successFees[activeTab].fee} per hire</h3>
                                <p className="text-sm text-muted-foreground">Applied when you successfully hire a candidate, ensuring our incentives are aligned with your outcomes.</p>
                            </div>
                        </div>
                        <motion.a
                            href="/contact"
                            className="px-5 py-2 rounded-lg bg-white text-ph border border-ph/20 flex items-center gap-2 hover:shadow-md transition-all"
                            whileHover={{ x: 3 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>

                    {/* Product pricing cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                className={`bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-300 ${product.popular
                                        ? "border-ph/20 ring-1 ring-ph/10 shadow-lg shadow-ph/5"
                                        : "border-gray-100 hover:border-ph/10 hover:shadow-md"
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                            >
                                {/* Card header */}
                                <div className="p-6 bg-gradient-to-br from-ph/5 to-transparent border-b border-gray-100">
                                    {product.popular && (
                                        <div className="bg-ph text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-ph/10 flex items-center justify-center text-ph">
                                            {product.icon}
                                        </div>
                                        <h3 className="text-xl font-medium text-foreground">{product.title}</h3>
                                    </div>

                                    <p className="text-muted-foreground text-sm">{product.description}</p>
                                </div>

                                {/* Card pricing */}
                                <div className="p-6 border-b border-gray-100">
                                    <div className="text-sm text-muted-foreground mb-3">
                                        {product.pricing[activeTab].label}
                                    </div>

                                    <div className="space-y-3">
                                        {product.pricing[activeTab].prices.map((price, idx) => (
                                            <div key={idx} className="font-medium text-foreground">
                                                {price}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Card features */}
                                <div className="p-6">
                                    <div className="text-sm text-muted-foreground mb-4">Includes:</div>

                                    <ul className="space-y-3">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-ph shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8">
                                        <motion.a
                                            href="/contact"
                                            className={`w-full py-3 flex items-center justify-center gap-2 rounded-lg transition-all ${product.popular
                                                    ? "bg-ph text-white hover:shadow-lg hover:shadow-ph/20"
                                                    : "bg-white border border-ph/20 text-ph hover:bg-ph/5"
                                                }`}
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span>Get Started</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;