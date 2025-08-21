'use client'

import React from 'react'
import BentoGrid from '../ui/BentoGrid'

const BentoSection = () => {
  return (
    <div className='w-full h-screen'>
      <BentoGrid
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/>
    </div>
  )
}

export default BentoSection
