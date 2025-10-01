import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

interface SimpleButtonProps {
  text: string
  route: string
  variant?: 'dark' | 'white'
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ 
  text, 
  route, 
  variant = 'dark' 
}) => {
  const baseClasses = "text-sm transition-all duration-200 font-mono flex items-center gap-2 hover:cursor-pointer"
  
  const variantClasses = variant === 'dark' 
    ? "text-stone-400 hover:text-white" 
    : "text-stone-700 hover:text-black"

  return (
    <Link href={route} className={`${baseClasses} ${variantClasses} group`}>
      {text}
      <IoIosArrowForward className="text-xs transition-transform duration-200 ease-in-out group-hover:translate-x-2" />
    </Link>
  )
}

export default SimpleButton