"use client"

import React from 'react';
import Section from "@/components/Section";
import SkillCard from "@/components/Skill/SkillCard";


const skills:{image:string;text:string}[] = [
    { image: "/logos/Angular.png", text: "Angular" },
    { image: "/logos/C++.png", text: "C++" },
    { image: "/logos/C.png",text: "C"  },
    { image: "/logos/CSS.png", text: "CSS" },
    { image: "/logos/HTML.png", text: "HTML" },
    { image: "/logos/Java.png",text: "Java" },
    { image: "/logos/Javascript.png",text: "Javascript" },
    { image: "/logos/Nextjs.png", text: "Next" },
    { image: "/logos/python.png",text: "Python" },
    { image: "/logos/R.png",text: "R" },
    { image: "/logos/React.png",text: "React" },
    { image: "/logos/SQL.png", text: "SQL" },
    { image: "/logos/Typescript.png",text: "Typescript"  },
];


const SkillSection = () => {
    return (
        <Section id="skills" className="flex flex-col">
            <div className="text-3xl font-bold text-center mb-5 mt-12"> Sk<span className="text-accent-default/80">ills</span></div>
            <div className="grid grid-cols-2 xl:grid-cols-5 sm:grid-cols-3 md:grid-cols-4 gap-10 p-4">
                {skills.map((skill, index) => (
                    <SkillCard key={index} image={skill.image} text={skill.text} />
                ))}
            </div>
        </Section>
    );
};

export default SkillSection;