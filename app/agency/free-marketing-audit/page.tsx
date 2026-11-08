"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function FreeAuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    serviceInterest: "SEO & GEO",
    monthlyBudget: "€2,000 - €5,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F3]">
      <Navbar />
      <main className="flex-grow py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-white border border-[#ECE5E1] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FD976D]">
              <Sparkles className="w-3.5 h-3.5 text-[#FD976D]" />
              <span>Diagnostic Opportunity</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1B1624] tracking-tight">
              Get a Free Marketing Audit
            </h1>
            <p className="text-base sm:text-lg text-[#54505B] leading-relaxed">
              We don’t run your site through a generic automated report. We personally inspect your rankings, paid traffic funnel, and conversion leaks.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-[#ECE5E1] rounded-[32px] p-8 sm:p-14 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#79D287]/20 flex items-center justify-center mx-auto text-[#79D287]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#1B1624]">
                  Audit Request Received!
                </h2>
                <p className="text-base text-[#54505B] max-w-md mx-auto">
                  Thank you! Khalid and the team will review your website and reply within 48 hours with actionable insights.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#54505B]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#54505B]">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@yourcompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#54505B]">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://yourcompany.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#54505B]">
                      Primary Growth Goal
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
                    >
                      <option>SEO & Generative Engine (GEO)</option>
                      <option>Google & Meta Paid Ads</option>
                      <option>Conversion Rate Optimisation & Web Dev</option>
                      <option>Full-Stack Founder Advisory</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#54505B]">
                      Current Monthly Marketing Budget
                    </label>
                    <select
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
                    >
                      <option>Under €2,000 / month</option>
                      <option>€2,000 - €5,000 / month</option>
                      <option>€5,000 - €10,000 / month</option>
                      <option>€10,000+ / month</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#54505B]">
                    What challenges are you currently facing? (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your competitors, conversion rates, or what has stalled your growth..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full ali-pill-btn bg-[#1B1624] hover:bg-[#1B1624]/90 text-white text-base py-4 font-bold shadow-sm justify-center cursor-pointer"
                >
                  <span>Request My Free Marketing Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#FD976D]" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#76737C] pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#79D287]" />
                  <span>100% confidential. No spam, ever. 48-hour delivery.</span>
                </div>

              </form>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

