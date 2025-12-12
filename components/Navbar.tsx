"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";



const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/explore" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (

   <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-14">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-700">
              Real Estate
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">

            {/* Normal Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-green-800 font-medium transition duration-200"
              >
                {link.name}
              </Link>
            ))}

            {/* 🔥 Added Shadcn Dropdown (Desktop Only) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700">
                  More
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem>
                  <Link href="/terms">Terms & Conditions</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href="/privacy">Privacy Policy</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link href="/help">Help Center</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Buttons */}
            <Button asChild size="sm" variant="outline">
              <Link href="/login">Login</Link>
            </Button>

            <Button asChild size="sm" variant="default">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (UNCHANGED) */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 font-medium hover:text-green-800 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="pt-2 border-t border-gray-200 flex space-x-2">
            <Button asChild size="sm" variant="outline">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </Button>

            <Button asChild size="sm" variant="default">
              <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                Sign up
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>




);
};

export default Navbar;








    /*
    <nav className="w-full bg-white shadow-md sticky top-0 z-0 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 ">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-700">
              Real Estate
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-green-800 font-medium transition duration-200"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/login"
              className="px-2 py-2 text-xs font-semibold rounded-2xl text-blue-700 border border-blue-300 hover:bg-blue-50 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-2 py-2 text-xs font-semibold rounded-2xl text-green-700 border border-green-300 hover:bg-green-50 transition "
            >
              Sign up
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 space-y-2">
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/login"
                className="px-2 py-2 text-xs font-semibold rounded-2xl text-blue-700 border border-blue-300 hover:bg-blue-50 transition"
              >
                Login
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/signup"
                className="px-2 py-2 text-xs font-semibold rounded-2xl text-green-700 border border-green-300 hover:bg-green-50 transition"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav> */

  