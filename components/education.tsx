"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    degree: "B.E in Electrical and Electronics Engineering",
    institution: "K.S.Ranagasamy College of Technology",
    location: "Tiruchengode, Namakkal",
    period: "Apr 2023",
    grade: "CGPA: 8.45",
    type: "Bachelor's Degree",
  },
  {
    degree: "Diploma in Electrical and Electronics Engineering",
    institution: "Paavai Polytechnic College",
    location: "Namakkal",
    period: "Sept 2020",
    grade: "93%",
    type: "Diploma",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
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
              Education
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">My academic background and qualifications</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
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
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                          <p className="text-lg text-blue-500 font-semibold mb-2">{edu.institution}</p>
                        </div>
                        <Badge variant="outline" className="self-start">
                          {edu.type}
                        </Badge>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          <span className="font-semibold text-green-600">{edu.grade}</span>
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
