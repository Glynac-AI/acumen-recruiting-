import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const ContactTestimonial = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Testimonial data
    const testimonials = [
        {
            quote: "Acumen Recruiting transformed our talent acquisition process. Their innovative approach combining video introductions with structured interviews saved us countless hours and resulted in finding the perfect wealth manager for our team.",
            author: "Robert Blackwell",
            title: "CEO, Premier Wealth Partners",
            rating: 5
        },
        {
            quote: "Working with Acumen was a game-changer for our firm. Within two weeks, we had multiple qualified candidates to choose from, all pre-screened and specifically matched to our firm's culture and requirements.",
            author: "Jennifer Martinez",
            title: "Managing Director, Cornerstone Financial",
            rating: 5
        },
        {
            quote: "The quality of candidates and speed of delivery exceeded our expectations. We've now filled three key positions through Acumen, and each hire has been exceptional. Their industry knowledge is unmatched.",
            author: "Michael Chen",
            title: "COO, Heritage Wealth Advisors",
            rating: 5
        }
    ];

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-white relative overflow-hidden"
        >
            {/* Subtle background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"
                    style={{ y: backgroundY }}
                />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.span
                        className="text-sm font-medium text-ph tracking-wider uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Client Success Stories
                    </motion.span>

                    <motion.h2
                        className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        What Our Clients Say
                    </motion.h2>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Hear from wealth management firms that have transformed their talent acquisition approach with Acumen Recruiting.
                    </motion.p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="relative glass-card rounded-2xl p-8 border border-gray-100"
                            >
                                {/* Quote mark decoration */}
                                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-6 h-6"
                                    >
                                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                                    </svg>
                                </div>

                                <div className="mb-6">
                                    {/* Star rating */}
                                    <div className="flex justify-center mb-6">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-5 h-5 ${star <= testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>

                                    <blockquote className="text-lg text-muted-foreground italic leading-relaxed text-center">
                                        "{testimonials[activeIndex].quote}"
                                    </blockquote>
                                </div>

                                <div className="flex items-center justify-center">
                                    <div className="p-px bg-gradient-to-r from-ph/30 to-transparent rounded-full mr-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ph/10 to-white flex items-center justify-center text-ph font-medium">
                                            {testimonials[activeIndex].author.split(' ').map(name => name[0]).join('')}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-medium text-foreground">
                                            {testimonials[activeIndex].author}
                                        </div>
                                        <div className="text-sm text-muted-foreground mt-0.5">
                                            {testimonials[activeIndex].title}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation controls */}
                    <div className="flex justify-center mt-8 gap-4">
                        <motion.button
                            onClick={handlePrev}
                            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-ph transition-colors border border-white/20"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </motion.button>

                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${index === activeIndex ? 'bg-ph' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={handleNext}
                            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-ph transition-colors border border-white/20"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactTestimonial;