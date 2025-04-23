"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

interface ParticleIconProps {
  type: "star" | "globe" | "rocket"
  className?: string
}

// Individual Three.js canvas for each icon
function ParticleIcon({ type, className = "" }: ParticleIconProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Set up scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 5

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(150, 150)
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const geometry = new THREE.BufferGeometry()
    const positions: number[] = []
    const colors: number[] = []
    const particleCount = 200

    // Different particle arrangements based on icon type
    if (type === "star") {
      // Star pattern
      for (let i = 0; i < particleCount; i++) {
        // Create a star-like pattern
        const angle = Math.random() * Math.PI * 2
        const radius = 0.5 + Math.random() * 1.5
        const height = (Math.random() - 0.5) * 2

        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const z = height

        positions.push(x, y, z)

        // Orange color with slight variation
        colors.push(0.98, 0.45, 0.09 + Math.random() * 0.1)
      }

      // Add a center sphere for the star
      const coreSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xf97316 }),
      )
      scene.add(coreSphere)

      // Add glow
      const starSpikes = new THREE.Mesh(
        new THREE.OctahedronGeometry(1.2, 0),
        new THREE.MeshBasicMaterial({
          color: 0xf97316,
          wireframe: true,
          transparent: true,
          opacity: 0.5,
        }),
      )
      scene.add(starSpikes)
    } else if (type === "globe") {
      // Globe pattern
      const radius = 1.5

      // Add a sphere for the globe
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 16, 16),
        new THREE.MeshBasicMaterial({
          color: 0x111111,
          wireframe: true,
          transparent: true,
          opacity: 0.3,
        }),
      )
      scene.add(sphere)

      // Add particles around the globe
      for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / particleCount)
        const theta = Math.sqrt(particleCount * Math.PI) * phi

        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.sin(phi) * Math.sin(theta)
        const z = radius * Math.cos(phi)

        positions.push(x, y, z)

        // Orange color with variation
        colors.push(0.98, 0.45, 0.09 + Math.random() * 0.1)
      }

      // Add equator ring
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.05, 16, 50),
        new THREE.MeshBasicMaterial({ color: 0xf97316 }),
      )
      ring.rotation.x = Math.PI / 2
      scene.add(ring)
    } else if (type === "rocket") {
      // Rocket pattern with particles as exhaust
      // Main rocket body
      const rocketBody = new THREE.Mesh(
        new THREE.ConeGeometry(0.8, 2, 8),
        new THREE.MeshBasicMaterial({ color: 0xf97316 }),
      )
      rocketBody.position.y = 0.5
      rocketBody.rotation.x = Math.PI
      scene.add(rocketBody)

      // Rocket fins
      const finGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.1)
      const finMaterial = new THREE.MeshBasicMaterial({ color: 0xea580c })

      const fin1 = new THREE.Mesh(finGeometry, finMaterial)
      fin1.position.set(0.8, -0.2, 0)
      scene.add(fin1)

      const fin2 = new THREE.Mesh(finGeometry, finMaterial)
      fin2.position.set(-0.8, -0.2, 0)
      scene.add(fin2)

      // Rocket window
      const window = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x222222 }),
      )
      window.position.y = 0.5
      scene.add(window)

      // Particles for exhaust
      for (let i = 0; i < particleCount; i++) {
        const spread = 1
        const y = -1 - Math.random() * 3
        const x = (Math.random() - 0.5) * spread * (1 + y * 0.3)
        const z = (Math.random() - 0.5) * spread * (1 + y * 0.3)

        positions.push(x, y, z)

        // Orange/red for exhaust with more variation
        const red = 0.98
        const green = 0.35 + Math.random() * 0.3
        const blue = 0.05 + Math.random() * 0.1
        colors.push(red, green, blue)
      }
    }

    // Create the particle system
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    particlesGeometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particleSystem)

    // Animation loop
    let frameId: number
    let time = 0

    const animate = () => {
      time += 0.01

      if (type === "star") {
        particleSystem.rotation.y = time * 0.2
        particleSystem.rotation.z = time * 0.1
      } else if (type === "globe") {
        particleSystem.rotation.y = time * 0.2
      } else if (type === "rocket") {
        // Make exhaust particles flicker and move
        const positions = particleSystem.geometry.attributes.position.array
        for (let i = 0; i < positions.length; i += 3) {
          // Only modify y position (exhaust trail)
          positions[i + 1] -= 0.03
          // Reset particles that go too far
          if (positions[i + 1] < -4) {
            positions[i + 1] = -1
            positions[i] = (Math.random() - 0.5) * 0.8
            positions[i + 2] = (Math.random() - 0.5) * 0.8
          }
        }
        particleSystem.geometry.attributes.position.needsUpdate = true
      }

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    animate()

    // Clean up
    return () => {
      cancelAnimationFrame(frameId)
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
      // Dispose of resources
      scene.clear()
      renderer.dispose()
    }
  }, [type])

  return <div ref={containerRef} className={`w-[150px] h-[150px] ${className}`}></div>
}

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="w-full py-16 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-orange-500 text-sm font-medium uppercase tracking-wider mb-2">OUR VALUE PROPOSITION</div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter text-white">
            The Apex Advantage
          </h2>
          <p className="text-zinc-400 text-sm tracking-tight leading-relaxed">
            Harness the power of Apex's advanced stablecoin infrastructure to create seamless payment experiences and
            eliminate traditional financial barriers on the Solana blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Box 1 */}
          <div className="relative overflow-hidden bg-zinc-900/40 backdrop-blur-md rounded-xl border border-zinc-800 p-8 transition-all duration-300 hover:border-orange-900 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            {/* Hexagon wrapper */}
            <div className="flex justify-center items-center mb-8 relative z-10">
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* Hexagon background */}
                <svg width="150" height="150" viewBox="0 0 150 150" className="absolute inset-0">
                  <polygon
                    points="75,5 140,40 140,110 75,145 10,110 10,40"
                    fill="#3D1D00"
                    stroke="#F97316"
                    strokeWidth="1"
                    className="transition-all duration-300 group-hover:stroke-opacity-100"
                  />
                  {/* Circuit patterns */}
                  <path
                    d="M75,5 L75,30 M140,40 L115,40 M140,110 L115,110 M75,145 L75,120 M10,110 L35,110 M10,40 L35,40"
                    stroke="#F97316"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                    fill="none"
                    className="transition-all duration-300 group-hover:stroke-opacity-100"
                  />
                  <circle cx="75" cy="30" r="3" fill="#F97316" />
                  <circle cx="115" cy="40" r="3" fill="#F97316" />
                  <circle cx="115" cy="110" r="3" fill="#F97316" />
                  <circle cx="75" cy="120" r="3" fill="#F97316" />
                  <circle cx="35" cy="110" r="3" fill="#F97316" />
                  <circle cx="35" cy="40" r="3" fill="#F97316" />
                </svg>

                {/* Three.js icon */}
                <ParticleIcon type="star" className="z-10" />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-medium text-white tracking-tighter mb-2 relative z-10">Instant Finality</h3>
            <p className="text-zinc-400 relative z-10 text-sm font-medium tracking-tight">
              Experience sub-second transaction settlement on Solana's high-performance blockchain, eliminating payment
              delays and enabling real-time financial operations.
            </p>

            {/* Plus button */}
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Feature Box 2 */}
          <div className="relative overflow-hidden bg-zinc-900/40 backdrop-blur-md rounded-xl border border-zinc-800 p-8 transition-all duration-300 hover:border-orange-900 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            {/* Hexagon wrapper */}
            <div className="flex justify-center items-center mb-8 relative z-10">
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* Hexagon background */}
                <svg width="150" height="150" viewBox="0 0 150 150" className="absolute inset-0">
                  <polygon
                    points="75,5 140,40 140,110 75,145 10,110 10,40"
                    fill="#3D1D00"
                    stroke="#F97316"
                    strokeWidth="1"
                    className="transition-all duration-300 group-hover:stroke-opacity-100"
                  />
                  {/* Circuit patterns */}
                  <path
                    d="M75,5 L75,30 M140,40 L115,40 M140,110 L115,110 M75,145 L75,120 M10,110 L35,110 M10,40 L35,40"
                    stroke="#F97316"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                    fill="none"
                    className="transition-all duration-300 group-hover:stroke-opacity-100"
                  />
                  <circle cx="75" cy="30" r="3" fill="#F97316" />
                  <circle cx="115" cy="40" r="3" fill="#F97316" />
                  <circle cx="115" cy="110" r="3" fill="#F97316" />
                  <circle cx="75" cy="120" r="3" fill="#F97316" />
                  <circle cx="35" cy="110" r="3" fill="#F97316" />
                  <circle cx="35" cy="40" r="3" fill="#F97316" />
                </svg>

                {/* Three.js icon */}
                <ParticleIcon type="globe" className="z-10" />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-2 relative z-10">Global Accessibility</h3>
            <p className="text-zinc-400 relative z-10 text-sm font-medium tracking-tight">
              Borderless payment infrastructure that enables seamless transactions across countries and currencies, all
              secured by stablecoin stability.
            </p>

            {/* Plus button */}
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Feature Box 3 */}
          <div className="relative overflow-hidden bg-zinc-900/40 backdrop-blur-md rounded-xl border border-zinc-800 p-8 transition-all duration-300 hover:border-orange-900 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            {/* Hexagon wrapper */}
            <div className="flex justify-center items-center mb-8 relative z-10">
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* Hexagon background */}
                <svg width="150" height="150" viewBox="0 0 150 150" className="absolute inset-0">
                  <polygon
                    points="75,5 140,40 140,110 75,145 10,110 10,40"
                    fill="#3D1D00"
                    stroke="#F97316"
                    strokeWidth="1"
                    className="transition-all duration-300 group-hover:stroke-opacity-100"
                  />
                  {/* Circuit patterns */}
                  <path
                    d="M75,5 L75,30 M140,40 L115,40 M140,110 L115,110 M75,145 L75,120 M10,110 L35,110 M10,40 L35,40"
                    stroke="#F97316"
                    strokeWidth="1"
                    strokeOpacity="0.5"
                    fill="none"
                    className="transition-all duration-300 group-hover:stroke-opacity-100"
                  />
                  <circle cx="75" cy="30" r="3" fill="#F97316" />
                  <circle cx="115" cy="40" r="3" fill="#F97316" />
                  <circle cx="115" cy="110" r="3" fill="#F97316" />
                  <circle cx="75" cy="120" r="3" fill="#F97316" />
                  <circle cx="35" cy="110" r="3" fill="#F97316" />
                  <circle cx="35" cy="40" r="3" fill="#F97316" />
                </svg>

                {/* Three.js icon */}
                <ParticleIcon type="rocket" className="z-10" />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-medium text-white mb-2 relative z-10">Limitless Innovation</h3>
            <p className="text-zinc-400 relative z-10">
              Build the future of finance with developer-friendly tools that enable programmable money flows, custom
              payment logic, and new financial products.
            </p>

            {/* Plus button */}
            <div className="absolute bottom-6 right-6">
              <div className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
