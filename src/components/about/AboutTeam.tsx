'use client';

import React, { useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  MotionConfig,
  m,
  useScroll,
  useTransform,
  type Transition,
  type Variants
} from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const AboutTeam = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Scroll-based animations (parallax; these do not cause hydration flicker)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const backgroundScale   = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  const rightBlobX  = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rightBlobS  = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const leftBlobX   = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const leftBlobS   = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);

  // Only micro-interactions – no entrance reveals
  const hoverTransition: Transition = { type: "spring", stiffness: 180, damping: 18, mass: 0.4 };

  // Stable “show” variant (SSR == CSR)
  const showOnly: Variants = { show: { opacity: 1, y: 0 } };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years in wealth management recruiting, Sarah founded Acumen Recruiting to transform how firms connect with talent. Her background includes senior roles at Morgan Stanley and Merrill Lynch.",
      image: "/images/team/sarah-johnson.jpg",
      linkedin: "https://linkedin.com/in/sarah-johnson"
    },
    {
      name: "Michael Chen",
      role: "Head of Talent",
      bio: "Michael brings 12 years of experience in talent acquisition for financial services. He leads our candidate screening process and has personally placed over 200 wealth management professionals.",
      image: "/images/team/michael-chen.jpg",
      linkedin: "https://linkedin.com/in/michael-chen"
    },
    {
      name: "Jennifer Taylor",
      role: "Client Success Director",
      bio: "Jennifer oversees all client relationships, ensuring an exceptional experience throughout the recruiting process. Her background includes roles at UBS and Charles Schwab.",
      image: "/images/team/jennifer-taylor.jpg",
      linkedin: "https://linkedin.com/in/jennifer-taylor"
    },
    {
      name: "David Wilson",
      role: "Technology Director",
      bio: "David leads our technology initiatives, creating the platforms that power our unique approach. He combines expertise in software development with a deep understanding of recruitment processes.",
      image: "/images/team/david-wilson.jpg",
      linkedin: "https://linkedin.com/in/david-wilson"
    }
  ];

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((p) => p.charAt(0))
      .join("")
      .toUpperCase();

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig transition={hoverTransition}>
        <section
          ref={sectionRef}
          className="py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
          id="team"
        >
          {/* Background with parallax (no mount animation) */}
          <m.div
            className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"
            style={{ opacity: backgroundOpacity, scale: backgroundScale }}
            initial={false}
            animate="show"
            variants={showOnly}
          />

          <m.div
            className="absolute top-1/4 right-0 w-96 h-96 bg-ph/5 rounded-full blur-3xl -z-10 opacity-50"
            style={{ x: rightBlobX, scale: rightBlobS }}
            initial={false}
          />
          <m.div
            className="absolute bottom-1/4 left-0 w-64 h-64 bg-ph/5 rounded-full blur-3xl -z-10 opacity-50"
            style={{ x: leftBlobX, scale: leftBlobS }}
            initial={false}
          />

          {/* Subtle grain */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            {/* Header (static render; no reveal) */}
            <m.div
              initial={false}
              animate="show"
              variants={showOnly}
              className="max-w-3xl mx-auto text-center mb-16 transform-gpu will-change-transform"
            >
              <span className="inline-block py-1 px-3 bg-ph/10 text-ph font-medium rounded-full text-sm mb-6">
                Our Team
              </span>

              <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-foreground mb-6">
                Meet the Experts Behind Acumen
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our team brings decades of combined experience in wealth management recruiting, technology, and client success.
              </p>
            </m.div>

            {/* Team grid (no reveal on mount; smooth hover only) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <m.article
                  key={member.name}
                  initial={false}
                  animate="show"
                  variants={showOnly}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 transform-gpu will-change-transform hover:shadow-md"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(79, 107, 255, 0.1)", borderColor: "rgba(79, 107, 255, 0.2)" }}
                >
                  <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
                    {/* Avatar */}
                    <div className="mx-auto md:mx-0">
                      {member.image ? (
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-2 border-ph/10">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-ph/10 flex items-center justify-center text-ph text-xl font-medium">
                          {getInitials(member.name)}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-foreground">{member.name}</h3>
                      <div className="text-ph mb-3">{member.role}</div>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                      {/* Socials */}
                      <div className="flex gap-3">
                        {member.linkedin && (
                          <m.a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-muted-foreground hover:bg-ph hover:text-white hover:border-ph transition-colors"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <Linkedin className="w-3 h-3" />
                          </m.a>
                        )}
                        <m.a
                          href={`mailto:${member.name.toLowerCase().replace(/\s+/g, ".")}@acumenrecruiting.com`}
                          className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 text-muted-foreground hover:bg-ph hover:text-white hover:border-ph transition-colors"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-3 h-3" />
                        </m.a>
                      </div>
                    </div>
                  </div>
                </m.article>
              ))}
            </div>

            {/* Footer note (static) */}
            <m.div
              initial={false}
              animate="show"
              variants={showOnly}
              className="mt-16 text-center transform-gpu will-change-transform"
            >
              <p className="text-muted-foreground">
                Our full team includes additional recruiters, account managers, and technology specialists all dedicated to your success.
              </p>
            </m.div>
          </div>
        </section>
      </MotionConfig>
    </LazyMotion>
  );
};

export default AboutTeam;
