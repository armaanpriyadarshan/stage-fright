import Image from "next/image";

export default function Navigation() {
    return (
        <nav className="flex justify-center items-center p-12 ml-9">
            <ul className="flex gap-x-20 items-center">
                <li>
                    <a href="#" className="font-roboto text-white hover:underline">
                        about
                    </a>
                </li>
                <li>
                    <a href="src/app/page.js" className="font-roboto text-white hover:underline">
                        tour
                    </a>
                </li>
                <li className="group">
                    <a href="#" className="block">
                        <Image 
                            src="/images/center.png" 
                            alt="Stage Fright" 
                            width={100} 
                            height={100} 
                            className="transition-transform duration-300 ease-in-out group-hover:scale-125"
                        />
                    </a>
                </li>
                <li>
                    <a href="#" className="font-roboto text-white hover:underline">
                        merch
                    </a>
                </li>
                <li>
                    <a href="#" className="font-roboto text-white hover:underline">
                        contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
