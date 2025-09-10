import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { PhoneCall, CreditCard, Video, MessageSquare, RefreshCw, Check, ArrowRight } from "lucide-react";

const ServicesProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Steps data
    const steps = [
        {
            number: "01",
            icon: <PhoneCall className="w-6 h-6" />,
            title: "Consultation",
            description: "Beginning with a conversation about your firm's unique needs and culture.",
            detail: "During this initial discussion, we explore your specific requirements, team dynamics, and ideal candidate profile. This foundational understanding allows us to tailor our approach precisely to your situation, ensuring alignment from the start."
        },
        {
            number: "02",
            icon: <CreditCard className="w-6 h-6" />,
            title: "Curation",
            description: "Designing a tailored approach that aligns with your specific requirements.",
            detail: "We select from our Talent Snapshot™ and Talent DeepDive™ methodologies to create the optimal solution for your needs. Our account team works with you to craft questions that reveal the exact qualities and capabilities you seek in candidates."
        },
        {
            number: "03",
            icon: <Video className="w-6 h-6" />,
            title: "Discovery",
            description: "Revealing carefully selected candidates through our platform.",
            detail: "Candidates complete introductory videos and interviews, providing you with rich, multi-dimensional insights. Our client portal delivers these seamlessly to you, with notifications for each new candidate added to your consideration."
        },
        {
            number: "04",
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Refinement",
            description: "Collaboratively evolving our search based on your insights and preferences.",
            detail: "After reviewing initial candidates, we conduct a detailed feedback session to refine our understanding of your ideal match. This iterative approach ensures increasing precision as the search progresses."
        },
        {
            number: "05",
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Completion",
            description: "Delivering exceptional talent that enhances your firm's capabilities.",
            detail: "The search continues until you've found your ideal candidate. Throughout the process, you have complete visibility through our client portal, with our team providing guidance and support at every stage."
        }
    ];

    // Progress animation for the timeline
    const timelineProgress = activeStep / (steps.length - 1);
    const springProgress = useTransform(scrollYProgress, [0, 0.5], [0, timelineProgress]);

    // Parallax effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const titleOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0.05, 0.15], [30, 0]);

    

    // Function to determine the opacity based on active step
    const getStepOpacity = (index: number) => {
        if (index === activeStep) return 1;
        if (Math.abs(index - activeStep) === 1) return 0.7;
        if (Math.abs(index - activeStep) === 2) return 0.4;
        return 0.2;
    };

    return (
        <section
            ref={sectionRef}
            className="py-36 relative overflow-hidden"
            id="process"
        >
            {/* Enhanced background with parallax effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/30 pointer-events-none"
                style={{
                    opacity: backgroundOpacity,
                    y: backgroundY
                }}
            />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orb with parallax */}
                <motion.div
                    className="absolute top-0 right-0 w-[70vw] h-[70vh] rounded-full opacity-[0.05]"
                    style={{
                        background: "radial-gradient(circle, rgba(79,107,255,0.3) 0%, rgba(255,255,255,0) 70%)",
                        y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
                    }}
                />

                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px'
                }} />

                {/* Dot pattern */}
                <div className="absolute bottom-0 left-0 w-full h-64 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(#4F6BFF 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-24"
                    style={{ opacity: titleOpacity, y: titleY }}
                >
                    <motion.span
                        className="inline-block py-1.5 px-4 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Process
                    </motion.span>

                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        The Acumen Experience
                    </motion.h2>

                    <motion.p
                        className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        A thoughtfully designed journey from consultation to placement
                    </motion.p>
                </motion.div>

                {/* Process timeline */}
                <div className="max-w-6xl mx-auto">
                    {/* Desktop timeline */}
                    <div className="hidden lg:block relative">
                        {/* Center line with progress indicator */}
                        <div className="absolute top-10 bottom-10 left-1/2 w-px bg-gray-100 -translate-x-1/2 overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ph to-ph/60"
                                style={{
                                    scaleY: springProgress,
                                    transformOrigin: "top"
                                }}
                            />
                        </div>

                        {/* Timeline steps */}
                        <div className="relative">
                            {steps.map((step, index) => {
                                const isLeft = index % 2 === 0;
                                const isActive = index === activeStep;

                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center ${isLeft ? 'justify-end' : 'justify-start'} mb-28 last:mb-0`}
                                    >
                                        {/* Step card */}
                                        <div className={`w-5/12 ${isLeft ? 'text-right pr-16' : 'pl-16'}`}>
                                            <motion.div
                                                className={`p-8 rounded-xl bg-white cursor-pointer relative overflow-hidden border transition-all duration-300 ${isActive
                                                        ? 'shadow-lg shadow-ph/10 border-ph/20'
                                                        : index < activeStep
                                                            ? 'shadow-md border-ph/10'
                                                            : 'shadow-sm border-gray-100'
                                                    }`}
                                                onClick={() => setActiveStep(index)}
                                                whileHover={{
                                                    y: -5,
                                                    boxShadow: "0 20px 30px -10px rgba(79, 107, 255, 0.15)"
                                                }}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                            >
                                                {/* Step header */}
                                                <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                                                    <div className={`w-12 h-12 rounded-full bg-ph/10 text-ph flex items-center justify-center shrink-0 ${isLeft ? 'order-1 ml-4' : 'order-0 mr-4'}`}>
                                                        {step.icon}
                                                    </div>
                                                    <h3 className="text-xl font-medium text-foreground">
                                                        <span className="text-ph mr-2 font-light">{step.number}</span>
                                                        {step.title}
                                                    </h3>
                                                </div>

                                                {/* Step description */}
                                                <p className={`text-muted-foreground mb-5 ${isLeft ? 'text-right' : 'text-left'}`}>
                                                    {step.description}
                                                </p>

                                                {/* Expanded details */}
                                                <AnimatePresence>
                                                    {isActive && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="text-sm text-muted-foreground border-t border-gray-100 pt-4"
                                                        >
                                                            {step.detail}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {/* Completed indicator */}
                                                {index < activeStep && (
                                                    <div className={`absolute ${isLeft ? 'left-2' : 'right-2'} top-2 w-6 h-6 rounded-full bg-ph/10 flex items-center justify-center text-ph`}>
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                )}
                                            </motion.div>
                                        </div>

                                        {/* Step indicator on timeline */}
                                        <motion.div
                                            className={`absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white z-10 flex items-center justify-center transition-all duration-500 ${isActive
                                                    ? 'shadow-lg shadow-ph/20 border-2 border-ph text-ph'
                                                    : index < activeStep
                                                        ? 'shadow-md border border-ph text-ph'
                                                        : 'shadow-sm border border-gray-200 text-gray-400'
                                                }`}
                                            style={{
                                                top: `${index * 142 + 70}px` // Adjust based on your spacing
                                            }}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                                            onClick={() => setActiveStep(index)}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {index < activeStep ? <Check className="w-5 h-5" /> : step.number}

                                            {/* Pulsing effect for active step */}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute -inset-2 rounded-full border-2 border-ph/40 z-0"
                                                    animate={{
                                                        scale: [1, 1.2, 1],
                                                        opacity: [1, 0, 1]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                />
                                            )}
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile timeline */}
                    <div className="lg:hidden space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`relative transition-all duration-500`}
                                style={{ opacity: getStepOpacity(index) }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: getStepOpacity(index), y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                            >
                                {/* Connecting line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute top-[70px] left-[29px] w-0.5 h-[calc(100%+48px)] bg-gray-100 overflow-hidden">
                                        <motion.div
                                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-ph to-ph/40"
                                            style={{
                                                height: index < activeStep ? "100%" : "0%",
                                                originY: 0
                                            }}
                                            animate={{ height: index < activeStep ? "100%" : "0%" }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        />
                                    </div>
                                )}

                                <div className="flex gap-6">
                                    {/* Step number circle */}
                                    <div className="relative">
                                        <motion.div
                                            className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-light transition-all duration-500 relative z-10 ${activeStep === index
                                                    ? 'bg-ph text-white shadow-lg shadow-ph/20'
                                                    : index < activeStep
                                                        ? 'bg-white text-ph border border-ph/50'
                                                        : 'bg-white text-gray-400 border border-gray-200'
                                                }`}
                                            animate={{
                                                scale: activeStep === index ? 1.1 : 1,
                                                boxShadow: activeStep === index ? "0 10px 25px -5px rgba(79, 107, 255, 0.3)" : "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
                                            }}
                                            transition={{ duration: 0.3 }}
                                            onClick={() => setActiveStep(index)}
                                        >
                                            {index < activeStep ? (
                                                <Check className="w-5 h-5" />
                                            ) : (
                                                step.number
                                            )}
                                        </motion.div>

                                        {/* Pulsing effect for active step */}
                                        {activeStep === index && (
                                            <motion.div
                                                className="absolute top-0 left-0 w-full h-full rounded-full bg-ph/20"
                                                animate={{
                                                    scale: [1, 1.4, 1],
                                                    opacity: [0.7, 0, 0.7]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Step content */}
                                    <div className="flex-1">
                                        <motion.div
                                            className={`bg-white rounded-xl p-6 transition-all duration-300 ${activeStep === index
                                                    ? 'shadow-md shadow-ph/5 border border-ph/10'
                                                    : 'shadow-sm border border-gray-100'
                                                }`}
                                            animate={{
                                                y: activeStep === index ? -5 : 0,
                                                boxShadow: activeStep === index
                                                    ? "0 10px 25px -5px rgba(79, 107, 255, 0.1)"
                                                    : "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
                                            }}
                                            onClick={() => setActiveStep(index)}
                                        >
                                            <div className="flex items-center mb-4 text-ph">
                                                {step.icon}
                                                <h3 className="text-xl font-medium text-foreground ml-3">{step.title}</h3>
                                            </div>

                                            <p className="text-muted-foreground mb-4">{step.description}</p>

                                            <AnimatePresence>
                                                {activeStep === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.5 }}
                                                        className="text-sm text-muted-foreground pt-4 border-t border-gray-100"
                                                    >
                                                        {step.detail}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    className="mt-24 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <motion.h3
                            className="text-2xl font-display font-light text-foreground mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            Ready to Experience the Difference?
                        </motion.h3>

                        <motion.p
                            className="text-muted-foreground mb-8"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                        >
                            Our refined process combines technological efficiency with human insight to deliver exceptional candidates—precisely matched to your requirements.
                        </motion.p>

                        <motion.a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-ph text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            Schedule a Consultation
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesProcess;