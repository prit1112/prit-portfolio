import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'Prit Faldu | Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN Stack, REST APIs, workflow systems, and scalable web applications.',
  keywords: ['MERN Stack', 'Full Stack Developer', 'REST APIs', 'Node.js', 'React', 'MongoDB', 'Express.js'],
  authors: [{ name: 'Prit Faldu' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pritfaldu.com',
    title: 'Prit Faldu | Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN Stack, REST APIs, workflow systems, and scalable web applications.',
    siteName: 'Prit Faldu Portfolio',
    images: [
      {
        url: 'https://pritfaldu.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prit Faldu - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prit Faldu | Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN Stack, REST APIs, workflow systems, and scalable web applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased pt-[80px]">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

