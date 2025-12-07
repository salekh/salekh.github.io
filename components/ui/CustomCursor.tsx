'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border-2 border-indigo-500 rounded-full pointer-events-none z-[9999] hidden lg:block"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        >
            <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-sm" />
        </motion.div>
    );
}
