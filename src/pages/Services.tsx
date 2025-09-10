import React from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesSolutions from "@/components/services/ServicesSolutions";
import ServicesRoles from "@/components/services/ServicesRoles";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesCTA from "@/components/services/ServicesCTA";

const Services = () => {
    return (
        <div className="min-h-screen bg-background">
            <ServicesHero />
            <ServicesSolutions />
            <ServicesRoles />
            <ServicesProcess />
            <ServicesCTA />
        </div>
    );
};

export default Services;