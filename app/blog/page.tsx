import { Container } from "@/components/ui/Container";
import { getSortedPostsData } from "@/lib/posts";
import { BlogCard } from "@/components/blog/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog - Sanchit Alekh',
    description: 'Articles on technology, philosophy, and life.',
};

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <Container className="mt-16 sm:mt-32">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    Writing on software, design, and life.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
                </p>
            </header>
            <div className="mt-16 sm:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {allPostsData.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
