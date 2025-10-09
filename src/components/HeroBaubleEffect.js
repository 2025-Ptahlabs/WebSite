import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows } from "@react-three/drei"

// PTAHLABS 컬러 테마 (밝게 조정)
const colors = [
  { color: "#3d5228", emissive: "#28391A", intensity: 0.2 }, // 중간 카키
  { color: "#4a6234", emissive: "#3d5228", intensity: 0.25 }, // 올리브 카키
  { color: "#5a7242", emissive: "#4a6234", intensity: 0.3 }, // 밝은 올리브
  { color: "#7A845C", emissive: "#5a6444", intensity: 0.35 }, // 연한 카키
  { color: "#8a9470", emissive: "#7A845C", intensity: 0.4 }, // 밝은 올리브
  { color: "#9ca67d", emissive: "#8a9470", intensity: 0.45 }, // 밝은 카키
  { color: "#b5b899", emissive: "#9ca67d", intensity: 0.4 }, // 연한 베이지 그린
  { color: "#C2B8A3", emissive: "#a89f8d", intensity: 0.35 }, // 베이지
  { color: "#d4cbb8", emissive: "#C2B8A3", intensity: 0.3 }, // 밝은 베이지
  { color: "#a89885", emissive: "#8a7d6a", intensity: 0.3 }, // 따뜻한 베이지
  { color: "#8f9178", emissive: "#7a7d62", intensity: 0.35 }, // 그린 베이지
  { color: "#6d7a54", emissive: "#5a6444", intensity: 0.3 }  // 미디엄 카키
]

function Sphere({ position, velocity, scale, offset, brightness, allSpheres, index, clickPos }) {
  const meshRef = useRef()
  const vel = useRef(velocity)
  const pos = useRef(position)

  useFrame((state, delta) => {
    if (!meshRef.current) return

    const time = state.clock.elapsedTime

    // Idle 모션: 부드러운 부유 효과 (진폭 감소)
    const idleX = Math.sin(time * 0.5 + offset) * 1
    const idleY = Math.cos(time * 0.3 + offset) * 1
    const idleZ = Math.sin(time * 0.4 + offset) * 0.5

    // 위치 업데이트
    pos.current[0] += vel.current[0] * delta
    pos.current[1] += vel.current[1] * delta
    pos.current[2] += vel.current[2] * delta

    // 다른 공들과의 충돌 감지 (폭발 시에는 약화)
    const collisionForce = clickPos.current.active ? 0.3 : 1.5
    allSpheres.current.forEach((other, i) => {
      if (i === index || !other.pos) return

      const dx = pos.current[0] - other.pos.current[0]
      const dy = pos.current[1] - other.pos.current[1]
      const dz = pos.current[2] - other.pos.current[2]
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
      const minDist = scale + other.scale + 2.5 // idle 모션 고려하여 여유 공간 증가

      if (distance < minDist && distance > 0.01) {
        // 충돌! 밀어내기 (폭발 시에는 약하게)
        const overlap = minDist - distance
        const force = overlap * collisionForce
        const nx = dx / distance
        const ny = dy / distance
        const nz = dz / distance

        // 위치도 즉시 조정 (폭발 시에는 약하게)
        const posForce = clickPos.current.active ? 0.1 : 0.5
        pos.current[0] += nx * overlap * posForce
        pos.current[1] += ny * overlap * posForce
        pos.current[2] += nz * overlap * posForce

        // 속도 변경
        vel.current[0] += nx * force
        vel.current[1] += ny * force
        vel.current[2] += nz * force
      }
    })

    // 중앙으로 복원하는 힘 (스프링 효과)
    const centerForce = 0.02
    vel.current[0] += -pos.current[0] * centerForce * delta
    vel.current[1] += -pos.current[1] * centerForce * delta
    vel.current[2] += -pos.current[2] * centerForce * delta

    // 경계 체크 및 부드러운 반사
    if (Math.abs(pos.current[0]) > 15) {
      vel.current[0] *= -0.8
      pos.current[0] = Math.sign(pos.current[0]) * 15
    }
    if (Math.abs(pos.current[1]) > 15) {
      vel.current[1] *= -0.8
      pos.current[1] = Math.sign(pos.current[1]) * 15
    }
    if (pos.current[2] > 10 || pos.current[2] < -10) {
      vel.current[2] *= -0.8
      pos.current[2] = pos.current[2] > 10 ? 10 : -10
    }

    // 클릭 시 폭발 효과
    if (clickPos.current.active && clickPos.current.frame < 3) {
      const clickX = clickPos.current.x
      const clickY = clickPos.current.y
      const cdx = pos.current[0] - clickX
      const cdy = pos.current[1] - clickY
      const clickDist = Math.sqrt(cdx * cdx + cdy * cdy)

      if (clickDist < 25) {
        // 폭발 효과: 클릭 위치에서 강하게 밀어냄
        const explosionForce = (1 - clickDist / 25) * 30
        vel.current[0] += (cdx / Math.max(clickDist, 0.1)) * explosionForce
        vel.current[1] += (cdy / Math.max(clickDist, 0.1)) * explosionForce
        vel.current[2] += (Math.random() - 0.5) * explosionForce * 0.8
      }

      // 폭발 프레임 카운터 증가
      if (index === 0) {
        clickPos.current.frame++
        if (clickPos.current.frame >= 3) {
          clickPos.current.active = false
        }
      }
    }

    // 마우스 인터랙션 (공들이 마우스를 따라옴)
    const mouseX = state.mouse.x * 12
    const mouseY = state.mouse.y * 12
    const dx = pos.current[0] - mouseX
    const dy = pos.current[1] - mouseY
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < 15) {
      // 거리에 따라 힘 조절 (가까울수록 강하게)
      const force = (1 - distance / 15) * 0.8
      vel.current[0] -= (dx / distance) * force
      vel.current[1] -= (dy / distance) * force
    }

    // 속도 감쇠
    vel.current[0] *= 0.98
    vel.current[1] *= 0.98
    vel.current[2] *= 0.98

    // 최종 위치 = 물리 위치 + idle 모션
    meshRef.current.position.set(
      pos.current[0] + idleX,
      pos.current[1] + idleY,
      pos.current[2] + idleZ
    )

    // 회전
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.3
  })

  // 다른 공들이 접근할 수 있도록 ref 저장
  if (allSpheres.current[index]) {
    allSpheres.current[index].pos = pos
    allSpheres.current[index].vel = vel
    allSpheres.current[index].scale = scale
  }

  const colorIndex = useMemo(() => Math.floor(Math.random() * colors.length), [])
  const selectedColor = colors[colorIndex]

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <sphereGeometry args={[scale, 32, 32]} />
      <meshStandardMaterial
        color={selectedColor.color}
        roughness={0.85}
        metalness={0.15}
        emissive={selectedColor.emissive}
        emissiveIntensity={selectedColor.intensity}
      />
    </mesh>
  )
}

