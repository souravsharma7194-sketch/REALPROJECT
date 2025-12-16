"use client";

import React from "react";

export default function ContactPage() {
  return (
    <main className="w-full text-gray-900">

      {/* Section 1: Intro */}
      <section className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-500 text-white flex items-center justify-center px-6 lg:px-0">
        <div className="text-center max-w-3xl space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Get In Touch With Us
          </h1>
          <p className="text-lg lg:text-xl">
            Whether you’re buying, selling or renting — we’re here to help you
            find the perfect property. Fill out the form below or reach out
            directly through the contact details.
          </p>
        </div>
      </section>

      {/* Section 2: Contact Form + Info */}
      <section className="min-h-screen bg-white flex flex-col lg:flex-row items-start lg:items-center justify-center py-16 px-6 lg:px-0 gap-10">

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-gray-50 p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us A Message
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                placeholder="Write your message here..."
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-md hover:bg-emerald-700 transition"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/3 space-y-6">
          <h3 className="text-xl font-bold text-gray-900">
            Contact Details
          </h3>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-2 text-sm">
              📍 <span>123 Estate Avenue, Mumbai, MH</span>
            </p>
            <p className="flex items-center gap-2 text-sm">
              📞 <span>+91 98765 43210</span>
            </p>
            <p className="flex items-center gap-2 text-sm">
              📧 <span>support@realestate.com</span>
            </p>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">
                Follow Us
              </h4>
              <div className="flex gap-4 text-gray-600">
                <a href="#" className="hover:text-green-700 transition">Facebook</a>
                <a href="#" className="hover:text-green-700 transition">Instagram</a>
                <a href="#" className="hover:text-green-700 transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
