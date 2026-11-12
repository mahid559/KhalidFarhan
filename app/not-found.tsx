import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F6F3]">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-24 px-4">
        <div className="max-w-xl w-full bg-white border border-[#ECE5E1] rounded-[32px] p-10 sm:p-14 text-center space-y-6 shadow-2xs">
          <h1 className="heading-xl text-6xl sm:text-7xl text-[#1B1624]">404</h1>
          <p className="text-lg text-[#54505B]">This page could not be found.</p>
          <div className="pt-2">
            <Link
              href="/"
              className="ali-pill-btn bg-[#FD976D] hover:bg-[#FC8555] text-[#1B1624] text-sm px-7 py-3.5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

