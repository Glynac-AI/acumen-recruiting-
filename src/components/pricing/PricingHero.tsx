import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CreditCard, DollarSign, BarChart3 } from "lucide-react";

const PricingHero = () => {
    const containerRef = useRef(null);

    // Parallax effect for background elements
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden"
        >
            {/* Background gradient and elements */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-[#f5f8ff] to-white"
                style={{ y: backgroundY, opacity: backgroundOpacity }}
            />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating gradient orbs */}
                <motion.div
                    className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-ph/10 to-transparent blur-3xl opacity-60"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-[10%] left-[10%] w-56 h-56 rounded-full bg-gradient-to-tr from-ph/10 to-transparent blur-3xl opacity-60"
                    animate={{
                        y: [0, 15, 0],
                        rotate: [0, -3, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Subtle grain texture */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }} />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    style={{ opacity: contentOpacity, y: contentY }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.span
                            className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
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
                                    className="absolute bottom-2 left-0 w-full h-3 bg-ph/10 -z-10 rounded-sm"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                />
                            </span>{" "}
                            Value-Based Pricing
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
                            Our pricing scales appropriately with role compensation, reflecting the effort required to source exceptional candidates at each level.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            {[
                                {
                                    icon: <CreditCard className="w-6 h-6" />,
                                    title: "Product-Based Pricing",
                                    description: "Choose from our three tailored recruitment solutions with transparent pricing tiers."
                                },
                                {
                                    icon: <BarChart3 className="w-6 h-6" />,
                                    title: "Salary-Based Scaling",
                                    description: "Pricing adjusts based on role compensation, reflecting candidate selectivity and effort."
                                },
                                {
                                    icon: <DollarSign className="w-6 h-6" />,
                                    title: "Success Fee Alignment",
                                    description: "Our success fees ensure our incentives align with your successful placements."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (index * 0.2), duration: 0.5 }}
                                >
                                    <div className="bg-ph/10 w-12 h-12 rounded-lg flex items-center justify-center text-ph mb-4 mx-auto">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-medium text-foreground mb-2 text-center">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground text-center">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    delay: 1.5,
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-ph/30 flex items-center justify-center">
                    <motion.div
                        className="w-1.5 h-3 rounded-full bg-ph"
                        animate={{ y: [0, 4, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default PricingHero;