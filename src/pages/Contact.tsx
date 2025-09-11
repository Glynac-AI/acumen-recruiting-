//contact page
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactTestimonial from "@/components/contact/ContactTestimonial";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <ContactHero />
            <ContactForm />
            <ContactInfo />
            <ContactFAQ />
            <ContactTestimonial />
        </div>
    );
};

export default Contact;