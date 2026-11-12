"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const STEPS = [
  { num: "01", title: "Submit your profile", desc: "Share your academics, IELTS status, and target countries." },
  { num: "02", title: "Get your shortlist", desc: "Receive your Reach, Good Match, and Safe universities in 7 business days." },
  { num: "03", title: "Apply with clarity", desc: "Prepare SOPs, documents, and applications without guesswork." },
  { num: "04", title: "Secure your offer", desc: "Move forward with visa preparation and arrival planning." },
];

const FIELDS = [
  "Computer Science & AI",
  "Data Science & Analytics",
  "Business & Management",
  "Digital Marketing",
  "Finance & Accounting",
  "Engineering",
  "Public Health",
  "Law & Policy",
];

const FAQS = [
  {
    q: "How much does the shortlist cost?",
    a: "৳900 BDT for a personalised shortlist delivered within 7 business days.",
  },
  {
    q: "What exactly do I get?",
    a: "A structured list of universities split into Reach, Good Match, and Safe options based on your grades, budget, and career goals.",
  },
  {
    q: "Which countries can I apply to?",
    a: "Ireland, the UK, Canada, Australia, Germany, and other popular European and English-speaking destinations.",
  },
  {
    q: "I have not taken IELTS yet. Can I still get a shortlist?",
    a: "Yes. We factor in your expected IELTS or Duolingo English Test range and note programs that accept conditional offers.",
  },
  {
    q: "My CGPA is low. Is it worth trying?",
    a: "Yes. Many universities weigh work experience, projects, and statement strength alongside CGPA.",
  },
  {
    q: "I have a gap after my Bachelor's. Is that a problem?",
    a: "A gap is manageable when properly explained with relevant work, freelancing, or upskilling.",
  },
  {
    q: "I had a visa refusal before. Can I still apply?",
    a: "Yes, though it requires addressing the refusal reasons clearly in your new application.",
  },
  {
    q: "Do you help with Bachelor's or PhD?",
    a: "Our primary focus is taught Master's programmes, though we can advise on Bachelor's pathways as well.",
  },
];

