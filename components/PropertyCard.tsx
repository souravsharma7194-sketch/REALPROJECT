"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/* 🔹 Property Type (MATCHES data.ts) */
export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;               // ✅ string (₹2.5 Cr, ₹50,000 / month)
  status: "sale" | "rent";     // ✅ status instead of type
  imageUrl: string;
}

/* 🔹 Props Type */
interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
      
      {/* IMAGE */}
      <div className="relative w-full h-56 sm:h-64">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-bold">
          {property.title}
        </h3>

        <p className="text-gray-600 text-sm mt-1">
          {property.location}
        </p>

        <p className="font-semibold text-green-700 mt-2 text-lg">
          {property.price}
        </p>

        {/* BADGE */}
        <span
          className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${
            property.status === "rent"
              ? "bg-blue-100 text-blue-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {property.status === "rent" ? "For Rent" : "For Sale"}
        </span>

        <Button asChild className="w-full mt-4 bg-black hover:bg-gray-800">
          <Link href={`/property/${property.id}`}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
