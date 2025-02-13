"use client";

import Image from "next/image";
import Navigation from "@/components/navigation";

const merchItems = [
  { id: 1, src: "/images/merch1.jpg", name: "Band T-Shirt", price: "$25" },
  { id: 2, src: "/images/merch2.jpg", name: "Hoodie", price: "$45" },
  { id: 3, src: "/images/merch3.jpg", name: "Cap", price: "$20" },
  { id: 4, src: "/images/merch4.jpg", name: "Poster", price: "$10" },
];

export default function Merch() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation />

      {/* Hero Section */}
      <div className="flex flex-col items-center min-h-[80vh] pt-12">
        <h1 className="text-4xl font-prata text-white uppercase tracking-[0.5em]">
          Merch Store
        </h1>
      </div>

      {/* Merch Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-4/5 py-12">
        {merchItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center bg-black bg-opacity-50 p-6 rounded-2xl shadow-lg">
            <Image
              src={item.src}
              alt={item.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="mt-4 text-2xl font-prata text-white">{item.name}</h2>
            <p className="text-lg font-roboto text-gray-300">{item.price}</p>
            <button className="mt-4 px-6 py-2 bg-white text-black font-roboto text-lg rounded-full hover:bg-gray-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