export default function SecondPassportClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F3] text-[#1B1624]">
      <Navbar />

      <main>
        {/* 1. HERO */}
        <section className="border-b border-[#ECE5E1] py-14 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#FD976D]">
                SECONDPASSPORT
              </p>
              <h1 className="display-l mt-3 text-[44px] sm:text-[56px] lg:text-[62px] text-[#1B1624]">
                YOUR SECOND PASSPORT IS A DEGREE ABROAD
              </h1>
              <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-[#54505B]">
                Get a realistic, researched shortlist of Master&apos;s programmes abroad — split into Reach, Good Match, and Safe choices for ৳900 in 7 business days.
              </p>
              <div className="mt-8">
                <a
                  href="#qualify"
                  className="ali-pill-btn inline-flex items-center bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:-translate-y-0.5"
                >
                  Check if I qualify →
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img
                src="/secondpassport/trinity.webp"
                alt="Trinity College Dublin"
                className="col-span-2 w-full h-56 sm:h-64 rounded-[24px] object-cover border border-[#ECE5E1]"
              />
              <img
                src="/secondpassport/ireland-cliffs.webp"
                alt="Ireland Cliffs"
                className="w-full h-40 sm:h-44 rounded-[20px] object-cover border border-[#ECE5E1]"
              />
              <img
                src="/secondpassport/ireland-west.webp"
                alt="West of Ireland"
                className="w-full h-40 sm:h-44 rounded-[20px] object-cover border border-[#ECE5E1]"
              />
            </div>
          </div>
        </section>

        {/* 2. FOUR STEPS */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              FOUR STEPS. THAT&apos;S IT.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((s) => (
                <div
                  key={s.num}
                  className="ali-card rounded-[24px] border border-[#ECE5E1] bg-white p-7"
                >
                  <div className="ledger-num text-[34px] leading-none text-[#FD976D]">{s.num}</div>
                  <h3 className="mt-4 text-[18px] font-bold text-[#1B1624]">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#54505B]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHY WE CALL IT SECONDPASSPORT */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <img
                src="/secondpassport/khalid-speaking.webp"
                alt="Khalid Farhan speaking"
                className="w-full h-auto rounded-[28px] object-cover border border-[#ECE5E1]"
              />
            </div>
            <div className="lg:col-span-6 space-y-5">
              <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624]">
                WHY WE CALL IT SECONDPASSPORT
              </h2>
              <p className="text-[16px] leading-relaxed text-[#54505B]">
                I moved to Ireland for an MSc at Trinity College Dublin and built my agency from here. A degree abroad is more than a certificate — it is work rights, global mobility, and a long-term path for you and your family.
              </p>
            </div>
          </div>
        </section>

        {/* 4. DELIVERABLE */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-10">
              KNOW EXACTLY WHERE TO APPLY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "REACH", desc: "Ambitious top-tier programmes where your profile has a real shot." },
                { label: "GOOD MATCH", desc: "Strong programmes well aligned with your CGPA and background." },
                { label: "SAFE", desc: "Reliable admissions options with clear tuition and visa pathways." },
              ].map((tier) => (
                <div
                  key={tier.label}
                  className="rounded-[24px] border border-[#ECE5E1] bg-white p-8"
                >
                  <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#FD976D]">
                    {tier.label}
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#54505B]">{tier.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[15px] font-semibold text-[#1B1624]">
              ৳900 BDT · Delivered in 7 business days
            </p>
          </div>
        </section>

        {/* 5. WE DON'T JUST CONSULT */}
        <section className="border-b border-[#ECE5E1] bg-[#F3EDE9]/60 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624]">
                WE DON&apos;T JUST CONSULT. WE GET YOU THERE.
              </h2>
              <p className="text-[16px] leading-relaxed text-[#54505B]">
                No commission-driven university pushing. Just honest guidance based on where you will actually get accepted and thrive after graduation.
              </p>
            </div>
            <div className="lg:col-span-6">
              <img
                src="/secondpassport/ireland-sea.webp"
                alt="Ireland coastline"
                className="w-full h-auto rounded-[28px] object-cover border border-[#ECE5E1]"
              />
            </div>
          </div>
        </section>

        {/* 6. POPULAR FIELDS OF STUDY */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-8">
              POPULAR FIELDS OF STUDY
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {FIELDS.map((field) => (
                <div
                  key={field}
                  className="rounded-[18px] border border-[#ECE5E1] bg-white p-5 text-[15px] font-bold text-[#1B1624]"
                >
                  {field}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="border-b border-[#ECE5E1] py-16 sm:py-24">
          <div className="max-w-[820px] mx-auto px-4 sm:px-6">
            <h2 className="heading-xl text-[32px] sm:text-[44px] text-[#1B1624] mb-8">
              WHAT STUDENTS ASK US MOST
            </h2>
            <div className="space-y-3">
              {FAQS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={item.q}
                    className="rounded-[20px] border border-[#ECE5E1] bg-white overflow-hidden transition-colors hover:border-[#FD976D]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer"
                    >
                      <span className="text-[16px] font-bold text-[#1B1624]">{item.q}</span>
                      <span className="text-[20px] leading-none text-[#54505B] shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-[15px] leading-relaxed text-[#54505B]">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. BOTTOM CTA / QUALIFY FORM */}
        <section id="qualify" className="bg-[#1B1624] text-white py-16 sm:py-24">
          <div className="max-w-[680px] mx-auto px-4 sm:px-6 text-center">
            <h2 className="heading-xl text-[34px] sm:text-[48px] text-white">READY TO GO?</h2>
            <p className="mt-3 text-[16px] text-white/75">
              Request your ৳900 shortlist and hear back within 7 business days.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-[28px] bg-white text-[#1B1624] p-7 sm:p-9 text-left space-y-4"
            >
              <div>
                <label className="block text-[13px] font-semibold mb-1">Full name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold mb-1">Email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold mb-1">
                  Latest degree &amp; CGPA
                </label>
                <input
                  type="text"
                  value={cgpa}
                  onChange={(e) => setCgpa(e.target.value)}
                  placeholder="e.g. BSc in CSE, 3.45"
                  className="w-full rounded-[12px] border border-[#ECE5E1] bg-[#F9F6F3] px-4 py-2.5 text-[15px] focus:border-[#FD976D] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="ali-pill-btn w-full rounded-full bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] py-3.5 text-[15px] font-semibold transition-all cursor-pointer"
              >
                Check if I qualify
              </button>
              {submitted && (
                <div className="rounded-[12px] border border-[#79D287] bg-[#79D287]/15 p-3 text-[13px]">
                  Thanks, {name}! We&apos;ve received your SecondPassport shortlist request.
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

