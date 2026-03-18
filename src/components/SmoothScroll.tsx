"use client"
import React, { ReactNode, useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { motion, useScroll, useSpring } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Sync GSAP ScrollTrigger with Lenis
  useLenis(() => {
    ScrollTrigger.update()
  })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()
  }, [])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {/* Subtle Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-brand-orange origin-left z-[100001] pointer-events-none"
        style={{ scaleX }}
      />

      <div className="relative z-0">
        {children}
      </div>
    </ReactLenis>
  )
}

export default SmoothScroll
