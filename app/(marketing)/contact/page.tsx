"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    service: z.string({ required_error: "Please select a service." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // This will eventually call the API route
        console.log(values);
        toast.success("Message sent successfully! We'll get back to you soon.");
        form.reset();
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
                                { icon: Mail, label: "Email Us", value: "hello@zeroplace.com" },
                                { icon: Phone, label: "Call Us", value: "+1 (555) 000-0000" },
                                { icon: MapPin, label: "Visit Us", value: "123 Design Street, Creative City, NY 10001" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <item.icon className="w-6 h-6" />
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
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} className="h-12" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john@example.com" {...field} className="h-12" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="service"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Service Interested In</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="h-12">
                                                        <SelectValue placeholder="Select a service" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="graphics">Graphics Design</SelectItem>
                                                    <SelectItem value="app">App Design</SelectItem>
                                                    <SelectItem value="web">Web Design</SelectItem>
                                                    <SelectItem value="branding">Brand Identity</SelectItem>
                                                    <SelectItem value="audit">UI/UX Audit</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tell us about your project</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="What's on your mind?..."
                                                    className="min-h-[150px] py-4"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full h-14 text-lg font-bold rounded-2xl gap-2">
                                    Send Message <Send className="w-5 h-5" />
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}
