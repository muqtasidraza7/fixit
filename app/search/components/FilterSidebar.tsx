"use client";

import { useState } from "react";
import { SlidersHorizontal, Check } from "lucide-react";

export default function FilterSidebar() {
    const [priceRange, setPriceRange] = useState(500);

    const categories = ["Plumbing", "Electrical", "Cleaning", "Carpentry", "Painting", "Gardening"];
    const ratings = [5, 4, 3, 2, 1];

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-50 pb-4">
                <SlidersHorizontal className="w-5 h-5 text-blue-600" />
                <h2 className="font-bold text-lg text-gray-900">Filters</h2>
            </div>

            <div className="space-y-8">
                {/* Categories */}
                <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Category</h3>
                    <div className="space-y-2.5">
                        {categories.map((cat) => (
                            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input type="checkbox" className="peer w-5 h-5 appearance-none border-2 border-gray-200 rounded-md checked:bg-blue-600 checked:border-blue-600 transition-all" />
                                    <Check className="w-3.5 h-3.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Price Range */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900">Max Price</h3>
                        <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md text-sm">${priceRange}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                        <span>$0</span>
                        <span>$1000+</span>
                    </div>
                </div>

                {/* Rating */}
                <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Rating</h3>
                    <div className="space-y-2">
                        {ratings.map((rating) => (
                            <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input type="checkbox" className="peer w-5 h-5 appearance-none border-2 border-gray-200 rounded-full checked:border-blue-600 checked:border-[5px] transition-all" />
                                </div>
                                <div className="flex items-center gap-1">
                                    {[...Array(rating)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="text-sm text-gray-500 ml-1">& Up</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
