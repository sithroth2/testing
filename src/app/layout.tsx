import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { Suspense } from "react";
import Loading from "./loading";
import WrapperNavber from "@/components/navbar/WrapperNavbar";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const preahvihear = localFont({
  src: "../../public/fonts/Preahvihear-Regular.ttf",
  variable: "--font-preahvihear",
});

export const metadata: Metadata = {
  title: "User",
  description:
    "Here you'll find my projects, interests, and updates on what I'm currently working on. Feel free to explore and connect!",
  openGraph: {
    title: "User",
    description: " ",
    url: "https://nextjs-fullstack-evening.vercel.app/user",
    siteName: "Users",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdvi2kFHWTYNm2I_KD-74i5ExfoIVRKsMM4A&s",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.variable} ${preahvihear.variable} antialiased`}
      >
        <ErrorBoundary errorComponent={Error}>
          <WrapperNavber />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
