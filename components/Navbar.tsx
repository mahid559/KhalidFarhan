"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { KF_DATA } from "@/data/content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [learnDropdown, setLearnDropdown] = useState(false);

  const { header, footer } = KF_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-[#F9F6F3] rounded-t-[20px] transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo with Ali Abdaal curved doodle underline */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#1B1624]">
                {header.brand}
              </span>
              <svg
                className="absolute -bottom-1.5 left-0 w-20 text-[#5DCDF1]"
                viewBox="0 0 100 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7.5C25 2.5 75 2 98 8.5"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#1B1624]">
            
            {/* Marketing Services with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-1.5 text-[#54505B] hover:text-[#1B1624] transition-colors py-2"
              >
                <span>Marketing Services</span>
                <ChevronDown className="w-4 h-4 text-[#76737C]" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white border border-[#ECE5E1] rounded-2xl shadow-xl p-3 z-50 animate-in fade-in duration-150">
                  <div className="space-y-1">
                    {footer.servicesCol.links.slice(0, 6).map((service, i) => (
                      <Link
                        key={i}
                        href={service.href}
                        className="block px-3 py-2 rounded-xl hover:bg-[#F9F6F3] text-sm text-[#1B1624] transition-colors"
                        onClick={() => setServicesDropdown(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-[#ECE5E1]">
                      <Link
                        href="/services"
                        className="block px-3 py-1.5 text-xs font-semibold text-[#FD976D] hover:underline"
                        onClick={() => setServicesDropdown(false)}
                      >
                        All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Learn with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLearnDropdown(true)}
              onMouseLeave={() => setLearnDropdown(false)}
            >
              <Link
                href="/businessschool"
                className="flex items-center gap-1.5 text-[#54505B] hover:text-[#1B1624] transition-colors py-2"
              >
                <span>Learn</span>
                <ChevronDown className="w-4 h-4 text-[#76737C]" />
              </Link>

              {learnDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white border border-[#ECE5E1] rounded-2xl shadow-xl p-3 z-50 animate-in fade-in duration-150">
                  <div className="space-y-1">
                    {footer.businessSchoolCol.links.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block px-3 py-2 rounded-xl hover:bg-[#F9F6F3] text-sm text-[#1B1624] transition-colors"
                        onClick={() => setLearnDropdown(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Projects */}
            <Link
              href="/work/case-studies"
              className="text-[#54505B] hover:text-[#1B1624] transition-colors py-2"
            >
              Projects
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="text-[#54505B] hover:text-[#1B1624] transition-colors py-2"
            >
              About
            </Link>
          </nav>

          {/* Right Action: Exact Coral Pill Button matching Ali Abdaal reference screenshot */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/agency/free-marketing-audit"
              className="ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] font-semibold text-sm px-6 py-2.5 rounded-full shadow-2xs hover:shadow-xs transition-all hover:-translate-y-0.5"
            >
              <span>Get a Free Marketing Audit</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#1B1624] hover:bg-black/5"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F9F6F3] border-b border-[#ECE5E1] px-4 pt-4 pb-8 space-y-4">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/services"
              className="text-base font-semibold text-[#1B1624] py-2 border-b border-[#ECE5E1]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marketing Services
            </Link>
            <Link
              href="/businessschool"
              className="text-base font-semibold text-[#1B1624] py-2 border-b border-[#ECE5E1]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="/work/case-studies"
              className="text-base font-semibold text-[#1B1624] py-2 border-b border-[#ECE5E1]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-base font-semibold text-[#1B1624] py-2 border-b border-[#ECE5E1]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>

          <div className="pt-2">
            <Link
              href="/agency/free-marketing-audit"
              className="ali-pill-btn bg-[#1B1624] text-white w-full py-3.5 flex items-center justify-center gap-3 text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="w-6 h-6 rounded-full overflow-hidden bg-white/20 shrink-0">
                <Image
                  src="/assets/khalid-avatar.webp"
                  alt="Khalid Farhan"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </span>
              <span>Get a Free Marketing Audit</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
