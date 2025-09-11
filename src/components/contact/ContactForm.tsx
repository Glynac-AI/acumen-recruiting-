import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send, Check, Loader2, Users, Clock, Shield, BarChart } from "lucide-react";

const ContactForm = () => {
    const sectionRef = useRef(null);
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        role: "Wealth Manager",
    });
    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        error: null,
    });

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    // Form handlers
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

        // Simulate form submission - replace with actual API call
        setTimeout(() => {
            setFormStatus({
                isSubmitting: false,
                isSubmitted: true,
                error: null,
            });
            // Reset form after successful submission
            setFormState({
                name: "",
                email: "",
                company: "",
                phone: "",
                message: "",
                role: "Wealth Manager",
            });
        }, 1500);
    };

    // Role options for dropdown
    const roleOptions = [
        "Wealth Manager",
        "Financial Planner",
        "Tax Advisor",
        "Estate Planning Specialist",
        "Compliance Officer",
        "Support Staff",
        "Other",
    ];

    // Value propositions for right column
    const valueProps = [
        {
            icon: <Users className="w-5 h-5" />,
            title: "Industry Expertise",
            description: "Specialized in wealth management roles with deep understanding of industry requirements."
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Accelerated Process",
            description: "Average time-to-hire of just 7-14 days, compared to industry standard of 45-60 days."
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "Quality Guarantee",
            description: "If a placed candidate doesn't meet expectations within 30 days, we'll provide replacements at no extra charge."
        },
        {
            icon: <BarChart className="w-5 h-5" />,
            title: "Transparent Pricing",
            description: "Clear, value-based pricing structure with no hidden fees or surprise costs."
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="contact-form"
            className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50"
        >
            {/* Subtle background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Decorative patterns */}
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-ph/5 to-transparent blur-3xl opacity-60"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-ph/5 to-transparent blur-3xl opacity-60"></div>

                {/* Subtle grain texture */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }} />
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
                        Reach Out
                    </motion.span>

                    <motion.h2
                        className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Tell Us About Your Needs
                    </motion.h2>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Complete the form below, and we'll be in touch within 24 hours to discuss
                        how we can help you find the perfect talent for your wealth management firm.
                    </motion.p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                        {/* Form Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            {formStatus.isSubmitted ? (
                                <motion.div
                                    className="bg-green-50 border border-green-100 rounded-xl p-8 text-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Check className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h4 className="text-xl font-display font-light text-green-800 mb-2">
                                        Message Sent Successfully
                                    </h4>
                                    <p className="text-green-700">
                                        Thank you for reaching out! One of our team members will be
                                        in touch with you shortly to discuss your talent acquisition needs.
                                    </p>
                                    <button
                                        className="mt-6 text-sm text-ph hover:underline"
                                        onClick={() =>
                                            setFormStatus({
                                                isSubmitting: false,
                                                isSubmitted: false,
                                                error: null,
                                            })
                                        }
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="glass-card rounded-xl shadow-sm p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Name Field */}
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-foreground mb-2"
                                                >
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-ph focus:ring-1 focus:ring-ph/30 outline-none transition-all"
                                                    placeholder="Enter your name"
                                                />
                                            </div>

                                            {/* Email Field */}
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-foreground mb-2"
                                                >
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-ph focus:ring-1 focus:ring-ph/30 outline-none transition-all"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Company Field */}
                                            <div>
                                                <label
                                                    htmlFor="company"
                                                    className="block text-sm font-medium text-foreground mb-2"
                                                >
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formState.company}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-ph focus:ring-1 focus:ring-ph/30 outline-none transition-all"
                                                    placeholder="Enter your company name"
                                                />
                                            </div>

                                            {/* Phone Field */}
                                            <div>
                                                <label
                                                    htmlFor="phone"
                                                    className="block text-sm font-medium text-foreground mb-2"
                                                >
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formState.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-ph focus:ring-1 focus:ring-ph/30 outline-none transition-all"
                                                    placeholder="Enter your phone number"
                                                />
                                            </div>
                                        </div>

                                        {/* Role Selection */}
                                        <div>
                                            <label
                                                htmlFor="role"
                                                className="block text-sm font-medium text-foreground mb-2"
                                            >
                                                Role You're Looking to Fill
                                            </label>
                                            <select
                                                id="role"
                                                name="role"
                                                value={formState.role}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-ph focus:ring-1 focus:ring-ph/30 outline-none transition-all"
                                            >
                                                {roleOptions.map((role) => (
                                                    <option key={role} value={role}>
                                                        {role}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Message Field */}
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium text-foreground mb-2"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formState.message}
                                                onChange={handleInputChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-ph focus:ring-1 focus:ring-ph/30 outline-none transition-all resize-none"
                                                placeholder="Tell us about your talent acquisition needs"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <div>
                                            <motion.button
                                                type="submit"
                                                disabled={formStatus.isSubmitting}
                                                className="w-full inline-flex items-center justify-center bg-gradient-to-r from-ph to-[#3A56E8] text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg disabled:opacity-70"
                                                whileHover={{ y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {formStatus.isSubmitting ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send className="w-4 h-4 ml-2" />
                                                    </>
                                                )}
                                            </motion.button>
                                        </div>
                                    </form>

                                    {/* Form Footnote */}
                                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                        <p className="text-sm text-muted-foreground">
                                            By submitting this form, you agree to our <a href="/privacy" className="text-ph hover:underline">Privacy Policy</a> and consent to being contacted about our services.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        {/* Value Propositions Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="lg:mt-8"
                        >
                            <div className="space-y-8">
                                {valueProps.map((prop, index) => (
                                    <motion.div
                                        key={index}
                                        className="glass-card p-6 rounded-xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="bg-ph/10 p-2.5 rounded-lg text-ph mt-1">
                                                {prop.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-foreground mb-1">{prop.title}</h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Client Testimonial */}
                            <motion.div
                                className="mt-10 glass-card p-6 rounded-xl border-t-2 border-ph/20"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <blockquote className="text-muted-foreground italic text-sm leading-relaxed mb-4">
                                    "Acumen helped us find our Senior Wealth Advisor in just 12 days - a position we had been struggling to fill for months."
                                </blockquote>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ph/10 to-white flex items-center justify-center text-ph font-medium text-xs mr-2">
                                        MD
                                    </div>
                                    <div>
                                        <div className="text-foreground text-sm font-medium">Managing Director</div>
                                        <div className="text-xs text-muted-foreground">Private Wealth Firm</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Additional Features */}
                <motion.div
                    className="max-w-4xl mx-auto mt-12 pt-6 flex flex-wrap justify-center gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    {[
                        { label: "Typically respond within 24 hours" },
                        { label: "New candidate options in 7 days" },
                        { label: "No obligation consultation" }
                    ].map((feature, index) => (
                        <div key={index} className="flex items-center text-muted-foreground">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-ph mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span>{feature.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;