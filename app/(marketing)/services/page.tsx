import SectionContainer from "@/components/shared/SectionContainer";
import { servicesCategories } from "@/lib/constants";
import ServicesGrid from "@/components/sections/ServicesGrid";
import OurBrands from "@/components/sections/OurBrands";
import ServicesHeroCTA from "@/components/sections/ServicesHeroCTA";
import ServiceDifferentiators from "@/components/sections/ServiceDifferentiators";
import ServiceBenefits from "@/components/sections/ServiceBenefits";
import Testimonial from "@/components/sections/Testimonial";
import { OurWorks } from "@/components/sections/OurWorks";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import FAQ from "@/components/sections/FAQ";

export default function ServicesPage() {
  return (
    <div className="bg-gray-50/50 min-h-screen pt-24 pb-32">
      <SectionContainer>
        <ServicesHeroCTA />


        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">All Services</h2>
          <p className="text-xl text-[var(--text-body)] max-w-2xl">
            We help you build a brand that stands out. From logo design to full-scale web development.
          </p>
        </div>
      </SectionContainer>

      <ServicesGrid services={servicesCategories} />
      <OurBrands />
      <ServiceDifferentiators />
      <ServiceBenefits />
      <Testimonial />
      <OurWorks />
      <FAQ />
      {/* <ServiceFAQ /> */}
    </div>
  );
}
