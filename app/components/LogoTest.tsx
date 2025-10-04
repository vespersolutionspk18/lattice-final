'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface LogoTestProps {
  cubeColor?: string;
}

const LogoTest: React.FC<LogoTestProps> = ({ cubeColor = '#3b82f6' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const animationRef = useRef<{ angle: number; speed: number; targetSpeed: number }>({
    angle: 0,
    speed: 1,
    targetSpeed: 1
  })

  // Smaller cube with thicker elements
  const cubeSize = 24.96
  const svgSize = 65.52
  const centerX = 32.76
  const centerY = 32.76

  // Clean styling
  const edgeWidth = 3.9
  const sphereRadius = 4.55
  const sphereBorder = 1.17

  // Function to calculate isometric cube vertices based on rotation angle
  const calculateVertices = (angle: number) => {
    const rad = (angle * Math.PI) / 180

    const vertices3D = [
      // Bottom face (y = -1)
      { x: -1, y: -1, z: -1 }, // bottom-back-left
      { x: 1, y: -1, z: -1 },  // bottom-back-right
      { x: 1, y: -1, z: 1 },   // bottom-front-right
      { x: -1, y: -1, z: 1 },  // bottom-front-left
      // Top face (y = 1)
      { x: -1, y: 1, z: -1 },  // top-back-left
      { x: 1, y: 1, z: -1 },   // top-back-right
      { x: 1, y: 1, z: 1 },    // top-front-right
      { x: -1, y: 1, z: 1 }    // top-front-left
    ]

    const projectedVertices = vertices3D.map(v => {
      const rotatedX = v.x * Math.cos(rad) - v.z * Math.sin(rad)
      const rotatedZ = v.x * Math.sin(rad) + v.z * Math.cos(rad)

      const screenX = centerX + (rotatedX - rotatedZ) * cubeSize * 0.5
      const screenY = centerY + (v.y * cubeSize * 0.5 + (rotatedX + rotatedZ) * cubeSize * 0.25)

      return { x: screenX, y: screenY }
    })

    return {
      bottomBackLeft: projectedVertices[0],
      bottomBackRight: projectedVertices[1],
      bottomFrontRight: projectedVertices[2],
      bottomFrontLeft: projectedVertices[3],
      topBackLeft: projectedVertices[4],
      topBackRight: projectedVertices[5],
      topFrontRight: projectedVertices[6],
      topFrontLeft: projectedVertices[7]
    }
  }

  const vertices = calculateVertices(0)

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return

    let rafId: number

    const updateCube = () => {
      const verts = calculateVertices(animationRef.current.angle)

      // Update all edges and vertices using setAttribute for better performance
      const svg = svgRef.current
      if (!svg) return

      // Bottom front edge - border + edge
      svg.querySelector('#border-bottom-front')?.setAttribute('x1', verts.bottomFrontLeft.x.toString())
      svg.querySelector('#border-bottom-front')?.setAttribute('y1', verts.bottomFrontLeft.y.toString())
      svg.querySelector('#border-bottom-front')?.setAttribute('x2', verts.bottomFrontRight.x.toString())
      svg.querySelector('#border-bottom-front')?.setAttribute('y2', verts.bottomFrontRight.y.toString())
      svg.querySelector('#edge-bottom-front')?.setAttribute('x1', verts.bottomFrontLeft.x.toString())
      svg.querySelector('#edge-bottom-front')?.setAttribute('y1', verts.bottomFrontLeft.y.toString())
      svg.querySelector('#edge-bottom-front')?.setAttribute('x2', verts.bottomFrontRight.x.toString())
      svg.querySelector('#edge-bottom-front')?.setAttribute('y2', verts.bottomFrontRight.y.toString())

      // Bottom right
      svg.querySelector('#border-bottom-right')?.setAttribute('x1', verts.bottomFrontRight.x.toString())
      svg.querySelector('#border-bottom-right')?.setAttribute('y1', verts.bottomFrontRight.y.toString())
      svg.querySelector('#border-bottom-right')?.setAttribute('x2', verts.bottomBackRight.x.toString())
      svg.querySelector('#border-bottom-right')?.setAttribute('y2', verts.bottomBackRight.y.toString())
      svg.querySelector('#edge-bottom-right')?.setAttribute('x1', verts.bottomFrontRight.x.toString())
      svg.querySelector('#edge-bottom-right')?.setAttribute('y1', verts.bottomFrontRight.y.toString())
      svg.querySelector('#edge-bottom-right')?.setAttribute('x2', verts.bottomBackRight.x.toString())
      svg.querySelector('#edge-bottom-right')?.setAttribute('y2', verts.bottomBackRight.y.toString())

      // Bottom back
      svg.querySelector('#border-bottom-back')?.setAttribute('x1', verts.bottomBackRight.x.toString())
      svg.querySelector('#border-bottom-back')?.setAttribute('y1', verts.bottomBackRight.y.toString())
      svg.querySelector('#border-bottom-back')?.setAttribute('x2', verts.bottomBackLeft.x.toString())
      svg.querySelector('#border-bottom-back')?.setAttribute('y2', verts.bottomBackLeft.y.toString())
      svg.querySelector('#edge-bottom-back')?.setAttribute('x1', verts.bottomBackRight.x.toString())
      svg.querySelector('#edge-bottom-back')?.setAttribute('y1', verts.bottomBackRight.y.toString())
      svg.querySelector('#edge-bottom-back')?.setAttribute('x2', verts.bottomBackLeft.x.toString())
      svg.querySelector('#edge-bottom-back')?.setAttribute('y2', verts.bottomBackLeft.y.toString())

      // Bottom left
      svg.querySelector('#border-bottom-left')?.setAttribute('x1', verts.bottomBackLeft.x.toString())
      svg.querySelector('#border-bottom-left')?.setAttribute('y1', verts.bottomBackLeft.y.toString())
      svg.querySelector('#border-bottom-left')?.setAttribute('x2', verts.bottomFrontLeft.x.toString())
      svg.querySelector('#border-bottom-left')?.setAttribute('y2', verts.bottomFrontLeft.y.toString())
      svg.querySelector('#edge-bottom-left')?.setAttribute('x1', verts.bottomBackLeft.x.toString())
      svg.querySelector('#edge-bottom-left')?.setAttribute('y1', verts.bottomBackLeft.y.toString())
      svg.querySelector('#edge-bottom-left')?.setAttribute('x2', verts.bottomFrontLeft.x.toString())
      svg.querySelector('#edge-bottom-left')?.setAttribute('y2', verts.bottomFrontLeft.y.toString())

      // Vertical front left
      svg.querySelector('#border-vertical-front-left')?.setAttribute('x1', verts.bottomFrontLeft.x.toString())
      svg.querySelector('#border-vertical-front-left')?.setAttribute('y1', verts.bottomFrontLeft.y.toString())
      svg.querySelector('#border-vertical-front-left')?.setAttribute('x2', verts.topFrontLeft.x.toString())
      svg.querySelector('#border-vertical-front-left')?.setAttribute('y2', verts.topFrontLeft.y.toString())
      svg.querySelector('#edge-vertical-front-left')?.setAttribute('x1', verts.bottomFrontLeft.x.toString())
      svg.querySelector('#edge-vertical-front-left')?.setAttribute('y1', verts.bottomFrontLeft.y.toString())
      svg.querySelector('#edge-vertical-front-left')?.setAttribute('x2', verts.topFrontLeft.x.toString())
      svg.querySelector('#edge-vertical-front-left')?.setAttribute('y2', verts.topFrontLeft.y.toString())

      // Vertical front right
      svg.querySelector('#border-vertical-front-right')?.setAttribute('x1', verts.bottomFrontRight.x.toString())
      svg.querySelector('#border-vertical-front-right')?.setAttribute('y1', verts.bottomFrontRight.y.toString())
      svg.querySelector('#border-vertical-front-right')?.setAttribute('x2', verts.topFrontRight.x.toString())
      svg.querySelector('#border-vertical-front-right')?.setAttribute('y2', verts.topFrontRight.y.toString())
      svg.querySelector('#edge-vertical-front-right')?.setAttribute('x1', verts.bottomFrontRight.x.toString())
      svg.querySelector('#edge-vertical-front-right')?.setAttribute('y1', verts.bottomFrontRight.y.toString())
      svg.querySelector('#edge-vertical-front-right')?.setAttribute('x2', verts.topFrontRight.x.toString())
      svg.querySelector('#edge-vertical-front-right')?.setAttribute('y2', verts.topFrontRight.y.toString())

      // Vertical back left
      svg.querySelector('#border-vertical-back-left')?.setAttribute('x1', verts.bottomBackLeft.x.toString())
      svg.querySelector('#border-vertical-back-left')?.setAttribute('y1', verts.bottomBackLeft.y.toString())
      svg.querySelector('#border-vertical-back-left')?.setAttribute('x2', verts.topBackLeft.x.toString())
      svg.querySelector('#border-vertical-back-left')?.setAttribute('y2', verts.topBackLeft.y.toString())
      svg.querySelector('#edge-vertical-back-left')?.setAttribute('x1', verts.bottomBackLeft.x.toString())
      svg.querySelector('#edge-vertical-back-left')?.setAttribute('y1', verts.bottomBackLeft.y.toString())
      svg.querySelector('#edge-vertical-back-left')?.setAttribute('x2', verts.topBackLeft.x.toString())
      svg.querySelector('#edge-vertical-back-left')?.setAttribute('y2', verts.topBackLeft.y.toString())

      // Vertical back right
      svg.querySelector('#border-vertical-back-right')?.setAttribute('x1', verts.bottomBackRight.x.toString())
      svg.querySelector('#border-vertical-back-right')?.setAttribute('y1', verts.bottomBackRight.y.toString())
      svg.querySelector('#border-vertical-back-right')?.setAttribute('x2', verts.topBackRight.x.toString())
      svg.querySelector('#border-vertical-back-right')?.setAttribute('y2', verts.topBackRight.y.toString())
      svg.querySelector('#edge-vertical-back-right')?.setAttribute('x1', verts.bottomBackRight.x.toString())
      svg.querySelector('#edge-vertical-back-right')?.setAttribute('y1', verts.bottomBackRight.y.toString())
      svg.querySelector('#edge-vertical-back-right')?.setAttribute('x2', verts.topBackRight.x.toString())
      svg.querySelector('#edge-vertical-back-right')?.setAttribute('y2', verts.topBackRight.y.toString())

      // Top front
      svg.querySelector('#border-top-front')?.setAttribute('x1', verts.topFrontLeft.x.toString())
      svg.querySelector('#border-top-front')?.setAttribute('y1', verts.topFrontLeft.y.toString())
      svg.querySelector('#border-top-front')?.setAttribute('x2', verts.topFrontRight.x.toString())
      svg.querySelector('#border-top-front')?.setAttribute('y2', verts.topFrontRight.y.toString())
      svg.querySelector('#edge-top-front')?.setAttribute('x1', verts.topFrontLeft.x.toString())
      svg.querySelector('#edge-top-front')?.setAttribute('y1', verts.topFrontLeft.y.toString())
      svg.querySelector('#edge-top-front')?.setAttribute('x2', verts.topFrontRight.x.toString())
      svg.querySelector('#edge-top-front')?.setAttribute('y2', verts.topFrontRight.y.toString())

      // Top right
      svg.querySelector('#border-top-right')?.setAttribute('x1', verts.topFrontRight.x.toString())
      svg.querySelector('#border-top-right')?.setAttribute('y1', verts.topFrontRight.y.toString())
      svg.querySelector('#border-top-right')?.setAttribute('x2', verts.topBackRight.x.toString())
      svg.querySelector('#border-top-right')?.setAttribute('y2', verts.topBackRight.y.toString())
      svg.querySelector('#edge-top-right')?.setAttribute('x1', verts.topFrontRight.x.toString())
      svg.querySelector('#edge-top-right')?.setAttribute('y1', verts.topFrontRight.y.toString())
      svg.querySelector('#edge-top-right')?.setAttribute('x2', verts.topBackRight.x.toString())
      svg.querySelector('#edge-top-right')?.setAttribute('y2', verts.topBackRight.y.toString())

      // Top back
      svg.querySelector('#border-top-back')?.setAttribute('x1', verts.topBackRight.x.toString())
      svg.querySelector('#border-top-back')?.setAttribute('y1', verts.topBackRight.y.toString())
      svg.querySelector('#border-top-back')?.setAttribute('x2', verts.topBackLeft.x.toString())
      svg.querySelector('#border-top-back')?.setAttribute('y2', verts.topBackLeft.y.toString())
      svg.querySelector('#edge-top-back')?.setAttribute('x1', verts.topBackRight.x.toString())
      svg.querySelector('#edge-top-back')?.setAttribute('y1', verts.topBackRight.y.toString())
      svg.querySelector('#edge-top-back')?.setAttribute('x2', verts.topBackLeft.x.toString())
      svg.querySelector('#edge-top-back')?.setAttribute('y2', verts.topBackLeft.y.toString())

      // Top left
      svg.querySelector('#border-top-left')?.setAttribute('x1', verts.topBackLeft.x.toString())
      svg.querySelector('#border-top-left')?.setAttribute('y1', verts.topBackLeft.y.toString())
      svg.querySelector('#border-top-left')?.setAttribute('x2', verts.topFrontLeft.x.toString())
      svg.querySelector('#border-top-left')?.setAttribute('y2', verts.topFrontLeft.y.toString())
      svg.querySelector('#edge-top-left')?.setAttribute('x1', verts.topBackLeft.x.toString())
      svg.querySelector('#edge-top-left')?.setAttribute('y1', verts.topBackLeft.y.toString())
      svg.querySelector('#edge-top-left')?.setAttribute('x2', verts.topFrontLeft.x.toString())
      svg.querySelector('#edge-top-left')?.setAttribute('y2', verts.topFrontLeft.y.toString())

      // Update vertices
      svg.querySelector('#vertex-bottom-front-left')?.setAttribute('cx', verts.bottomFrontLeft.x.toString())
      svg.querySelector('#vertex-bottom-front-left')?.setAttribute('cy', verts.bottomFrontLeft.y.toString())

      svg.querySelector('#vertex-bottom-front-right')?.setAttribute('cx', verts.bottomFrontRight.x.toString())
      svg.querySelector('#vertex-bottom-front-right')?.setAttribute('cy', verts.bottomFrontRight.y.toString())

      svg.querySelector('#vertex-bottom-back-left')?.setAttribute('cx', verts.bottomBackLeft.x.toString())
      svg.querySelector('#vertex-bottom-back-left')?.setAttribute('cy', verts.bottomBackLeft.y.toString())

      svg.querySelector('#vertex-bottom-back-right')?.setAttribute('cx', verts.bottomBackRight.x.toString())
      svg.querySelector('#vertex-bottom-back-right')?.setAttribute('cy', verts.bottomBackRight.y.toString())

      svg.querySelector('#vertex-top-front-left')?.setAttribute('cx', verts.topFrontLeft.x.toString())
      svg.querySelector('#vertex-top-front-left')?.setAttribute('cy', verts.topFrontLeft.y.toString())

      svg.querySelector('#vertex-top-front-right')?.setAttribute('cx', verts.topFrontRight.x.toString())
      svg.querySelector('#vertex-top-front-right')?.setAttribute('cy', verts.topFrontRight.y.toString())

      svg.querySelector('#vertex-top-back-left')?.setAttribute('cx', verts.topBackLeft.x.toString())
      svg.querySelector('#vertex-top-back-left')?.setAttribute('cy', verts.topBackLeft.y.toString())

      svg.querySelector('#vertex-top-back-right')?.setAttribute('cx', verts.topBackRight.x.toString())
      svg.querySelector('#vertex-top-back-right')?.setAttribute('cy', verts.topBackRight.y.toString())
    }

    // Animation loop
    const animate = () => {
      // Smoothly interpolate speed
      // Use different interpolation rates for acceleration vs deceleration
      const interpolationRate = animationRef.current.targetSpeed > animationRef.current.speed
        ? 0.02  // Slower acceleration (about 3 seconds to reach top speed)
        : 0.1   // Keep current deceleration rate

      animationRef.current.speed += (animationRef.current.targetSpeed - animationRef.current.speed) * interpolationRate

      // Update angle based on current speed
      animationRef.current.angle -= animationRef.current.speed * 1.5

      // Keep angle in bounds
      if (animationRef.current.angle < -360) {
        animationRef.current.angle += 360
      }

      updateCube()
      rafId = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Handle mouse events
    const handleMouseEnter = () => {
      animationRef.current.targetSpeed = 20
    }

    const handleMouseLeave = () => {
      animationRef.current.targetSpeed = 1
    }

    const container = containerRef.current
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="inline-flex items-center justify-center cursor-pointer"
    >
      <svg
        ref={svgRef}
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className="isometric-cube-logo"
      >
        <g id="cube-container">
          {/* Black border lines (background layer) */}
          <g id="edge-borders">
            <line id="border-bottom-front" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.bottomFrontLeft.x} y1={vertices.bottomFrontLeft.y} x2={vertices.bottomFrontRight.x} y2={vertices.bottomFrontRight.y} />
            <line id="border-bottom-right" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.bottomFrontRight.x} y1={vertices.bottomFrontRight.y} x2={vertices.bottomBackRight.x} y2={vertices.bottomBackRight.y} />
            <line id="border-bottom-back" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.bottomBackRight.x} y1={vertices.bottomBackRight.y} x2={vertices.bottomBackLeft.x} y2={vertices.bottomBackLeft.y} />
            <line id="border-bottom-left" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.bottomBackLeft.x} y1={vertices.bottomBackLeft.y} x2={vertices.bottomFrontLeft.x} y2={vertices.bottomFrontLeft.y} />
            <line id="border-vertical-front-left" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.bottomFrontLeft.x} y1={vertices.bottomFrontLeft.y} x2={vertices.topFrontLeft.x} y2={vertices.topFrontLeft.y} />
            <line id="border-vertical-front-right" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.bottomFrontRight.x} y1={vertices.bottomFrontRight.y} x2={vertices.topFrontRight.x} y2={vertices.topFrontRight.y} />
            <line id="border-vertical-back-left" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.bottomBackLeft.x} y1={vertices.bottomBackLeft.y} x2={vertices.topBackLeft.x} y2={vertices.topBackLeft.y} />
            <line id="border-vertical-back-right" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.bottomBackRight.x} y1={vertices.bottomBackRight.y} x2={vertices.topBackRight.x} y2={vertices.topBackRight.y} />
            <line id="border-top-front" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.topFrontLeft.x} y1={vertices.topFrontLeft.y} x2={vertices.topFrontRight.x} y2={vertices.topFrontRight.y} />
            <line id="border-top-right" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.topFrontRight.x} y1={vertices.topFrontRight.y} x2={vertices.topBackRight.x} y2={vertices.topBackRight.y} />
            <line id="border-top-back" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.topBackRight.x} y1={vertices.topBackRight.y} x2={vertices.topBackLeft.x} y2={vertices.topBackLeft.y} />
            <line id="border-top-left" stroke="black" strokeWidth={edgeWidth + (sphereBorder * 2)} strokeLinecap="round" x1={vertices.topBackLeft.x} y1={vertices.topBackLeft.y} x2={vertices.topFrontLeft.x} y2={vertices.topFrontLeft.y} />
          </g>
          {/* Blue edges (foreground layer) */}
          <g id="edges">
            <line id="edge-bottom-front" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.bottomFrontLeft.x} y1={vertices.bottomFrontLeft.y} x2={vertices.bottomFrontRight.x} y2={vertices.bottomFrontRight.y} />
            <line id="edge-bottom-right" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.bottomFrontRight.x} y1={vertices.bottomFrontRight.y} x2={vertices.bottomBackRight.x} y2={vertices.bottomBackRight.y} />
            <line id="edge-bottom-back" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.bottomBackRight.x} y1={vertices.bottomBackRight.y} x2={vertices.bottomBackLeft.x} y2={vertices.bottomBackLeft.y} />
            <line id="edge-bottom-left" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.bottomBackLeft.x} y1={vertices.bottomBackLeft.y} x2={vertices.bottomFrontLeft.x} y2={vertices.bottomFrontLeft.y} />
            <line id="edge-vertical-front-left" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.bottomFrontLeft.x} y1={vertices.bottomFrontLeft.y} x2={vertices.topFrontLeft.x} y2={vertices.topFrontLeft.y} />
            <line id="edge-vertical-front-right" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.bottomFrontRight.x} y1={vertices.bottomFrontRight.y} x2={vertices.topFrontRight.x} y2={vertices.topFrontRight.y} />
            <line id="edge-vertical-back-left" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.bottomBackLeft.x} y1={vertices.bottomBackLeft.y} x2={vertices.topBackLeft.x} y2={vertices.topBackLeft.y} />
            <line id="edge-vertical-back-right" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.bottomBackRight.x} y1={vertices.bottomBackRight.y} x2={vertices.topBackRight.x} y2={vertices.topBackRight.y} />
            <line id="edge-top-front" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.topFrontLeft.x} y1={vertices.topFrontLeft.y} x2={vertices.topFrontRight.x} y2={vertices.topFrontRight.y} />
            <line id="edge-top-right" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.topFrontRight.x} y1={vertices.topFrontRight.y} x2={vertices.topBackRight.x} y2={vertices.topBackRight.y} />
            <line id="edge-top-back" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.topBackRight.x} y1={vertices.topBackRight.y} x2={vertices.topBackLeft.x} y2={vertices.topBackLeft.y} />
            <line id="edge-top-left" stroke={cubeColor} strokeWidth={edgeWidth} strokeLinecap="round" x1={vertices.topBackLeft.x} y1={vertices.topBackLeft.y} x2={vertices.topFrontLeft.x} y2={vertices.topFrontLeft.y} />
          </g>

