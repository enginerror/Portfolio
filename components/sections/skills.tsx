'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 }
    ]
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Node.js/Express', level: 88 },
      { name: 'Python Flask/Django', level: 92 },
      { name: 'FastAPI', level: 90 },
      { name: 'RESTful APIs', level: 93 }
    ]
  },
  {
    title: 'Data Science & ML',
    icon: '🧠',
    skills: [
      { name: 'Python/Pandas/NumPy', level: 95 },
      { name: 'Scikit-learn', level: 92 },
      { name: 'TensorFlow/PyTorch', level: 88 },
      { name: 'Hugging Face', level: 85 }
    ]
  },
  {
    title: 'Database & Storage',
    icon: '🗄️',
    skills: [
      { name: 'SQL/PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 82 },
      { name: 'Vector Databases', level: 80 }
    ]
  },
  {
    title: 'MLOps & DevOps',
    icon: '🚀',
    skills: [
      { name: 'Docker/Kubernetes', level: 87 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'MLflow/DVC', level: 88 },
      { name: 'Apache Airflow', level: 82 }
    ]
  },
  {
    title: 'AI & Advanced Tech',
    icon: '🤖',
    skills: [
      { name: 'LangChain', level: 88 },
      { name: 'OpenAI APIs', level: 90 },
      { name: 'Streamlit', level: 92 },
      { name: 'RAG Systems', level: 85 }
    ]
  }
];

const tools = [
  'VS Code', 'Jupyter', 'Google Colab', 'Postman', 'Git/GitHub', 
  'AWS', 'Docker', 'Figma', 'Notion', 'Slack'
];

export function Skills() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building intelligent, scalable solutions from data to deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}