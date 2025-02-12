import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Image
        src="/images/hero.png"
        alt="Stage Fright"
        width={600}
        height={600}
      />
    </main>
  );
}
