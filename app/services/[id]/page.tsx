"use client";

import Navigation from "@/app/Components/Navigation";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Shield, Phone, Mail, Calendar, ArrowRight } from "lucide-react";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";

// Mock data - in a real app, this would come from an API
const getServiceData = (id: string) => {
    const services: Record<string, any> = {
        "1": {
            id: "1",
            name: "Mike's Plumbing Co.",
            category: "Plumbing",
            rating: 4.8,
            reviews: 124,
            price: 80,
            image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=1000",
            location: "Downtown",
            phone: "+92 300 1234567",
            email: "mike@plumbing.com",
            description: "Professional plumbing services with over 15 years of experience. We handle everything from leaky faucets to complete bathroom renovations.",
            services: [
                "Leak Repairs",
                "Pipe Installation",
                "Drain Cleaning",
                "Water Heater Service",
                "Bathroom Remodeling",
                "Emergency Services"
            ],
            availability: "Mon-Sat, 8AM-6PM",
            responseTime: "< 2 hours",
            verified: true,
            jobsCompleted: 450,
            gallery: [
                "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=500",
                "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=500",
                "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=500",
            ]
        },
        "2": {
            id: "2",
            name: "Spark Electricians",
            category: "Electrical",
            rating: 4.9,
            reviews: 89,
            price: 95,
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
            location: "Westside",
            phone: "+92 300 7654321",
            email: "info@sparkelectricians.com",
            description: "Licensed electricians providing safe and reliable electrical services for residential and commercial properties.",
            services: [
                "Wiring & Rewiring",
                "Circuit Breaker Installation",
                "Lighting Installation",
                "Electrical Inspections",
                "Generator Installation",
                "24/7 Emergency Service"
            ],
            availability: "24/7",
            responseTime: "< 1 hour",
            verified: true,
            jobsCompleted: 320,
            gallery: [
                "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=500",
                "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=500",
                "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=500",
            ]
        }
    };

    return services[id] || services["1"];
};

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const service = getServiceData(id);

    const customerReviews = [
        {
            name: "Sarah Ahmed",
            rating: 5,
            date: "2 days ago",
            comment: "Excellent service! Very professional and completed the job quickly.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
        },
        {
            name: "Ali Hassan",
            rating: 5,
            date: "1 week ago",
            comment: "Highly recommend! Fair pricing and quality work.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
        },
        {
            name: "Fatima Khan",
            rating: 4,
            date: "2 weeks ago",
            comment: "Good service, arrived on time and fixed the issue.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <div className="pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        href="/search"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        Back to Search
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Provider Header */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="relative w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0">
                                        <Image
                                            src={service.image}
                                            alt={service.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                                    {service.name}
                                                </h1>
                                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                                                    {service.category}
                                                </span>
                                            </div>
                                            {service.verified && (
                                                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full">
                                                    <Shield className="w-4 h-4" />
                                                    <span className="text-sm font-medium">Verified</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                <span className="font-semibold text-gray-900">{service.rating}</span>
                                                <span>({service.reviews} reviews)</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {service.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {service.responseTime} response
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <div>
                                                <p className="text-sm text-gray-500">Starting at</p>
                                                <p className="text-2xl font-bold text-blue-600">${service.price}/hr</p>
                                            </div>
                                            <div className="border-l border-gray-300 pl-4">
                                                <p className="text-sm text-gray-500">Jobs Completed</p>
                                                <p className="text-xl font-bold text-gray-900">{service.jobsCompleted}+</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Services Offered */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Services Offered
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {service.services.map((item: string, index: number) => (
                                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Gallery */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Work Gallery
                                </h2>
                                <div className="grid grid-cols-3 gap-4">
                                    {service.gallery.map((img: string, index: number) => (
                                        <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                                            <Image
                                                src={img}
                                                alt={`Work ${index + 1}`}
                                                fill
                                                className="object-cover hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Reviews */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Customer Reviews
                                </h2>
                                <div className="space-y-6">
                                    {customerReviews.map((review, index) => (
                                        <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                                            <div className="flex items-start gap-4">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                                    <Image
                                                        src={review.avatar}
                                                        alt={review.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="font-bold text-gray-900">{review.name}</h3>
                                                        <span className="text-sm text-gray-500">{review.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 mb-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${i < review.rating
                                                                    ? "text-yellow-500 fill-yellow-500"
                                                                    : "text-gray-300"
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600">{review.comment}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Booking Card */}
                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        Book This Service
                                    </h3>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Clock className="w-5 h-5 text-blue-600" />
                                            <div>
                                                <p className="text-sm text-gray-500">Availability</p>
                                                <p className="font-medium text-gray-900">{service.availability}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Calendar className="w-5 h-5 text-blue-600" />
                                            <div>
                                                <p className="text-sm text-gray-500">Response Time</p>
                                                <p className="font-medium text-gray-900">{service.responseTime}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        href={`/booking?service=${service.id}`}
                                        className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all text-center shadow-lg"
                                    >
                                        Book Now
                                    </Link>
                                </div>

                                {/* Contact Card */}
                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                                        Contact Information
                                    </h3>
                                    <div className="space-y-4">
                                        <a
                                            href={`tel:${service.phone}`}
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                                        >
                                            <Phone className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                                            <span className="text-gray-700 group-hover:text-blue-600">{service.phone}</span>
                                        </a>
                                        <a
                                            href={`mailto:${service.email}`}
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                                        >
                                            <Mail className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                                            <span className="text-gray-700 group-hover:text-blue-600">{service.email}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
