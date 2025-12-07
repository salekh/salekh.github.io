import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Background } from '@/components/ui/Background';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sanchit Alekh - AI/ML Engineer',
  description: 'Personal website of Sanchit Alekh, Customer Engineer for AI/ML at Google.',
  icons: [
    {
      media: '(prefers-color-scheme: light)',
      url: '/images/logo-black.png',
      href: '/images/logo-black.png',
    },
    {
      media: '(prefers-color-scheme: dark)',
      url: '/images/logo-white.png',
      href: '/images/logo-white.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--cobalt)] selection:text-white relative`}
      >
        <CustomCursor />
        <ScrollProgress />
        <Background />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
