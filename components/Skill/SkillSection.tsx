"use client"

import React from 'react';
import Section from "@/components/Section";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";  // To control camera with mouse
import Ball from "../Animation/Ball";

const technologies = [
    { texture: "/logos/Angular.png", position: [-3, 2, 0] },
    { texture: "/logos/C++.png", position: [0, 2, 0] },
    { texture: "/logos/C.png", position: [3, 2, 0] },
    { texture: "/logos/CSS.jpeg", position: [6, 2, 0] },
    { texture: "/logos/HTML.png", position: [-6, 2, 0] },
    { texture: "/logos/Java.jpg", position: [-9, 2, 0] },
    { texture: "/logos/Javascript.png", position: [9, 2, 0] },
    { texture: "/logos/Nextjs.png", position: [-3, -2, 0] },
    { texture: "/logos/python.jpeg", position: [0, -2, 0] },
    { texture: "/logos/R.jpeg", position: [3, -2, 0] },
    { texture: "/logos/React.png", position: [6, -2, 0] },
    { texture: "/logos/SQL.png", position: [-6, -2, 0] },
    { texture: "/logos/Typescript.png", position: [-9, -2, 0] },
];


const SkillSection = () => {
    return (
        <Section id="skills">
            <div className="flex flex-col items-cente">
                <h1 className="text-3xl font-bold mt-[200px] mb-[-300px] ml-[40%]">Tech Stack</h1>
                <div className="w-full h-[1000px]">
                    <Canvas camera={{ position: [0, 0, 20] }}> {/* Fixed camera position */}
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[2, 2, 2]} />
                        <OrbitControls enableZoom={false} />
                        {technologies.map((tech, index) => (
                            <Ball
                                key={index}
                                textureUrl={tech.texture}
                                position={tech.position}  // Position each ball
                            />
                        ))}
                    </Canvas>
                </div>
            </div>
        </Section>
    );
};

export default SkillSection;