{/* Vertices */}
          <g id="vertices">
            <circle
              id="vertex-bottom-front-left"
              cx={vertices.bottomFrontLeft.x}
              cy={vertices.bottomFrontLeft.y}
              r={sphereRadius}
              fill="white"
              stroke="black"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-bottom-front-right"
              cx={vertices.bottomFrontRight.x}
              cy={vertices.bottomFrontRight.y}
              r={sphereRadius}
              fill="white"
              stroke="black"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-bottom-back-left"
              cx={vertices.bottomBackLeft.x}
              cy={vertices.bottomBackLeft.y}
              r={sphereRadius}
              fill="white"
              stroke="black"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-bottom-back-right"
              cx={vertices.bottomBackRight.x}
              cy={vertices.bottomBackRight.y}
              r={sphereRadius}
              fill="white"
              stroke="black"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-top-front-left"
              cx={vertices.topFrontLeft.x}
              cy={vertices.topFrontLeft.y}
              r={sphereRadius}
              fill="white"
              stroke="black"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-top-front-right"
              cx={vertices.topFrontRight.x}
              cy={vertices.topFrontRight.y}
              r={sphereRadius}
              fill="white"
              stroke="black"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-top-back-left"
              cx={vertices.topBackLeft.x}
              cy={vertices.topBackLeft.y}
              r={sphereRadius}
              fill="white"
              stroke="black"
              strokeWidth={sphereBorder}
            />
            <circle
              id="vertex-top-back-right"
              cx={vertices.topBackRight.x}
              cy={vertices.topBackRight.y}
              r={sphereRadius}
              fill="white"
              stroke="black"
              strokeWidth={sphereBorder}
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default LogoTest