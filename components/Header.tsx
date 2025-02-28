import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Nav from "@/components/Navigation/Nav";
import MobileNav from "@/components/Navigation/MobileNav"
import {FiDownload} from 'react-icons/fi'

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-primary bg-opacity-90 backdrop-blur-lg z-50 py-4 xl:py-6 text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between px-6">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Ruben <span className="text-accent-default">Dua</span>
                    </h1>
                </Link>

                {/* Desktop navigation menu */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <a href="/Ruben_Resume_Full_Stack.pdf" download>
                        <Button title="Download Ruben's Resume"> Download <FiDownload className="ml-1"/> </Button>
                    </a>
                </div>

                {/* Mobile navigation menu */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
