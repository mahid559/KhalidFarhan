"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { YoutubeIcon, LinkedinIcon } from "@/components/Icons";
import { SITE_DATA } from "@/data/content";

export default function ContactPage() {
  const { profile } = SITE_DATA;
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F3]">
      <Navbar />
      <main className="flex-grow py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-white border border-[#ECE5E1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#76737C]">
              Let's Talk
            </div>
            <h1 className="heading-xl text-4xl sm:text-5xl lg:text-6xl text-[#1B1624] tracking-tight">
              Let's start a conversation.
            </h1>
            <p className="text-lg text-[#54505B] leading-relaxed">
              Whether you need full-stack agency marketing, a strategic SEO audit, or a high-converting growth system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#ECE5E1] rounded-[28px] p-8 space-y-6 shadow-xs">
                
                <div className="space-y-4">
                  <h2 className="heading-lg text-2xl text-[#1B1624]">
                    Direct Details
                  </h2>
                  <p className="text-sm text-[#54505B] leading-relaxed">
                    Based in Dublin, Ireland. Working with ambitious founders and marketing leaders globally.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FD976D] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="block text-[#1B1624]">Location</strong>
                      <span className="text-[#54505B]">Dublin, Ireland (Working globally)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#FD976D] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <strong className="block text-[#1B1624]">Email</strong>
                      <a href="mailto:hello@khalidfarhan.com" className="text-[#54505B] hover:text-[#1B1624] underline">
                        hello@khalidfarhan.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#ECE5E1]/60 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#76737C]">
                    Follow Along
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.youtube.com/channel/UCb-d2dCbEt_T-d3qf3oMICw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ali-pill-btn bg-[#F9F6F3] text-xs px-3.5 py-2 text-[#1B1624] hover:bg-[#1B1624] hover:text-white"
                    >
                      <YoutubeIcon className="w-4 h-4 text-red-600" />
                      <span>YouTube</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/khalidf/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ali-pill-btn bg-[#F9F6F3] text-xs px-3.5 py-2 text-[#1B1624] hover:bg-[#1B1624] hover:text-white"
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct message form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#ECE5E1] rounded-[28px] p-8 sm:p-10 shadow-xs">
                {sent ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#79D287] mx-auto" />
                    <h3 className="text-2xl font-bold text-[#1B1624]">
                      Message Received!
                    </h3>
                    <p className="text-sm text-[#54505B]">
                      Thanks for reaching out. We'll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#54505B]">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#54505B]">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#54505B]">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="How can we help your business grow?"
                        className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full ali-pill-btn bg-[#1B1624] hover:bg-[#1B1624]/90 text-white text-sm py-3.5 font-bold shadow-xs justify-center cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 text-[#FD976D]" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
