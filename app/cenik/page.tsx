import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PaintBucket, Brush, Wallpaper, Droplet, Info } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Ceník služeb</h1>
        <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto">
          Orientační ceník našich služeb. Pro přesnou kalkulaci nás kontaktujte.
        </p>
      </div>

      <Tabs defaultValue="malby" className="w-full mb-12">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
          <TabsTrigger value="malby" className="flex flex-col items-center gap-2 py-3">
            <PaintBucket className="h-5 w-5" />
            <span>Malby</span>
          </TabsTrigger>
          <TabsTrigger value="sterky" className="flex flex-col items-center gap-2 py-3">
            <Brush className="h-5 w-5" />
            <span>Stěrky</span>
          </TabsTrigger>
          <TabsTrigger value="tapety" className="flex flex-col items-center gap-2 py-3">
            <Wallpaper className="h-5 w-5" />
            <span>Tapety</span>
          </TabsTrigger>
          <TabsTrigger value="lakovani" className="flex flex-col items-center gap-2 py-3">
            <Droplet className="h-5 w-5" />
            <span>Lakování</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="malby">
          <div className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg overflow-hidden">
            <Table>
              <TableCaption>
                Ceny jsou orientační a mohou se lišit podle náročnosti práce a použitých materiálů.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Služba</TableHead>
                  <TableHead>Popis</TableHead>
                  <TableHead className="text-right">Cena od</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Základní malba bílá</TableCell>
                  <TableCell>Malba stěn a stropů bílou barvou včetně přípravy povrchu</TableCell>
                  <TableCell className="text-right">80 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Barevná malba</TableCell>
                  <TableCell>Malba stěn barevnou barvou včetně přípravy povrchu</TableCell>
                  <TableCell className="text-right">100 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Penetrace</TableCell>
                  <TableCell>Penetrace povrchu před malbou</TableCell>
                  <TableCell className="text-right">20 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Škrábání staré malby</TableCell>
                  <TableCell>Odstranění staré malby</TableCell>
                  <TableCell className="text-right">40 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sádrová stěrka</TableCell>
                  <TableCell>Vyrovnání povrchu sádrovou stěrkou</TableCell>
                  <TableCell className="text-right">120 Kč/m²</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="sterky">
          <div className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg overflow-hidden">
            <Table>
              <TableCaption>
                Ceny jsou orientační a mohou se lišit podle náročnosti práce a použitých materiálů.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Služba</TableHead>
                  <TableHead>Popis</TableHead>
                  <TableHead className="text-right">Cena od</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Benátský štuk</TableCell>
                  <TableCell>Dekorativní stěrka s efektem mramoru</TableCell>
                  <TableCell className="text-right">650 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Betonová stěrka</TableCell>
                  <TableCell>Stěrka s efektem betonu</TableCell>
                  <TableCell className="text-right">750 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Marmorino</TableCell>
                  <TableCell>Luxusní stěrka s vysokým leskem</TableCell>
                  <TableCell className="text-right">850 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Travertino</TableCell>
                  <TableCell>Stěrka s efektem travertinu</TableCell>
                  <TableCell className="text-right">800 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Metalická stěrka</TableCell>
                  <TableCell>Stěrka s metalickým efektem</TableCell>
                  <TableCell className="text-right">700 Kč/m²</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="tapety">
          <div className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg overflow-hidden">
            <Table>
              <TableCaption>
                Ceny jsou orientační a mohou se lišit podle náročnosti práce a použitých materiálů.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Služba</TableHead>
                  <TableHead>Popis</TableHead>
                  <TableHead className="text-right">Cena od</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Tapetování - papírové tapety</TableCell>
                  <TableCell>Instalace papírových tapet včetně přípravy povrchu</TableCell>
                  <TableCell className="text-right">150 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tapetování - vinylové tapety</TableCell>
                  <TableCell>Instalace vinylových tapet včetně přípravy povrchu</TableCell>
                  <TableCell className="text-right">180 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tapetování - vliesové tapety</TableCell>
                  <TableCell>Instalace vliesových tapet včetně přípravy povrchu</TableCell>
                  <TableCell className="text-right">200 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tapetování - fototapety</TableCell>
                  <TableCell>Instalace fototapet včetně přípravy povrchu</TableCell>
                  <TableCell className="text-right">250 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Odstranění staré tapety</TableCell>
                  <TableCell>Odstranění staré tapety a příprava povrchu</TableCell>
                  <TableCell className="text-right">80 Kč/m²</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="lakovani">
          <div className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg overflow-hidden">
            <Table>
              <TableCaption>
                Ceny jsou orientační a mohou se lišit podle náročnosti práce a použitých materiálů.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Služba</TableHead>
                  <TableHead>Popis</TableHead>
                  <TableHead className="text-right">Cena od</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Lakování dveří</TableCell>
                  <TableCell>Lakování dveří včetně přípravy povrchu</TableCell>
                  <TableCell className="text-right">1200 Kč/ks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Lakování zárubní</TableCell>
                  <TableCell>Lakování zárubní včetně přípravy povrchu</TableCell>
                  <TableCell className="text-right">800 Kč/ks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Lakování nábytku</TableCell>
                  <TableCell>Lakování nábytku včetně přípravy povrchu</TableCell>
                  <TableCell className="text-right">od 500 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Broušení povrchu</TableCell>
                  <TableCell>Broušení povrchu před lakováním</TableCell>
                  <TableCell className="text-right">100 Kč/m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Tmelení</TableCell>
                  <TableCell>Tmelení povrchu před lakováním</TableCell>
                  <TableCell className="text-right">120 Kč/m²</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-[#1B1E22]/50 border border-[#DDD6CA]/10 rounded-lg p-8">
        <div className="flex items-start gap-4">
          <Info className="h-6 w-6 text-[#DDD6CA] mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold mb-2">Důležité informace</h3>
            <ul className="space-y-2 text-[#DDD6CA]/80">
              <li>Uvedené ceny jsou orientační a mohou se lišit podle náročnosti práce a použitých materiálů.</li>
              <li>Minimální účtovaná částka je 2000 Kč.</li>
              <li>Doprava v rámci Ostravy je zdarma, mimo Ostravu účtujeme 8 Kč/km.</li>
              <li>Přesnou kalkulaci vám připravíme na základě osobní konzultace a zaměření prostoru.</li>
              <li>Ceny jsou uvedeny bez DPH.</li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#DDD6CA] text-[#1B1E22] hover:bg-[#DDD6CA]/90">
                <Link href="/kontakt">Nezávazná poptávka</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#DDD6CA] text-[#DDD6CA] bg-transparent">
                <Link href="/kontakt">Kontaktujte nás</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
