/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: MajdyModels (https://sketchfab.com/MG990)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/iphone-16-pro-max-41a071ae12794b668502f58d1e0fd1a3
Title: iPhone 16 Pro Max
*/

import { useEffect, useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DemoPhone = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/models/iphone_16_-_free.glb");

    const txt = useVideoTexture(
        props.texture ? props.texture : "/textures/project/project1.mp4"
    );

    useEffect(() => {
        if (txt) {
            txt.flipY = false;
        }
    }, [txt]);

    useGSAP(() => {
        gsap.from(group.current.rotation, {
            y: Math.PI / 2,
            duration: 1,
            ease: "power3.Out",
        });
    }, [txt]);

    return (
        <group
            {...props}
            dispose={null}
            ref={group}
            position={[0, 0, 0]}
            scale={0.2}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_12.geometry}
                        material={materials.d79c406d92ac2ea2b462}
                    ></mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_14.geometry}
                        material={materials["8ed052ed6d3cd71ab5e3"]}
                    ></mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_16.geometry}
                        material={materials["5155c9eac3acd76d34a9"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_18.geometry}
                        material={materials["4130c6244c49c5d5712e"]}
                    >
                        <meshBasicMaterial map={txt} />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_20.geometry}
                        material={materials.a18b462c494e4fd29b4b}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_23.geometry}
                        material={materials.dee5a626f928a5fa4c28}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_25.geometry}
                        material={materials.e73cdd81f0248824c66f}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_27.geometry}
                        material={materials["5d66e4713803a9e0ad46"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_29.geometry}
                        material={materials["3b9594ccffa1d862f699"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_31.geometry}
                        material={materials["3a020e0705c66463c666"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_33.geometry}
                        material={materials["8293fe999d10eb51dc07"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_36.geometry}
                        material={materials.b23162de4d8409eb15f1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_38.geometry}
                        material={materials.e7fedd2cefc789ae4070}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_40.geometry}
                        material={materials.cf3bfd3f874c6277f037}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_42.geometry}
                        material={materials["483cd8d2505fcf4cc33c"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_44.geometry}
                        material={materials["13fa87e9b9ea638526bb"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_46.geometry}
                        material={materials.cecc91181f1dafcc19fa}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_48.geometry}
                        material={materials["2df164b7997e629e4d7e"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_50.geometry}
                        material={materials["103fc094f5cdada7aa57"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_52.geometry}
                        material={materials["25fa7b29639901e1f310"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_54.geometry}
                        material={materials["299a045923a299d97c82"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_57.geometry}
                        material={materials["82823ff934002f16e6e0"]}
                        position={[0, 0, 0.037]}
                    ></mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_59.geometry}
                        material={materials.b4ad12de1fcbdd61166e}
                    ></mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_62.geometry}
                        material={materials.ec12d37933cc378c1226}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_65.geometry}
                        material={materials.bfb52a03e58fd454437d}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_67.geometry}
                        material={materials["906edd797edf30e1b5ca"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_70.geometry}
                        material={materials.c306087c056eb775dddc}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_72.geometry}
                        material={materials["4a6c96a0e91c63810afa"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_74.geometry}
                        material={materials["4e2775e8ab652e8ec892"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_77.geometry}
                        material={materials.c1f38c49c59514a1f2d9}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_80.geometry}
                        material={materials.b8c5608ba04260006bf0}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_82.geometry}
                        material={materials["091912dc178e0b223122"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_84.geometry}
                        material={materials["6a2b4bcac74a0306e361"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_86.geometry}
                        material={materials.f960f58dcaeee45e59c1}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_88.geometry}
                        material={materials["50c2259ef1b62ea11389"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_90.geometry}
                        material={materials["994433e619f1f1513042"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_92.geometry}
                        material={materials["16d76ca3cbeebab956f0"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_94.geometry}
                        material={materials["15e105904fe114289c62"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_96.geometry}
                        material={materials.a86dab30a71ca989ac8c}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_98.geometry}
                        material={materials.a86dab30a71ca989ac8c}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_100.geometry}
                        material={materials.a86dab30a71ca989ac8c}
                    ></mesh>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload("/models/iphone_16_-_free.glb");
export default DemoPhone;
