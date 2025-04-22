"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function NetworkVisualization() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const pointsRef = useRef<THREE.Points | null>(null)
  const frameIdRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 200
    cameraRef.current = camera

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000
    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)

    // Create sphere of particles
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position in sphere
      const radius = 100
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      posArray[i] = radius * Math.sin(phi) * Math.cos(theta)
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      posArray[i + 2] = radius * Math.cos(phi)

      // Orange color with variation
      colorArray[i] = 0.9 + Math.random() * 0.1 // R - high for orange
      colorArray[i + 1] = 0.3 + Math.random() * 0.2 // G - medium for orange
      colorArray[i + 2] = 0.0 + Math.random() * 0.1 // B - low for orange
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3))

    // Material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    })

    // Create points
    const points = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(points)
    pointsRef.current = points

    // Add connections between nearby points
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.2,
    })

    const connections: THREE.Line[] = []
    const maxConnections = 300
    const maxDistance = 40

    for (let i = 0; i < maxConnections; i++) {
      const index1 = Math.floor(Math.random() * particlesCount)
      const index2 = Math.floor(Math.random() * particlesCount)

      const x1 = posArray[index1 * 3]
      const y1 = posArray[index1 * 3 + 1]
      const z1 = posArray[index1 * 3 + 2]

      const x2 = posArray[index2 * 3]
      const y2 = posArray[index2 * 3 + 1]
      const z2 = posArray[index2 * 3 + 2]

      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2))

      if (distance < maxDistance) {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(x1, y1, z1),
          new THREE.Vector3(x2, y2, z2),
        ])
        const line = new THREE.Line(lineGeometry, lineMaterial)
        scene.add(line)
        connections.push(line)
      }
    }

    // Animation
    const animate = () => {
      if (!pointsRef.current || !sceneRef.current || !cameraRef.current || !rendererRef.current) return

      pointsRef.current.rotation.x += 0.0005
      pointsRef.current.rotation.y += 0.0008

      // Rotate connections with points
      connections.forEach((line) => {
        line.rotation.x += 0.0005
        line.rotation.y += 0.0008
      })

      rendererRef.current.render(sceneRef.current, cameraRef.current)
      frameIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(frameIdRef.current)

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }

      connections.forEach((line) => {
        line.geometry.dispose()
        if (line.material instanceof THREE.Material) {
          line.material.dispose()
        }
      })

      if (pointsRef.current) {
        pointsRef.current.geometry.dispose()
        if (pointsRef.current.material instanceof THREE.Material) {
          pointsRef.current.material.dispose()
        }
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 z-0" />
}
