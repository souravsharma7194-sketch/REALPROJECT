"use client";

import ChatbotTest from "@/components/ChatbotTest";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function HomePage() {
  


  return (
    <>
      <ChatbotTest/>
      <div className="relative w-full overflow-hidden">

      {/* -------------------------------------- */}
      {/* GLOBAL BACKGROUND VIDEO */}
      {/* -------------------------------------- */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover brightness-75 -z-10 pointer-events-none"
      >
        <source
          src="https://videos.pexels.com/video-files/7578554/7578554-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* -------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------- */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Find Your Dream Home
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mt-3 max-w-2xl">
          Explore the best properties across India with trusted real estate listings.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">Buy</Button>
          <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">Rent</Button>
        </div>
      </section>

      {/* SOFT TRANSITION GRADIENT */}
      <div className="h-32 bg-gradient-to-b from-transparent to-black/40" />

      {/* -------------------------------------- */}
      {/* SERVICES + REVIEWS SECTION */}
      {/* -------------------------------------- */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto w-full grid gap-8 md:grid-cols-2">

          {/* SERVICES CARD */}
          <div className="bg-white/85 sm:bg-white/90 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
              <li>✅ Verified property listings</li>
              <li>✅ Zero brokerage on select homes</li>
              <li>✅ Buy, Sell & Rent properties</li>
              <li>✅ Legal & documentation support</li>
              <li>✅ Trusted agents & builders</li>
            </ul>
            <Button className="mt-6 bg-black hover:bg-gray-800 w-full sm:w-auto">Explore Services</Button>
          </div>

          {/* REVIEWS CARD */}
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
              What Our Users Say
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 italic">
                  “Found my dream home in just 10 days. The listings were genuine and the process was smooth.”
                </p>
                <p className="mt-2 font-semibold text-gray-900">— Rahul Sharma, Mumbai</p>
              </div>
              <div>
                <p className="text-gray-700 italic">
                  “No brokerage and full transparency. Highly recommended for first-time buyers.”
                </p>
                <p className="mt-2 font-semibold text-gray-900">— Anjali Verma, Bengaluru</p>
              </div>
            </div>
            <Button variant="outline" className="mt-6 w-full sm:w-auto">Leave a Review</Button>
          </div>

        </div>
      </section>

      {/* -------------------------------------- */}
      {/* WHY CHOOSE US + CTA SECTION */}
      {/* -------------------------------------- */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto w-full grid gap-10 md:grid-cols-2">

          {/* TRUST STATS */}
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 sm:p-10 shadow-lg sm:shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-green-700">10+</p>
                <p className="text-gray-700 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-green-700">25K+</p>
                <p className="text-gray-700 mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-green-700">50+</p>
                <p className="text-gray-700 mt-1">Cities Covered</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-green-700">100%</p>
                <p className="text-gray-700 mt-1">Verified Listings</p>
              </div>
            </div>
          </div>

          {/* CTA CARD */}
          <div className="bg-black/80 backdrop-blur rounded-2xl p-6 sm:p-10 shadow-lg sm:shadow-xl text-white flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Find Your Perfect Home?</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Join thousands of buyers and renters who trust us to find verified, transparent, and affordable properties across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">Explore Properties</Button>
              <Button variant="outline" className="border-white text-black hover:bg-white hover:text-black w-full sm:w-auto">
                Get Started
              </Button>
            </div>
          </div>

        </div>
      </section>
      </div>

      </>
  )
}



