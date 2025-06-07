"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, Calendar } from "lucide-react"

const publications = [
  {
    title: "Integrated IoT System for Automatic Dust Cleaning of Solar Panels",
    conference: "ICAIS-2023",
    doi: "10.1109/ICAIS56108.2023.10073675",
    year: "2023",
    description:
      "Research paper on developing an IoT-based automated system for cleaning dust from solar panels to improve efficiency and energy output.",
    keywords: ["IoT", "Solar Panels", "Automation", "Energy Efficiency", "Smart Systems"],
  },
]

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Research papers and academic contributions</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 leading-tight">{pub.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                            <Badge variant="outline" className="self-start">
                              {pub.conference}
                            </Badge>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              {pub.year}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{pub.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-500">Keywords:</h4>
                          <div className="flex flex-wrap gap-2">
                            {pub.keywords.map((keyword, i) => (
                              <motion.div
                                key={keyword}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <Badge variant="secondary">{keyword}</Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <Button
                            asChild
                            size="sm"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                          >
                            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Paper
                            </a>
                          </Button>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <span className="font-mono">DOI: {pub.doi}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
