"use client";
import React from "react";
import AboutUs from "./homecomponents/AboutUs";
import Hero from "./homecomponents/Hero";
import OurServices from "./homecomponents/OurServices";
import WhyChooseUs from "./homecomponents/WhyChooseUs";

import LeadChange from "./homecomponents/LeadChange";

import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import PurpleBoxSection from "./homecomponents/PurpleBoxSection";
import Header from "./components/Header";


export default function Home() {
  return (
   <>
   <Header enableScrollEffects={true} />
   <Hero />
   <AboutUs />
   <PurpleBoxSection />
    <WhyChooseUs />
   <OurServices />

    <Testimonials
      title="Success Stories"
      subtitle="Contractors Growing with Lattice"
      testimonials={[
        {
          id: 1,
          body: "Lattice's CRM transformed how we manage projects. We've doubled our client base in 6 months and the free website brought in 30+ leads monthly. Game changer for our business!",
          clientName: "Mike Johnson",
          clientCompany: "Premier Remodeling VA"
        },
        {
          id: 2,
          body: "The 3D rendering tools and AI designer help us close deals 3x faster. Clients love seeing their vision come to life instantly. Worth every penny!",
          clientName: "Sarah Chen",
          clientCompany: "Chen Construction Group"
        },
        {
          id: 3,
          body: "From design to invoicing, everything's in one place. The digital showroom alone increased our conversion rate by 45%. Lattice understands what contractors need.",
          clientName: "Robert Martinez",
          clientCompany: "Martinez Home Solutions"
        },
        {
          id: 4,
          body: "The SEO-optimized website Lattice built ranks #1 locally. Combined with their CRM, we're managing 5x more projects efficiently. Best B2B investment we've made.",
          clientName: "Emily Davis",
          clientCompany: "Davis Design & Build"
        },
        {
          id: 5,
          body: "Lattice's AI design tool saves us 20+ hours per week. The 4K videos we get with renders blow clients away. Our close rate went from 15% to 42%!",
          clientName: "James Wilson",
          clientCompany: "Wilson Contractors LLC"
        }
      ]}
    />
    <LeadChange text="Transform Your Business With Lattice"/>
    <Footer />
   </>
  );
}
