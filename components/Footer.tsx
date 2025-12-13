"use client";

import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white">Real Estate</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              India’s trusted real estate platform helping you buy, sell and rent
              verified properties with complete transparency.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-white transition">
                  Explore Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@realestate.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Mon – Sat: 9AM – 7PM</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Real Estate. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Built with trust & transparency
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
