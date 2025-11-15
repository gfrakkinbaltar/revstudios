"use client"

import { useEffect, useState } from "react"

export function MedallionLogo({
  className = "",
  animate = true,
}: {
  className?: string
  animate?: boolean
}) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!animate) return
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [animate])

  return (
    <div className={`relative ${className}`}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="float-animation"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Outer rings */}
        <circle cx="100" cy="100" r="95" stroke="url(#gradient1)" strokeWidth="1" className="opacity-60" />
        <circle cx="100" cy="100" r="85" stroke="url(#gradient2)" strokeWidth="0.5" className="opacity-40" />
        <circle cx="100" cy="100" r="75" stroke="url(#gradient1)" strokeWidth="2" className="opacity-80" />

        {/* Crosshairs */}
        <line x1="100" y1="25" x2="100" y2="45" stroke="currentColor" strokeWidth="1" className="text-accent" />
        <line x1="100" y1="155" x2="100" y2="175" stroke="currentColor" strokeWidth="1" className="text-accent" />
        <line x1="25" y1="100" x2="45" y2="100" stroke="currentColor" strokeWidth="1" className="text-accent" />
        <line x1="155" y1="100" x2="175" y2="100" stroke="currentColor" strokeWidth="1" className="text-accent" />

        {/* Inner geometry */}
        <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1.5" className="text-accent opacity-70" />

        {/* Central R letter */}
        <text
          x="100"
          y="115"
          textAnchor="middle"
          fill="currentColor"
          className="text-accent font-serif text-5xl font-bold"
        >
          R
        </text>

        {/* Dots at cardinal points */}
        <circle cx="100" cy="35" r="2" fill="currentColor" className="text-accent" />
        <circle cx="100" cy="165" r="2" fill="currentColor" className="text-accent" />
        <circle cx="35" cy="100" r="2" fill="currentColor" className="text-accent" />
        <circle cx="165" cy="100" r="2" fill="currentColor" className="text-accent" />

        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glow effect */}
      <div
        className="absolute inset-0 -z-10 blur-2xl opacity-40 bg-accent rounded-full pulse-glow"
        style={{ transform: "scale(0.8)" }}
      />
    </div>
  )
}
