import { useRef, useMemo } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Sphere, Ring, Stars as SpaceStars } from '@react-three/drei'
import * as THREE from 'three'

// Create procedural texture for planets
function createPlanetTexture(name) {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  
  if (name === 'Sun') {
    // Sun: fiery texture
    const gradient = ctx.createRadialGradient(512, 256, 50, 512, 256, 512)
    gradient.addColorStop(0, '#FFFF00')
    gradient.addColorStop(0.5, '#FFA500')
    gradient.addColorStop(1, '#FF4500')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 1024, 512)
    
    // Add solar flares
    for (let i = 0; i < 200; i++) {
      ctx.fillStyle = `rgba(255, ${100 + Math.random() * 155}, 0, ${Math.random() * 0.3})`
      ctx.beginPath()
      ctx.arc(Math.random() * 1024, Math.random() * 512, Math.random() * 30, 0, Math.PI * 2)
      ctx.fill()
    }
  } else if (name === 'Earth') {
    // Earth: blue oceans and green/brown continents
    ctx.fillStyle = '#1E6BA8'
    ctx.fillRect(0, 0, 1024, 512)
    
    // Add landmasses
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = i % 2 === 0 ? '#228B22' : '#8B7355'
      ctx.beginPath()
      ctx.arc(Math.random() * 1024, Math.random() * 512, 20 + Math.random() * 80, 0, Math.PI * 2)
      ctx.fill()
    }
  } else if (name === 'Mars') {
    // Mars: red rocky surface
    ctx.fillStyle = '#CD5C5C'
    ctx.fillRect(0, 0, 1024, 512)
    
    // Add craters and surface details
    for (let i = 0; i < 100; i++) {
      const shade = Math.random() > 0.5 ? '#A0522D' : '#8B4513'
      ctx.fillStyle = shade
      ctx.beginPath()
      ctx.arc(Math.random() * 1024, Math.random() * 512, 2 + Math.random() * 15, 0, Math.PI * 2)
      ctx.fill()
    }
  } else if (name === 'Jupiter') {
    // Jupiter: banded gas giant
    const numBands = 12
    for (let i = 0; i < numBands; i++) {
      const colors = ['#C88B3A', '#E0A75E', '#B87333', '#D4A574']
      ctx.fillStyle = colors[i % colors.length]
      ctx.fillRect(0, (512 / numBands) * i, 1024, 512 / numBands)
    }
    
    // Add Great Red Spot
    ctx.fillStyle = '#E27B58'
    ctx.beginPath()
    ctx.ellipse(400, 300, 60, 40, 0, 0, Math.PI * 2)
    ctx.fill()
  } else if (name === 'Saturn') {
    // Saturn: pale yellow with subtle bands
    const numBands = 8
    for (let i = 0; i < numBands; i++) {
      const colors = ['#F4E4C1', '#FAD5A5', '#E8D4A0']
      ctx.fillStyle = colors[i % colors.length]
      ctx.fillRect(0, (512 / numBands) * i, 1024, 512 / numBands)
    }
  } else {
    // Generic rocky texture
    const baseColors = {
      'Mercury': '#8C8C8C',
      'Venus': '#E8C474',
      'Uranus': '#4FD0E7',
      'Neptune': '#2F5F9F'
    }
    ctx.fillStyle = baseColors[name] || '#888888'
    ctx.fillRect(0, 0, 1024, 512)
    
    // Add surface noise
    for (let i = 0; i < 500; i++) {
      const brightness = Math.random() * 50 - 25
      ctx.fillStyle = `rgba(${128 + brightness}, ${128 + brightness}, ${128 + brightness}, 0.3)`
      ctx.fillRect(Math.random() * 1024, Math.random() * 512, 2, 2)
    }
  }
  
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

