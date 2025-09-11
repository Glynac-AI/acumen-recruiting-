import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ContactTestimonial = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <div className="relative p-8 glass-card rounded-2xl border border-gray-100">
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

                        {/* Star rating */}
                        <div className="flex justify-center mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>

                        <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-6 text-center">
                            "Acumen Recruiting transformed our talent acquisition process.
                            Their innovative approach combining video introductions with
                            structured interviews saved us countless hours and resulted in
                            finding the perfect wealth manager for our team. Their industry
                            expertise and transparent pricing made the entire experience
                            seamless."
                        </blockquote>

                        <div className="flex items-center justify-center">
                            <div className="p-px bg-gradient-to-r from-ph/30 to-transparent rounded-full mr-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ph/10 to-white flex items-center justify-center text-ph font-medium">
                                    RB
                                </div>
                            </div>
                            <div>
                                <div className="font-medium text-foreground">
                                    Robert Blackwell
                                </div>
                                <div className="text-sm text-muted-foreground mt-0.5">
                                    CEO, Premier Wealth Partners
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Map Section */}
                <motion.div
                    className="max-w-6xl mx-auto mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[400px] bg-gray-100 glass-card">
                        {/* Replace with actual map component or iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5441190276285!2d-87.6608348!3d41.96888879999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3b176550775%3A0x7e9c81d3ef1a8d0a!2s4753%20N%20Broadway%2C%20Chicago%2C%20IL%2060640!5e0!3m2!1sen!2sus!4v1631655279978!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Acumen Recruiting office location"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactTestimonial;