import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arman Fathabadi | Portfolio',
  description: 'Professional portfolio website of Arman Fathabadi showcasing projects, skills, and experience.',
  openGraph: {
    title: 'Arman Fathabadi | Portfolio',
    description: 'Professional portfolio website of Arman Fathabadi showcasing projects, skills, and experience.',
    url: 'https://yourdomain.com',
    siteName: 'Arman Fathabadi Portfolio',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arman Fathabadi | Portfolio',
    description: 'Professional portfolio website of Arman Fathabadi showcasing projects, skills, and experience.',
    images: ['https://yourdomain.com/twitter-image.jpg'],
  },
};