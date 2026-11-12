"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Block } from "@/lib/pages-data";

export function InteractiveFormBlock({
  inputs,
  submitText,
  borderless = false,
}: {
  inputs: Extract<Block, { type: "form" }>["inputs"];
  submitText: string;
  borderless?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className={borderless ? "py-6 text-center space-y-2" : "bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-8 text-center space-y-2"}>
        <p className="text-lg font-bold text-[#1B1624]">Thank you — your submission has been received.</p>
        <p className="text-sm text-[#54505B]">We will review the details and get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className={borderless ? "space-y-4" : "bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-8 space-y-4 shadow-2xs"}
    >
      {inputs.map((inp, idx) => {
        if (inp.type === "hidden" || inp.type === "submit") return null;
        // Skip hidden/offscreen anti-spam honeypot fields with no placeholder and not required
        if (!inp.placeholder && !inp.required && inp.tag === "input" && inp.type === "text") return null;
        if (inp.type === "radio" || inp.type === "checkbox") {
          return (
            <label key={idx} className="flex items-center gap-2.5 text-sm text-[#1B1624] cursor-pointer">
              <input
                type={inp.type}
                name={inp.name || `field-${idx}`}
                required={inp.required}
                className="accent-[#FD976D]"
              />
              <span>{inp.placeholder || inp.name || "Select option"}</span>
            </label>
          );
        }
        if (inp.tag === "textarea") {
          return (
            <textarea
              key={idx}
              name={inp.name || `textarea-${idx}`}
              rows={4}
              required={inp.required}
              placeholder={inp.placeholder}
              className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
            />
          );
        }
        if (inp.tag === "select") {
          return (
            <select
              key={idx}
              name={inp.name || `select-${idx}`}
              required={inp.required}
              className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
            >
              {inp.options.map((opt, oIdx) => (
                <option key={oIdx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          );
        }
        return (
          <input
            key={idx}
            type={inp.type || "text"}
            name={inp.name || `input-${idx}`}
            required={inp.required}
            placeholder={inp.placeholder}
            className="w-full bg-[#F9F6F3] border border-[#ECE5E1] rounded-2xl px-4 py-3 text-sm text-[#1B1624] focus:outline-hidden focus:border-[#1B1624]"
          />
        );
      })}
      <button
        type="submit"
        className="w-full ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] font-semibold text-sm px-6 py-3.5 cursor-pointer"
      >
        {submitText || "Submit"}
      </button>
    </form>
  );
}

export function InteractiveFaqItem({ summary, body }: { summary: string; body: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-[#ECE5E1] rounded-[20px] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-[#1B1624] text-base sm:text-lg cursor-pointer hover:bg-[#F9F6F3]/60 transition-colors"
      >
        <span>{summary}</span>
        <span className="text-xl leading-none text-[#1B1624] shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#54505B] leading-relaxed border-t border-[#ECE5E1]/60 whitespace-pre-line">
          {body}
        </div>
      )}
    </div>
  );
}

export function InteractiveChecklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const completedCount = Object.values(checked).filter(Boolean).length;
  const pct = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[#ECE5E1] rounded-[20px] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <span className="text-sm font-semibold text-[#1B1624]">
          {completedCount} / {items.length} completed
        </span>
        <div className="flex items-center gap-3 flex-1 max-w-md">
          <div className="flex-1 h-2.5 bg-[#F3EDE9] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FD976D] transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-[#54505B] w-10 text-right">{pct}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item, idx) => {
          const isDone = !!checked[idx];
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setChecked((prev) => ({ ...prev, [idx]: !prev[idx] }))}
              className={`text-left p-4 rounded-[16px] border transition-all cursor-pointer flex items-start gap-3 ${
                isDone
                  ? "bg-[#FD976D]/15 border-[#FD976D] text-[#1B1624]"
                  : "bg-white border-[#ECE5E1] text-[#1B1624] hover:border-[#FD976D]"
              }`}
            >
              <span
                className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center text-xs shrink-0 ${
                  isDone
                    ? "bg-[#1B1624] border-[#1B1624] text-white"
                    : "bg-[#F9F6F3] border-[#ECE5E1]"
                }`}
              >
                {isDone ? "✓" : ""}
              </span>
              <span className={`text-sm leading-relaxed ${isDone ? "line-through text-[#54505B]" : ""}`}>
                {item}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function CaseStudyFilterGrid({
  items,
}: {
  items: { text: string; href: string }[];
}) {
  const [filter, setFilter] = useState("All");
  const tabs = ["All", "Search", "Ads", "Websites and growth"];

  const filtered = items.filter((item) => {
    if (filter === "All") return true;
    const t = item.text.toLowerCase();
    if (filter === "Search") return t.includes("seo") || t.includes("content") || t.includes("organic") || t.includes("maps") || t.includes("ranking");
    if (filter === "Ads") return t.includes("ads") || t.includes("roas") || t.includes("video");
    if (filter === "Websites and growth") return t.includes("website") || t.includes("ecommerce") || t.includes("store") || t.includes("cro");
    return true;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilter(tab)}
            className={`ali-pill-btn text-xs sm:text-sm px-5 py-2.5 border cursor-pointer ${
              filter === tab
                ? "bg-[#1B1624] text-white border-[#1B1624]"
                : "bg-white text-[#1B1624] border-[#ECE5E1] hover:border-[#FD976D]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, idx) => {
          const lines = item.text.split("\n").map((l) => l.trim()).filter(Boolean);
          const headline = lines[0] || item.text;
          const rest = lines.slice(1);
          return (
            <Link
              key={idx}
              href={item.href}
              className="group ali-card ali-article-card bg-white border border-[#ECE5E1] rounded-[24px] p-6 sm:p-8 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#1B1624] leading-snug">{headline}</h3>
                {rest.map((line, lIdx) => (
                  <p key={lIdx} className="text-sm text-[#54505B] group-hover:text-[#1B1624]/85 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
              <span className="text-sm font-semibold text-[#1B1624]">Read case study →</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

