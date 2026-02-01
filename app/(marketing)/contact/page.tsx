"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

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
                            <div className="badge badge-outline mb-4 border-primary/20 text-primary uppercase tracking-widest px-4 py-1">
                                Get in Touch
                            </div>
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
                                    <input placeholder="John Doe" {...register("name")} className="input input-bordered h-12 w-full" />
                                    {errors.name && <p className="text-sm text-error">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <input placeholder="john@example.com" {...register("email")} className="input input-bordered h-12 w-full" />
                                    {errors.email && <p className="text-sm text-error">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Service Interested In</label>
                                <select
                                    {...register("service")}
                                    className="select select-bordered h-12 w-full"
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
                                <textarea
                                    placeholder="What's on your mind?..."
                                    className="textarea textarea-bordered min-h-[150px] py-4 w-full"
                                    {...register("message")}
                                />
                                {errors.message && <p className="text-sm text-error">{errors.message.message}</p>}
                            </div>

                            <button type="submit" className="btn btn-primary w-full h-14 text-lg font-bold rounded-2xl gap-2">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
