"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { TorusKnot as DreiTorusKnot } from "@react-three/drei"
import * as THREE from "three"

export default function TorusKnot() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <DreiTorusKnot ref={meshRef} args={[1, 0.3, 100, 16]}>
      <meshBasicMaterial
        color="#3b82f6" // blue-500 to match hero
        wireframe={true}
      />
    </DreiTorusKnot>
  )
}
