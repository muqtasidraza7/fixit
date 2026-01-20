"use client";

import Navigation from "@/app/Components/Navigation";
import Footer from "@/app/Components/Footer";
import ServiceCard from "./components/ServiceCard";
import FilterSidebar from "./components/FilterSidebar";
import { Search } from "lucide-react";

export default function SearchPage() {
    const services = [
        {
            id: "1",
            name: "Mike's Plumbing Co.",
            category: "Plumbing",
            rating: 4.8,
            reviews: 124,
            price: 80,
            image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=1000",
            location: "Downtown"
        },
        {
            id: "2",
            name: "Spark Electricians",
            category: "Electrical",
            rating: 4.9,
            reviews: 89,
            price: 95,
            image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000",
            location: "Westside"
        },
        {
            id: "3",
            name: "Green Garden Care",
            category: "Gardening",
            rating: 4.7,
            reviews: 56,
            price: 60,
            image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&q=80&w=1000",
            location: "Suburbs"
        },
        {
            id: "4",
            name: "Pro Cleaners",
            category: "Cleaning",
            rating: 4.5,
            reviews: 210,
            price: 45,
            image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=1000",
            location: "Citywide"
        },
        {
            id: "5",
            name: "Fixit Fast Repairs",
            category: "General Repair",
            rating: 4.6,
            reviews: 78,
            price: 70,
            image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=1000",
            location: "North Hills"
        },
        {
            id: "6",
            name: "Master Painters",
            category: "Painting",
            rating: 4.9,
            reviews: 156,
            price: 120,
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000",
            location: "East End"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navigation />

            {/* Header */}
            <div className="bg-white border-b border-gray-200 pt-28 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Expert</h1>

                    <div className="relative max-w-2xl">
                        <input
                            type="text"
                            placeholder="Search for services (e.g., 'Leaky faucet', 'House cleaning')..."
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm text-gray-600"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="lg:w-1/4">
                        <FilterSidebar />
                    </aside>

                    {/* Grid */}
                    <main className="lg:w-3/4">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-500"><span className="font-semibold text-gray-900">{services.length}</span> results found</p>
                            <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Recommended</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Highest Rated</option>
                            </select>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
