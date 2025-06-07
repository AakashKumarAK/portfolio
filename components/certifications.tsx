"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, Building } from "lucide-react"

const certifications = [
  {
    title: "Java Full Stack",
    institution: "Jspiders, Bangalore",
    date: "Mar 2024",
    description:
      "Comprehensive training in Java full-stack development covering both frontend and backend technologies.",
    skills: ["Java", "Spring Framework", "Database Management", "Web Development"],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
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
              Certifications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and training programs completed
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
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
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                          <div className="flex items-center text-lg text-blue-500 font-semibold mb-2">
                            <Building className="h-4 w-4 mr-2" />
                            {cert.institution}
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {cert.date}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

                      <div>
                        <h4 className="font-semibold mb-3 text-blue-500">Skills Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, i) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <Badge variant="outline">{skill}</Badge>
                            </motion.div>
                          ))}
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
