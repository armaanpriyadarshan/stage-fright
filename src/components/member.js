import Image from "next/image";

export default function Member({ src, name, description }) {
    return (
        <div>
            <Image src={src} alt="Member Image" width={200} height={200} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}