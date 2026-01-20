"use client";

import Navigation from "@/app/Components/Navigation";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import { Check, Wrench, Plug, Droplet, Brush, Hammer, Snowflake } from "lucide-react";

export default function PricingPage() {
    const pricingTiers = [
        {
            name: "Pay As You Go",
            description: "Perfect for occasional needs",
            price: "No subscription",
            features: [
                "Access to all services",
                "Pay only for what you use",
                "Verified professionals",
                "Customer support",
                "Secure payments",
            ],
            cta: "Book a Service",
            highlighted: false,
        },
        {
            name: "Fixit Plus",
            description: "Best for regular maintenance",
            price: "$29/month",
            features: [
                "Everything in Pay As You Go",
                "10% discount on all services",
                "Priority booking",
                "24/7 premium support",
                "Free service call-outs",
                "Quarterly maintenance checks",
            ],
            cta: "Coming Soon",
            highlighted: true,
        },
        {
            name: "Business",
            description: "For businesses and property managers",
            price: "Custom",
            features: [
                "Everything in Fixit Plus",
                "Dedicated account manager",
                "Custom service packages",
                "Bulk booking discounts",
                "Priority emergency response",
                "Monthly reports",
            ],
            cta: "Contact Sales",
            highlighted: false,
        },
    ];

    const servicePricing = [
        {
            name: "Plumbing",
            icon: Droplet,
            startingPrice: "$80",
            services: ["Leak repairs", "Pipe installation", "Drain cleaning", "Water heater service"],
            color: "from-blue-500 to-cyan-500",
        },
        {
            name: "Electrical",
            icon: Plug,
            startingPrice: "$95",
            services: ["Wiring & rewiring", "Circuit breaker installation", "Lighting installation", "Electrical inspections"],
            color: "from-yellow-500 to-amber-500",
        },
        {
            name: "Mechanic",
            icon: Wrench,
            startingPrice: "$100",
            services: ["Car diagnostics", "Oil changes", "Brake repairs", "Engine maintenance"],
            color: "from-orange-500 to-red-500",
        },
        {
            name: "Cleaning",
            icon: Brush,
            startingPrice: "$45",
            services: ["Home cleaning", "Deep cleaning", "Office cleaning", "Move-in/out cleaning"],
            color: "from-purple-500 to-pink-500",
        },
        {
            name: "Carpentry",
            icon: Hammer,
            startingPrice: "$70",
            services: ["Furniture repair", "Custom woodwork", "Door & window installation", "Cabinet making"],
            color: "from-emerald-500 to-teal-500",
        },
        {
            name: "AC Technician",
            icon: Snowflake,
            startingPrice: "$85",
            services: ["AC repair", "Gas refill", "Maintenance", "Installation"],
            color: "from-indigo-500 to-blue-500",
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
                            Transparent Pricing
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            No hidden fees. No surprises. Just honest pricing for quality service.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Choose Your Plan
                        </h2>
                        <p className="text-xl text-gray-600">
                            Flexible options to fit your needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, index) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative bg-white rounded-2xl p-8 ${tier.highlighted
                                    ? "ring-2 ring-blue-600 shadow-2xl scale-105"
                                    : "shadow-lg"
                                    }`}
                            >
                                {tier.highlighted && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {tier.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{tier.description}</p>
                                    <div className="text-4xl font-bold text-gray-900">
                                        {tier.price}
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={tier.cta === "Book a Service" ? "/booking" : "/contact"}
                                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all ${tier.highlighted
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg"
                                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                        }`}
                                >
                                    {tier.cta}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Pricing */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Service Pricing
                        </h2>
                        <p className="text-xl text-gray-600">
                            Starting prices for our most popular services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicePricing.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl mb-4`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {service.name}
                                    </h3>
                                    <div className="text-3xl font-bold text-gray-900 mb-4">
                                        {service.startingPrice}
                                        <span className="text-sm font-normal text-gray-600">/hr</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {service.services.map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
                        <p className="text-center text-gray-700">
                            <strong>Note:</strong> Prices may vary based on job complexity, location, and time requirements.
                            Final pricing will be confirmed before service begins.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Pricing FAQs
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Are there any hidden fees?",
                                a: "No, we believe in complete transparency. The price you see is what you pay. Any additional costs will be discussed and approved by you before work begins."
                            },
                            {
                                q: "When do I pay?",
                                a: "Payment is typically made after the service is completed to your satisfaction. Some large jobs may require a deposit, which will be clearly communicated beforehand."
                            },
                            {
                                q: "What payment methods do you accept?",
                                a: "We accept cash, credit/debit cards, and mobile wallet payments for your convenience."
                            },
                            {
                                q: "Can I get a quote before booking?",
                                a: "Yes! You can contact service providers directly through our platform to get detailed quotes for your specific needs."
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-xl p-6 shadow-md"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="/faq"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                        >
                            View All FAQs
                        </a>
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
                        Book your service today and experience quality work at fair prices.
                    </p>
                    <a
                        href="/booking"
                        className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Book Now
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
