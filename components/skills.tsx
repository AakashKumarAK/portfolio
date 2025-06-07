"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Settings, GitBranch, Cloud, Monitor } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "Java"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frameworks & Tools",
    icon: Settings,
    skills: ["Next.js", "React.js", "Tailwind CSS"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["Supabase"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Software",
    icon: Monitor,
    skills: ["VS Code", "Eclipse"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
    color: "from-gray-500 to-slate-500",
  },
  {
    title: "Deployment",
    icon: Cloud,
    skills: ["Vercel"],
    color: "from-indigo-500 to-blue-500",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-background to-muted">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
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
