
import ServicesGrid from "@/components/sections/ServicesGrid";
import OurBrands from "@/components/sections/OurBrands";
import ServicesHeroCTA from "@/components/sections/ServicesHeroCTA";
import ServiceDifferentiators from "@/components/sections/ServiceDifferentiators";
import ServiceBenefits from "@/components/sections/ServiceBenefits";
import Testimonial from "@/components/sections/Testimonial";
import { OurWorks } from "@/components/sections/OurWorks";
import { 
  getServicesCategories, 
  getBrands, 
  getFAQs, 
  getPortfolioItems, 
  getTestimonials 
} from "@/lib/data-fetching";
import FAQ from "@/components/sections/FAQ";

export default async function ServicesPage() {
  const [categories, brands, faqs, portfolio, testimonials] = await Promise.all([
    getServicesCategories(),
    getBrands(),
    getFAQs(),
    getPortfolioItems(),
    getTestimonials()
  ]);

  return (
    <>
      <ServicesHeroCTA />
      <ServicesGrid services={JSON.parse(JSON.stringify(categories))} />
      <OurBrands initialBrands={JSON.parse(JSON.stringify(brands))} />
      <ServiceDifferentiators />
      <ServiceBenefits />
      <Testimonial initialTestimonials={JSON.parse(JSON.stringify(testimonials))} />
      <FAQ initialFaqs={JSON.parse(JSON.stringify(faqs))} />
      <OurWorks initialWorks={JSON.parse(JSON.stringify(portfolio))} />
      {/* <ServiceFAQ /> */}
    </>
  );
}
