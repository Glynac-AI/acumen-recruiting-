import React from "react";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";

const Pricing = () => {
    return (
        <div className="min-h-screen bg-background">
            <PricingHero />
            <PricingPlans />
            <PricingComparison />
            <PricingFAQ />
            <PricingCTA />
        </div>
    );
};

export default Pricing;