import { PrimaryLogo } from "@/components/logos/primary-logo"
import { MedallionLogo } from "@/components/logos/medallion-logo"
import { BulletTimeBackground } from "@/components/bullet-time-background"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export default function Home() {
  return (
    <>
      <BulletTimeBackground />

      <div className="relative min-h-screen">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <PrimaryLogo size="sm" />
            <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider">
              <a href="#work" className="hover:text-accent transition-colors">
                WORK
              </a>
              <a href="#studio" className="hover:text-accent transition-colors">
                STUDIO
              </a>
              <a href="#approach" className="hover:text-accent transition-colors">
                APPROACH
              </a>
              <a href="#contact" className="hover:text-accent transition-colors">
                CONTACT
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="flex justify-center mb-12">
              <MedallionLogo className="w-48 h-48" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight text-balance">
              The Moment of
              <br />
              <span className="text-accent">Revelation</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed text-pretty">
              {`Decades in the shadows. Mastering the craft. Perfecting the impossible. Now, we emerge with unparalleled expertise in digital creation.`}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="group">
                Explore Our Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 w-4 h-4" />
                Get in Touch
              </Button>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="studio" className="relative py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm tracking-[0.3em] text-accent uppercase">Our Legacy</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-balance">
                  Mastery Through
                  <br />
                  Time &amp; Precision
                </h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {`Like bullet time captures the impossible moment, we've captured decades of expertise. Every project is a frozen moment of perfection—carefully crafted, meticulously refined, ultimately revealed.`}
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {`We've been here all along, working in the background, waiting for this moment. The moment you discover what true digital mastery looks like.`}
                </p>
              </div>

              <div className="relative">
                <div className="aspect-square relative">
                  {/* Concentric circles design */}
                  <svg className="w-full h-full opacity-80" viewBox="0 0 400 400">
                    <circle
                      cx="200"
                      cy="200"
                      r="180"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      fill="none"
                      className="text-accent opacity-20"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="140"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      fill="none"
                      className="text-accent opacity-30"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="100"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="text-accent opacity-40"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      className="text-accent opacity-60"
                    />
                    <line
                      x1="200"
                      y1="20"
                      x2="200"
                      y2="380"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-accent opacity-20"
                    />
                    <line
                      x1="20"
                      y1="200"
                      x2="380"
                      y2="200"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-accent opacity-20"
                    />
                    <circle cx="200" cy="200" r="10" fill="currentColor" className="text-accent" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="approach" className="relative py-32 px-6 border-t border-border/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-sm tracking-[0.3em] text-accent uppercase">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 text-balance">Elite Digital Services</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Brand Identity",
                  description:
                    "Complete visual systems that capture your essence and command attention in the digital landscape.",
                },
                {
                  title: "Digital Experiences",
                  description: "Web platforms engineered for performance, designed for emotion, built to last decades.",
                },
                {
                  title: "Strategic Consultation",
                  description:
                    "Decades of insight distilled into actionable strategies that transform your digital presence.",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="group relative p-8 border border-border/40 rounded-lg hover:border-accent/40 transition-colors"
                >
                  <div className="absolute top-8 right-8 text-6xl font-serif text-accent/10 group-hover:text-accent/20 transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-light mb-4 tracking-wide">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="relative py-32 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-light text-balance">
              Ready for Your
              <br />
              <span className="text-accent">Revelation?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {`The moment has arrived. Let's discuss how decades of mastery can elevate your digital presence.`}
            </p>
            <div className="pt-8">
              <Button size="lg" className="group">
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-border/40 py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <PrimaryLogo size="sm" />
            <div className="text-sm text-muted-foreground">
              <p className="text-center md:text-right tracking-wider">
                © 2025 REVELATION STUDIOS. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
