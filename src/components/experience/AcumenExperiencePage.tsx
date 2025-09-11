// src/components/experience/AcumenExperiencePage.tsx
import * as React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  FileText,
  Video,
  Users,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Consultation",
    icon: <PhoneCall className="w-5 h-5" />, // ✅ Changed icon here
    description:
      "Beginning with a conversation about your firm's unique needs and culture. We explore requirements, team dynamics, and candidate profile to ensure alignment from the start.",
  },
  {
    id: 2,
    title: "Curation",
    icon: <FileText className="w-5 h-5" />,
    description:
      "Designing a tailored approach that aligns with your specific requirements and recruitment goals.",
  },
  {
    id: 3,
    title: "Discovery",
    icon: <Video className="w-5 h-5" />,
    description:
      "Leveraging Snapshot™ and DeepDive™ methodologies to thoroughly evaluate candidates across skills and culture.",
  },
  {
    id: 4,
    title: "Collaboration",
    icon: <Users className="w-5 h-5" />,
    description:
      "Working closely with your team to refine choices and present only the best-suited candidates.",
  },
  {
    id: 5,
    title: "Decision",
    icon: <CheckCircle className="w-5 h-5" />,
    description:
      "Supporting your final hiring decisions with confidence through structured insights and assessments.",
  },
];

export default function AcumenExperiencePage() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block py-1 px-3 bg-indigo-100 text-indigo-600 text-sm rounded-full mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Process
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-gray-900 mb-6">
            The Acumen Experience
          </h2>
          <p className="text-lg text-gray-600">
            A thoughtfully designed journey from consultation to placement.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
          <div className="space-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Circle number */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-2 border-indigo-200 bg-white text-indigo-600 font-medium z-10">
                    {String(step.id).padStart(2, "0")}
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isLeft ? "pr-10 text-right" : "pl-10 text-left"
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-indigo-600">{step.icon}</span>
                        <h3 className="font-medium text-lg text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
