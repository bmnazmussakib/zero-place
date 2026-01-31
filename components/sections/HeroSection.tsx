"use client"
import PremiumButton from "@/components/shared/PremiumButton";
import SectionContainer from "@/components/shared/SectionContainer";
import { Play } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="relative overflow-hidden bg-background before:absolute before:bg-primary before:size-[30rem] before:rounded-full before:opacity-50 before:end-[calc(50%-740px)] before:translate-x-1/2 before:top-0 before:blur-[100px] before:opacity-[0.25]" >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--primary-soft),var(--color-background))] opacity-40" />

            <SectionContainer className="relative grid grid-cols-2">
                <div className="text-left space-y-8">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-semibold tracking-wide uppercase">
                        Unlimited Design Subscription
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                        Boost Your Brand with Expert <br />
                        <span className="text-primary">
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    500,
                                    'Branding', // initially rendered starting point
                                    1000,
                                    'UI/UX',
                                    1000,
                                    'Web Development',
                                    1000,
                                    'Apps Development',
                                    500,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Premium quality, fast delivery, and scalable solutions tailored to your business goals.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4">
                        <PremiumButton asChild className="w-full sm:w-auto">
                            <Link href="/pricing">
                                View Pricing
                            </Link>
                        </PremiumButton>
                        <PremiumButton
                            asChild
                            variant="outline"
                            className="w-full sm:w-auto"
                        >
                            <Link href="/portfolio">
                                See our work
                            </Link>
                        </PremiumButton>
                    </div>
                </div>

                {/* Hero Image / Mockup Placeholder */}
                <div className="mt-20 relative ">
                    <div className="absolute top-0 left-0 z-10 p-4 bg-primary text-white backdrop-blur-sm">
                        Trusted by 800+ Tech Giants.
                    </div>
                    <div className="w-[550px] h-[550px] ms-auto bg-white shadow-2xl border border-border overflow-hidden">
                        <div className="w-full h-full aspect-square bg-linear-to-br from-secondary to-white flex items-center justify-center font-medium text-muted-foreground">
                            <img src="/images/hero/hero-img.jpeg" alt="" />
                        </div>
                    </div>

                    {/* <div className="absolute bottom-[-105px] right-[-40px]">
                        <Card className="w-fit p-6 rounded-sm bg-secondary">
                            <AvatarGroup className="">
                                <Avatar size="lg">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar size="lg">
                                    <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                                    <AvatarFallback>LR</AvatarFallback>
                                </Avatar>
                                <Avatar size="lg">
                                    <AvatarImage
                                        src="https://github.com/evilrabbit.png"
                                        alt="@evilrabbit"
                                    />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                                <Avatar size="lg">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar size="lg">
                                    <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                                    <AvatarFallback>LR</AvatarFallback>
                                </Avatar>
                                <Avatar size="lg">
                                    <AvatarImage
                                        src="https://github.com/evilrabbit.png"
                                        alt="@evilrabbit"
                                    />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                            </AvatarGroup>
                            <div className="flex items-center gap-2">
                                <h3 className="text-6xl">4.9</h3>
                                <Rating name="read-only" value={2.5} precision={0.5} readOnly />
                            </div>
                            <p>Based on 600+ Google Reviews.</p>
                        </Card>
                    </div> */}
                </div>
            </SectionContainer>
        </div>
    );
}

// Inline Link import since I'm using it
import Link from "next/link"; import { TypeAnimation } from "react-type-animation";
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";
import { Rating } from "@mui/material";

