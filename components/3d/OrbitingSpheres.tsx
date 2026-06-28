"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import * as THREE from "three"

const SPHERES = [
  { color: "#3b82f6", radius: 0.2, orbitRadius: 1.5, speed: 0.5, offset: 0 },
  { color: "#10b981", radius: 0.15, orbitRadius: 2.0, speed: 0.3, offset: Math.PI / 2 },
  { color: "#8b5cf6", radius: 0.25, orbitRadius: 2.5, speed: 0.4, offset: Math.PI },
  { color: "#f59e0b", radius: 0.18, orbitRadius: 1.8, speed: 0.6, offset: (Math.PI * 3) / 2 },
  { color: "#ef4444", radius: 0.22, orbitRadius: 3.0, speed: 0.2, offset: Math.PI / 4 },
  { color: "#06b6d4", radius: 0.16, orbitRadius: 2.2, speed: 0.45, offset: (Math.PI * 7) / 4 },
]

export default function OrbitingSpheres() {
  const groupRef = useRef<THREE.Group>(null)
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    if (!groupRef.current) return
    timeRef.current += delta
    const time = timeRef.current

    groupRef.current.children.forEach((child, i) => {
      const sphereData = SPHERES[i]
      if (!sphereData) return

      // Calculate orbiting position
      const angle = time * sphereData.speed + sphereData.offset
      child.position.x = Math.cos(angle) * sphereData.orbitRadius
      child.position.z = Math.sin(angle) * sphereData.orbitRadius
      
      // Add slight vertical bobbing
      child.position.y = Math.sin(time * 2 + i) * 0.2
    })
    
    // Slowly rotate the entire group for extra dynamism
    groupRef.current.rotation.y = time * 0.1
    groupRef.current.rotation.x = Math.sin(time * 0.05) * 0.2
  })

  return (
    <group ref={groupRef}>
      {SPHERES.map((s, i) => (
        <Sphere key={i} args={[s.radius, 16, 16]}>
          <meshBasicMaterial color={s.color} wireframe={true} transparent opacity={0.6} />
        </Sphere>
      ))}
      {/* Center point */ }
      <Sphere args={[0.1, 8, 8]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </Sphere>
    </group>
  )
}
