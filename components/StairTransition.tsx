"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Stairs from "@/components/Stairs";

const StairTransition = ({ isTransitioning }: { isTransitioning: boolean }) => {
    return (
        <AnimatePresence mode="wait">
            {isTransitioning && (
                <div key="stair-transition"> {/* Add a unique key and wrap elements */}
                    <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-40 flex">
                        <Stairs />
                    </div>
                    <motion.div
                        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
                    />
                </div>
            )}
        </AnimatePresence>
    );
};

export default StairTransition;
