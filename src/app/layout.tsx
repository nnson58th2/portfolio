import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Background from './components/background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Son Nguyen | Software Engineer',
  description:
    'Personal blog and portfolio of Son Nguyen, sharing thoughts and experiences on software development, web technologies, and more.',
  generator: 'Next.js',
  alternates: {
    canonical: 'https://sonnguyen.dev',
  },
  openGraph: {
    title: 'Son Nguyen | Software Engineer',
    description:
      'Personal blog and portfolio of Son Nguyen, sharing thoughts and experiences on software development, web technologies, and more.',
    url: 'https://sonnguyen.dev',
    siteName: 'Son Nguyen',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sonnguyen.dev/og/home.png',
        width: 1200,
        height: 630,
        alt: 'Son Nguyen | Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sonnguyen',
    creator: '@sonnguyen',
    title: 'Son Nguyen | Software Engineer',
    description:
      'Personal blog and portfolio of Son Nguyen, sharing thoughts and experiences on software development, web technologies, and more.',
    images: [
      {
        url: 'https://sonnguyen.dev/og/home.png',
        alt: 'Son Nguyen | Software Engineer',
      },
    ],
  },
  icons: {
    icon: {
      url: '/favicon.ico',
      sizes: 'any',
      type: 'image/x-icon',
    },
    shortcut: {
      url: '/favicon.svg',
      sizes: 'any',
      type: 'image/svg+xml',
    },
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#f97316',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
