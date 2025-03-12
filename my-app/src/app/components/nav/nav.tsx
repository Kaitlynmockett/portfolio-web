"use client";

import Link  from "next/link"; 
import { usePathname } from "next/navigation";

const Links = [
    { href: "/", text: "Home"},
    { href: "#about", text: "About" },
    { href: "/experience", text: "Experience"},
    { href: "/projects", text: "Projects"},
    { href: "/contact", text: "Contact" }
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="background-base-300">
            <div className="navbar py-20 max-w-6xl mx-auto flex-end sm:flex-row">

            <ul className="menu md:ml-8 sm:flex-row flex justify-end">
                {
                    Links.map((link) => {
                        const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                        return (
                        <li className="btn btn-primary text-xl px-5" key={link.href} >
                            <Link href={link.href} className={isActive ? "font-bold" : ""}>
                                {link.text}
                            </Link>
                        </li>
                        )
                    })
                }
            </ul>
            </div>
        </nav>
    );
}

export default Nav;