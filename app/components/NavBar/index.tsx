'use client'

import Image from "next/image";
import LogoP from "@/public/images/logo.svg"
import Link from "next/link";
import NavItem, { NavItemInterface } from "../NavItem";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FaBars, FaXmark } from "react-icons/fa6";

export default function NavBar() {

    const items: NavItemInterface[] = [
        {
            url:"/",
            label: "Entrar"
        },
        {
            url:"/forum",
            label: "Forum"
        },
        {
            url:"/about",
            label: "Sobre"
        },
        {
            url:"/mojang",
            label: "Mojang"
        },
        {
            url:"/questions",
            label: "Perguntas"
        },
    ]

    const pathname = usePathname()

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className="flex justify-center bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex justify-center w-[1216px] py-10 mac:w-11/12">
                <div className="flex flex-col items-center justify-center gap-10 w-full lgm:flex-row lgm:justify-between mdd:w-[375px]">
                    
                    <Link href="/">
                        <Image 
                            src={LogoP}
                            alt="Logo"
                        />
                    </Link>

                    <ul className="text-white flex gap-10 uppercase font-semibold lgm:hidden">
                        {items.map((item, index) => (
                            <NavItem
                                key={index}
                                url={item.url}
                                label={item.label}
                                isActive={pathname === item.url}
                        />
                        ))}
                    </ul>

                    {openMenu && (
                        <ul className="hidden text-white lgm:flex lgm:flex-col lgm:items-center lgm:w-full lgm:absolute lgm:top-24 lgm:left-0 gap-10 uppercase font-semibold bg-black/80 lgm:p-5 ">
                        {items.map((item, index) => (
                            <NavItem
                                key={index}
                                url={item.url}
                                label={item.label}
                                isActive={pathname === item.url}
                        />
                        ))}
                    </ul>
                    )}

                    <button onClick={toggleMenu} className="hidden text-white text-3xl lgm:block">
                        {openMenu ? <FaXmark/> : <FaBars />}
                    </button>
                </div>
            </div>
        </div>
    )
}