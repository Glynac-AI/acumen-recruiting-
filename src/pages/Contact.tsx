// Contact page 
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactTestimonial from "@/components/contact/ContactTestimonial";
import ContactFAQ from "@/components/contact/ContactFAQ";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <ContactHero />
            <ContactForm />
            <ContactTestimonial />
            <ContactFAQ />
        </div>
    );
};

export default Contact;