import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Group } from 'three'

function useIsMobile() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 980px)').matches
}

function CoiledTorus({ mobile }: { mobile: boolean }) {
  const group = useRef<Group>(null)
  const rings = useMemo(
    () =>
      Array.from({ length: mobile ? 6 : 8 }, (_, i) => ({
        y: i * 0.07 - (mobile ? 0.18 : 0.24),
        color: i % 2 === 0 ? '#38bdf8' : '#1d4ed8',
        emissive: i % 2 === 0 ? '#0ea5e9' : '#1e3a8a',
      })),
    [mobile],
  )

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.45
    group.current.rotation.x = 0.55 + Math.sin(state.clock.elapsedTime * 0.4) * 0.08
    group.current.rotation.z = 0.15
  })

  const radial = mobile ? 12 : 18
  const tubular = mobile ? 96 : 160

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.35}>
      <group ref={group}>
        {rings.map((ring) => (
          <mesh key={ring.y} position={[0, ring.y, 0]} rotation={[Math.PI / 2.35, 0, 0]}>
            <torusGeometry args={[1.55, 0.055, radial, tubular]} />
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
  const mobile = useIsMobile()

  return (
    <Canvas
      camera={{ position: [0, 0.4, 4.4], fov: 42 }}
      dpr={mobile ? [1, 1.25] : [1, 1.75]}
      gl={{ alpha: true, antialias: !mobile, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 3, 5]} intensity={2.2} color="#dbeafe" />
      <pointLight position={[-3, -1, 2]} intensity={1.6} color="#38bdf8" />
      <CoiledTorus mobile={mobile} />
      <ContactShadows position={[0, -1.7, 0]} opacity={0.45} blur={mobile ? 1.6 : 2.8} scale={8} />
    </Canvas>
  )
}
