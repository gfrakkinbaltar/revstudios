export function PrimaryLogo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg className={sizes[size]} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" className="text-accent opacity-60" />
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1" className="text-accent opacity-40" />
        <path
          d="M24 6 L24 42 M6 24 L42 24"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-accent opacity-30"
        />
        <circle cx="24" cy="24" r="3" fill="currentColor" className="text-accent" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-xl md:text-2xl tracking-[0.2em] font-light">REVELATION</span>
        <span className="text-xs tracking-[0.4em] text-muted-foreground mt-1">STUDIOS</span>
      </div>
    </div>
  )
}