// Create bump map for surface details
function createBumpMap(name) {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext('2d')
  
  const imageData = ctx.createImageData(512, 512)
  for (let i = 0; i < imageData.data.length; i += 4) {
    const noise = Math.random() * 255
    imageData.data[i] = noise
    imageData.data[i + 1] = noise
    imageData.data[i + 2] = noise
    imageData.data[i + 3] = 255
  }
  ctx.putImageData(imageData, 0, 0)
  
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

// Planet component with realistic textures
function Planet({ size, color, position, orbitSpeed, rotationSpeed, name, hasRings, hasAtmosphere, atmosphereColor }) {
  const planetRef = useRef()
  const orbitRef = useRef()
  const cloudsRef = useRef()

  // Create textures
  const texture = useMemo(() => createPlanetTexture(name), [name])
  const bumpMap = useMemo(() => createBumpMap(name), [name])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    // Orbit around the sun
    if (orbitRef.current) {
      const angle = t * orbitSpeed
      orbitRef.current.position.x = Math.cos(angle) * position
      orbitRef.current.position.z = Math.sin(angle) * position
    }
    
    // Planet rotation
    if (planetRef.current) {
      planetRef.current.rotation.y = t * rotationSpeed
    }
    
    // Clouds rotation (slightly faster for Earth)
    if (cloudsRef.current && name === 'Earth') {
      cloudsRef.current.rotation.y = t * (rotationSpeed * 1.1)
    }
  })

  return (
    <group ref={orbitRef}>
      {/* Main planet sphere with texture and bump mapping */}
      <Sphere ref={planetRef} args={[size, 128, 128]}>
        <meshStandardMaterial
          map={texture}
          bumpMap={bumpMap}
          bumpScale={0.05}
          roughness={name === 'Earth' ? 0.7 : 0.9}
          metalness={name === 'Earth' ? 0.1 : 0.05}
        />
      </Sphere>
      
      {/* Earth's cloud layer with transparency */}
      {name === 'Earth' && (
        <Sphere ref={cloudsRef} args={[size * 1.01, 64, 64]}>
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.2}
            depthWrite={false}
            roughness={1}
          />
        </Sphere>
      )}
      
      {/* Atmosphere glow */}
      {hasAtmosphere && (
        <>
          <Sphere args={[size * 1.15, 32, 32]}>
            <meshBasicMaterial
              color={atmosphereColor || color}
              transparent
              opacity={0.15}
              side={THREE.BackSide}
            />
          </Sphere>
          {/* Outer atmosphere glow */}
          <Sphere args={[size * 1.25, 32, 32]}>
            <meshBasicMaterial
              color={atmosphereColor || color}
              transparent
              opacity={0.05}
              side={THREE.BackSide}
            />
          </Sphere>
        </>
      )}
      
      {/* Saturn's rings with multiple bands */}
      {hasRings && (
        <>
          <Ring args={[size * 1.5, size * 1.8, 64]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial
              color="#D4A574"
              side={THREE.DoubleSide}
              transparent
              opacity={0.9}
              roughness={0.8}
            />
          </Ring>
          <Ring args={[size * 1.85, size * 2.1, 64]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial
              color="#C9A770"
              side={THREE.DoubleSide}
              transparent
              opacity={0.7}
              roughness={0.8}
            />
          </Ring>
          <Ring args={[size * 2.15, size * 2.3, 64]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial
              color="#B8955F"
              side={THREE.DoubleSide}
              transparent
              opacity={0.5}
              roughness={0.8}
            />
          </Ring>
        </>
      )}
      
      {/* Orbit path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[position - 0.005, position + 0.005, 128]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

function Scene3D() {
  const sunRef = useRef()
  
  // Create sun texture
  const sunTexture = useMemo(() => createPlanetTexture('Sun'), [])

  // Sun rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (sunRef.current) {
      sunRef.current.rotation.y = t * 0.1
    }
  })

  return (
    <>
      {/* Space background with stars */}
      <SpaceStars 
        radius={300} 
        depth={100} 
        count={8000} 
        factor={6} 
        saturation={0} 
        fade 
      />

      {/* Ambient space lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={3} decay={1.5} color="#FFF5E1" />
      <directionalLight position={[5, 3, 5]} intensity={0.5} color="#ffffff" />

      {/* The Sun - realistic with texture and emission */}
      <Sphere ref={sunRef} args={[1.2, 128, 128]} position={[0, 0, 0]}>
        <meshBasicMaterial
          map={sunTexture}
          toneMapped={false}
        />
      </Sphere>

      {/* Sun corona layers */}
      <Sphere args={[1.35, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#FFD700"
          transparent
          opacity={0.3}
        />
      </Sphere>
      <Sphere args={[1.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#FDB813"
          transparent
          opacity={0.2}
        />
      </Sphere>
      <Sphere args={[1.7, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#FF8C00"
          transparent
          opacity={0.1}
        />
      </Sphere>

      {/* Mercury - Rocky gray surface */}
      <Planet
        size={0.18}
        color="#8C8C8C"
        position={2.5}
        orbitSpeed={0.8}
        rotationSpeed={0.5}
        name="Mercury"
        hasAtmosphere={false}
      />

      {/* Venus - Thick yellowish atmosphere */}
      <Planet
        size={0.26}
        color="#E8C474"
        position={3.8}
        orbitSpeed={0.6}
        rotationSpeed={0.2}
        name="Venus"
        hasAtmosphere={true}
        atmosphereColor="#FFC649"
      />

      {/* Earth - Blue oceans and green continents with atmosphere */}
      <Planet
        size={0.28}
        color="#1E6BA8"
        position={5.2}
        orbitSpeed={0.5}
        rotationSpeed={0.8}
        name="Earth"
        hasAtmosphere={true}
        atmosphereColor="#6BB6FF"
      />

      {/* Mars - Rusty red surface */}
      <Planet
        size={0.22}
        color="#CD5C5C"
        position={6.8}
        orbitSpeed={0.4}
        rotationSpeed={0.7}
        name="Mars"
        hasAtmosphere={true}
        atmosphereColor="#E89B8F"
      />

      {/* Jupiter - Gas giant with bands */}
      <Planet
        size={0.65}
        color="#C88B3A"
        position={10}
        orbitSpeed={0.25}
        rotationSpeed={1.2}
        name="Jupiter"
        hasAtmosphere={true}
        atmosphereColor="#D4A574"
      />

      {/* Saturn - Pale yellow with spectacular rings */}
      <Planet
        size={0.55}
        color="#F4E4C1"
        position={13.5}
        orbitSpeed={0.18}
        rotationSpeed={0.9}
        name="Saturn"
        hasRings={true}
        hasAtmosphere={true}
        atmosphereColor="#FAE5B8"
      />

      {/* Uranus - Pale cyan ice giant */}
      <Planet
        size={0.38}
        color="#4FD0E7"
        position={17}
        orbitSpeed={0.12}
        rotationSpeed={0.6}
        name="Uranus"
        hasAtmosphere={true}
        atmosphereColor="#7FE0F0"
      />

      {/* Neptune - Deep blue ice giant */}
      <Planet
        size={0.36}
        color="#2F5F9F"
        position={20}
        orbitSpeed={0.08}
        rotationSpeed={0.5}
        name="Neptune"
        hasAtmosphere={true}
        atmosphereColor="#4A7FC1"
      />

      {/* Asteroid belt between Mars and Jupiter - more realistic */}
      {[...Array(150)].map((_, i) => {
        const angle = (i / 150) * Math.PI * 2
        const radius = 8 + (Math.random() * 1.2)
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = (Math.random() - 0.5) * 0.4
        const size = 0.015 + Math.random() * 0.025
        
        return (
          <Sphere
            key={`asteroid-${i}`}
            args={[size, 6, 6]}
            position={[x, y, z]}
          >
            <meshPhongMaterial
              color={i % 3 === 0 ? "#6B5D55" : i % 3 === 1 ? "#8B7355" : "#9B8365"}
              roughness={0.95}
              shininess={1}
            />
          </Sphere>
        )
      })}

      {/* Add some distant galaxies/nebulae as colored glows */}
      {[...Array(5)].map((_, i) => (
        <Sphere
          key={`galaxy-${i}`}
          args={[0.5, 16, 16]}
          position={[
            Math.cos(i * 1.2) * 25,
            Math.sin(i * 0.8) * 15,
            -30 - i * 5
          ]}
        >
          <meshBasicMaterial
            color={new THREE.Color().setHSL(i / 5, 0.6, 0.5)}
            transparent
            opacity={0.15}
          />
        </Sphere>
      ))}
    </>
  )
}

export default Scene3D
