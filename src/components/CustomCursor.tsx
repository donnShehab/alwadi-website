"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const CustomCursor = () => {
  const [isActive, setIsActive] = useState(false)
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'image' | 'text'>('default')
  const [isMobile, setIsMobile] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
    setIsMobile(isMobileDevice)
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('button, a, .interactive')
      const isCard = target.closest('.product-card')
      const isHeading = target.tagName.match(/H[1-3]/)
      
      if (interactive) {
        setIsActive(true)
        setCursorType('pointer')
      } else if (isCard) {
        setIsActive(true)
        setCursorType('image')
      } else if (isHeading) {
        setIsActive(true)
        setCursorType('text')
      } else {
        setIsActive(false)
        setCursorType('default')
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (isMobile) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className={cn(
          "absolute top-0 left-0 border border-brand-red/30 rounded-full transition-colors duration-300",
          isActive ? "bg-brand-red/5 scale-150 border-brand-red/50" : "bg-transparent scale-100 border-brand-red/20"
        )}
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
          width: isActive ? 80 : 40,
          height: isActive ? 80 : 40,
        }}
      />
      
      {/* Inner Dot / Label */}
      <motion.div
        className={cn(
          "absolute top-0 left-0 rounded-full flex items-center justify-center transition-all duration-300",
          cursorType === 'default' ? "w-3 h-3 bg-brand-red" : "w-16 h-16 bg-brand-red text-white"
        )}
        style={{
          x: x,
          y: y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <AnimatePresence mode="wait">
          {cursorType === 'image' && (
            <motion.span
              key="view"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-black uppercase tracking-tighter"
            >
              VIEW
            </motion.span>
          )}
          {cursorType === 'text' && (
            <motion.div
               key="text"
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.5 }}
               className="w-1 h-8 bg-white rounded-full"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default CustomCursor
