import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Send, Check, Loader2, Users } from "lucide-react";

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

    // Contact information
    const contactInfo = [
        {
            icon: <Phone className="w-5 h-5" />,
            title: "Phone",
            value: "(773) 430-3534",
            link: "tel:+17734303534",
        },
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Email",
            value: "info@acumenrecruiting.com",
            link: "mailto:info@acumenrecruiting.com",
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Address",
            value: "4753 N. Broadway, Chicago IL 60640",
            link: "https://maps.google.com/?q=4753+N.+Broadway,+Chicago+IL+60640",
        },
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
                        Connect With Us
                    </motion.span>

                    <motion.h2
                        className="text-3xl md:text-4xl font-display font-light tracking-tight text-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Get in Touch With Our Team
                    </motion.h2>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        We're here to answer your questions and discuss how we can help you
                        find the perfect talent for your wealth management firm.
                    </motion.p>
                </motion.div>

                {/* Contact Form and Info Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
                    {/* Contact Information Column */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="glass-card rounded-2xl p-8 h-full">
                            <h3 className="text-2xl font-display font-light text-foreground mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        className="flex items-start gap-4 group"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-ph/10 flex items-center justify-center text-ph">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-foreground font-medium mb-1">
                                                {item.title}
                                            </h4>
                                            <p className="text-muted-foreground group-hover:text-ph transition-colors">
                                                {item.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Business Hours */}
                            <div className="mt-10 pt-6 border-t border-gray-100">
                                <h4 className="text-foreground font-medium mb-3">
                                    Business Hours
                                </h4>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 5:00 PM CST</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Saturday - Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Team availability note */}
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <p className="text-sm text-muted-foreground">
                                    Our team is available Monday through Friday, 9am to 5pm CST.
                                    We aim to respond to all inquiries within 24 hours.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Column */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="glass-card rounded-2xl p-8">
                            <h3 className="text-2xl font-display font-light text-foreground mb-6">
                                Send Us a Message
                            </h3>

                            {formStatus.isSubmitted ? (
                                <motion.div
                                    className="bg-green-50 border border-green-100 rounded-xl p-6 text-center"
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
                                        in touch with you shortly.
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
                                        <button
                                            type="submit"
                                            disabled={formStatus.isSubmitting}
                                            className="inline-flex items-center justify-center bg-gradient-to-r from-ph to-[#3A56E8] text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:from-[#3A56E8] hover:to-ph disabled:opacity-70"
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
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;