function Spheres({ clickPosRef }) {
  const isMobile = window.innerWidth < 768
  const baseScale = isMobile ? 0.6 : 1.8
  const sphereCount = isMobile ? 80 : 55
  const allSpheresRef = useRef([])

  const spheres = useMemo(() => {
    const sphereData = [...Array(sphereCount)].map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 25
      ],
      velocity: [
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 2
      ],
      scale: baseScale + Math.random() * 0.65,
      offset: i * 0.5,
      brightness: Math.random() * 0.3
    }))

    // ref 배열 초기화
    allSpheresRef.current = sphereData.map(() => ({}))

    return sphereData
  }, [baseScale, sphereCount])

  return (
    <>
      {spheres.map((sphere, i) => (
        <Sphere key={i} {...sphere} allSpheres={allSpheresRef} index={i} clickPos={clickPosRef} />
      ))}
    </>
  )
}

export default function HeroBaubleEffect() {
  const clickPosRef = useRef({ active: false, x: 0, y: 0, frame: 0 })

  const handleClick = (event) => {
    // Canvas 영역 내 클릭 좌표를 3D 공간 좌표로 변환
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1

    clickPosRef.current = {
      active: true,
      x: x * 12,
      y: y * 12,
      frame: 0
    }

    console.log('Click!', clickPosRef.current)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        cursor: 'pointer'
      }}
    >
    <Canvas
      shadows
      camera={{ position: [0, 0, 20], fov: 50 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={4}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <directionalLight position={[-10, -10, -10]} intensity={2.5} color="#7A845C" />
      <directionalLight position={[0, 10, 5]} intensity={3} color="white" />
      <pointLight position={[0, 0, 15]} intensity={3} />
      <pointLight position={[15, 0, 0]} intensity={1.5} color="#9ca67d" />
      <pointLight position={[-15, 0, 0]} intensity={1.5} color="#C2B8A3" />

      <Spheres clickPosRef={clickPosRef} />

      {/* 바닥 그림자 */}
      <ContactShadows
        position={[0, -10, 0]}
        opacity={0.3}
        scale={50}
        blur={2}
        far={20}
        color="#28391A"
      />
    </Canvas>
    </div>
  )
}
