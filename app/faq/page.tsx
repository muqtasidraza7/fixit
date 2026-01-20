"use client";

import Navigation from "@/app/Components/Navigation";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqCategories = [
        {
            category: "General",
            questions: [
                {
                    question: "What is Fixit?",
                    answer: "Fixit is a platform that connects customers with verified local service professionals for home repairs, maintenance, and installations. We make it easy to find trusted experts for all your service needs."
                },
                {
                    question: "How does Fixit work?",
                    answer: "Simply browse our services, select a provider based on ratings and reviews, and book an appointment. The service provider will contact you to confirm the details and complete the job."
                },
                {
                    question: "Is Fixit available in my area?",
                    answer: "We currently operate in major cities across Pakistan. Check our service area page or enter your location to see if we're available in your area."
                }
            ]
        },
        {
            category: "Booking & Pricing",
            questions: [
                {
                    question: "How do I book a service?",
                    answer: "Browse our services, select a provider, click 'Book Now', fill in your details including preferred date and time, and submit. You'll receive a confirmation email with all the details."
                },
                {
                    question: "Can I cancel or reschedule a booking?",
                    answer: "Yes, you can cancel or reschedule up to 24 hours before your appointment without any charges. Contact our support team or the service provider directly."
                },
                {
                    question: "How is pricing determined?",
                    answer: "Each service provider sets their own rates. The starting price is displayed on their profile. Final pricing may vary based on the complexity and duration of the job."
                },
                {
                    question: "Are there any hidden fees?",
                    answer: "No, we believe in transparent pricing. The price you see is what you pay. Any additional costs will be discussed with you before the work begins."
                }
            ]
        },
        {
            category: "Service Providers",
            questions: [
                {
                    question: "Are all service providers verified?",
                    answer: "Yes, every professional on our platform undergoes thorough background checks, verification of credentials, and skill assessments before being approved."
                },
                {
                    question: "How do I choose the right service provider?",
                    answer: "Check their ratings, read customer reviews, view their work gallery, and compare prices. You can also contact them directly to discuss your specific needs."
                },
                {
                    question: "What if I'm not satisfied with the service?",
                    answer: "Customer satisfaction is our priority. If you're not happy with the service, contact us within 24 hours and we'll work to resolve the issue or arrange a re-service."
                }
            ]
        },
        {
            category: "Payments",
            questions: [
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept cash, credit/debit cards, and mobile wallet payments. Payment is typically made after the service is completed to your satisfaction."
                },
                {
                    question: "When do I need to pay?",
                    answer: "Payment is usually made after the service is completed. Some providers may require a deposit for large jobs, which will be clearly communicated beforehand."
                },
                {
                    question: "Is my payment information secure?",
                    answer: "Yes, all online payments are processed through secure, encrypted payment gateways. We never store your complete payment information."
                }
            ]
        },
        {
            category: "For Service Providers",
            questions: [
                {
                    question: "How can I join as a service provider?",
                    answer: "Click on 'Join as Worker' in the navigation menu, fill out the application form with your details and credentials, and our team will review your application within 2-3 business days."
                },
                {
                    question: "What are the requirements to join?",
                    answer: "You need to be a skilled professional in your field, have valid identification, provide proof of experience or certifications, and pass our background check."
                },
                {
                    question: "How do I get paid?",
                    answer: "Payments are transferred to your registered bank account or mobile wallet weekly. You can track your earnings through your provider dashboard."
                }
            ]
        }
    ];

    const allQuestions = faqCategories.flatMap((cat, catIndex) =>
        cat.questions.map((q, qIndex) => ({
            ...q,
            category: cat.category,
            globalIndex: catIndex * 100 + qIndex
        }))
    );

    const filteredQuestions = searchQuery
        ? allQuestions.filter(
            (q) =>
                q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : allQuestions;

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
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                            Find answers to common questions about our services
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for answers..."
                                className="w-full px-6 py-4 pl-14 rounded-xl text-gray-900 focus:ring-4 focus:ring-blue-300 outline-none shadow-lg"
                            />
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {searchQuery ? (
                        // Search Results
                        <div className="space-y-4">
                            <p className="text-gray-600 mb-6">
                                Found {filteredQuestions.length} result{filteredQuestions.length !== 1 ? 's' : ''}
                            </p>
                            {filteredQuestions.map((item) => (
                                <motion.div
                                    key={item.globalIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white rounded-xl shadow-md overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === item.globalIndex ? null : item.globalIndex)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                    >
                                        <div>
                                            <span className="text-xs font-medium text-blue-600 mb-1 block">
                                                {item.category}
                                            </span>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {item.question}
                                            </h3>
                                        </div>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${openIndex === item.globalIndex ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {openIndex === item.globalIndex && (
                                        <div className="px-6 pb-5 text-gray-600">
                                            {item.answer}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        // Categorized View
                        <div className="space-y-12">
                            {faqCategories.map((category, catIndex) => (
                                <div key={category.category}>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                        {category.category}
                                    </h2>
                                    <div className="space-y-4">
                                        {category.questions.map((item, qIndex) => {
                                            const globalIndex = catIndex * 100 + qIndex;
                                            return (
                                                <motion.div
                                                    key={globalIndex}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: qIndex * 0.05 }}
                                                    className="bg-white rounded-xl shadow-md overflow-hidden"
                                                >
                                                    <button
                                                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                                                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                                    >
                                                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                                            {item.question}
                                                        </h3>
                                                        <ChevronDown
                                                            className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openIndex === globalIndex ? "rotate-180" : ""
                                                                }`}
                                                        />
                                                    </button>
                                                    {openIndex === globalIndex && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="px-6 pb-5 text-gray-600"
                                                        >
                                                            {item.answer}
                                                        </motion.div>
                                                    )}
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Still Have Questions */}
                    <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            Still have questions?
                        </h2>
                        <p className="text-blue-100 mb-6">
                            Can't find the answer you're looking for? Our support team is here to help.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
