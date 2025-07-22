import Image from "next/image";
import React from "react";
export const metadata: Metadata = {
  title: "About",
  description:
    "page or section, often found on websites or apps, as it aligns with your previous requests for descriptions of common features. If you meant something else, please clarify.",
  keywords: ["Next.js", "Fullstack", "Vercel", "AI Cloud", "Web Development"],
  openGraph: {
    title: "about",
    description:
      "page or section, often found on websites or apps, as it aligns with your previous requests for descriptions of common features. If you meant something else, please clarify.",
    url: "https://testing-self-pi.vercel.app/about",
    siteName: "About",
    images: [
      {
        url: "data:image/jpeg;base64,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",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <section className="relative bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 py-16 px-8 overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="dots"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <circle cx="10" cy="10" r="2" fill="#3B82F6" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="1440" height="800" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="p-8 bg-white bg-opacity-90 rounded-xl shadow-lg backdrop-blur-lg hover:scale-105 transform transition duration-300 ease-in-out">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            We craft innovative digital experiences that elevate your brand and
            inspire your audience. Our passionate team leverages creativity and
            cutting-edge technology to bring your vision to life with precision
            and style.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-tr from-purple-200 via-blue-200 to-green-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 20v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2H17z" />
                  <circle cx="12" cy="8" r="4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Dedicated Team
                </h3>
                <p className="text-gray-500 text-sm">
                  A passionate group of experts committed to delivering
                  excellence in every project.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gradient-to-tr from-purple-200 via-blue-200 to-green-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 21h6v-1H9v1zm3-18a4 4 0 00-4 4c0 1.38.56 2.63 1.46 3.54A5.978 5.978 0 009 12h6a5.978 5.978 0 00-1.46-3.46A4 4 0 0015 7a4 4 0 00-4-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Innovative Approach
                </h3>
                <p className="text-gray-500 text-sm">
                  We embrace creativity and technology to craft unique solutions
                  tailored for you.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gradient-to-tr from-purple-200 via-blue-200 to-green-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 14c-1.33 0-2.53.53-3.41 1.39A4.993 4.993 0 0012 20c1.33 0 2.53-.53 3.41-1.39A4.993 4.993 0 0016 14zM8 14c-1.33 0-2.53.53-3.41 1.39A4.993 4.993 0 004 20c1.33 0 2.53-.53 3.41-1.39A4.993 4.993 0 008 14zM12 4c-2.21 0-4 1.79-4 4 0 1.66 1.34 3 3 3h2c1.66 0 3-1.34 3-3 0-2.21-1.79-4-4-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Customer Centric
                </h3>
                <p className="text-gray-500 text-sm">
                  Your satisfaction is our priority — we listen, adapt, and
                  deliver beyond expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-4">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-400 to-green-400 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"></div>
          <Image
            unoptimized
            width={800}
            height={600}
            className="relative rounded-xl shadow-xl object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="About Us"
          />
        </div>
      </div>
    </section>
  );
}
