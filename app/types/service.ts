export interface ServiceItem {
  id: string
  title: string
  description: string
  buttonText: string
  buttonHref?: string
  imageSrc: string
  imageAlt: string
  priority?: boolean
  imageSizes?: string
  imageQuality?: number
  imagePlaceholder?: 'blur' | 'empty'
  imageBlurDataURL?: string
}

export interface ServicesSectionProps {
  services: ServiceItem[]
  sectionId?: string
  sectionClassName?: string
  itemClassName?: string
  onButtonClick?: (serviceId: string) => void
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  lazyLoadImages?: boolean
  animateOnScroll?: boolean
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'green' | 'blue' | 'purple' | 'crmGreen' | 'webSuiteOrange'
}

export interface ServiceCardProps {
  service: ServiceItem
  isEven: boolean
  onButtonClick?: () => void
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  lazyLoad?: boolean
  priority?: boolean
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'green' | 'blue' | 'purple' | 'crmGreen' | 'webSuiteOrange'
}

export interface SEOMetadata {
  title?: string
  description?: string
  openGraph?: {
    title?: string
    description?: string
    images?: Array<{
      url: string
      width?: number
      height?: number
      alt?: string
    }>
  }
  twitter?: {
    title?: string
    description?: string
    images?: string[]
  }
  alternates?: {
    canonical?: string
  }
}