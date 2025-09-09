import React from "react";
import HeroSection from "@/components/home/HeroSection";
import Expertise from "@/components/home/Expertise";
import Philosophy from "@/components/home/Philosophy";
import AcumenExperience from "@/components/home/AcumenExperience";
import TailoredSolutions from "@/components/home/TailoredSolutions";
import ClientPerspectives from "@/components/home/ClientPerspectives";
import CTASection from "@/components/home/CTASection";

const Home = () => {
    return (
        <div className="min-h-screen bg-background">
            <HeroSection />
            <Expertise />
            <Philosophy />
            <AcumenExperience />
            <TailoredSolutions />
            <ClientPerspectives />
            <CTASection />
        </div>
    );
};

export default Home;