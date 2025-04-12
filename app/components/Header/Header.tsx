"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../Global/Logo";
import Dropdown from "../../components/Dropdown/Dropdown"

const Header = () =>
{
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setShowMenu(false);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <header className="py-globalY px-[20] sm:px-iniSectionX absolute left-0 right-0 z-[1000]">
            <div className="flex items-center justify-between w-full">
                {/* Logo */}
                <div><Logo width={160} height={100} className="w-[120px] h-auto sm:w-[160px]"/></div>

                {/* Menu */}
                <div
                    className={`fixed top-0 bottom-0 w-[50vw] h-full z-[99999] bg-white sm:bg-transparent sm:relative sm:flex flex-col sm:flex-row sm:justify-end sm:items-center capitalize shadow-lg sm:shadow-none transition-all duration-200 ease-in-out ${showMenu ? 'left-0' : '-left-[51vw] sm:left-auto'} sm:block`}
                >
                    <div className="border-b sm:border-b-0 sm:border-r px-4 py-2 sm:py-0 sm:pr-3 sm:mr-3 flex items-center text-celeste sm:text-white">
                        <Link className="cursor-pointer" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 sm:size-7">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                        </Link>
                        <span className="inline-block ml-2 sm:hidden text-sm sm:text-lg">Inicio</span>
                    </div>

                    <div className="border-b sm:border-b-0 sm:border-r px-4 py-2 sm:py-0 sm:pr-3 sm:mr-3 text-celeste sm:text-white">
                        <Link href="/nosotros" className="cursor-pointer text-sm sm:text-lg">Nosotros</Link>
                    </div>

                    <div className="border-b sm:border-b-0 sm:border-r px-4 py-2 sm:py-0 sm:pr-3 sm:mr-3 text-celeste sm:text-white">
                        <a href="https://market.miplante.com" className="cursor-pointer text-sm sm:text-lg">Marketplace</a>
                    </div>

                    <div className="block sm:hidden">
                        <div className="border-b px-4 py-2 text-celeste">
                            <a href="https://app.miplante.com/register/ally-register" className="cursor-pointer text-sm sm:text-lg">Aliado</a>
                        </div>

                        <div className="border-b px-4 py-2 text-celeste">
                            <a href="https://app.miplante.com/register/client-register" className="cursor-pointer text-sm sm:text-lg">Cliente</a>
                        </div>
                    </div>

                    {/* Dropdown Menu */}
                    <div className="hidden sm:block">
                        <Dropdown/>
                    </div>
                </div>

                <div onClick={closeMenu} className={`bg-[#0000003f] fixed top-0 bottom-0 left-0 right-0 ${showMenu ? 'block' : 'hidden'} sm:hidden`}></div>

                <div className="relative block sm:hidden" id="menu-button">
                    <button className="bg-white rounded shadow-lg p-1" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px] text-celeste font-bold">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;


