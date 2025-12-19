'use client'

import React from 'react'

const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-[#1a0505]">
      {/* Main grid */}
      <div 
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(92, 10, 10, 0.5) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(92, 10, 10, 0.5) 2px, transparent 2px)
          `,
          backgroundSize: '120px 120px'
        }}
      />
      
      {/* Finer grid overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Grid intersection glow points */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 0 0, rgba(92, 10, 10, 0.4) 2px, transparent 2px)`,
          backgroundSize: '120px 120px'
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#5c0a0a] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#8b0000] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#5c0a0a] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-50" />
    </div>
  )
}

export default GridBackground
