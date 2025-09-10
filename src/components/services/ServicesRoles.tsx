import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, FileText, Shield, BarChart, Users, User, ArrowRight } from "lucide-react";

const ServicesRoles = () => {
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Role categories we specialize in
    const roleCategories = [
        {
            title: "Wealth Managers",
            count: "30+",
            description: "Expert advisors who develop and implement comprehensive wealth strategies tailored to high-net-worth individuals and families.",
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            title: "Financial Planners",
            count: "20",
            description: "Licensed professionals who create detailed financial roadmaps for clients, addressing short and long-term goals.",
            icon: <FileText className="w-6 h-6" />
        },
        {
            title: "Tax Advisors",
            count: "8",
            description: "Specialists who optimize tax strategies and ensure compliance while maximizing client wealth preservation.",
            icon: <BarChart className="w-6 h-6" />
        },
        {
            title: "Estate Planning",
            count: "15",
            description: "Experts in wealth transfer strategies, trusts, and legacy planning for high-net-worth clients.",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Compliance Officers",
            count: "5",
            description: "Professionals who ensure regulatory compliance and risk management within wealth management firms.",
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "Support Staff",
            count: "100s",
            description: "Client service associates, operations specialists, and administrative professionals who ensure seamless client experiences.",
            icon: <User className="w-6 h-6" />
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-32 relative overflow-hidden"
            id="roles"
        >
            {/* Background with parallax effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white to-ph/5"
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

                {/* Dot pattern */}
                <div className="absolute bottom-0 left-0 w-full h-40 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(#4F6BFF 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.span
                        className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Specialized Expertise
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Roles We Excel In Filling
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Our deep industry knowledge allows us to identify and assess candidates for specialized wealth management positions.
                    </motion.p>
                </motion.div>

                {/* Role categories grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {roleCategories.map((role, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 20px 40px rgba(79, 107, 255, 0.1)",
                                borderColor: "rgba(79, 107, 255, 0.2)"
                            }}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-lg bg-ph/10 text-ph">
                                        {role.icon}
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-gray-100 text-foreground font-medium text-sm">
                                        {role.count} placed
                                    </div>
                                </div>

                                <h3 className="text-xl font-medium text-foreground mb-2">{role.title}</h3>
                                <p className="text-muted-foreground text-sm">{role.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    <div className="inline-block p-8 rounded-xl bg-white border border-gray-100 shadow-sm max-w-3xl">
                        <h3 className="text-2xl font-display font-light text-foreground mb-4">
                            Need a specialized role filled?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Our experienced recruiting team has successfully placed professionals across all wealth management specialties.
                        </p>
                        <motion.a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-ph text-white font-medium rounded-md hover:bg-ph-dark transition-colors"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Discuss Your Needs
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesRoles;