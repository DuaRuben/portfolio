/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Charactor=(props)=> {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/Ruben_Charactor.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Ruben" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <skinnedMesh
                        name="Ch33_Belt"
                        geometry={nodes.Ch33_Belt.geometry}
                        material={materials.Ch33_body}
                        skeleton={nodes.Ch33_Belt.skeleton}
                    />
                    <skinnedMesh
                        name="Ch33_Body"
                        geometry={nodes.Ch33_Body.geometry}
                        material={materials.Ch33_body}
                        skeleton={nodes.Ch33_Body.skeleton}
                    />
                    <skinnedMesh
                        name="Ch33_Eyelashes"
                        geometry={nodes.Ch33_Eyelashes.geometry}
                        material={materials.Ch33_hair}
                        skeleton={nodes.Ch33_Eyelashes.skeleton}
                    />
                    <skinnedMesh
                        name="Ch33_Hair"
                        geometry={nodes.Ch33_Hair.geometry}
                        material={materials.Ch33_hair}
                        skeleton={nodes.Ch33_Hair.skeleton}
                    />
                    <skinnedMesh
                        name="Ch33_Pants"
                        geometry={nodes.Ch33_Pants.geometry}
                        material={materials.Ch33_body}
                        skeleton={nodes.Ch33_Pants.skeleton}
                    />
                    <skinnedMesh
                        name="Ch33_Shirt"
                        geometry={nodes.Ch33_Shirt.geometry}
                        material={materials.Ch33_body}
                        skeleton={nodes.Ch33_Shirt.skeleton}
                    />
                    <skinnedMesh
                        name="Ch33_Shoes"
                        geometry={nodes.Ch33_Shoes.geometry}
                        material={materials.Ch33_body}
                        skeleton={nodes.Ch33_Shoes.skeleton}
                    />
                    <skinnedMesh
                        name="Ch33_Suit"
                        geometry={nodes.Ch33_Suit.geometry}
                        material={materials.Ch33_body}
                        skeleton={nodes.Ch33_Suit.skeleton}
                    />
                    <skinnedMesh
                        name="Ch33_Tie"
                        geometry={nodes.Ch33_Tie.geometry}
                        material={materials.Ch33_body}
                        skeleton={nodes.Ch33_Tie.skeleton}
                    />
                    <primitive object={nodes.mixamorig7Hips} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/Ruben_Charactor.glb')

export default Charactor;