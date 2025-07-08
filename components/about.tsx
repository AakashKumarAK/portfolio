"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white"
                    >
                      AK
                    </motion.div>
                  </div>
                  <div className="space-y-6">
                    <motion.h3
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold"
                    >
                      Passionate Frontend Developer
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="text-lg text-muted-foreground leading-relaxed"
                    >
                      Energetic and eager candidate with a passion for software development, proficient in Next.js and
                      React.js. A quick learner with a knack for problem-solving, ready to contribute effectively to
                      developing software projects and grow within a dynamic team environment.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-2  gap-6 text-sm"
                    >
                      <div>
                        <span className="font-semibold text-blue-500">Email:</span>
                        <p className="text-muted-foreground">aakashkumar897340@gmail.com</p>
                      </div>
                      <div className="ml-2">
                        <span className="font-semibold text-blue-500">Phone:</span>
                        <p className="text-muted-foreground ">+91 7904273681</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
