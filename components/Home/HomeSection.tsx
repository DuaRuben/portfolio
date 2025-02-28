"use client";

import React, { Suspense } from 'react';
import Section from "@/components/Section";
import Character from "@/components/Animation/Charactor";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, SpotLight } from "@react-three/drei";


const HomeSection = () => {
    return (
        <Section id="home" className = "h-full">
            <div className= "container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left">
                        <span className="text-xl"> Software Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I'm <br/> <span className="text-accent-default"> Ruben Dua</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I am a Computing Science student at Simon Fraser University.
                            I’m passionate about software development, machine learning, and creating impactful web applications.
                            I love solving problems with code and exploring new technologies.
                            When I’m not coding, you can find me gaming or enjoying a good movie.
                            Thanks for checking out my portfolio!
                        </p>
                        <div className="flex flex-col xl:flex-row items-center">
                            Socials
                        </div>
                    </div>
                    <div className="flex-1 h-[850px]  xl:ml-12">
                         <Canvas camera={{position: [0, 2, 5]}}>
                         <ambientLight intensity={5}/>
                         <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2}/>
                         <directionalLight position={[10, 10, 10]} intensity={1}/>
                         <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>
                         <Suspense fallback={null}>
                         <Character position-y={-1} position-x={0.4} scale={2}/>
                         </Suspense>
                         </Canvas>
                    </div>
                </div>
            </div>
        </Section>

        // <Section id="home" className="flex items-center justify-center p-6 bg-gray-100">
        //     <div className="flex flex-row items-center w-full max-w-7xl">
        //         {/* Text Section */}
        //         <div className="flex-1 w-auto p-6">
        //             <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        //             <p className="mt-4 text-lg text-gray-700">
        //                 This is a brief introduction about myself. I'm passionate about coding and creating interactive web applications.
        //             </p>
        //         </div>
        //
        //         {/* Character Section */}
        //         <div className="flex-1 h-[900px]">
        //             <Canvas camera={{ position: [0, 2, 5]}}>
        //                 <ambientLight intensity={5} />
        //                 <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        //                 <directionalLight position={[10, 10, 10]} intensity={1} />
        //                 <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
        //                 <Suspense fallback={null}>
        //                     <Character position-y={-1} position-x={0.4} scale={2} />
        //                 </Suspense>
        //             </Canvas>
        //         </div>
        //     </div>
        // </Section>
    );
};

export default HomeSection;
