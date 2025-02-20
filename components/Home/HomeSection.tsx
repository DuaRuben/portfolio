"use client";

import React, { Suspense } from 'react';
import Section from "@/components/Section";
import Character from "@/components/Animation/Charactor";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, SpotLight } from "@react-three/drei";

const HomeSection = () => {
    return (
        <Section id="home" className="flex items-center justify-center p-6 bg-gray-100">
            <div className="flex flex-row items-center w-full max-w-7xl">
                {/* Text Section */}
                <div className="flex-1 w-auto p-6">
                    <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
                    <p className="mt-4 text-lg text-gray-700">
                        This is a brief introduction about myself. I'm passionate about coding and creating interactive web applications.
                    </p>
                </div>

                {/* Character Section */}
                <div className="flex-1 h-[500px]">
                    <Canvas>
                        <ambientLight intensity={5} />
                        <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                        <Suspense fallback={null}>
                            <Character position-y={-1} scale={2} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </Section>
    );
};

export default HomeSection;
