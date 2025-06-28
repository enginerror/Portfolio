'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    href: 'https://github.com/ayaansheikh',
    color: 'hover:text-gray-400'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    href: 'https://linkedin.com/in/ayaansheikh',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
    href: 'https://twitter.com/ayaan_sheikh',
    color: 'hover:text-sky-400'
  },
  {
    name: 'Email',
    icon: <Mail className="w-5 h-5" />,
    href: 'mailto:ayaan@example.com',
    color: 'hover:text-red-400'
  }
];

const techStack = [
  'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 
  'Three.js', 'Python', 'TensorFlow', 'Docker'
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Ayaan Sheikh</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Data Science Developer passionate about building intelligent solutions 
              that make a real-world impact through the power of AI and machine learning.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['About', 'Skills', 'Projects', 'Timeline', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className={`transition-colors ${social.color}`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Open to freelance opportunities and exciting projects
            </p>
          </motion.div>
        </div>

        <Separator className="mb-8" />

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-sm text-muted-foreground mb-4 text-center">Built with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground hover:bg-muted/80 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground"
        >
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Ayaan Sheikh. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            and lots of coffee.
          </p>
          <p className="mt-2">
            All rights reserved. This portfolio showcases real projects and achievements.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}