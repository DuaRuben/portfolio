import { useState } from "react";

export function useStairTransition() {
    const [isTransitioning, setIsTransitioning] = useState(false);

    const startTransition = (callback: () => void) => {
        setIsTransitioning(true);
        setTimeout(() => {
            callback();
            setIsTransitioning(false);
        }, 1000); // Total animation duration
    };

    return { isTransitioning, startTransition };
}
