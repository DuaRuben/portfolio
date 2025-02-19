import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";
import Nav from "@/components/Nav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex items-center justify-between ">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Ruben <span className="text-accent-default">.</span></h1>
                </Link>

                {/*Style for Desktop navigation menu*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    {/*<Link href="/contact">*/}
                    {/*    <Button> Hire Me</Button>*/}
                    {/*</Link>*/}
                </div>

                {/*Style for Mobile navigation menu*/}
                <div className="xl:hidden"> mobile nav</div>
            </div>
        </header>
    );
};

export default Header;
