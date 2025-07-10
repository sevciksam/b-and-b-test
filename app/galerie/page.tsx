"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PaintBucket, Brush, Wallpaper, Droplet, X } from "lucide-react"

type GalleryItem = {
  id: number
  title: string
  description: string
  category: string
  image: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Byt 3+1, Ostrava",
    description: "Kompletní malba bytu včetně stropů a renovace koupelny.",
    category: "malby",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Rodinný dům, Olomouc",
    description: "Dekorativní stěrky v obývacím pokoji a tapetování ložnice.",
    category: "sterky",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Kancelářské prostory, Opava",
    description: "Malba kancelářských prostor a lakování dveří.",
    category: "malby",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Benátský štuk, Frýdek-Místek",
    description: "Realizace benátského štuku v obývacím pokoji.",
    category: "sterky",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Tapetování ložnice, Havířov",
    description: "Instalace vliesové tapety v ložnici.",
    category: "tapety",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 6,
    title: "Lakování dveří, Karviná",
    description: "Renovace a lakování interiérových dveří.",
    category: "lakovani",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 7,
    title: "Betonová stěrka, Ostrava",
    description: "Realizace betonové stěrky v koupelně.",
    category: "sterky",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 8,
    title: "Fototapeta, Nový Jičín",
    description: "Instalace fototapety v dětském pokoji.",
    category: "tapety",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 9,
    title: "Malba obývacího pokoje, Přerov",
    description: "Barevná malba obývacího pokoje.",
    category: "malby",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 10,
    title: "Lakování zárubní, Prostějov",
    description: "Renovace a lakování zárubní.",
    category: "lakovani",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 11,
    title: "Marmorino, Olomouc",
    description: "Realizace luxusní stěrky Marmorino v koupelně.",
    category: "sterky",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 12,
    title: "Tapetování obývacího pokoje, Ostrava",
    description: "Instalace vinylové tapety v obývacím pokoji.",
    category: "tapety",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [open, setOpen] = useState(false)

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item)
    setOpen(true)
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Galerie realizací</h1>
        <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto">
          Prohlédněte si naše realizované projekty a inspirujte se pro váš domov či kancelář.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-12">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-8">
          <TabsTrigger value="all">Vše</TabsTrigger>
          <TabsTrigger value="malby" className="flex items-center gap-2">
            <PaintBucket className="h-4 w-4" />
            <span>Malby</span>
          </TabsTrigger>
          <TabsTrigger value="sterky" className="flex items-center gap-2">
            <Brush className="h-4 w-4" />
            <span>Stěrky</span>
          </TabsTrigger>
          <TabsTrigger value="tapety" className="flex items-center gap-2">
            <Wallpaper className="h-4 w-4" />
            <span>Tapety</span>
          </TabsTrigger>
          <TabsTrigger value="lakovani" className="flex items-center gap-2">
            <Droplet className="h-4 w-4" />
            <span>Lakování</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} onClick={() => openLightbox(item)} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="malby">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems
              .filter((item) => item.category === "malby")
              .map((item) => (
                <GalleryCard key={item.id} item={item} onClick={() => openLightbox(item)} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="sterky">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems
              .filter((item) => item.category === "sterky")
              .map((item) => (
                <GalleryCard key={item.id} item={item} onClick={() => openLightbox(item)} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="tapety">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems
              .filter((item) => item.category === "tapety")
              .map((item) => (
                <GalleryCard key={item.id} item={item} onClick={() => openLightbox(item)} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="lakovani">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems
              .filter((item) => item.category === "lakovani")
              .map((item) => (
                <GalleryCard key={item.id} item={item} onClick={() => openLightbox(item)} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl bg-[#1B1E22] border-[#DDD6CA]/10">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedItem.title}</DialogTitle>
                <DialogDescription className="text-[#DDD6CA]/70">{selectedItem.description}</DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Zavřít</span>
              </button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <div
      className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
        <p className="text-[#DDD6CA]/70 text-sm">{item.description}</p>
      </div>
    </div>
  )
}
