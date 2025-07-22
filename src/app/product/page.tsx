import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  title: "Product",
  description:
    "A cosmetic product enhances or alters appearance, typically applied to the face, skin, or hair.",
  openGraph: {
    title: "Product",
    description:
      "A cosmetic product enhances or alters appearance, typically applied to the face, skin, or hair.",
    url: "https://testing-self-pi.vercel.app/product",
    siteName: "Product",
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

async function fetchProduct(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}products`);
  const data = await res.json();
  return data.products;
}

export default async function page() {
  const products = await fetchProduct();
  return (
    <section className="w-[90%] mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="p-2 w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-2 w-full rounded-lg">
              <div className="relative flex h-60 overflow-hidden rounded-xl">
                <Image
                  width={500}
                  height={500}
                  unoptimized
                  className="object-cover"
                  src={product.thumbnail}
                  alt="product image"
                />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                  39% OFF
                </span>
              </div>
              <div className="mt-4 px-5 pb-5">
                <h5 className="text-xl tracking-tight text-slate-900 line-clamp-1">
                  {product.title}
                </h5>

                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ${product.price}
                    </span>
                  </p>

                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      5.0
                    </span>
                  </div>
                </div>
                <div className="mb-3 flex items-center justify-between">
                  Category :
                  <span className="text-sm text-slate-900">
                    {" "}
                    {product.category}
                  </span>
                </div>
                <Link
                  href="/cart"
                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
