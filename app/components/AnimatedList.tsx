"use client"

import React, { ReactElement, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface AnimatedListProps {
  className?: string
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 1000 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = React.Children.toArray(children)

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
      }, delay)

      return () => clearInterval(interval)
    }, [childrenArray.length, delay])

    const itemsToShow = useMemo(() => {
      // Always show exactly 3 items, cycling through the array
      const items = []
      for (let i = 0; i < 3; i++) {
        const itemIndex = (index + i) % childrenArray.length
        items.push(childrenArray[itemIndex])
      }
      return items.reverse() // Reverse so newest appears at top
    }, [index, childrenArray])

    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <AnimatePresence mode="popLayout">
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"

export function AnimatedListItem({
  children,
}: {
  children: React.ReactNode
}) {
  const animations = {
    initial: { 
      scale: 0,
      opacity: 0,
      y: -30,
    },
    animate: { 
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 350,
        damping: 25,
      }
    },
    exit: { 
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.2,
      }
    },
  }

  return (
    <motion.div
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      layout
    >
      {children}
    </motion.div>
  )
}