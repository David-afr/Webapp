import React from "react";
import Link from "next/link";
import Logo from "../Global/Logo";
import Dropdown from "../../components/Dropdown/Dropdown"

const Header = () => {
    return(
        <header className="py-globalY px-iniSectionX absolute left-0 right-0 z-[1000]">
            <div className="flex items-center justify-between w-full">
                {/* Logo */}
                <div><Logo width={160} height={100}/></div>

                {/* Menu */}
                <div className="flex items-center capitalize">
                    <div className="border-r pr-3 mr-3">
                        <Link className="cursor-pointer" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                        </Link>
                    </div>

                    <div className="border-r pr-3 mr-3">
                        <Link href="/nosotros" className="cursor-pointer text-lg">Nosotros</Link>
                    </div>

                    <div className="border-r pr-3 mr-3">
                        <a href="https://market.miplante.com" className="cursor-pointer text-lg">Marketplace</a>
                    </div>

                    {/* Dropdown Menu */}
                    <div>
                        <Dropdown/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;


