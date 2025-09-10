import React from "react";
import FAQ from "@/components/FAQ";

const FAQPage: React.FC = () => (
  <section className="min-h-screen bg-background py-28">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-light tracking-wide">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground mt-3">
          Clear answers about process, timing, guarantees, pricing, and more.
        </p>
      </div>

      {/* FAQ component (search, filters, deep links, etc.) */}
      <FAQ title="General FAQ" />
    </div>
  </section>
);

export default FAQPage;
