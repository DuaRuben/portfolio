"use client"

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const links = [
    { name: 'home', path: '/' },
    { name: 'skills', path: '/skills' },
    { name: 'projects', path: '/projects' },
    { name: 'experience', path: '/experience' },
    { name: 'education', path: '/education' },
    { name: 'contact', path: '/contact' }
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="flex justify-center" onClick={() => setIsOpen(true)}>
                    <CiMenuFries className="text-[32px] text-accent-default"/>
                </SheetTrigger>
                <SheetContent className="flex flex-col">
                    {/* Visually hidden title for accessibility */}
                    <VisuallyHidden>
                        <DialogTitle>Mobile Navigation</DialogTitle>
                        <DialogDescription>Menu for navigating the website</DialogDescription>
                    </VisuallyHidden>
                    <div className="mt-32 mb-40 text-center text-2xl">
                        {/* Close menu when clicking Ruben . */}
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            <h1 className="text-4xl font-semibold cursor-pointer">
                                Ruben <span className="text-accent-default">.</span>
                            </h1>
                        </Link>
                        <nav className="flex flex-col justify-center gap-8 items-center mt-28">
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}  // Close menu on link click
                                    className={`text-2xl capitalize hover:text-accent-default transition-all ${
                                        link.path === pathname ? "text-accent-default border-b-2 border-accent-default" : ""
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default MobileNav;
