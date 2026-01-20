"use client";

import { Star, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServiceProps {
    id: string;
    name: string;
    category: string;
    rating: number;
    reviews: number;
    price: number;
    image: string;
    location: string;
}

export default function ServiceCard({ service }: { service: ServiceProps }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-gray-800">{service.rating}</span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 mb-2 inline-block">
                            {service.category}
                        </span>
                        <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{service.name}</h3>
                    </div>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {service.location}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Starting at</span>
                        <span className="font-bold text-blue-600 text-lg">${service.price}</span>
                    </div>

                    <Link
                        href={`/services/${service.id}`}
                        className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
                    >
                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
