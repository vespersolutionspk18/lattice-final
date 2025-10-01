"use client"

import { ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

interface BentoGridProps {
  children: ReactNode
  className?: string
}

interface BentoCardProps {
  name: string
  className?: string
  background?: ReactNode
  Icon: React.ComponentType<{ className?: string }>
  description: string
  href?: string
  cta?: string
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  cta,
}: BentoCardProps) => (
  <div
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "dark:bg-black dark:[box-shadow:0_0_0_1px_rgba(255,255,255,.1)] dark:[border:1px_solid_rgba(255,255,255,.1)]",
      "transform-gpu transition-all duration-300 hover:scale-[1.01] hover:shadow-xl",
      className
    )}
  >
    <div className="relative z-10 flex h-full flex-col justify-between p-6">
      <div>
        <Icon className="h-12 w-12 text-gray-700 dark:text-gray-300 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="mt-4 max-w-[80%] text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {name}
        </h3>
        <p className="mt-2 max-w-[90%] text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
      {cta && (
        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 transform-gpu transition-all duration-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
          {cta}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </div>
    {background && (
      <div className="pointer-events-none absolute inset-0 z-0">
        {background}
      </div>
    )}
  </div>
)