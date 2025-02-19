"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToHome = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll to the home section when the page refreshes
        const homeSection = document.getElementById("home");
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
        }
    }, [pathname]);

    return null;
};

export default ScrollToHome;
