import SectionContainer from "@/components/shared/SectionContainer";
import PremiumButton from "@/components/shared/PremiumButton";
import Link from "next/link";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceWhy from "@/components/sections/ServiceWhy";
import ServiceBenefits from "@/components/sections/ServiceBenefits";
import ServicePricing from "@/components/sections/ServicePricing";
import Testimonial from "@/components/sections/Testimonial";
import { servicesDetails } from "@/lib/constants";
import { notFound } from "next/navigation";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = servicesDetails[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <ServiceHero data={data.hero} />
      <ServiceWhy data={data.why} />
      <ServicePricing data={data.pricing} />
      <ServiceBenefits data={data.benefits} />
      <Testimonial />
    </>
  );
}
