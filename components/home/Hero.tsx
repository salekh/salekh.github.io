'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <Container className="mt-20 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 items-center">
                <div className="lg:order-last relative">
                    <motion.div
                        className="relative mx-auto w-full max-w-sm"
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                    >
                        {/* Modern Geometric Backdrop */}
                        <div className="absolute top-4 right-4 w-full h-full rounded-[2rem] bg-[var(--accent-secondary)] z-0" />
                        <div className="absolute -top-4 -left-4 w-full h-full rounded-[2rem] border-2 border-[var(--accent-primary)] z-10" />

                        {/* Image */}
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl z-20 border-4 border-white dark:border-[var(--night)] bg-white">
                            <Image
                                src="/images/profile.jpg"
                                alt="Sanchit Alekh"
                                priority
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 30rem, 20rem"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl font-bold uppercase tracking-widest text-raspberry mb-4">
                            Hello, I&apos;m
                        </h2>
                        <h1 className="text-7xl lg:text-9xl font-black leading-none text-night dark:text-white tracking-tighter mb-6">
                            Sanchit <span className="text-cobalt dark:text-mint">Alekh</span>.
                        </h1>
                    </motion.div>

                    <div className="mt-8 max-w-2xl space-y-6">
                        <p className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">
                            Customer Engineer, AI/ML at Google.
                        </p>
                        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                            Building intelligent systems with precision. Focused on clean code, vibrant design, and scalable architecture.
                        </p>
                    </div>

                    <div className="mt-10 flex gap-6">
                        <button className="px-10 py-4 rounded-none bg-cobalt text-white font-bold uppercase tracking-wider hover:bg-night transition-all hover:scale-105">
                            See My Work
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
