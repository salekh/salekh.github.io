import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/home/Hero";
import { getSortedPostsData } from "@/lib/posts";
import { BlogCard } from "@/components/blog/BlogCard";

export default function Home() {
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 5); // Show top 5

  return (
    <>
      <Hero />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-night dark:text-white mb-8 border-b-4 border-cobalt dark:border-mint pb-4 inline-block w-fit">
              Recent Thoughts
            </h2>
            <div className="flex flex-col gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
