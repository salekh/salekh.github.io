'use client';

import { useEffect, useState } from 'react';

export function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[var(--background)]">
            {/* Modern Geometric Gradient Blob */}
            <div
                className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full filter blur-[100px] opacity-20 bg-[var(--accent-secondary)]"
            />
            <div
                className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full filter blur-[80px] opacity-10 bg-[var(--accent-primary)]"
            />
        </div>
    );
}
