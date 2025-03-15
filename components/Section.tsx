import React from "react";

interface SectionProps {
    id: string,
    children: React.ReactNode,
    className?: string
}

const Section: React.FC<SectionProps> = ({id, children, className}) => {
    return (
        <section id={id} className={'min-h-screen flex items-center justify-center p-8 ${className}'}>
            {children}
        </section>
    );
};

export default Section;
