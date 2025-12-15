"use client";

import { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

// Property type
export interface PropertyData {
  id: number; // Firestore ID as number
  title: string;
  location: string;
  price: string;
  status: "sale" | "rent";
  imageUrl: string;
  description: string;
}

const Page: React.FC = () => {
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const snap = await getDocs(collection(db, "properties"));

        const data: PropertyData[] = snap.docs.map((doc) => {
          const d = doc.data();
          return {
            id: Number(d.id), // 🔹 Ensure id is a number
            title: d.title?.trim() || "",
            location: d.location?.trim() || "",
            price: d.price?.trim() || "",
            status: d.status as "sale" | "rent",
            imageUrl: d.imageUrl?.trim() || "",
            description: d.description?.trim() || "",
          };
        });

        setProperties(data);
        console.log("Fetched properties:", data); // debug log
      } catch (err) {
        console.error("FETCH ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <div className="text-center mt-20 text-xl">Loading properties...</div>;
  if (!properties.length) return <div className="text-center mt-20 text-xl">No properties found</div>;

  return (
    <div className="min-h-screen px-4 py-16 bg-gray-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Explore Properties</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Page;
