import Image from "next/image";

export default function Navigation() {
    return (
        <nav className="flex justify-center items-center p-12 ml-9">
            <ul className="flex gap-x-20 items-center">
                <li>
                    <a href="#" className="relative font-roboto text-white after:block after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
                        about
                    </a>
                </li>
                <li>
                    <a href="src/app/page.js" className="relative font-roboto text-white after:block after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
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
                    <a href="#" className="relative font-roboto text-white after:block after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
                        merch
                    </a>
                </li>
                <li>
                    <a href="#" className="relative font-roboto text-white after:block after:content-[''] after:absolute after:h-[2px] after:w-0 after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full">
                        contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
