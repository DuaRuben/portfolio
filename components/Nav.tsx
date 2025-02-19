"use client"

import React from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";

// const links = [
//     {
//         name: 'home',
//         path: '/',
//     },
//     {
//         name: 'skills',
//         path: '/skills',
//     },
//     {
//         name: 'projects',
//         path: '/projects',
//     },
//     {
//         name: 'experience',
//         path: '/experience',
//     },
//     {
//         name: 'education',
//         path: '/education',
//     },
//     {
//         name: 'contact',
//         path: '/contact',
//     }
// ];

const links = [
    { name: "home", path: "#home" },
    { name: "skills", path: "#skills" },
    { name: "projects", path: "#projects" },
    { name: "experience", path: "#experience" },
    { name: "education", path: "#education" },
    { name: "contact", path: "#contact" },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className= "flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link key={index} href={link.path} className={`${link.path === pathname &&
                        "text-accent-default border-b-2 border-accent-default"}
                        capitalize font-medium hover:text-accent-default transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;