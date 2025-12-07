import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Github, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
    return (
        <footer className="mt-32 pb-16">
            <Container>
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        &copy; {new Date().getFullYear()} Sanchit Alekh. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="https://github.com/salekh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/sanchitalekh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400" />
                        </Link>
                        <Link
                            href="https://facebook.com/sanchitalekh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400" />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
