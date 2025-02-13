"use client";

import { useRef } from "react";
import Member from "@/components/member";
import Navigation from "@/components/navigation";
import Image from "next/image";

export default function Home() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation />

      {/* hero container */}
      <div className="flex flex-col items-center min-h-[80vh] pt-12">
        <Image
          src="/images/hero.png"
          alt="Stage Fright"
          width={500}
          height={500}
        />
        <h1 className="mt-12 text-2xl font-roboto text-white uppercase tracking-[0.5em]">
          frightening a stage near you
        </h1>
        <div className="mt-8 cursor-pointer" onClick={scrollToAbout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-white animate-bounce"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* About container */}
      <div ref={aboutRef} className="flex flex-col items-center min-h-[80vh] w-3/5 pt-24">
        <p className="text-2xl font-roboto text-white tracking-[0.4em]">*****************</p>
        <h2 className="text-6xl font-prata text-white tracking-[0.4em] py-6">
          about
        </h2>
        <p className="text-2xl font-roboto text-white tracking-[0.4em]">***************</p>
        <div className="flex items-center gap-x-12 mt-12">
          <Member src="/images/armaan.jpg" name="armaan" description="guitar" />
          <Member src="/images/ethan.jpg" name="ethan" description="piano" />
          <Member src="/images/rishi.jpg" name="rishi" description="vocals" />
          <Member src="/images/shaurya.jpg" name="shaurya" description="percussion" />
        </div>
        <div className = "flex flex-col md:flex-row items-center justify-center w-full mt-12">
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl text-white font-prata mb-4">who we are</h1>
            <p className="text-lg text-justify text-white font-roboto">
              About us...
            </p>
          </div>
          <div className="w-full md:w-1/2 p-6 flex justify-center">
            <Image
              src="/images/stage.png"
              alt="Stage Fright"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
}