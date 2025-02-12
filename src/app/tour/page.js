import Member from "@/components/member";
import Navigation from "@/components/navigation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation />

      {/* Hero Container */}
      <div className="flex flex-col items-center min-h-screen mt-12">
        <Image
          src="/images/hero.png"
          alt="Stage Fright"
          width={500}
          height={500}
        />
        <h1 className="mt-12 text-2xl font-roboto text-white uppercase tracking-[0.5em]">
          FRIGHTENING A STAGE NEAR YOU
        </h1>
        <div className="mt-8">
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
      <div className="flex flex-col items-center min-h-screen">
        <p className="text-2xl font-roboto text-white tracking-[0.4em]">*****************</p>
        <h2 className="text-6xl font-prata text-white uppercase tracking-[0.4em] py-6">
          about
        </h2>
        <p className="text-2xl font-roboto text-white tracking-[0.4em]">***************</p>
        <div className="flex flex-col items-center gap-x-12">
          <Member></Member>
        </div>
      </div>
    </main>
  );
}