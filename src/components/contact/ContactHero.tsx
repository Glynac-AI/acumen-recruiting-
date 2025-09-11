import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContactHero = () => {
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[60vh] flex items-center overflow-hidden py-28"
        >
            {/* Gradient Background with Animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-ph/95 to-[#3A56E8] pointer-events-none"
                style={{ y: backgroundY }}
            />

            {/* Abstract background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-white/5 rounded-bl-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-white/5 rounded-tr-[200px]"></div>

                {/* Abstract circles with subtle borders */}
                <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border border-white/15"></div>
                <div className="absolute bottom-[30%] right-[15%] w-24 h-24 rounded-full border border-white/15"></div>
                <div className="absolute top-[60%] left-[30%] w-16 h-16 rounded-full border border-white/15"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    style={{ opacity: textOpacity, y: textY }}
                >
                    <motion.span
                        className="text-sm font-medium text-white/90 tracking-wider uppercase mb-4 inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Get In Touch
                    </motion.span>

                    <motion.h1
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Start Your Talent Discovery Journey
                    </motion.h1>

                    <motion.p
                        className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Schedule a consultation to explore how our approach can enhance your
                        wealth management firm's talent acquisition strategy.
                    </motion.p>

                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <a
                            href="#contact-form"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ph text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:bg-gray-50"
                        >
                            Start a Conversation
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;