'use client';
import Image from "next/image";
import NavLinks from "./NavLinks"
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import OfficeHours from "./OfficeHours";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { createPortal } from "react-dom";

export const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return(
        <header className="fixed top-0 left-0 right-0 z-50 border-b-[0.1px] bg-[#232c39]/50 backdrop-blur-sm">
            <nav className="flex items-center justify-between w-full px-[1rem] md:px-[3rem] py-[1.1rem] border-[#FFFFFF]">
                <Link href='/' className="flex items-center gap-3 mb-2">
                    <Image src="/logo.png" alt="Imo State Logo" width={40} height={40} priority/>
                </Link>
                {/* Desktop NavLinks */}
                <div className="hidden lg:block">
                    <NavLinks />
                </div>
                {/* Hamburger for Mobile */}
                <button
                    className="lg:hidden text-white text-3xl focus:outline-none"
                    aria-label="Open navigation menu"
                    onClick={() => setSidebarOpen(true)}
                    >
                    <FiMenu />
                </button>
            </nav>
            <OfficeHours />
            {/* Mobile Sidebar via Portal to body to bypass header stacking context */}
            {mounted && createPortal(
                <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />,
                document.body
            )}
        </header>
    )
}