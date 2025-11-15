import { BusinessCard } from "@/components/business-card"
import { PrimaryLogo } from "@/components/logos/primary-logo"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function BusinessCardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <PrimaryLogo size="sm" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-light">Business Card Design</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Elite business cards featuring the complete Revelation Studios brand identity system.
          </p>
          <Button className="mt-6">
            <Download className="mr-2 w-4 h-4" />
            Export Print Files
          </Button>
        </div>

        <BusinessCard
          name="Sarah Mitchell"
          title="Creative Director"
          email="sarah@revelation.studio"
          phone="+1 (555) 123-4567"
        />

        <div className="pt-12 space-y-6 text-sm text-muted-foreground max-w-2xl mx-auto">
          <h3 className="text-lg text-foreground font-medium">Print Specifications</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>Standard size: 3.5" × 2" (88.9mm × 50.8mm)</li>
            <li>Print resolution: 300 DPI minimum</li>
            <li>Color mode: CMYK for print</li>
            <li>Bleed: 0.125" (3.175mm) on all sides</li>
            <li>Paper: 16pt premium matte or silk finish recommended</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
