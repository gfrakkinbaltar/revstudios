import { PrimaryLogo } from "./logos/primary-logo"

export function BusinessCard({
  name = "Your Name",
  title = "Creative Director",
  email = "contact@revelation.studio",
  phone = "+1 (555) 000-0000",
}: {
  name?: string
  title?: string
  email?: string
  phone?: string
}) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      {/* Front */}
      <div className="relative aspect-[3.5/2] bg-gradient-to-br from-primary via-secondary to-primary rounded-lg shadow-2xl overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(168, 85, 247) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(168, 85, 247) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative h-full flex items-center justify-center p-8">
          <PrimaryLogo size="lg" className="text-primary-foreground" />
        </div>

        {/* Bullet time accent */}
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="50"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-accent"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-accent"
            />
            <circle
              cx="100"
              cy="100"
              r="30"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-accent"
            />
          </svg>
        </div>
      </div>

      {/* Back */}
      <div className="relative aspect-[3.5/2] bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(168, 85, 247) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(168, 85, 247) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative h-full flex flex-col justify-between p-8">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="text-2xl font-light tracking-wide">{name}</h3>
              <p className="text-sm text-muted-foreground tracking-widest uppercase">{title}</p>
            </div>

            <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1" className="text-accent opacity-40" />
              <path
                d="M24 6 L24 42 M6 24 L42 24"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-accent opacity-30"
              />
              <circle cx="24" cy="24" r="2" fill="currentColor" className="text-accent" />
            </svg>
          </div>

          <div className="space-y-2 text-sm font-light">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Email</span>
              <span className="text-foreground">{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Phone</span>
              <span className="text-foreground">{phone}</span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs tracking-[0.3em] text-muted-foreground">REVELATION.STUDIO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
