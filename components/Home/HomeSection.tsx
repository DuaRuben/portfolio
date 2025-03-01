"use client";

import React, { Suspense } from 'react';
import Section from "@/components/Section";
import Character from "@/components/Animation/Charactor";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, SpotLight } from "@react-three/drei";
import Socials from "@/components/Socials";


const HomeSection = () => {
    return (
        <Section id="home" className = "h-full pt-0 mt-0">
            <div className= "container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:ml-10">
                    <div className="order-2 xl:order-none text-center xl:text-left">
                        <span className="text-xl"> Software Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I'm <br/> <span className="text-accent-default"> Ruben Dua</span>
                        </h1>
                        <p className="max-w-[550px] mb-9 text-white/80">
                            I am a Computing Science student at Simon Fraser University.
                            I’m passionate about software development, machine learning, and creating impactful web applications.
                            I love solving problems with code and exploring new technologies.
                            When I’m not coding, you can find me gaming or enjoying a good movie.
                            Thanks for checking out my portfolio!
                        </p>
                        <div className="flex flex-col xl:flex-row items-center">
                            <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent
                            rounded-full flex justify-center items-center text-accent-default text-base hover:bg-accent-default
                            hover:text-primary hover:transition-all duration-500" />
                        </div>
                    </div>
                    <div className=" order-1 xL:order-none flex-1 h-[900px] w-[400px] xl:ml-10">
                         <Canvas camera={{position: [0, 2, 5]}}>
                         <ambientLight intensity={5}/>
                         <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2}/>
                         <directionalLight position={[10, 10, 10]} intensity={1}/>
                         <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>
                         <Suspense fallback={null}>
                         <Character position-y={-1.9} position-x={0.4} scale={2.2}/>
                         </Suspense>
                         </Canvas>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default HomeSection;
