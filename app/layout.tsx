import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { TimeTracker } from '@/components/time-tracker';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Ayaan Sheikh | Full Stack Data Science Developer',
  description: 'Full Stack Data Science Developer specializing in Machine Learning, Deep Learning, MLOps, and Generative AI. Building AI-powered solutions with modern web technologies.',
  keywords: 'Full Stack Developer, Data Science, Machine Learning, AI, MLOps, React, Next.js, Python, TensorFlow, PyTorch',
  authors: [{ name: 'Ayaan Sheikh' }],
  creator: 'Ayaan Sheikh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ayaan-portfolio.vercel.app',
    title: 'Ayaan Sheikh | Full Stack Data Science Developer',
    description: 'Full Stack Data Science Developer specializing in Machine Learning, Deep Learning, MLOps, and Generative AI.',
    siteName: 'Ayaan Sheikh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayaan Sheikh | Full Stack Data Science Developer',
    description: 'Full Stack Data Science Developer specializing in Machine Learning, Deep Learning, MLOps, and Generative AI.',
    creator: '@ayaan_sheikh',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <TimeTracker />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}