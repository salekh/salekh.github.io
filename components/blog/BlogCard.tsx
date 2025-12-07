'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { PostData } from '@/lib/posts';
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function BlogCard({ post }: { post: PostData }) {
    return (
        <SpotlightCard>
            <Link
                href={`/blog/${post.id}`}
                className="group block h-full focus:outline-none"
            >
                <div className="flex flex-col h-full bg-white dark:bg-zinc-900 border-2 border-transparent group-hover:border-cobalt dark:group-hover:border-mint transition-all duration-300 p-6">
                    <div className="flex items-center gap-x-4 text-sm font-bold font-mono text-cobalt dark:text-mint mb-4 uppercase tracking-widest">
                        <time dateTime={post.date}>
                            {format(new Date(post.date), 'MMMM do, yyyy')}
                        </time>
                    </div>
                    <h3 className="text-3xl font-black tracking-tighter text-night dark:text-white group-hover:text-cobalt dark:group-hover:text-mint transition-colors">
                        {post.title}
                    </h3>
                    <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
                        {post.excerpt}
                    </p>
                    <div className="mt-auto pt-8 flex items-center text-base font-bold uppercase tracking-wider text-cobalt dark:text-mint group-hover:translate-x-2 transition-transform">
                        Read article <span className="ml-2 text-xl">&rarr;</span>
                    </div>
                </div>
            </Link>
        </SpotlightCard>
    );
}
