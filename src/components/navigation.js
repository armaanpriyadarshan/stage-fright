"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useCallback } from "react";
import Image from "next/image";

export default function Navigation({ scrollToAbout, scrollToContact}) {
    const router = useRouter();
    const pathname = usePathname();

    const handleAboutClick = useCallback(() => {
        if (pathname === "/") {
            scrollToAbout();
        } else {
            router.push("/#about");
        }
    }, [pathname, scrollToAbout, router]);

    const handleContactClick = useCallback(() => {
        if (pathname === "/") {
            scrollToContact();
        } else {
            router.push("/#contact");
        }
    }, [pathname, scrollToContact, router]);

    return (
        <nav className="flex justify-center items-center p-12 ml-9">
            <ul className="flex gap-x-20 items-center">
                <li>
                    <button 
                        onClick={handleAboutClick} 
                        className="font-roboto text-white hover:underline focus:outline-none"
                    >
                        about
                    </button>
                </li>
                <li>
                    <a href="/tour" className="font-roboto text-white hover:underline">
                        tour
                    </a>
                </li>
                <li className="group">
                    <a href="/" className="block"> 
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
                    <a href="/merch" className="font-roboto text-white hover:underline">
                        merch
                    </a>
                </li>
                <li>
                    <button
                        onClick={handleContactClick} 
                        className="font-roboto text-white hover:underline focus:outline-none"
                    >
                        contact
                    </button>
                </li>
            </ul>
        </nav>
    );
}