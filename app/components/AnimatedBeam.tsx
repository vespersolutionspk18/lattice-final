"use client"

import React, { useEffect, useId, useRef, useState } from "react"
import { motion } from "framer-motion"

export interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLElement>
  fromRef: React.RefObject<HTMLElement>
  toRef: React.RefObject<HTMLElement>
  curvature?: number
  reverse?: boolean
  duration?: number
  delay?: number
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  startYOffset?: number
  endYOffset?: number
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startYOffset = 0,
  endYOffset = 0,
}) => {
  const [pathD, setPathD] = useState("")
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })
  const svgRef = useRef<SVGSVGElement>(null)
  const id = useId()
  const gradientId = `gradient-${id}`

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const fromRect = fromRef.current.getBoundingClientRect()
        const toRect = toRef.current.getBoundingClientRect()

        const startX = fromRect.left - containerRect.left + fromRect.width / 2
        const startY = fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset
        const endX = toRect.left - containerRect.left + toRect.width / 2
        const endY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset

        const controlX = (startX + endX) / 2
        const controlY = (startY + endY) / 2 + curvature

        const path = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`
        setPathD(path)
        setSvgDimensions({
          width: containerRect.width,
          height: containerRect.height,
        })
      }
    }

    updatePath()
    
    const resizeObserver = new ResizeObserver(updatePath)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }
    
    window.addEventListener("resize", updatePath)
    
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updatePath)
    }
  }, [containerRef, fromRef, toRef, curvature, startYOffset, endYOffset])

  return (
    <svg
      ref={svgRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "visible",
      }}
      width={svgDimensions.width}
      height={svgDimensions.height}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        fill="none"
        strokeOpacity={pathOpacity}
      />
      <path
        d={pathD}
        stroke={`url(#${gradientId})`}
        strokeWidth={pathWidth}
        fill="none"
        strokeLinecap="round"
      >
        <motion.animate
          attributeName="stroke-dasharray"
          from={reverse ? "0 100%" : "100% 0"}
          to={reverse ? "100% 0" : "0 100%"}
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
        />
      </path>
      <motion.circle
        r="4"
        fill={gradientStartColor}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: duration,
          delay: delay,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
          keyPoints={reverse ? "1;0" : "0;1"}
          keyTimes="0;1"
        >
          <mpath href={`#beam-path-${gradientId}`} />
        </animateMotion>
      </motion.circle>
      <path
        id={`beam-path-${gradientId}`}
        d={pathD}
        stroke="none"
        fill="none"
      />
    </svg>
  )
}