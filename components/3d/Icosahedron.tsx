"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Icosahedron as DreiIcosahedron } from "@react-three/drei"
import * as THREE from "three"

export default function Icosahedron() {
  const meshRef = useRef<THREE.Mesh>(null)
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
      meshRef.current.rotation.x += delta * 0.1
      
      timeRef.current += delta
      meshRef.current.position.y = Math.sin(timeRef.current) * 0.2
    }
  })

  return (
    <DreiIcosahedron ref={meshRef} args={[1, 0]}>
      <meshStandardMaterial
        color="#3b82f6" // blue-500
        wireframe={true}
        emissive="#3b82f6"
        emissiveIntensity={0.5}
      />
    </DreiIcosahedron>
  )
}
