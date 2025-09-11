import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactHero = () => {
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
            className="relative min-h-[80vh] flex items-center pt-24 overflow-hidden"
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
                        >
                            Get In Touch
                        </motion.span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-[#0A2540] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Let's Transform Your Talent Strategy
                    </motion.h1>

                    <motion.p
                        className="text-xl text-[#505c6e]/90 max-w-2xl mx-auto leading-relaxed mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Schedule a consultation with our team to explore how our approach can
                        enhance your wealth management firm's talent acquisition process.
                    </motion.p>

                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        <motion.a
                            href="#contact-form"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-ph text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:bg-ph/90"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Start a Conversation
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-1"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-12 mt-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <div className="text-center">
                            <div className="text-5xl font-light text-[#0A2540]">2,000<span className="text-[#4F6BFF]">+</span></div>
                            <div className="mt-2 text-sm text-[#505c6e] uppercase tracking-wider">Pre-screened candidates</div>
                        </div>

                        <div className="h-10 w-px bg-gradient-to-b from-transparent via-[#E5E7EB] to-transparent hidden sm:block"></div>

                        <div className="text-center">
                            <div className="text-5xl font-light text-[#0A2540]">7-14</div>
                            <div className="mt-2 text-sm text-[#505c6e] uppercase tracking-wider">Days average time-to-hire</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;