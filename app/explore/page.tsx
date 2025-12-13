"use client";

import React from "react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/data";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-16 bg-gray-100">
      
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Explore Properties
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

    </div>
  );
};

export default Page;
