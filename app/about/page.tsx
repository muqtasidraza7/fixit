"use client";

import Navigation from "@/app/Components/Navigation";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp } from "lucide-react";

export default function AboutPage() {
    const stats = [
        { label: "Happy Customers", value: "5,000+", icon: Users },
        { label: "Service Providers", value: "500+", icon: Users },
        { label: "Jobs Completed", value: "15,000+", icon: Award },
        { label: "Customer Satisfaction", value: "4.9/5", icon: TrendingUp },
    ];

    const team = [
        {
            name: "Ehtisham Nasir",
            role: "Founder & CEO",
            image: "/about-image.jpeg",
        },
        {
            name: "Yahya Kamran",
            role: "Head of Operations",
            image: "/about-image-2.jpeg",
        },
    ];

    const values = [
        {
            title: "Trust & Safety",
            description: "Every service provider is thoroughly vetted and background-checked.",
            icon: "🛡️",
        },
        {
            title: "Quality Service",
            description: "We maintain high standards to ensure excellent service delivery.",
            icon: "⭐",
        },
        {
            title: "Fair Pricing",
            description: "Transparent pricing with no hidden fees or surprises.",
            icon: "💰",
        },
        {
            title: "Customer First",
            description: "Your satisfaction is our top priority, always.",
            icon: "❤️",
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
                            About Fixit
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            Connecting you with trusted professionals for all your home and auto repair needs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-600 mb-4">
                                At Fixit, we believe that finding reliable service providers shouldn't be a hassle. Our mission is to make home and auto repairs simple, safe, and affordable for everyone.
                            </p>
                            <p className="text-lg text-gray-600">
                                We carefully vet every professional on our platform, ensuring you get quality service every time. Whether it's a leaky faucet, electrical issue, or car repair, we've got you covered.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000"
                                alt="Team working"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                        <Icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <p className="text-3xl font-bold text-gray-900 mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-600">{stat.label}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-xl text-gray-600">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-gray-600">
                            The people behind Fixit
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="relative mb-4 overflow-hidden rounded-2xl">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-blue-600 font-medium">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Join Our Network of Professionals
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Are you a skilled professional? Join Fixit and grow your business with us.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Get Started Today
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
