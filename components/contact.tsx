"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Github, Send, Copy, Check } from "lucide-react"
import { useActionState, useState } from "react"
import { submitContactForm, type ContactFormState } from "../app/actions/action"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aakashkumar897340@gmail.com",
    href: "mailto:aakashkumar897340@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7904273681",
    href: "tel:+917904273681",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin/aakashkumar2001",
    href: "https://linkedin.com/in/aakashkumar2001",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aakashkumar",
    href: "https://github.com",
    color: "from-gray-600 to-gray-700",
  },
]

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {} as ContactFormState)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("aakashkumar897340@gmail.com")
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  // ...existing code...
return (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to collaborate on exciting projects? Let's connect and discuss opportunities!
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
          {contactInfo.map((info, index) => {
            if (info.label === "Email") {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-center p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200 group"
                >
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-0 sm:mr-4 mb-3 sm:mb-0 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="font-semibold">{info.label}</p>
                    <p className="text-muted-foreground break-all">{info.value}</p>
                  </div>
                  <div className="flex gap-2 mt-3 sm:mt-0">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${info.value}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gmail
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${info.value}`}>Email App</a>
                    </Button>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm" onClick={copyEmailToClipboard}>
                            {copiedEmail ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Copy to clipboard</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </motion.div>
              )
            }

            return (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200 group"
              >
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-0 sm:mr-4 mb-3 sm:mb-0 group-hover:scale-110 transition-transform duration-200`}
                >
                  <info.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-semibold">{info.label}</p>
                  <p className="text-muted-foreground break-all">{info.value}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </div>
  </section>
)
// ...existing code...
}
