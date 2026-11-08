"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Award } from "lucide-react";
import {
  LinkedinIcon,
  YoutubeIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
} from "@/components/Icons";
import { KF_DATA } from "@/data/content";

export default function Footer() {
  const { footer } = KF_DATA;

  return (
    <footer className="bg-[#F9F6F3] border-t border-[#ECE5E1] pt-16 pb-12 text-[#1B1624]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid matching KF exact footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#ECE5E1]">
          
          {/* Column 1: Agency Brand & Details (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1B1624]">
                Khalid Farhan
              </span>
            </Link>

            <p className="text-sm text-[#54505B] leading-relaxed max-w-sm font-sans">
              {footer.description}
            </p>

            {/* Locations */}
            <div className="space-y-3 text-xs text-[#54505B]">
              <div>
                <p className="font-bold text-[#1B1624] mb-0.5">Dublin, Ireland</p>
                <p>Dublin, Ireland</p>
                <a
                  href={`mailto:${footer.email}`}
                  className="text-[#FD976D] hover:underline font-semibold"
                >
                  {footer.email}
                </a>
              </div>

              <div>
                <p className="font-bold text-[#1B1624] mb-0.5">Dhaka, Bangladesh</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            {/* Partner Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {footer.partnerBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#ECE5E1] px-3 py-1 rounded-full text-[11px] font-bold text-[#1B1624] shadow-2xs hover:border-[#FD976D] transition-colors"
                >
                  <Award className="w-3 h-3 text-[#5DCDF1]" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Columns (Cols 5-12) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Column 2: Services */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#76737C]">
                {footer.servicesCol.title}
              </div>
              <ul className="space-y-2.5 text-sm text-[#54505B]">
                {footer.servicesCol.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="hover:text-[#1B1624] hover:underline underline-offset-4 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Business School */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#76737C]">
                {footer.businessSchoolCol.title}
              </div>
              <ul className="space-y-2.5 text-sm text-[#54505B]">
                {footer.businessSchoolCol.links.map((link, idx) => (
                  <li key={idx}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#1B1624] hover:underline underline-offset-4 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="hover:text-[#1B1624] hover:underline underline-offset-4 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Resources & Company */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#76737C]">
                {footer.resourcesCol.title}
              </div>
              <ul className="space-y-2.5 text-sm text-[#54505B]">
                {footer.resourcesCol.links.map((link, idx) => (
                  <li key={idx}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#1B1624] hover:underline underline-offset-4 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="hover:text-[#1B1624] hover:underline underline-offset-4 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links, Social Icons */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#76737C]">
            {footer.copyright}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#76737C]">
            {footer.legalLinks.map((legal, i) => (
              <Link
                key={i}
                href={legal.href}
                className="hover:text-[#1B1624] transition-colors"
              >
                {legal.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/khalidf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white border border-[#ECE5E1] flex items-center justify-center text-[#54505B] hover:text-[#1B1624] hover:border-[#1B1624] hover:-translate-y-0.5 transition-all"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCb-d2dCbEt_T-d3qf3oMICw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-white border border-[#ECE5E1] flex items-center justify-center text-[#54505B] hover:text-[#1B1624] hover:border-[#1B1624] hover:-translate-y-0.5 transition-all"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com/iamkhalidfarhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white border border-[#ECE5E1] flex items-center justify-center text-[#54505B] hover:text-[#1B1624] hover:border-[#1B1624] hover:-translate-y-0.5 transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://x.com/iamkhalidfarhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-8 h-8 rounded-full bg-white border border-[#ECE5E1] flex items-center justify-center text-[#54505B] hover:text-[#1B1624] hover:border-[#1B1624] hover:-translate-y-0.5 transition-all"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/chandlerbingforlife"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white border border-[#ECE5E1] flex items-center justify-center text-[#54505B] hover:text-[#1B1624] hover:border-[#1B1624] hover:-translate-y-0.5 transition-all"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
