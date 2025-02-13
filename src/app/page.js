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
      <Navigation scrollToAbout={scrollToAbout} />

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

      {/* about container */}
      <div ref={aboutRef} className="flex flex-col items-center min-h-[80vh] w-3/5 pt-24">
        <p className="text-2xl font-roboto text-white tracking-[0.4em]">*****************</p>
        <h2 className="text-6xl font-prata text-white tracking-[0.4em] py-6">
          about
        </h2>
        <p className="text-2xl font-roboto text-white tracking-[0.4em]">***************</p>
        <div className="flex items-center gap-x-12 mt-12">
          <Member src="/images/armaan.jpg" name="armaan" role="guitar" />
          <Member src="/images/ethan.jpg" name="ethan" role="bass" />
          <Member src="/images/rishi.jpg" name="rishi" role="vocals" />
          <Member src="/images/shaurya.jpg" name="shaurya" role="percussion" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full py-24">
          <div className="w-full md:w-1/2 p-6 md:pr-12">
            <h1 className="text-3xl text-white font-prata uppercase mb-4">who we are</h1>
            <p className="text-justify text-white uppercase font-roboto">
              loud. raw. straight from hell. we are pure rock. fear the band.
            </p>
          </div>
          <div className="w-full md:w-1/2 md:pl-12 p-6 flex justify-center">
            <div>
              <Image
                src="/images/stage.png"
                alt="Stage Fright"
                height={500}
                width={500}
                className="bg-fixed"
              />
            </div>
          </div>
        </div>
      </div>

      {/* contact container */}
      <div className="flex flex-col items-center min-h-[80vh] w-3/5 pt-24">
        <p className="text-2xl font-roboto text-white tracking-[0.4em]">*****************</p>
        <h2 className="text-6xl font-prata text-white tracking-[0.4em] py-6">
          contact
        </h2>
        <p className="text-2xl font-roboto text-white tracking-[0.4em]">***************</p>
      </div>
      
    </main>
  );
}