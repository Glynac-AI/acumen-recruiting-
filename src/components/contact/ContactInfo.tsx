import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    ExternalLink
} from "lucide-react";

const ContactInfo = () => {
    const sectionRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

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
            hasExternalIcon: true
        },
    ];

    // Social media links
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-5 h-5" />,
            link: "https://linkedin.com/company/acumen-recruiting",
        },
        {
            name: "Twitter",
            icon: <Twitter className="w-5 h-5" />,
            link: "https://twitter.com/acumenrecruit",
        },
        {
            name: "Facebook",
            icon: <Facebook className="w-5 h-5" />,
            link: "https://facebook.com/acumenrecruiting",
        },
        {
            name: "Instagram",
            icon: <Instagram className="w-5 h-5" />,
            link: "https://instagram.com/acumenrecruiting",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 relative overflow-hidden"
        >
            {/* Subtle background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"
                    style={{ y: backgroundY }}
                />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ph/20 to-transparent"></div>
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-ph/5 to-transparent blur-3xl opacity-60"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-ph/5 to-transparent blur-3xl opacity-60"></div>
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
                        Ways to Reach Out
                    </motion.h2>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Have questions or ready to start your talent search? Contact us through any of these channels.
                    </motion.p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Information Column */}
                        <motion.div
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
                                            target={item.hasExternalIcon ? "_blank" : undefined}
                                            rel={item.hasExternalIcon ? "noopener noreferrer" : undefined}
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
                                            <div className="flex-1">
                                                <h4 className="text-foreground font-medium mb-1">
                                                    {item.title}
                                                </h4>
                                                <div className="flex items-center text-muted-foreground group-hover:text-ph transition-colors">
                                                    <span>{item.value}</span>
                                                    {item.hasExternalIcon && (
                                                        <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                                                    )}
                                                </div>
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

                        {/* Social Media Links Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <div className="glass-card rounded-2xl p-8 h-full">
                                <h3 className="text-2xl font-display font-light text-foreground mb-6">
                                    Connect on Social Media
                                </h3>

                                <p className="text-muted-foreground mb-8">
                                    Follow us on social media for industry insights, talent acquisition tips, and
                                    updates on our latest wealth management opportunities.
                                </p>

                                <div className="grid grid-cols-1 gap-6">
                                    {socialLinks.map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 glass-card p-4 rounded-xl group"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                            whileHover={{
                                                x: 5,
                                                backgroundColor: "rgba(79, 107, 255, 0.1)",
                                            }}
                                        >
                                            <div className="w-12 h-12 rounded-full bg-ph/10 flex items-center justify-center text-ph">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-foreground font-medium">
                                                    {item.name}
                                                </h4>
                                                <div className="text-sm text-muted-foreground group-hover:text-ph transition-colors flex items-center">
                                                    <span>Follow us on {item.name}</span>
                                                    <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                                                </div>
                                            </div>
                                            <div className="text-ph opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ExternalLink className="w-5 h-5" />
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="mt-10 pt-6 border-t border-gray-100">
                                    <p className="text-muted-foreground">
                                        Join our network of wealth management professionals and stay updated on
                                        industry trends and opportunities.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;