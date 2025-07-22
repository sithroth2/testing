import BlogCard from "@/components/blog/BlogCard";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About",
  description:
    "cloud infrastructure to build, scale, and secure a faster, more personalized web.",
  openGraph: {
    title: "About",
    description:
      " Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
    url: "https://nextjs-fullstack-evening.vercel.app/about",
    siteName: "Home",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLtRdZwNbQq-Wrfop-zspTyu_ChqbF6q9jA&s",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Blog() {
  return (
    <div>
      <BlogCard />
    </div>
  );
}
