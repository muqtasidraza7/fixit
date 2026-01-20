"use client";

import Navigation from "@/app/Components/Navigation";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import { Search, UserCheck, Calendar, CheckCircle, Star, Shield } from "lucide-react";

export default function HowItWorksPage() {
    const steps = [
        {
            number: "01",
            title: "Browse Services",
            description: "Explore our wide range of services or search for exactly what you need. From plumbing to electrical work, we've got you covered.",
            icon: Search,
            color: "from-blue-500 to-cyan-500",
            bgColor: "from-blue-50 to-cyan-50",
        },
        {
            number: "02",
            title: "Choose Your Pro",
            description: "Review profiles, ratings, and reviews from real customers. Select the professional that best fits your needs and budget.",
            icon: UserCheck,
            color: "from-purple-500 to-pink-500",
            bgColor: "from-purple-50 to-pink-50",
        },
        {
            number: "03",
            title: "Book & Schedule",
            description: "Pick a convenient date and time. Provide details about your service needs and any special requirements.",
            icon: Calendar,
            color: "from-emerald-500 to-teal-500",
            bgColor: "from-emerald-50 to-teal-50",
        },
        {
            number: "04",
            title: "Get It Done",
            description: "Your professional arrives on time, completes the job, and you pay only when you're satisfied with the work.",
            icon: CheckCircle,
            color: "from-amber-500 to-orange-500",
            bgColor: "from-amber-50 to-orange-50",
        },
    ];

    const features = [
        {
            title: "Verified Professionals",
            description: "Every service provider undergoes thorough background checks and skill verification.",
            icon: Shield,
        },
        {
            title: "Quality Guarantee",
            description: "We ensure high-quality service delivery with our satisfaction guarantee policy.",
            icon: Star,
        },
        {
            title: "Transparent Pricing",
            description: "Know the cost upfront with no hidden fees or surprise charges.",
            icon: CheckCircle,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            How Fixit Works
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            Getting professional help has never been easier. Here's how we connect you with trusted service providers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:grid-flow-dense"
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={isEven ? "md:order-1" : "md:order-2"}>
                                        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-bold text-sm mb-4">
                                            Step {step.number}
                                        </div>
                                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                            {step.title}
                                        </h2>
                                        <p className="text-lg text-gray-600 mb-6">
                                            {step.description}
                                        </p>
                                        {index === steps.length - 1 && (
                                            <a
                                                href="/booking"
                                                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                                            >
                                                Get Started Now
                                            </a>
                                        )}
                                    </div>

                                    {/* Visual */}
                                    <div className={isEven ? "md:order-2" : "md:order-1"}>
                                        <div className={`relative p-12 bg-gradient-to-br ${step.bgColor} rounded-3xl`}>
                                            <div className="flex items-center justify-center">
                                                <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl`}>
                                                    <Icon className="w-16 h-16 text-white" />
                                                </div>
                                            </div>
                                            <div className="absolute top-4 right-4 text-8xl font-bold text-white/10">
                                                {step.number}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Fixit?
                        </h2>
                        <p className="text-xl text-gray-600">
                            We're committed to providing the best service experience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                        <Icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Book your first service today and experience the Fixit difference.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/booking"
                            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Book a Service
                        </a>
                        <a
                            href="/search"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
                        >
                            Browse Services
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
