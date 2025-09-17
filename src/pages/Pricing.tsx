// src/pages/Pricing.tsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import PricingHero from "@/components/pricing/PricingHero";
import PricingTables from "@/components/pricing/PricingTables";
import PricingFeatures from "@/components/pricing/PricingFeatures";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";


const Pricing = () => {
    useEffect(() => {
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Pricing | Acumen Recruiting</title>
                <meta
                    name="description"
                    content="Transparent, value-based pricing for wealth management recruitment services. Find exceptional talent at a fraction of traditional recruiting costs."
                />
            </Helmet>

            <PricingHero />
            <PricingTables />
            <PricingFeatures />
            <PricingFAQ />
            <PricingCTA />
        </>
    );
};

export default Pricing;