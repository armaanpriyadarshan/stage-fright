import Image from "next/image";

export default function Member({ src, name, description }) {
    return (
        <div className="flex flex-col items-center p-4 max-w-[350px]">
            <Image src={src} alt="Member Image" width={300} height={300} className="rounded-full" />
            <h2 className="mt-8 text-2xl font-prata italic uppercase tracking-[0.2em] text-center">{name}</h2>
            <p className="mt-2 text-gray-600 text-center">{description}</p>
        </div>
    );
}