"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

interface ContactFormProps {
  product: {
    name: string
    price: number

  }
}

export default function ContactForm({ product }: ContactFormProps) {
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          product: {
            name: product.name,
            price: product.price
          },
        }),
      })

      if (response.ok) {
        toast({
          title: "Mensaje enviado!",
          description: "Obtendras una respuesta pronto.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error()
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Algo fallo, intentalo de nuevo.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input name="name" placeholder="Nombre" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Textarea name="message" placeholder="Comentarios o preguntas" className="min-h-[100px]" />
      <Button type="submit" className="w-full">
        Enviar
      </Button>
    </form>
  )
}

