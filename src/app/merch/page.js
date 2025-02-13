"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navigation from "@/components/navigation";

const merchItems = [
  { id: 1, src: "/images/merch1.jpg", name: "Band Quarter Zip", price: "$45", link: "/shop/merch1" },
  { id: 2, src: "/images/merch2.jpg", name: "Jacket", price: "$75", link: "/shop/merch2" },
  { id: 3, src: "/images/merch3.jpg", name: "Beanie", price: "$15", link: "/shop/merch3" },
  { id: 4, src: "/images/merch4.jpg", name: "Pants", price: "$30", link: "/shop/merch4" },
];

export default function Merch() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat">
      <Navigation />

      {/* Hero Section */}
      <div className="flex flex-col items-center min-h-[16vh] pt-4">
        <h1 className="text-4xl font-prata text-white uppercase tracking-[0.5em] mb-2">
          Merch Store
        </h1>
      </div>

      {/* Merch Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-4/5 pb-4">
        {isClient && merchItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center bg-gray-800 bg-opacity-75 p-4 rounded-2xl shadow-lg">
            <Image
              src={item.src}
              alt={item.name}
              width={250}
              height={250}
              className="rounded-lg"
              priority
            />
            <h2 className="mt-2 text-2xl font-prata text-white">{item.name}</h2>
            <p className="text-lg font-roboto text-gray-400">{item.price}</p>
            <a href={item.link} className="mt-2 px-4 py-2 bg-red-600 text-white font-roboto text-lg rounded-full hover:bg-red-500 text-center">
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
