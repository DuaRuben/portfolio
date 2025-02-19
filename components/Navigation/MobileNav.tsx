"use client";

import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";

const links = [
    { name: "home", path: "#home" },
    { name: "skills", path: "#skills" },
    { name: "projects", path: "#projects" },
    { name: "experience", path: "#experience" },
    { name: "education", path: "#education" },
    { name: "contact", path: "#contact" },
];

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home"); // Track active section

    // Intersection Observer to detect the currently visible section
    useEffect(() => {
        const sections = document.querySelectorAll("section"); // Get all sections

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when at least 50% of the section is visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect(); // Cleanup on unmount
    }, []);

    return (
        <nav>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="flex justify-center" onClick={() => setIsOpen(true)}>
                    <CiMenuFries className="text-[32px] text-accent-default" />
                </SheetTrigger>
                <SheetContent className="flex flex-col">
                    {/* Visually hidden title for accessibility */}
                    <VisuallyHidden>
                        <DialogTitle>Mobile Navigation</DialogTitle>
                        <DialogDescription>Menu for navigating the website</DialogDescription>
                    </VisuallyHidden>
                    <div className="mt-32 mb-40 text-center text-2xl">
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            <h1 className="text-4xl font-semibold cursor-pointer">
                                Ruben <span className="text-accent-default">Dua</span>
                            </h1>
                        </Link>
                        <nav className="flex flex-col justify-center gap-8 items-center mt-28">
                            {links.map((link) => (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-2xl capitalize hover:text-accent-default transition-all ${
                                        activeSection === link.name ? "text-accent-default border-b-2 border-accent-default" : ""
                                    }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="/Ruben_Resume_Full_Stack.pdf" download>
                                <Button title="Download Ruben's Resume">Download</Button>
                            </a>
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default MobileNav;
