"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect } from "next/dist/server/api-utils";

export default function Hero() {
  const [particles, setParticles] = useState<
    { x: number; y: number; delay: number }[]
  >([]);

  useEffect(() => {
    // Generate particles only on the client side
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100, // Use percentages instead of window.innerWidth
      y: Math.random() * 100, // Use percentages instead of window.innerHeight
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
   // ...existing code...
<section
  id="home"
  className="min-h-screen flex items-center justify-center relative overflow-hidden"
>
  {/* Background Animation */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
    {particles.map((particle, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
        initial={{
          x: `${particle.x}%`,
          y: `${particle.y}%`,
        }}
        animate={{
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: particle.delay,
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-5xl md:text-7xl font-bold"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Aakash Kumar A
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg sm:text-2xl md:text-3xl text-muted-foreground"
      >
        Full-stack Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto text-muted-foreground"
      >
        Passionate about creating innovative web applications with React.js
        and Next.js. Ready to contribute effectively to dynamic development
        teams.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8 w-full"
      >
        <a href="/Aakash_kumar_A resume.pdf" download>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=aakashkumar897340@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap justify-center gap-6 mt-6 sm:mt-8"
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-muted-foreground hover:text-blue-500 transition-colors">
              <Mail className="h-6 w-6" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem asChild>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aakashkumar897340@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Gmail
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="mailto:aakashkumar897340@gmail.com">
                Open in Default Email App
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <a
          href="tel:+917904273681"
          className="text-muted-foreground hover:text-blue-500 transition-colors"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/aakashkumar2001"
          className="text-muted-foreground hover:text-blue-500 transition-colors"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://github.com"
          className="text-muted-foreground hover:text-blue-500 transition-colors"
        >
          <Github className="h-6 w-6" />
        </a>
      </motion.div>
    </motion.div>

    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      onClick={scrollToAbout}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-blue-500 transition-colors"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </motion.button>
  </div>
</section>
// ...existing code...
  );
}
