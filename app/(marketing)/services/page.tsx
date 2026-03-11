
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
    <>
      <ServicesHeroCTA />
      <ServicesGrid services={servicesCategories} />
      <OurBrands />
      <ServiceDifferentiators />
      <ServiceBenefits />
      <Testimonial />
      <FAQ />
      <OurWorks />
      {/* <ServiceFAQ /> */}
    </>
  );
}
