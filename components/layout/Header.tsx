import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Header() {
    return (
        <header className="sticky top-0 z-50 py-6 backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-100 dark:border-white/5">
            <Container>
                <nav className="flex items-center justify-between">
                    <Link href="/" className="relative h-10 w-10 sm:h-12 sm:w-12 hover:opacity-80 transition-opacity flex-shrink-0">
                        <img
                            src="/images/logo-black.png"
                            alt="Sanchit Alekh"
                            className="absolute inset-0 h-full w-full object-contain dark:hidden"
                        />
                        <img
                            src="/images/logo-white.png"
                            alt="Sanchit Alekh"
                            className="absolute inset-0 h-full w-full object-contain hidden dark:block"
                        />
                    </Link>
                    <div className="flex gap-4 sm:gap-8 text-sm sm:text-base font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                        <Link href="/resume" className="hover:text-cobalt dark:hover:text-mint transition-colors">
                            Resume
                        </Link>
                        <Link href="/publications" className="hover:text-cobalt dark:hover:text-mint transition-colors">
                            Publications
                        </Link>
                        <Link href="/blog" className="hover:text-cobalt dark:hover:text-mint transition-colors">
                            Blog
                        </Link>
                        <Link href="https://www.linkedin.com/in/sanchitalekh/" target="_blank" rel="noopener noreferrer" className="hover:text-cobalt dark:hover:text-mint transition-colors">
                            LinkedIn
                        </Link>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
