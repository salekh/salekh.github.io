'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ReadingProgress() {
    const [mounted, setMounted] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [percent, setPercent] = useState(0);

    useEffect(() => {
        setMounted(true);
        return scrollYProgress.on('change', (v) => {
            setPercent(Math.round(v * 100));
        });
    }, [scrollYProgress]);

    if (!mounted) return null;

    return (
        <>
            {/* Top Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[100]"
                style={{ scaleX }}
            />

            {/* Floating Percentage Indicator */}
            <motion.div
                className="fixed bottom-8 right-8 z-[90] pointer-events-none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: percent > 5 ? 1 : 0, y: percent > 5 ? 0 : 10 }}
                transition={{ duration: 0.2 }}
            >
                <div className="bg-[var(--background)]/80 backdrop-blur-md border border-[var(--foreground)]/10 shadow-xl rounded-full px-4 py-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm font-semibold text-[var(--foreground)] tabular-nums">
                        {percent}% read
                    </span>
                </div>
            </motion.div>
        </>
    );
}
