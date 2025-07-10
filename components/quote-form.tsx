"use client"

import type React from "react"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Jméno musí mít alespoň 2 znaky" }),
  email: z.string().email({ message: "Neplatný email" }),
  phone: z.string().min(9, { message: "Neplatné telefonní číslo" }),
  city: z.string().min(1, { message: "Vyberte město" }),
  message: z.string().min(10, { message: "Zpráva musí mít alespoň 10 znaků" }),
})

const cities = [
  "Ostrava",
  "Opava",
  "Olomouc",
  "Frýdek-Místek",
  "Havířov",
  "Karviná",
  "Nový Jičín",
  "Přerov",
  "Prostějov",
  "Jiné",
]

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileUploaded, setFileUploaded] = useState<File | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors: formErrors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    },
  })

  const cityValue = watch("city")

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Simple success notification
      alert("Poptávka odeslána! Děkujeme za váš zájem. Budeme vás kontaktovat co nejdříve.")
      reset()
      setFileUploaded(null)
    }, 1500)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileUploaded(e.target.files[0])
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Jméno a příjmení</Label>
          <Input id="name" placeholder="Jan Novák" {...register("name")} className="bg-[#1B1E22] border-[#DDD6CA]/20" />
          {formErrors.name && <p className="text-sm text-red-500">{formErrors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="jan.novak@email.cz"
            {...register("email")}
            className="bg-[#1B1E22] border-[#DDD6CA]/20"
          />
          {formErrors.email && <p className="text-sm text-red-500">{formErrors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            placeholder="+420 123 456 789"
            {...register("phone")}
            className="bg-[#1B1E22] border-[#DDD6CA]/20"
          />
          {formErrors.phone && <p className="text-sm text-red-500">{formErrors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Město</Label>
          <Select onValueChange={(value) => setValue("city", value)} value={cityValue}>
            <SelectTrigger className="bg-[#1B1E22] border-[#DDD6CA]/20">
              <SelectValue placeholder="Vyberte město" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {formErrors.city && <p className="text-sm text-red-500">{formErrors.city.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Zpráva</Label>
        <Textarea
          id="message"
          placeholder="Popište nám váš projekt..."
          className="min-h-32 bg-[#1B1E22] border-[#DDD6CA]/20"
          {...register("message")}
        />
        {formErrors.message && <p className="text-sm text-red-500">{formErrors.message.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="file">Nahrát fotografie (volitelné)</Label>
        <Input
          id="file"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="bg-[#1B1E22] border-[#DDD6CA]/20"
        />
        <p className="text-sm text-[#DDD6CA]/70">
          {fileUploaded ? `Nahráno: ${fileUploaded.name}` : "Můžete nahrát fotografii prostoru pro lepší představu."}
        </p>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#DDD6CA] text-[#1B1E22] hover:bg-[#DDD6CA]/90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Odesílám...
          </>
        ) : (
          "Odeslat poptávku"
        )}
      </Button>
    </form>
  )
}
