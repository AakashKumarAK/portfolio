"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Intern",
    company: "Big7 Solutions & Media Private Limited",
    location: "Puducherry",
    period: "Oct 2024 – Present",
    description: [
      "Hands-on experience in building web applications using Next.js and Supabase.",
      "Implemented real-time data handling using Supabase APIs in a web application.",
    ],
    technologies: ["Next.js", "Supabase", "React.js"],
    current: true,
  },
  {
    title: "Intern At Physical Designer",
    company: "Govlsi Technologies private limited",
    location: "Bangalore",
    period: "Jan 2023 – May 2023",
    description: ["Used HTML to create visually appealing tables for clear data presentation."],
    technologies: ["HTML", "CSS"],
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and internship experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-bold mr-3">{exp.title}</h3>
                        {exp.current && <Badge className="bg-green-500 hover:bg-green-600">Current</Badge>}
                      </div>
                      <div className="flex items-center text-lg text-blue-500 font-semibold mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.technologies.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="outline">{tech}</Badge>
                        </motion.div>
                      ))}
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
