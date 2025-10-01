'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
  schemaOrg?: boolean
}

const FAQ: React.FC<FAQProps> = ({ 
  title = "Frequently Asked Questions",
  items,
  schemaOrg = true 
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const faqSchema = schemaOrg ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null

  const textVariants = {
    initial: {
      y: 0
    },
    hover: {
      y: '-150%'
    }
  }

  const textVariantsHover = {
    initial: {
      y: '150%'
    },
    hover: {
      y: 0
    }
  }

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="flex flex-row my-16  gap-5 p-5 lg:p-10 text-black/95">
        <h5 className="text-3xl w-[30%] font-semibold tracking-tighter">
          {title.split(' ').map((word, index) => (
            <React.Fragment key={index}>
              {word}{index === 1 && <br />}{index !== title.split(' ').length - 1 && index !== 1 && ' '}
            </React.Fragment>
          ))}
        </h5>
        <div className="w-[70%] flex flex-col gap-5">
          {items.map((item) => {
            const isExpanded = expandedItems.has(item.id)
            const isHovered = hoveredItem === item.id
            
            return (
              <div key={item.id}>
                <motion.div 
                  onClick={() => toggleItem(item.id)}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  initial={{ borderRadius: 16 }}
                  animate={{ borderRadius: isHovered ? 28 : 16 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="pl-5 pr-3 py-3 flex flex-row justify-between text-2xl  font-medium tracking-tighter text-black/95 items-center bg-stone-200/40 cursor-pointer overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <motion.h5
                      initial="initial"
                      animate={isHovered ? 'hover' : 'initial'}
                      variants={textVariants}
                      transition={{ duration: 0.12, ease: 'easeInOut' }}
                    >
                      {item.question}
                    </motion.h5>
                    <motion.h5
                      className="absolute inset-0"
                      initial="initial"
                      animate={isHovered ? 'hover' : 'initial'}
                      variants={textVariantsHover}
                      transition={{ duration: 0.18, ease: 'easeInOut' }}
                    >
                      {item.question}
                    </motion.h5>
                  </div>
                  <motion.div 
                    className="h-12 w-12 rounded-full bg-stone-200 flex items-center justify-center"
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className="text-2xl text-black/95">+</p>
                  </motion.div>
                </motion.div>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.3, ease: 'easeInOut' },
                        opacity: { duration: 0.2, ease: 'easeInOut' }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-1 px-4 text-lg text-black/80">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FAQ