"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Star, PaintBucket, Brush, Wallpaper, Droplet } from "lucide-react"
import QuoteForm from "@/components/quote-form"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1B1E22]" />
        </div>

        <div className="container relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl mb-6">
              Profesionální malířské a renovační služby
            </h1>
            <p className="text-xl text-[#DDD6CA]/80 mb-8">
              Proměníme váš prostor v dokonalé místo pro život či podnikání. Kvalitní řemeslo s důrazem na detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#DDD6CA] text-[#1B1E22] hover:bg-[#DDD6CA]/90">
                <Link href="/kontakt">Nezávazná poptávka</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#DDD6CA] text-[#DDD6CA] bg-transparent">
                <Link href="/sluzby">Naše služby</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-[#1B1E22]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Naše služby</h2>
            <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto">
              Nabízíme komplexní řešení pro vaše interiéry - od klasických maleb přes dekorativní stěrky až po
              tapetování.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<PaintBucket className="h-10 w-10" />}
              title="Malby"
              description="Klasické i speciální malby interiérů s použitím kvalitních barev a materiálů."
            />
            <ServiceCard
              icon={<Brush className="h-10 w-10" />}
              title="Stěrky"
              description="Dekorativní stěrky pro jedinečný vzhled vašich stěn s různými povrchovými úpravami."
            />
            <ServiceCard
              icon={<Wallpaper className="h-10 w-10" />}
              title="Tapety"
              description="Profesionální tapetování s širokou nabídkou vzorů a materiálů."
            />
            <ServiceCard
              icon={<Droplet className="h-10 w-10" />}
              title="Lakování"
              description="Lakování dveří, zárubní a dalších povrchů s důrazem na kvalitu a trvanlivost."
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-[#DDD6CA] text-[#DDD6CA] bg-transparent">
              <Link href="/sluzby" className="group">
                Všechny služby <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#1B1E22]/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Proč si vybrat nás</h2>
            <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto">
              Naše práce je založena na kvalitě, spolehlivosti a profesionálním přístupu.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Kvalitní materiály"
              description="Používáme pouze prověřené a kvalitní materiály od renomovaných výrobců."
            />
            <FeatureCard
              title="Zkušený tým"
              description="Náš tým má mnohaleté zkušenosti s realizací malířských a renovačních prací."
            />
            <FeatureCard
              title="Dodržování termínů"
              description="Práci dokončíme vždy v dohodnutém termínu a s maximální pečlivostí."
            />
            <FeatureCard
              title="Čistota na pracovišti"
              description="Dbáme na pořádek během práce i po jejím dokončení."
            />
            <FeatureCard
              title="Záruka kvality"
              description="Na všechny naše práce poskytujeme záruku a garantujeme spokojenost."
            />
            <FeatureCard
              title="Férové ceny"
              description="Nabízíme kvalitní služby za rozumné ceny bez skrytých poplatků."
            />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24 bg-[#1B1E22]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Jak pracujeme</h2>
            <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto">
              Jednoduchý proces od první konzultace až po dokončení projektu.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-[#DDD6CA]/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12 relative">
              <TimelineItem
                number="01"
                title="Konzultace a zaměření"
                description="Provedeme nezávaznou konzultaci, zaměření prostoru a doporučíme nejvhodnější řešení."
                isLeft={true}
              />
              <TimelineItem
                number="02"
                title="Cenová nabídka"
                description="Připravíme detailní cenovou nabídku včetně rozpisu prací a použitých materiálů."
                isLeft={false}
              />
              <TimelineItem
                number="03"
                title="Realizace"
                description="Provedeme dohodnuté práce ve stanoveném termínu s důrazem na kvalitu a čistotu."
                isLeft={true}
              />
              <TimelineItem
                number="04"
                title="Předání a kontrola"
                description="Společně zkontrolujeme výsledek práce a předáme vám hotové dílo."
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-16 md:py-24 bg-[#1B1E22]/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Reference</h2>
            <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto">
              Podívejte se na naše realizované projekty a přečtěte si, co o nás říkají naši klienti.
            </p>
          </motion.div>

          <Tabs defaultValue="testimonials" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="testimonials">Hodnocení klientů</TabsTrigger>
              <TabsTrigger value="projects">Realizované projekty</TabsTrigger>
            </TabsList>
            <TabsContent value="testimonials">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TestimonialCard
                  name="Jan Novák"
                  location="Ostrava"
                  text="Profesionální přístup, kvalitní práce a dodržení termínu. Mohu jen doporučit!"
                  rating={5}
                />
                <TestimonialCard
                  name="Marie Svobodová"
                  location="Olomouc"
                  text="Výborná komunikace, ochota a skvělý výsledek. Určitě využiji služby znovu."
                  rating={5}
                />
                <TestimonialCard
                  name="Petr Dvořák"
                  location="Opava"
                  text="Rychlé jednání, férová cena a precizní provedení. Jsem velmi spokojen."
                  rating={4}
                />
              </div>
            </TabsContent>
            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  image="/placeholder.svg?height=400&width=600"
                  title="Byt 3+1, Ostrava"
                  description="Kompletní malba bytu včetně stropů a renovace koupelny."
                />
                <ProjectCard
                  image="/placeholder.svg?height=400&width=600"
                  title="Rodinný dům, Olomouc"
                  description="Dekorativní stěrky v obývacím pokoji a tapetování ložnice."
                />
                <ProjectCard
                  image="/placeholder.svg?height=400&width=600"
                  title="Kancelářské prostory, Opava"
                  description="Malba kancelářských prostor a lakování dveří."
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-[#DDD6CA] text-[#DDD6CA] bg-transparent">
              <Link href="/galerie" className="group">
                Zobrazit více <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 md:py-24 bg-[#1B1E22]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Nezávazná poptávka</h2>
            <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto">
              Vyplňte formulář a my vás budeme kontaktovat s nabídkou.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[#1B1E22]/50 border border-[#DDD6CA]/10 rounded-lg p-6 flex flex-col items-center text-center"
    >
      <div className="text-[#DDD6CA] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-[#DDD6CA]/70 text-sm">{description}</p>
    </motion.div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <CheckCircle className="h-5 w-5 text-[#DDD6CA] mr-2" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-[#DDD6CA]/70 text-sm">{description}</p>
    </motion.div>
  )
}

function TimelineItem({
  number,
  title,
  description,
  isLeft,
}: {
  number: string
  title: string
  description: string
  isLeft: boolean
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className={`md:w-1/2 ${isLeft ? "md:pr-12" : "md:order-last md:pl-12"}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg p-6"
        >
          <div className="flex items-center mb-4">
            <div className="bg-[#DDD6CA]/10 text-[#DDD6CA] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
              {number}
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <p className="text-[#DDD6CA]/70">{description}</p>
        </motion.div>
      </div>
      <div className={`hidden md:flex md:w-1/2 ${isLeft ? "" : "md:justify-end"}`}>
        <div className="relative">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#DDD6CA] rounded-full" />
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({
  name,
  location,
  text,
  rating,
}: {
  name: string
  location: string
  text: string
  rating: number
}) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg p-6">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-[#DDD6CA] fill-[#DDD6CA]" />
        ))}
        {[...Array(5 - rating)].map((_, i) => (
          <Star key={i + rating} className="h-4 w-4 text-[#DDD6CA]/30" />
        ))}
      </div>
      <p className="text-[#DDD6CA]/90 mb-4">"{text}"</p>
      <div className="flex items-center">
        <div className="bg-[#DDD6CA]/10 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mr-3">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-[#DDD6CA]/70">{location}</p>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-[#DDD6CA]/70 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}
