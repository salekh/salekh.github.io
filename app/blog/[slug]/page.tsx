import { Container } from "@/components/ui/Container";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";
import { AIOverview } from "@/components/blog/AIOverview";
import { ReadingProgress } from "@/components/ui/ReadingProgress";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const postData = await getPostData(slug);
    return {
        title: `${postData.title} - Sanchit Alekh`,
        description: postData.aiOverview || postData.title,
    };
}

export async function generateStaticParams() {
    return getAllPostIds();
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <Container className="mt-16 sm:mt-32">
            <ReadingProgress />
            <article>
                <header className="flex flex-col">
                    <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-cobalt dark:text-mint pb-2">
                        {postData.title}
                    </h1>
                    <time
                        dateTime={postData.date}
                        className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                    >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                        <span className="ml-3">{postData.date ? format(new Date(postData.date), 'MMMM d, yyyy') : ''}</span>
                        <span className="mx-2">•</span>
                        <span>{postData.readingTime}</span>
                    </time>
                </header>

                {postData.aiOverview && (
                    <AIOverview summary={postData.aiOverview} />
                )}

                <div className="mt-8 sm:mt-12 p-8 sm:p-12 rounded-3xl border-2 border-cobalt/20 dark:border-mint/20 bg-cobalt/5 dark:bg-mint/5">
                    <div className="prose prose-xl prose-zinc dark:prose-invert max-w-none">
                        <ReactMarkdown>{postData.content}</ReactMarkdown>
                    </div>
                </div>
            </article>
        </Container>
    );
}
