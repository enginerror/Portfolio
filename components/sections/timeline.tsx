'use client';

import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Award, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const timelineData = [
  {
    year: '2024',
    type: 'certification',
    title: 'AWS Machine Learning Specialty',
    organization: 'Amazon Web Services',
    description: 'Advanced certification in ML on AWS, covering model deployment, optimization, and production workflows.',
    icon: <Award className="w-5 h-5" />,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    year: '2024',
    type: 'experience',
    title: 'Senior ML Engineer',
    organization: 'TechCorp AI Solutions',
    description: 'Led development of production ML systems, implemented MLOps pipelines, and mentored junior developers.',
    icon: <Briefcase className="w-5 h-5" />,
    color: 'from-blue-500 to-purple-500'
  },
  {
    year: '2023',
    type: 'certification',
    title: 'TensorFlow Developer Certificate',
    organization: 'Google',
    description: 'Professional certification demonstrating proficiency in TensorFlow for deep learning applications.',
    icon: <Award className="w-5 h-5" />,
    color: 'from-green-500 to-teal-500'
  },
  {
    year: '2023',
    type: 'experience',
    title: 'Full Stack Data Scientist',
    organization: 'DataTech Innovations',
    description: 'Built end-to-end ML solutions, developed APIs, and created interactive dashboards for data visualization.',
    icon: <Briefcase className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: '2022',
    type: 'education',
    title: 'M.S. in Data Science',
    organization: 'University of Technology',
    description: 'Specialized in Machine Learning, Deep Learning, and Statistical Computing. Thesis on NLP applications.',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    year: '2021',
    type: 'certification',
    title: 'Data Science Professional Certificate',
    organization: 'IBM',
    description: 'Comprehensive program covering Python, SQL, machine learning, and data visualization techniques.',
    icon: <Award className="w-5 h-5" />,
    color: 'from-red-500 to-pink-500'
  },
  {
    year: '2020',
    type: 'education',
    title: 'B.S. in Computer Science',
    organization: 'State University',
    description: 'Graduated Summa Cum Laude. Focus on algorithms, software engineering, and artificial intelligence.',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'from-cyan-500 to-blue-500'
  }
];

export function Timeline() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Journey & Milestones
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A timeline of my educational background, professional experience, and key achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg z-10 relative ml-0 md:ml-0`}>
                    {item.icon}
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse opacity-30"></div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8 ml-8' : 'md:mr-8 ml-8'} max-w-md`}>
                  <Card className="glass-card hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {item.year}
                        </Badge>
                        <Badge variant="secondary" className="text-xs capitalize">
                          {item.type}
                        </Badge>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-primary font-medium mb-2">{item.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}