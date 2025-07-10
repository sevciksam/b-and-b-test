import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import QuoteForm from "@/components/quote-form"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
        <p className="text-[#DDD6CA]/70 max-w-2xl mx-auto">
          Máte zájem o naše služby nebo potřebujete poradit? Neváhejte nás kontaktovat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <ContactCard
          icon={<Phone className="h-6 w-6" />}
          title="Telefon"
          content="+420 123 456 789"
          link="tel:+420123456789"
        />
        <ContactCard
          icon={<Mail className="h-6 w-6" />}
          title="Email"
          content="info@bb-renovace.cz"
          link="mailto:info@bb-renovace.cz"
        />
        <ContactCard
          icon={<MapPin className="h-6 w-6" />}
          title="Působnost"
          content="Moravskoslezský & Olomoucký kraj"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6">Nezávazná poptávka</h2>
          <QuoteForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Informace</h2>
          <div className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Otevírací doba</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Pondělí - Pátek</span>
                <span>8:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sobota</span>
                <span>Po domluvě</span>
              </div>
              <div className="flex justify-between">
                <span>Neděle</span>
                <span>Zavřeno</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1B1E22] border border-[#DDD6CA]/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Firemní údaje</h3>
            <div className="space-y-2 text-[#DDD6CA]/90">
              <p>B&B Malby a renovace</p>
              <p>IČO: 12345678</p>
              <p>DIČ: CZ12345678</p>
              <p>Sídlo: Ostrava</p>
              <p>Působnost: Moravskoslezský & Olomoucký kraj</p>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-4">Sociální sítě</h3>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="icon" className="border-[#DDD6CA]/20 bg-transparent">
                <Link href="https://facebook.com">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon" className="border-[#DDD6CA]/20 bg-transparent">
                <Link href="https://instagram.com">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1B1E22]/50 border border-[#DDD6CA]/10 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Kde působíme</h2>
        <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164220.7704205792!2d18.13555565!3d49.8209226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e3cfe3a8a553%3A0x400af0f6614e1b0!2sOstrava!5e0!3m2!1scs!2scz!4v1657030941592!5m2!1scs!2scz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-6 text-center text-[#DDD6CA]/70">
          <p>Působíme v celém Moravskoslezském a Olomouckém kraji.</p>
          <p>Ostrava, Opava, Frýdek-Místek, Havířov, Karviná, Nový Jičín, Olomouc, Přerov, Prostějov a okolí.</p>
        </div>
      </div>
    </div>
  )
}

function ContactCard({
  icon,
  title,
  content,
  link,
}: {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
}) {
  const CardContent = () => (
    <div className="p-6 flex flex-col items-center text-center">
      <div className="bg-[#DDD6CA]/10 rounded-full p-4 mb-4">
        <div className="text-[#DDD6CA]">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-[#DDD6CA]/90">{content}</p>
    </div>
  )

  return (
    <Card className="bg-[#1B1E22] border-[#DDD6CA]/10">
      {link ? (
        <Link href={link} className="block hover:opacity-80 transition-opacity">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </Card>
  )
}
