import { PrimaryLogo } from "@/components/logos/primary-logo"
import { MedallionLogo } from "@/components/logos/medallion-logo"
import { Watermark } from "@/components/logos/watermark"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function BrandSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <PrimaryLogo size="sm" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-light">Brand Identity System</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Complete brand guidelines for Revelation Studios — an elite futurist identity built on decades of mastery.
          </p>
          <Button className="mt-6">
            <Download className="mr-2 w-4 h-4" />
            Download Brand Assets
          </Button>
        </div>

        {/* Primary Logo */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-light mb-2">Primary Logo</h2>
            <p className="text-sm text-muted-foreground">
              Main brand mark for headers, signage, and primary applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-12 flex items-center justify-center">
              <PrimaryLogo size="lg" />
            </div>
            <div className="bg-primary border border-border rounded-lg p-12 flex items-center justify-center">
              <PrimaryLogo size="lg" className="text-primary-foreground" />
            </div>
          </div>
        </section>

        {/* Medallion Logo */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-light mb-2">Medallion Logo</h2>
            <p className="text-sm text-muted-foreground">
              Floating icon for hero sections, loading states, and premium touchpoints
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-16 flex items-center justify-center">
            <MedallionLogo animate={false} className="w-64 h-64" />
          </div>
        </section>

        {/* Watermark */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-light mb-2">Digital Watermark</h2>
            <p className="text-sm text-muted-foreground">
              Subtle branding for digital assets, renders, and portfolio pieces
            </p>
          </div>

          <div className="relative bg-card border border-border rounded-lg aspect-video overflow-hidden">
            <img
              src="/abstract-luxury-digital-design-concept.jpg"
              alt="Sample watermarked content"
              className="w-full h-full object-cover"
            />
            <Watermark position="bottom-right" className="opacity-60" />
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-light mb-2">Color System</h2>
            <p className="text-sm text-muted-foreground">
              Refined palette emphasizing dark sophistication with accent highlights
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "Primary", color: "bg-primary", text: "Deep Black" },
              { name: "Secondary", color: "bg-secondary", text: "Charcoal" },
              { name: "Accent", color: "bg-accent", text: "Violet" },
              { name: "Muted", color: "bg-muted", text: "Soft Gray" },
              { name: "Foreground", color: "bg-foreground", text: "Near White" },
            ].map((color) => (
              <div key={color.name} className="space-y-2">
                <div className={`${color.color} h-32 rounded-lg border border-border`} />
                <div className="text-sm">
                  <p className="font-medium">{color.name}</p>
                  <p className="text-muted-foreground text-xs">{color.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-light mb-2">Typography</h2>
            <p className="text-sm text-muted-foreground">
              Refined type system combining modern clarity with elegant serifs
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Primary: Inter — Clean, modern sans-serif for body text</p>
              <div className="space-y-2 font-sans">
                <p className="text-4xl">The quick brown fox jumps</p>
                <p className="text-2xl">The quick brown fox jumps</p>
                <p className="text-base">The quick brown fox jumps over the lazy dog</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Display: Cormorant Garamond — Elegant serif for headlines</p>
              <div className="space-y-2 font-serif">
                <p className="text-5xl font-light">The Moment of Revelation</p>
                <p className="text-3xl font-light">The Moment of Revelation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="space-y-8 pb-16">
          <div>
            <h2 className="text-2xl font-serif font-light mb-2">Brand Guidelines</h2>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Logo Usage</h3>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Maintain minimum clear space of 1x logo height around all sides</li>
                  <li>Never distort, rotate, or alter logo proportions</li>
                  <li>Use medallion logo for square/icon applications</li>
                  <li>Watermark opacity should remain 20-40% for digital assets</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Voice &amp; Tone</h3>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Confident yet understated — mastery speaks for itself</li>
                  <li>Technical precision with poetic undertones</li>
                  <li>Emphasize legacy, expertise, and the "revelation" moment</li>
                  <li>Use "bullet time" metaphors for precision and mastery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
