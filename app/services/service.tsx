'use client'

import React from 'react'
import Image from 'next/image'
import Button from '../components/Button'
import { ServiceCardProps, ServicesSectionProps } from '../types/service'
import { motion } from 'framer-motion'

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isEven,
  onButtonClick,
  headingLevel = 'h3',
  lazyLoad = true,
  priority = false
}) => {
  const HeadingTag = headingLevel as keyof React.JSX.IntrinsicElements
  
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick()
    }
  }

  const contentSection = (
    <div className="w-full lg:w-1/2 flex flex-col gap-7">
      <HeadingTag 
        className="text-4xl lg:text-5xl tracking-tighter font-[550]"
        id={`service-${service.id}-title`}
      >
        {service.title}
      </HeadingTag>
      <p 
        className="text-lg lg:text-xl leading-relaxed"
        id={`service-${service.id}-description`}
      >
        {service.description}
      </p>
      <Button 
        variant="green" 
        className="w-fit"
        href={service.buttonHref}
        onClick={handleButtonClick}
        aria-label={`${service.buttonText} for ${service.title}`}
      >
        {service.buttonText}
      </Button>
    </div>
  )

  const imageSection = (
    <div className="w-full lg:w-[45%] flex flex-col gap-7">
      <div className="relative aspect-square rounded-3xl overflow-hidden">
        <Image 
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes={service.imageSizes || "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"}
          quality={service.imageQuality || 90}
          loading={lazyLoad && !priority ? 'lazy' : 'eager'}
          priority={priority}
          placeholder={service.imagePlaceholder}
          blurDataURL={service.imageBlurDataURL}
        />
      </div>
    </div>
  )

  return (
    <article 
      className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-12 justify-between`}
      aria-labelledby={`service-${service.id}-title`}
      aria-describedby={`service-${service.id}-description`}
    >
      {contentSection}
      {imageSection}
    </article>
  )
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  sectionId = 'services',
  sectionClassName = '',
  itemClassName = '',
  onButtonClick,
  headingLevel = 'h3',
  lazyLoadImages = true,
  animateOnScroll = false
}) => {
  if (!services || services.length === 0) {
    return null
  }

  const handleServiceButtonClick = (serviceId: string) => {
    if (onButtonClick) {
      onButtonClick(serviceId)
    }
  }

  const containerVariants = animateOnScroll ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  } : undefined

  const itemVariants = animateOnScroll ? {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  } : undefined

  const content = (
    <div className={`flex flex-col gap-16 lg:gap-24 p-6 lg:p-10 tracking-tighter text-black/95 ${sectionClassName}`}>
      {services.map((service, index) => {
        const isFirstImage = index === 0
        const shouldPrioritize = isFirstImage || service.priority
        
        return animateOnScroll ? (
          <motion.div
            key={service.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={itemClassName}
          >
            <ServiceCard
              service={service}
              isEven={index % 2 === 1}
              onButtonClick={() => handleServiceButtonClick(service.id)}
              headingLevel={headingLevel}
              lazyLoad={!shouldPrioritize && lazyLoadImages}
              priority={shouldPrioritize}
            />
          </motion.div>
        ) : (
          <div key={service.id} className={itemClassName}>
            <ServiceCard
              service={service}
              isEven={index % 2 === 1}
              onButtonClick={() => handleServiceButtonClick(service.id)}
              headingLevel={headingLevel}
              lazyLoad={!shouldPrioritize && lazyLoadImages}
              priority={shouldPrioritize}
            />
          </div>
        )
      })}
    </div>
  )

  if (animateOnScroll) {
    return (
      <motion.section
        id={sectionId}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label="Services section"
      >
        {content}
      </motion.section>
    )
  }

  return (
    <section id={sectionId} aria-label="Services section">
      {content}
    </section>
  )
}

export default ServicesSection
export { ServiceCard }
