"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    service: z.string({ required_error: "Please select a service." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success("Message sent successfully! We'll get back to you soon.");
        reset();
    }

    return (
        <section className="py-24">
            <div className="container">
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <Badge variant="outline" className="mb-4 border-primary/20 text-primary uppercase tracking-widest px-4 py-1">
                                Get in Touch
                            </Badge>
                            <h1 className="text-4xl font-bold lg:text-6xl mb-6">
                                Let's Start a <span className="text-primary italic">Conversation</span>
                            </h1>
                            <p className="text-text-muted text-lg max-w-md">
                                Have a project in mind? We'd love to hear from you.
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { label: "Email Us", value: "hello@zeroplace.com" },
                                { label: "Call Us", value: "+1 (555) 000-0000" },
                                { label: "Visit Us", value: "123 Design Street, Creative City, NY 10001" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <div className="w-6 h-6 bg-primary rounded-full" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-text-muted">{item.label}</h3>
                                        <p className="font-bold">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 lg:p-12 rounded-[2.5rem] shadow-brand border border-border-subtle">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Full Name</label>
                                    <Input placeholder="John Doe" {...register("name")} className="h-12" />
                                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <Input placeholder="john@example.com" {...register("email")} className="h-12" />
                                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Service Interested In</label>
                                <select
                                    {...register("service")}
                                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="">Select a service</option>
                                    <option value="graphics">Graphics Design</option>
                                    <option value="app">App Design</option>
                                    <option value="web">Web Design</option>
                                    <option value="branding">Brand Identity</option>
                                    <option value="audit">UI/UX Audit</option>
                                </select>
                                {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Tell us about your project</label>
                                <Textarea
                                    placeholder="What's on your mind?..."
                                    className="min-h-[150px] py-4"
                                    {...register("message")}
                                />
                                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                            </div>

                            <Button type="submit" className="w-full h-14 text-lg font-bold rounded-2xl gap-2">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
