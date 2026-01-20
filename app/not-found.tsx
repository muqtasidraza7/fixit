"use client";

import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
    const popularLinks = [
        { href: "/", label: "Home", icon: Home },
        { href: "/search", label: "Find Services", icon: Search },
        { href: "/about", label: "About Us", icon: Home },
        { href: "/contact", label: "Contact", icon: Home },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Illustration */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all border border-gray-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                {/* Popular Links */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                        Popular Pages
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {popularLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all group"
                                >
                                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                                    <span className="font-medium">{link.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50 -z-10" />
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50 -z-10" />
            </div>
        </div>
    );
}
