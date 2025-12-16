"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Section 1: Hero / Intro */}
      <section className="relative h-screen bg-black text-white flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="relative text-center px-6 lg:px-0 max-w-3xl space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold">
            About Our Real Estate Vision
          </h1>
          <p className="text-lg lg:text-xl">
            We’re more than property sellers — we build dynamic spaces
            that fit your lifestyle.
          </p>
        </div>
      </section>

      {/* Section 2: Mission & Story */}
      <section className="relative h-screen bg-gray-100 text-gray-900 flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="/videos/mission.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="relative text-center px-6 lg:px-0 max-w-3xl space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Our Mission & Story
          </h2>

          <p className="text-lg">
            Since day one, we’ve dedicated ourselves to helping people find
            not just a house — but a home. From expert guidance to trusted
            relationships, we stand with you at every step.
          </p>

          <p className="text-lg">
            Our team blends industry experience with personal care, ensuring
            every client finds exactly what they’re looking for.
          </p>
        </div>
      </section>
    </div>
  );
}
