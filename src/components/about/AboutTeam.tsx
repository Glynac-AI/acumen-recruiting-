'use client'

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const AboutTeam: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Hydration guard to prevent SSR→CSR blink
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const prefersReduced = useReducedMotion();

  // Scroll-based animations (declare once to avoid re-creation jitter)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const orbRightX = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const orbRightScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const orbLeftX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const orbLeftScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);

  // Team member data
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'With over 15 years in wealth management recruiting, Sarah founded Acumen Recruiting to transform how firms connect with talent. Her background includes senior roles at Morgan Stanley and Merrill Lynch.',
      image: '/images/team/sarah-johnson.jpg',
      linkedin: 'https://linkedin.com/in/sarah-johnson',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Talent',
      bio: 'Michael brings 12 years of experience in talent acquisition for financial services. He leads our candidate screening process and has personally placed over 200 wealth management professionals.',
      image: '/images/team/michael-chen.jpg',
      linkedin: 'https://linkedin.com/in/michael-chen',
    },
    {
      name: 'Jennifer Taylor',
      role: 'Client Success Director',
      bio: 'Jennifer oversees all client relationships, ensuring an exceptional experience throughout the recruiting process. Her background includes roles at UBS and Charles Schwab.',
      image: '/images/team/jennifer-taylor.jpg',
      linkedin: 'https://linkedin.com/in/jennifer-taylor',
    },
    {
      name: 'David Wilson',
      role: 'Technology Director',
      bio: 'David leads our technology initiatives, creating the platforms that power our unique approach. He combines expertise in software development with a deep understanding of recruitment processes.',
      image: '/images/team/david-wilson.jpg',
      linkedin: 'https://linkedin.com/in/david-wilson',
    },
  ] as const;

  // Helpers
  const getInitials = (name: string) =>
    name
      .split(/\s+/)
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase();

  const emailFromName = (name: string) =>
    `${name.toLowerCase().replace(/\s+/g, '.').replace(/[^a-z.]/g, '')}@acumenrecruiting.com`;

  const viewport = { once: true, amount: 0.3 } as const;
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  return (
    <section
      ref={sectionRef}
      className="py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      id="team"
    >
      {/* Background elements with parallax (GPU-accelerated) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0 transform-gpu will-change-transform"
        style={{ opacity: backgroundOpacity, scale: backgroundScale, backfaceVisibility: 'hidden' }}
      />

      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-ph/5 rounded-full blur-3xl -z-10 opacity-50 transform-gpu will-change-transform"
        style={{ x: orbRightX, scale: orbRightScale, backfaceVisibility: 'hidden' }}
        aria-hidden
      />

      <motion.div
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-ph/5 rounded-full blur-3xl -z-10 opacity-50 transform-gpu will-change-transform"
        style={{ x: orbLeftX, scale: orbLeftScale, backfaceVisibility: 'hidden' }}
        aria-hidden
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none select-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\'/%3E%3C/svg%3E')",
        }}
        aria-hidden
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={mounted && !prefersReduced ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: prefersReduced ? 0 : 0.7, ease }}
        >
          <motion.span
            className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6"
            initial={mounted && !prefersReduced ? { opacity: 0, y: -10 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: prefersReduced ? 0 : 0.5, ease }}
          >
            Our Team
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6"
            initial={mounted && !prefersReduced ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: prefersReduced ? 0 : 0.7, delay: prefersReduced ? 0 : 0.1, ease }}
          >
            Meet the Experts Behind Acumen
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={mounted && !prefersReduced ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: prefersReduced ? 0 : 0.7, delay: prefersReduced ? 0 : 0.2, ease }}
          >
            Our team brings decades of combined experience in wealth management recruiting, technology, and client success.
          </motion.p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={`${member.name}-${member.role}`}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
              initial={mounted && !prefersReduced ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: prefersReduced ? 0 : 0.08 * index, duration: prefersReduced ? 0 : 0.5, ease }}
              whileHover={prefersReduced ? {} : { y: -5, boxShadow: '0 20px 40px rgba(79, 107, 255, 0.1)' }}
              style={{ willChange: 'transform' }}
            >
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                {/* Profile image or initials */}
                <div className="mx-auto md:mx-0">
                  {member.image ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-2 border-ph/10">
                      {/* Use native img for neutrality; supply lazy/decoding for perf */}
                      <img
                        src={member.image}
                        alt={`${member.name} — ${member.role}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-ph/10 flex items-center justify-center text-ph text-xl font-medium">
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>

                {/* Bio content */}
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-foreground">{member.name}</h3>
                  <div className="text-ph mb-3">{member.role}</div>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                  {/* Social links */}
                  <div className="flex gap-3">
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-muted-foreground hover:bg-ph hover:text-white hover:border-ph transition-colors"
                        whileHover={prefersReduced ? {} : { y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-3 h-3" />
                      </motion.a>
                    )}
                    <motion.a
                      href={`mailto:${emailFromName(member.name)}`}
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-muted-foreground hover:bg-ph hover:text-white hover:border-ph transition-colors"
                      whileHover={prefersReduced ? {} : { y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-3 h-3" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team expansion note */}
        <motion.div
          className="mt-16 text-center"
          initial={mounted && !prefersReduced ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: prefersReduced ? 0 : 0.4, duration: prefersReduced ? 0 : 0.6, ease }}
        >
          <p className="text-muted-foreground">
            Our full team includes additional recruiters, account managers, and technology specialists all dedicated to your success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
