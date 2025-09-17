import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

const AboutStory = () => {
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section
            ref={sectionRef}
            className="py-28 relative overflow-hidden"
            id="story"
        >
            {/* Background with parallax effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"
                style={{
                    opacity: backgroundOpacity,
                    y: backgroundY
                }}
            />

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large gradient sphere */}
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-ph/10 to-transparent blur-3xl opacity-50"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-ph/10 to-transparent blur-3xl opacity-50"></div>

                {/* Subtle grain texture */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left column - Story */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                            >
                                Our Origin Story
                            </motion.h2>

                            <div className="space-y-6 text-muted-foreground">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                >
                                    We founded Acumen Recruiting with a singular vision: to transform how wealth management firms discover talent. Traditional recruiting often relies on either impersonal technology or time-intensive human processes, creating a choice between efficiency and quality.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.3 }}
                                >
                                    We've created a different path. By thoughtfully integrating <span className="text-foreground font-medium">curated human expertise</span> with <span className="text-foreground font-medium">elegant technology</span>, we deliver a recruitment experience that's both more refined and more effective.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.4 }}
                                >
                                    Our approach centers on deep understanding—of each role's nuances, each firm's culture, and each candidate's unique capabilities. This understanding informs every aspect of our process, from how we structure our candidate database to how we design our client interactions.
                                </motion.p>
                            </div>

                            <motion.div
                                className="mt-10 pt-6 border-t border-gray-200"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.5 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-ph/10 flex items-center justify-center text-ph">
                                        <Quote className="w-6 h-6" />
                                    </div>
                                    <blockquote className="text-foreground italic">
                                        "We believe in creating partnerships, not transactions. Our success is measured by the growth and success of the firms we serve."
                                    </blockquote>
                                </div>
                                <div className="mt-4 ml-20 text-sm text-ph font-medium tracking-wide">
                                    FOUNDER, ACUMEN RECRUITING
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right column - Mission and Values */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <motion.h2
                                className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                            >
                                Our Mission & Values
                            </motion.h2>

                            <motion.div
                                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                <h3 className="text-xl font-medium text-foreground mb-4">Our Mission</h3>
                                <p className="text-muted-foreground">
                                    To transform talent acquisition in wealth management by uniting technological efficiency with human discernment, creating extraordinary value for our clients and candidates.
                                </p>
                            </motion.div>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Excellence",
                                        description: "We're committed to excellence in every aspect of our work, from candidate selection to client communication."
                                    },
                                    {
                                        title: "Integrity",
                                        description: "We operate with complete transparency and honesty, creating trust with both clients and candidates."
                                    },
                                    {
                                        title: "Innovation",
                                        description: "We continuously refine our approach, integrating new technologies while enhancing the human element."
                                    },
                                    {
                                        title: "Partnership",
                                        description: "We view ourselves as partners in our clients' success, not just service providers."
                                    }
                                ].map((value, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex gap-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph shrink-0 mt-1">
                                            <div className="w-4 h-4 rounded-full bg-ph"></div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-foreground mb-2">{value.title}</h3>
                                            <p className="text-muted-foreground">{value.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;