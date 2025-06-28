'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Database, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const highlights = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI Expertise',
    description: 'Deep learning, NLP, and computer vision specialist'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Full Stack',
    description: 'End-to-end development from ML models to production'
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Data Engineering',
    description: 'Building robust data pipelines and MLOps workflows'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Innovation',
    description: 'Turning research into scalable business solutions'
  }
];

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about bridging the gap between artificial intelligence research and real-world applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Ayaan Sheikh"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-foreground/80 leading-relaxed">
                I'm a <strong className="gradient-text">Full Stack Data Science Developer</strong> with a passion for 
                creating intelligent systems that solve real-world problems. With expertise spanning from machine 
                learning research to production deployment, I build scalable AI solutions that make a difference.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                My journey combines deep technical knowledge in AI/ML with full-stack development skills, 
                enabling me to deliver complete solutions from data ingestion to user-facing applications. 
                I specialize in MLOps, ensuring that ML models transition seamlessly from jupyter notebooks to production systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Python', 'TensorFlow', 'React', 'Next.js', 'Docker', 'AWS', 'MLflow', 'LangChain'].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}