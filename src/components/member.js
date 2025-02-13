import Image from "next/image";

export default function Member({ src, name, role }) {
    return (
        <div className="flex flex-col items-center p-4 max-w-[350px]">
            <Image src={src} alt="Member Image" width={250} height={250} className="rounded-full" />
            <h2 className="mt-8 text-2xl font-prata text-white italic uppercase tracking-[0.2em] text-center">{name}</h2>
            <p className="mt-2 text-xl font-roboto text-gray-400 text-center">{role}</p>
        </div>
    );
}