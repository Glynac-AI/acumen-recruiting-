import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTeam from "@/components/about/AboutTeam";
import AboutExpertise from "@/components/about/AboutExpertise";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <AboutHero />
            <AboutStory />
            <AboutTeam />
            <AboutExpertise />
            <AboutCTA />
        </div>
    );
};

export default About;