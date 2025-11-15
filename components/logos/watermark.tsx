export function Watermark({
  className = "",
  position = "bottom-right",
}: {
  className?: string
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "center"
}) {
  const positions = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  }

  return (
    <div className={`fixed ${positions[position]} opacity-30 pointer-events-none ${className}`}>
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" className="text-foreground" />
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1" className="text-foreground opacity-60" />
          <path
            d="M24 6 L24 42 M6 24 L42 24"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-foreground opacity-40"
          />
          <circle cx="24" cy="24" r="3" fill="currentColor" className="text-foreground" />
        </svg>
        <span className="text-xs tracking-widest font-light">REVELATION</span>
      </div>
    </div>
  )
}
