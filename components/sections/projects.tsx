'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Heart, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Resume Matcher',
    description: 'Intelligent resume-job matching system using NLP and ML algorithms. Features ATS optimization, skill gap analysis, and personalized recommendations.',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'Transformers', 'FastAPI', 'React', 'PostgreSQL'],
    github: 'https://github.com/ayaansheikh/resume-matcher',
    live: 'https://resume-matcher-ai.vercel.app',
    category: 'AI/ML'
  },
  {
    id: 2,
    title: 'Customer Churn Prediction Dashboard',
    description: 'Complete MLOps pipeline with automated model training, deployment, and monitoring. Real-time predictions with CI/CD integration.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'MLflow', 'Docker', 'Streamlit', 'GitHub Actions'],
    github: 'https://github.com/ayaansheikh/churn-prediction',
    live: 'https://churn-dashboard.streamlit.app',
    category: 'MLOps'
  },
  {
    id: 3,
    title: 'Intelligent Chatbot with LLM',
    description: 'Context-aware chatbot using LangChain and OpenAI. Features document Q&A, conversation memory, and custom knowledge base integration.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['LangChain', 'OpenAI', 'Pinecone', 'Next.js', 'Vercel'],
    github: 'https://github.com/ayaansheikh/ai-chatbot',
    live: 'https://ai-chatbot-llm.vercel.app',
    category: 'GenAI'
  },
  {
    id: 4,
    title: 'E2E Data Pipeline Platform',
    description: 'Automated data processing pipeline with Apache Airflow orchestration. Includes data quality checks, transformation, and Streamlit visualization.',
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Apache Airflow', 'Python', 'Pandas', 'Streamlit', 'AWS S3'],
    github: 'https://github.com/ayaansheikh/data-pipeline',
    live: 'https://data-pipeline-viz.streamlit.app',
    category: 'Data Engineering'
  }
];

export function Projects() {
  const [likes, setLikes] = useState<Record<number, { liked: boolean; disliked: boolean; count: number }>>(() => {
    // Initialize with consistent values to avoid SSR hydration issues
    return projects.reduce((acc, project) => ({
      ...acc,
      [project.id]: { liked: false, disliked: false, count: 0 }
    }), {});
  });

  // Load likes from localStorage and set random counts after component mounts
  useEffect(() => {
    const stored = localStorage.getItem('project-likes');
    if (stored) {
      try {
        const parsedLikes = JSON.parse(stored);
        setLikes(parsedLikes);
      } catch (error) {
        console.error('Error parsing stored likes:', error);
        // If no stored data or error, set random counts
        setLikes(prev => 
          projects.reduce((acc, project) => ({
            ...acc,
            [project.id]: { 
              ...prev[project.id],
              count: Math.floor(Math.random() * 50) + 10 
            }
          }), {})
        );
      }
    } else {
      // If no stored data, set random counts
      setLikes(prev => 
        projects.reduce((acc, project) => ({
          ...acc,
          [project.id]: { 
            ...prev[project.id],
            count: Math.floor(Math.random() * 50) + 10 
          }
        }), {})
      );
    }
  }, []);

  const handleLike = (projectId: number) => {
    setLikes(prev => {
      const current = prev[projectId];
      const newState = {
        ...prev,
        [projectId]: {
          liked: !current.liked,
          disliked: false,
          count: current.liked ? current.count - 1 : current.count + 1
        }
      };
      localStorage.setItem('project-likes', JSON.stringify(newState));
      return newState;
    });
  };

  const handleDislike = (projectId: number) => {
    setLikes(prev => {
      const current = prev[projectId];
      const newState = {
        ...prev,
        [projectId]: {
          liked: false,
          disliked: !current.disliked,
          count: current.disliked ? current.count : Math.max(0, current.count - 1)
        }
      };
      localStorage.setItem('project-likes', JSON.stringify(newState));
      return newState;
    });
  };

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
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real-world applications demonstrating full-stack data science expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover:shadow-2xl transition-all duration-300 group overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLike(project.id)}
                        className={likes[project.id]?.liked ? 'text-red-500' : ''}
                      >
                        {likes[project.id]?.liked ? <Heart className="w-4 h-4 fill-current" /> : <ThumbsUp className="w-4 h-4" />}
                        <span className="ml-1 text-xs">{likes[project.id]?.count || 0}</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDislike(project.id)}
                        className={likes[project.id]?.disliked ? 'text-red-500' : ''}
                      >
                        <ThumbsDown className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}