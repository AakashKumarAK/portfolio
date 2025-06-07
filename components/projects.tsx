"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react"

const projects = [
  {
    title: "Food Order App",
    description:
      "Developed a responsive food ordering application using ReactJS, featuring user authentication. Utilized React.js hooks for efficient state management and improved component reusability.",
    technologies: ["React.js", "JavaScript", "CSS"],
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    features: [
      "User authentication system",
      "Responsive design",
      "Efficient state management with React hooks",
      "Component reusability",
    ],
  },
  {
    title: "Reminder App",
    description:
      "Developed a task and reminder management application using Next.js, Supabase, and Tailwind CSS with dynamic filtering, role-based visibility, and real-time updates.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS", "ShadCN"],
    link: "https://reminder-app-rosy-five.vercel.app",
    icon: Globe,
    color: "from-blue-500 to-purple-500",
    features: [
      "Dynamic filtering for tasks based on status",
      "Role-based visibility",
      "Real-time updates",
      "Swipe actions for task management",
      "Intuitive UI with ShadCN components",
      "Optimized data fetching strategies",
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
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
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of web applications I've built using modern technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-500">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-blue-500">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Badge variant="secondary">{tech}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {project.link && (
                      <div className="flex gap-3 pt-4">
                        <Button
                          asChild
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    )}
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
