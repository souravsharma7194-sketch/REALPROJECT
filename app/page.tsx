"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Mountain, LandPlot } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full">

      {/* -------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------- */}

      <section className="relative h-[80vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
          alt="banner"
          fill
          className="object-cover brightness-75"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
            Find Your Dream Home
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mt-3 max-w-2xl">
            Explore the best properties across India with trusted real estate listings.
          </p>

          <div className="mt-8 flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Buy</Button>
            <Button className="bg-green-600 hover:bg-green-700">Rent</Button>
          </div>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* CATEGORIES SECTION */}
      {/* -------------------------------------- */}

      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <CategoryCard icon={<Home />} label="Houses" />
          <CategoryCard icon={<Building2 />} label="Apartments" />
          <CategoryCard icon={<Mountain />} label="Villas" />
          <CategoryCard icon={<LandPlot />} label="Plots" />
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* FEATURED PROPERTIES */}
      {/* -------------------------------------- */}

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <PropertyCard key={i} />
              ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* FOOTER */}
      {/* -------------------------------------- */}

      <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Real Estate</h3>
            <p className="mt-2 text-sm max-w-sm">
              Making property search easy, fast & reliable.
            </p>
          </div>

          <div className="flex gap-8 mt-6 sm:mt-0">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* -------------------------------------- */
/* CATEGORY CARD COMPONENT */
/* -------------------------------------- */

const CategoryCard = ({ icon, label }: any) => (
  <Card className="h-32 flex flex-col justify-center items-center hover:shadow-lg transition cursor-pointer">
    <CardContent className="flex flex-col justify-center items-center">
      <span className="text-3xl mb-2">{icon}</span>
      <p className="font-medium">{label}</p>
    </CardContent>
  </Card>
);

/* -------------------------------------- */
/* PROPERTY CARD COMPONENT */
/* -------------------------------------- */

const PropertyCard = () => (
  <Card className="overflow-hidden hover:shadow-xl transition cursor-pointer">
    <Image
      src="https://images.unsplash.com/photo-1613977257363-707ba9348227"
      alt="property"
      width={400}
      height={300}
      className="w-full h-56 object-cover"
    />

    <CardContent className="p-4">
      <h3 className="font-bold text-lg">Luxury Family House</h3>
      <p className="text-gray-600 text-sm mt-1">Mumbai, India</p>
      <p className="font-semibold text-green-700 mt-3 text-lg">₹1.2 Cr</p>

      <Button asChild className="w-full mt-4 bg-black hover:bg-gray-800">
        <Link href="/property/1">View Details</Link>
      </Button>
    </CardContent>
  </Card>
);

