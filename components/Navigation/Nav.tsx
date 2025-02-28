"use client";

import React, { useState, useEffect } from "react";

const links = [
    { name: "home", path: "home" },
    { name: "skills", path: "skills" },
    { name: "projects", path: "projects" },
    { name: "experience", path: "experience" },
    { name: "education", path: "education" },
    { name: "contact", path: "contact" },
];

const Nav = () => {
    const [activeSection, setActiveSection] = useState("home");

    const handleNavigation = (id:string) => {
        setActiveSection(id);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
        );

        links.forEach((link) => {
            const section = document.getElementById(link.path);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="flex gap-8">
            {links.map((link) => (
                <button
                    key={link.name}
                    onClick={() => handleNavigation(link.path)}
                    className={`capitalize font-medium hover:text-accent-default transition-all ${
                        activeSection === link.path ? "text-accent-default border-b-2 border-accent-default" : ""
                    }`}
                >
                    {link.name}
                </button>
            ))}
        </nav>
    );
};

export default Nav;
