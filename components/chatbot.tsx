'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const botKnowledge = {
  'about': 'Ayaan Sheikh is a Full Stack Data Science Developer with expertise in Machine Learning, Deep Learning, MLOps, and Generative AI. He specializes in building end-to-end AI solutions that bridge research and real-world applications.',
  'skills': 'Ayaan is proficient in Python, TensorFlow, PyTorch, React, Next.js, Docker, AWS, MLflow, LangChain, and many other technologies. He has experience with both frontend and backend development, as well as ML model deployment.',
  'projects': 'Some of his notable projects include an AI-powered Resume Matcher, Customer Churn Prediction Dashboard with MLOps, Intelligent Chatbot using LLM, and E2E Data Pipeline with Airflow. All projects demonstrate full-stack data science capabilities.',
  'contact': 'You can reach Ayaan at ayaan@example.com or connect with him on LinkedIn and GitHub. He\'s always open to discussing new opportunities and innovative projects.',
  'experience': 'Ayaan has worked as a Senior ML Engineer at TechCorp AI Solutions and Full Stack Data Scientist at DataTech Innovations. He has a strong background in both academic research and industry applications.',
  'education': 'He holds an M.S. in Data Science from University of Technology and a B.S. in Computer Science from State University. He also has multiple certifications including AWS ML Specialty and TensorFlow Developer Certificate.'
};

const generateResponse = (input: string): string => {
  const lowercaseInput = input.toLowerCase();
  
  if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi')) {
    return "Hello! I'm Ayaan's AI assistant. I can tell you about his background, skills, projects, and experience. What would you like to know?";
  }
  
  if (lowercaseInput.includes('about') || lowercaseInput.includes('who')) {
    return botKnowledge.about;
  }
  
  if (lowercaseInput.includes('skill') || lowercaseInput.includes('technology')) {
    return botKnowledge.skills;
  }
  
  if (lowercaseInput.includes('project') || lowercaseInput.includes('work')) {
    return botKnowledge.projects;
  }
  
  if (lowercaseInput.includes('contact') || lowercaseInput.includes('reach')) {
    return botKnowledge.contact;
  }
  
  if (lowercaseInput.includes('experience') || lowercaseInput.includes('job')) {
    return botKnowledge.experience;
  }
  
  if (lowercaseInput.includes('education') || lowercaseInput.includes('study')) {
    return botKnowledge.education;
  }
  
  if (lowercaseInput.includes('mlops')) {
    return "Ayaan specializes in MLOps with experience in MLflow, Docker, CI/CD pipelines, and model deployment. He's built production-ready ML systems with automated training and monitoring.";
  }
  
  if (lowercaseInput.includes('ai') || lowercaseInput.includes('machine learning')) {
    return "Ayaan has extensive experience in AI and Machine Learning, including deep learning, NLP, computer vision, and generative AI. He's worked with TensorFlow, PyTorch, and Hugging Face transformers.";
  }
  
  return "I'd be happy to help! You can ask me about Ayaan's skills, projects, experience, education, or how to contact him. What specific information are you looking for?";
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      content: "Hi! I'm Ayaan's AI assistant. I can help you learn more about his background, skills, and projects. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(input);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96"
          >
            <Card className="glass-card border-2 shadow-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  Ask about Ayaan
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea ref={scrollAreaRef} className="h-80 px-4">
                  <div className="space-y-4 pb-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                      >
                        {message.isBot && (
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot className="w-3 h-3 text-primary" />
                          </div>
                        )}
                        <div
                          className={`max-w-[75%] p-3 rounded-lg text-sm ${
                            message.isBot
                              ? 'bg-muted text-foreground'
                              : 'bg-primary text-primary-foreground ml-auto'
                          }`}
                        >
                          {message.content}
                        </div>
                        {!message.isBot && (
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                            <User className="w-3 h-3 text-primary" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-2 justify-start"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="w-3 h-3 text-primary" />
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <div className="flex space-x-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-primary/50 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 0.6,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </ScrollArea>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me about Ayaan..."
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSend}
                      size="icon"
                      disabled={!input.trim() || isTyping}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}