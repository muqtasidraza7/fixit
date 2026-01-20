"use client";

import Navigation from "@/app/Components/Navigation";
import Footer from "@/app/Components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, MapPin, FileText, CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function BookingPage() {
    const searchParams = useSearchParams();
    const serviceId = searchParams.get("service");

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        service: "",
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        details: "",
    });

    const steps = [
        { number: 1, title: "Service", icon: FileText },
        { number: 2, title: "Date & Time", icon: Calendar },
        { number: 3, title: "Your Info", icon: User },
        { number: 4, title: "Details", icon: MapPin },
        { number: 5, title: "Confirm", icon: CheckCircle },
    ];

    const services = [
        "Plumbing",
        "Electrical",
        "Gardening",
        "Cleaning",
        "General Repair",
        "Painting",
        "Carpentry",
        "AC Repair",
    ];

    const timeSlots = [
        "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
        "4:00 PM", "5:00 PM", "6:00 PM"
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        if (currentStep < 5) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        // In a real app, this would submit to an API
        console.log("Booking submitted:", formData);
        setCurrentStep(5);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <div className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Book a Service
                        </h1>
                        <p className="text-lg text-gray-600">
                            Complete the form below to schedule your service
                        </p>
                    </div>

                    {/* Progress Steps */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                const isActive = currentStep === step.number;
                                const isCompleted = currentStep > step.number;

                                return (
                                    <div key={step.number} className="flex-1 relative">
                                        <div className="flex flex-col items-center">
                                            <div
                                                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${isActive
                                                    ? "bg-blue-600 border-blue-600 text-white"
                                                    : isCompleted
                                                        ? "bg-green-600 border-green-600 text-white"
                                                        : "bg-white border-gray-300 text-gray-400"
                                                    }`}
                                            >
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <p className={`mt-2 text-sm font-medium hidden md:block ${isActive ? "text-blue-600" : "text-gray-500"
                                                }`}>
                                                {step.title}
                                            </p>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div
                                                className={`absolute top-6 left-1/2 w-full h-0.5 -z-10 ${isCompleted ? "bg-green-600" : "bg-gray-300"
                                                    }`}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        {/* Step 1: Service Selection */}
                        {currentStep === 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Select a Service
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {services.map((service) => (
                                        <button
                                            key={service}
                                            onClick={() => setFormData({ ...formData, service })}
                                            className={`p-4 rounded-lg border-2 text-left transition-all ${formData.service === service
                                                ? "border-blue-600 bg-blue-50"
                                                : "border-gray-200 hover:border-blue-300"
                                                }`}
                                        >
                                            <p className="font-semibold text-gray-900">{service}</p>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Date & Time */}
                        {currentStep === 2 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Choose Date & Time
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Preferred Time
                                        </label>
                                        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                                            {timeSlots.map((time) => (
                                                <button
                                                    key={time}
                                                    onClick={() => setFormData({ ...formData, time })}
                                                    className={`p-3 rounded-lg border-2 text-sm transition-all ${formData.time === time
                                                        ? "border-blue-600 bg-blue-50 text-blue-600"
                                                        : "border-gray-200 hover:border-blue-300"
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Contact Information */}
                        {currentStep === 3 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Your Information
                                </h2>
                                <div className="space-y-4">
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="+92 300 1234567"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 4: Additional Details */}
                        {currentStep === 4 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Additional Details
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Address *
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="123 Main Street, Lahore"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Special Requests or Details
                                        </label>
                                        <textarea
                                            name="details"
                                            value={formData.details}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                                            placeholder="Please provide any additional information about the service you need..."
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 5: Confirmation */}
                        {currentStep === 5 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-12 h-12 text-green-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Booking Confirmed!
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Your service has been successfully booked. We'll send you a confirmation email shortly.
                                </p>
                                <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                                    <h3 className="font-bold text-gray-900 mb-4">Booking Summary</h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Service:</span>
                                            <span className="font-medium text-gray-900">{formData.service}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Date:</span>
                                            <span className="font-medium text-gray-900">{formData.date}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Time:</span>
                                            <span className="font-medium text-gray-900">{formData.time}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Location:</span>
                                            <span className="font-medium text-gray-900">{formData.address}</span>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="/"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                                >
                                    Back to Home
                                </a>
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        {currentStep < 5 && (
                            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                                <button
                                    onClick={handleBack}
                                    disabled={currentStep === 1}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={currentStep === 4 ? handleSubmit : handleNext}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                                >
                                    {currentStep === 4 ? "Confirm Booking" : "Next"}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
