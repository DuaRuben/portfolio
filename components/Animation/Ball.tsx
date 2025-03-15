import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

interface BallProps {
    textureUrl: string; // URL of the logo texture
    position: [number, number, number]; // Position of the ball in 3D space
}

const Ball = ({ textureUrl, position }: BallProps) => {
    const ballRef = useRef<THREE.Mesh>(null!);  // Reference to the ball mesh
    const texture = useLoader(TextureLoader, textureUrl);  // Loading the logo texture

    // Applying rotation to the ball on each frame
    useFrame(() => {
        if (ballRef.current) {
            ballRef.current.rotation.x += 0.01;
            ballRef.current.rotation.y += 0.01;
        }
    });

    return (
        <Sphere args={[1, 20, 20]} position={position} ref={ballRef}> {/* Sphere geometry */}
            <meshStandardMaterial map={texture} /> {/* Apply the loaded texture to the ball */}
        </Sphere>
    );
};

export default Ball;
