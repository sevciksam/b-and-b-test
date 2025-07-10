"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const routes = [
  { href: "/", label: "Domů" },
  { href: "/sluzby", label: "Služby" },
  { href: "/cenik", label: "Ceník" },
  { href: "/galerie", label: "Galerie" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#DDD6CA]/10 bg-[#1B1E22]/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="B&B Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="text-xl font-bold text-[#DDD6CA]">B&B</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium text-[#DDD6CA]/80 transition-colors hover:text-[#DDD6CA]"
            >
              {route.label}
            </Link>
          ))}
          <Button
            asChild
            variant="outline"
            className="border-[#DDD6CA] text-[#DDD6CA] hover:bg-[#DDD6CA] hover:text-[#1B1E22] bg-transparent"
          >
            <Link href="/kontakt">Nezávazná poptávka</Link>
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-[#DDD6CA]">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Otevřít menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#1B1E22] border-l border-[#DDD6CA]/10">
            <div className="flex flex-col gap-6 pt-10">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#DDD6CA]/80 transition-colors hover:text-[#DDD6CA]"
                >
                  {route.label}
                </Link>
              ))}
              <Button
                asChild
                variant="outline"
                className="mt-4 border-[#DDD6CA] text-[#DDD6CA] hover:bg-[#DDD6CA] hover:text-[#1B1E22] bg-transparent"
              >
                <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                  Nezávazná poptávka
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
