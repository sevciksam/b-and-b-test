import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">O nás</h1>
        <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto">
          Poznejte náš příběh, hodnoty a misi, která nás žene vpřed.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Náš příběh</h2>
          <div className="space-y-4 text-[#DDD6CA]/90">
            <p>
              Společnost B&B Malby a renovace vznikla z vášně pro řemeslo a touhy přinášet do interiérů kvalitu a krásu.
              Naše cesta začala před více než 10 lety, kdy jsme jako malá firma realizovali první projekty v Ostravě a
              okolí.
            </p>
            <p>
              Postupem času jsme rozšířili naše služby o dekorativní stěrky, tapetování a lakování, abychom mohli našim
              klientům nabídnout komplexní řešení pro jejich interiéry. Díky důrazu na kvalitu, preciznost a
              spolehlivost jsme si vybudovali silnou pozici na trhu a získali důvěru stovek spokojených zákazníků.
            </p>
            <p>
              Dnes působíme v celém Moravskoslezském a Olomouckém kraji a realizujeme projekty jak pro domácnosti, tak
              pro komerční prostory. Naším cílem je i nadále poskytovat služby na nejvyšší úrovni a přinášet do
              interiérů našich klientů krásu a funkčnost.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=1200" alt="Náš tým při práci" fill className="object-cover" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Naše hodnoty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            icon={<Users className="h-8 w-8" />}
            title="Profesionalita"
            description="Ke každému projektu přistupujeme s maximální profesionalitou a odborností."
          />
          <ValueCard
            icon={<Award className="h-8 w-8" />}
            title="Kvalita"
            description="Používáme pouze kvalitní materiály a dbáme na precizní provedení každého detailu."
          />
          <ValueCard
            icon={<Clock className="h-8 w-8" />}
            title="Spolehlivost"
            description="Dodržujeme dohodnuté termíny a vždy plníme naše sliby."
          />
          <ValueCard
            icon={<Sparkles className="h-8 w-8" />}
            title="Inovace"
            description="Sledujeme nejnovější trendy a technologie v oboru a neustále se vzděláváme."
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Proč nás klienti volí</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#DDD6CA] mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Zkušený tým</h3>
                  <p className="text-[#DDD6CA]/70 text-sm">
                    Náš tým má mnohaleté zkušenosti s realizací malířských a renovačních prací.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#DDD6CA] mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Komplexní služby</h3>
                  <p className="text-[#DDD6CA]/70 text-sm">Nabízíme komplexní řešení od návrhu až po realizaci.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#DDD6CA] mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Kvalitní materiály</h3>
                  <p className="text-[#DDD6CA]/70 text-sm">
                    Používáme pouze prověřené a kvalitní materiály od renomovaných výrobců.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#DDD6CA] mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Individuální přístup</h3>
                  <p className="text-[#DDD6CA]/70 text-sm">
                    Ke každému klientovi přistupujeme individuálně a respektujeme jeho požadavky.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#DDD6CA] mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Záruka kvality</h3>
                  <p className="text-[#DDD6CA]/70 text-sm">
                    Na všechny naše práce poskytujeme záruku a garantujeme spokojenost.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#DDD6CA] mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Férové ceny</h3>
                  <p className="text-[#DDD6CA]/70 text-sm">
                    Nabízíme kvalitní služby za rozumné ceny bez skrytých poplatků.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#1B1E22]/50 border border-[#DDD6CA]/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Máte zájem o naše služby?</h2>
        <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto mb-6">
          Kontaktujte nás pro nezávaznou konzultaci. Rádi vám poradíme s výběrem nejvhodnějšího řešení pro váš prostor.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-[#DDD6CA] text-[#1B1E22] hover:bg-[#DDD6CA]/90">
            <Link href="/kontakt">Nezávazná poptávka</Link>
          </Button>
          <Button asChild variant="outline" className="border-[#DDD6CA] text-[#DDD6CA] bg-transparent">
            <Link href="/galerie">Prohlédnout galerii</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-[#1B1E22] border-[#DDD6CA]/10">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-[#DDD6CA]/10 rounded-full p-4 mb-4">
          <div className="text-[#DDD6CA]">{icon}</div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-[#DDD6CA]/70 text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
