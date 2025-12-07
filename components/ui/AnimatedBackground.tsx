'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <motion.div
                className="absolute -inset-[10px] opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2 }}
            >
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-900 dark:opacity-20"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-yellow-900 dark:opacity-20"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900 dark:opacity-20"></div>
            </motion.div>
            <div className="absolute inset-0 bg-grid-zinc-900/[0.02] dark:bg-grid-white/[0.02]" />
        </div>
    );
}
