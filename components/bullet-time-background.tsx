"use client"

import { useEffect, useState } from "react"

export function BulletTimeBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; top: string }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: i * 0.4,
      top: `${Math.random() * 100}%`,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(168, 85, 247) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(168, 85, 247) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Bullet time particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent bullet-time-particle"
            style={{
              top: particle.top,
              animationDelay: `${particle.delay}s`,
              opacity: 0.2,
            }}
          />
        ))}
      </div>

      {/* Radial gradient vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 0%, rgb(8 8 8 / 0.6) 100%)",
        }}
      />
    </div>
  )
}
