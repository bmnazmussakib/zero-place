import SectionContainer from "@/components/shared/SectionContainer";
import PremiumButton from "@/components/shared/PremiumButton";
import Link from "next/link";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceWhy from "@/components/sections/ServiceWhy";
import ServiceBenefits from "@/components/sections/ServiceBenefits";
import ServicePricing from "@/components/sections/ServicePricing";
import Testimonial from "@/components/sections/Testimonial";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <ServiceHero />
      <ServiceWhy />
      <ServicePricing />
      <ServiceBenefits />
      <Testimonial />
    </>
  );
}
