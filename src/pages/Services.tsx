// src/pages/Services.tsx
import * as React from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesSolutions from "@/components/services/ServicesSolutions";
import ServicesCTA from "@/components/services/ServicesCTA"; // keep if you use it

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesSolutions />   {/* includes the new Acumen Experience block */}
      <ServicesCTA />
    </>
  );
}
