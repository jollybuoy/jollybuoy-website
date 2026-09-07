import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Group } from 'three'

function CoiledTorus() {
  const group = useRef<Group>(null)
  const rings = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        y: i * 0.07 - 0.24,
        color: i % 2 === 0 ? '#38bdf8' : '#1d4ed8',
        emissive: i % 2 === 0 ? '#0ea5e9' : '#1e3a8a',
      })),
    [],
  )

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.35
    group.current.rotation.x = 0.55 + Math.sin(state.clock.elapsedTime * 0.4) * 0.08
    group.current.rotation.z = 0.15
  })

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.35}>
      <group ref={group}>
        {rings.map((ring) => (
          <mesh key={ring.y} position={[0, ring.y, 0]} rotation={[Math.PI / 2.35, 0, 0]}>
            <torusGeometry args={[1.55, 0.055, 18, 160]} />
            <meshStandardMaterial
              color={ring.color}
              metalness={0.92}
              roughness={0.12}
              emissive={ring.emissive}
              emissiveIntensity={0.22}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0.4, 4.4], fov: 42 }} dpr={[1, 1.75]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 3, 5]} intensity={2.2} color="#dbeafe" />
      <pointLight position={[-3, -1, 2]} intensity={1.6} color="#38bdf8" />
      <CoiledTorus />
      <ContactShadows position={[0, -1.7, 0]} opacity={0.45} blur={2.8} scale={8} />
    </Canvas>
  )
}
