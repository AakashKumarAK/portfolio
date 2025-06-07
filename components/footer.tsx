"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 bg-muted/50 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Aakash Kumar A
            </span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">© 2025 All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
