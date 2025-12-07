'use client';

import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowUpRight } from "lucide-react";

export interface Publication {
    title: string;
    authors: string;
    publication: string;
    year?: string;
    synopsis: string;
    link: string;
}

export function PublicationCard({ pub }: { pub: Publication }) {
    return (
        <SpotlightCard>
            <div className="relative h-full bg-white dark:bg-zinc-900 border-2 border-transparent hover:border-cobalt dark:hover:border-mint transition-all duration-300 p-8 rounded-3xl flex flex-col group">
                {/* Header: Year and Publisher */}
                <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-bold font-mono text-cobalt dark:text-mint uppercase tracking-widest">
                        {pub.publication}
                    </span>
                    {pub.year && (
                        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                            {pub.year}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-night dark:text-white group-hover:text-cobalt dark:group-hover:text-mint transition-colors mb-2">
                    {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 italic mb-6">
                    {pub.authors}
                </p>

                {/* Synopsis */}
                <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300 mb-8 flex-grow">
                    {pub.synopsis}
                </p>

                {/* Link */}
                <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cobalt dark:text-mint hover:underline decoration-2 underline-offset-4"
                >
                    View Publication
                    <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>
        </SpotlightCard>
    );
}
