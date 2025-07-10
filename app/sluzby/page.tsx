import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PaintBucket, Brush, Wallpaper, Droplet, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Naše služby</h1>
        <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto">
          Nabízíme komplexní řešení pro vaše interiéry - od klasických maleb přes dekorativní stěrky až po tapetování.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <ServiceCard
          icon={<PaintBucket className="h-10 w-10" />}
          title="Malby"
          description="Klasické i speciální malby interiérů s použitím kvalitních barev a materiálů."
          features={[
            "Malby stěn a stropů",
            "Barevné nátěry",
            "Speciální techniky",
            "Opravy a renovace",
            "Příprava povrchů",
          ]}
          image="/placeholder.svg?height=400&width=600"
        />

        <ServiceCard
          icon={<Brush className="h-10 w-10" />}
          title="Stěrky"
          description="Dekorativní stěrky pro jedinečný vzhled vašich stěn s různými povrchovými úpravami."
          features={["Benátský štuk", "Betonové stěrky", "Marmorino", "Travertino", "Metalické stěrky"]}
          image="/placeholder.svg?height=400&width=600"
        />

        <ServiceCard
          icon={<Wallpaper className="h-10 w-10" />}
          title="Tapety"
          description="Profesionální tapetování s širokou nabídkou vzorů a materiálů."
          features={["Papírové tapety", "Vinylové tapety", "Vliesové tapety", "Fototapety", "Textilní tapety"]}
          image="/placeholder.svg?height=400&width=600"
        />

        <ServiceCard
          icon={<Droplet className="h-10 w-10" />}
          title="Lakování"
          description="Lakování dveří, zárubní a dalších povrchů s důrazem na kvalitu a trvanlivost."
          features={["Lakování dveří", "Lakování zárubní", "Lakování nábytku", "Renovace povrchů", "Speciální nátěry"]}
          image="/placeholder.svg?height=400&width=600"
        />
      </div>

      <div className="bg-[#1B1E22]/50 border border-[#DDD6CA]/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Nevíte si rady s výběrem?</h2>
        <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto mb-6">
          Kontaktujte nás pro nezávaznou konzultaci. Rádi vám poradíme s výběrem nejvhodnějšího řešení pro váš prostor.
        </p>
        <Button asChild className="bg-[#DDD6CA] text-[#1B1E22] hover:bg-[#DDD6CA]/90">
          <Link href="/kontakt">Nezávazná poptávka</Link>
        </Button>
      </div>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  features,
  image,
}: {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  image: string
}) {
  return (
    <Card className="bg-[#1B1E22] border-[#DDD6CA]/10 overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="text-[#DDD6CA]">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription className="text-[#DDD6CA]/70">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#DDD6CA]" />
              <span className="text-sm text-[#DDD6CA]/90">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full border-[#DDD6CA] text-[#DDD6CA] bg-transparent">
          <Link href="/kontakt" className="group">
            Nezávazná poptávka <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
