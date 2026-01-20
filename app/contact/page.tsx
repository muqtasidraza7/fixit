"use client";

import Navigation from "@/app/Components/Navigation";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

            setTimeout(() => setSubmitStatus("idle"), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            content: "support@fixit.com",
            link: "mailto:support@fixit.com",
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+923344077255",
            link: "tel:+923344077255",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            content: "Lahore, Pakistan",
            link: "#",
        },
    ];

    const faqs = [
        {
            question: "How do I book a service?",
            answer: "Simply browse our services, select a provider, and click 'Book Now' to schedule your appointment.",
        },
        {
            question: "Are all service providers verified?",
            answer: "Yes, every professional on our platform undergoes thorough background checks and verification.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept cash, credit/debit cards, and mobile wallet payments.",
        },
        {
            question: "Can I cancel or reschedule a booking?",
            answer: "Yes, you can cancel or reschedule up to 24 hours before your appointment.",
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
                            Get in Touch
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                            Have questions? We're here to help you 24/7
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 -mt-32 mb-20">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <motion.a
                                    key={info.title}
                                    href={info.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 transition-colors">
                                        <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {info.title}
                                    </h3>
                                    <p className="text-gray-600">{info.content}</p>
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Contact Form and Map */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Send us a Message
                            </h2>

                            {submitStatus === "success" && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-green-800 font-medium">
                                        ✓ Message sent successfully! We'll get back to you soon.
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            placeholder="+92 300 1234567"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="booking">Booking Support</option>
                                        <option value="provider">Become a Provider</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>

                        {/* FAQ Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-md"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    Need More Help?
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Check out our comprehensive FAQ page for more answers.
                                </p>
                                <a
                                    href="/faq"
                                    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    View All FAQs
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
