'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const words = ["Cloud", "AI", "Music", "Mountains"];

export function WordCycler() {
    const [index, setIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    // Prevent hydration mismatch by rendering static content on server
    if (!mounted) {
        return (
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {words[0]}
            </span>
        );
    }

    return (
        <span className="inline-grid grid-cols-1 grid-rows-1 h-[1.1em] overflow-hidden align-top">
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="col-start-1 row-start-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-1"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
