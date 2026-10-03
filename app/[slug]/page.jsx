import { notFound } from "next/navigation";
import { businesses } from "../../data/business";
import { commons } from "../../data/business";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Welcome from "../../components/Welcome/Welcome";
import Services from "../../components/Services/Services";
import AboutTherapist from "../../components/AboutTherapist/AboutTherapist";
import Approach from "../../components/Approach/Approach";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Testimonials from "../../components/Testimonials/Testimonials";
import Fees from "../../components/Fees/Fees";
import FAQ from "../../components/FAQ/FAQ";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";


export function generateStaticParams() {
    return Object.keys(businesses).map((slug) => ({
        slug,
    }));
}


export async function generateMetadata({ params }) {
    const { slug } = await params;

    const business = businesses[slug];

    if (!business) {
        return {};
    }

    return {
        title: commons.seo.title,
        description: commons.seo.description,
    };
}


export default async function TherapyPage({ params }) {
    const { slug } = await params;

    const business = businesses[slug];

    if (!business) {
        notFound();
    }

    return (
        <div
            className="site"
            style={{
                "--business-primary": commons.theme.primary,
                "--business-primary-dark": commons.theme.primaryDark,
                "--business-accent": commons.theme.accent,
                // "--business-soft": business.theme.soft,
                // "--business-cream": business.theme.cream,
            }}
        >
            <Header business={business} commons={commons}/>

            <main>
                <Hero business={business} commons={commons}/>

                <Welcome business={business} commons={commons}/>

                <Services business={business} commons={commons}/>

                <AboutTherapist business={business} commons={commons}/>

                <Approach business={business} commons={commons}/>

                <HowItWorks business={business} commons={commons}/>

                <Testimonials business={business} commons={commons}/>

                <Fees business={business} commons={commons}/>

                <FAQ business={business} commons={commons}/>

                <Contact business={business} commons={commons}/>
            </main>

            <Footer business={business} commons={commons}/>
        </div>
    );
}