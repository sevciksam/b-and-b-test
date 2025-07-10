import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#DDD6CA]/10 bg-[#1B1E22]">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">B&B Malby a renovace</h3>
            <p className="text-sm text-[#DDD6CA]/70 mb-4">
              Profesionální malířské a renovační služby v Moravskoslezském a Olomouckém kraji.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-[#DDD6CA]/70 hover:text-[#DDD6CA]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-[#DDD6CA]/70 hover:text-[#DDD6CA]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#DDD6CA]/70" />
                <span>+420 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#DDD6CA]/70" />
                <span>info@bb-renovace.cz</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#DDD6CA]/70 mt-0.5" />
                <span>Moravskoslezský & Olomoucký kraj</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Informace</h3>
            <div className="space-y-2 text-sm">
              <p>IČO: 12345678</p>
              <p>Působnost: Moravskoslezský & Olomoucký kraj</p>
              <div className="pt-4">
                <Link href="/kontakt" className="text-[#DDD6CA] underline underline-offset-4 hover:text-[#DDD6CA]/80">
                  Nezávazná poptávka
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#DDD6CA]/10 pt-6 text-center text-xs text-[#DDD6CA]/50">
          <p>© {new Date().getFullYear()} B&B Malby a renovace. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}
