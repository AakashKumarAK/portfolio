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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  if (info.label === "Email") {
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200 group"
                      >
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-200`}
                        >
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{info.label}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                        <div className="flex gap-2">
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
                      className="flex items-center p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200 group"
                    >
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-200`}
                      >
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">📧 How You'll Get My Response</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    When you submit the contact form, I'll receive your message directly in my Gmail inbox at{" "}
                    <span className="font-mono text-blue-500">aakashkumar897340@gmail.com</span>
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I'll respond to you from that same email address, so you'll see my reply in your inbox. I typically
                    respond within 24-48 hours!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                {/* Success/Error Messages */}
                {state.message && (
                  <Alert
                    className={`mb-6 ${state.success ? "border-green-500 bg-green-50 dark:bg-green-950" : "border-red-500 bg-red-50 dark:bg-red-950"}`}
                  >
                    <AlertDescription
                      className={
                        state.success ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"
                      }
                    >
                      {state.message}
                    </AlertDescription>
                  </Alert>
                )}

                <form action={formAction} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        name="name"
                        placeholder="Your Name"
                        className={`bg-background ${state.errors?.name ? "border-red-500" : ""}`}
                        disabled={isPending}
                      />
                      {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className={`bg-background ${state.errors?.email ? "border-red-500" : ""}`}
                        disabled={isPending}
                      />
                      {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Input
                      name="subject"
                      placeholder="Subject"
                      className={`bg-background ${state.errors?.subject ? "border-red-500" : ""}`}
                      disabled={isPending}
                    />
                    {state.errors?.subject && <p className="text-red-500 text-sm mt-1">{state.errors.subject[0]}</p>}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      className={`bg-background resize-none ${state.errors?.message ? "border-red-500" : ""}`}
                      disabled={isPending}
                    />
                    {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isPending}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
