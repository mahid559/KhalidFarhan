import React from "react";
import type { Metadata } from "next";
import BusinessSchoolClient from "@/components/businessschool/BusinessSchoolClient";

export const metadata: Metadata = {
  title: "Business School: Courses, Live Challenges and Business Ideas | Khalid Farhan",
  description:
    "Hands-on courses, no theory. 8 programmes and 57 lessons inside today, 2 to 3 new ones every year, and a 50+ page business idea report every month.",
};

export default function BusinessSchoolPage() {
  return <BusinessSchoolClient />;
}
