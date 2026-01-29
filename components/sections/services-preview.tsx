import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Palette,
    Smartphone,
    Globe,
    ExternalLink,
    Zap,
    Layout
} from "lucide-react";

const services = [
    {
        title: "Graphics Design",
        description: "Visual identities that resonate and leave a lasting impression.",
        icon: Palette,
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        title: "App Design",
        description: "Seamless and intuitive mobile experiences your users will love.",
        icon: Smartphone,
        color: "bg-purple-500/10 text-purple-500",
    },
    {
        title: "Web Design",
        description: "Stunning, high-performance websites built for conversions.",
        icon: Globe,
        color: "bg-emerald-500/10 text-emerald-500",
    },
    {
        title: "Brand Identity",
        description: "Complete branding solutions from logos to typefaces.",
        icon: Zap,
        color: "bg-orange-500/10 text-orange-500",
    },
    {
        title: "UI/UX Audit",
        description: "Deep dive into your product to find and fix friction points.",
        icon: Layout,
        color: "bg-pink-500/10 text-pink-500",
    }
];

export function ServicesPreview() {
    return (
        <section className="py-24 bg-section/50">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
                        Our Services
                    </Badge>
                    <h2 className="text-3xl font-bold lg:text-4xl mb-4">
                        Custom Design Solutions for <span className="text-primary">Every Need</span>
                    </h2>
                    <p className="text-text-muted">
                        We offer a wide range of specialized design services to help you scale your business faster.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card key={index} className="group border-none shadow-sm hover:shadow-brand transition-all duration-300">
                            <CardContent className="p-8">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-text-body text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn more <ExternalLink className="ml-2 w-4 h-4" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    <Card className="flex items-center justify-center p-8 bg-primary text-white border-none shadow-brand">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-4">Need something else?</h3>
                            <p className="text-primary-foreground/80 mb-6 text-sm">
                                We're always open to custom projects and unique challenges.
                            </p>
                            <button className="bg-white text-primary px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all">
                                Let's Talk
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
