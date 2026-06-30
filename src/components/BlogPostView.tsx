import Link from "next/link";
import type { BlogPost } from "@/data/portfolio";

interface BlogPostViewProps {
  post: BlogPost;
}

const BlogPostView = ({ post }: BlogPostViewProps) => {
  return (
    <article className="min-h-screen px-[5%] md:px-[9%] py-16 max-w-[80rem] mx-auto">
      <Link
        href="/blog"
        className="inline-block mb-8 text-[1.5rem] text-primary hover:underline"
      >
        ← Back to blog
      </Link>

      <header className="mb-10" data-aos="fade-down">
        <time className="text-[1.4rem] text-dark/60 dark:text-white/60">{post.date}</time>
        <h1 className="text-[4rem] md:text-[4.5rem] font-bold mt-2 mb-4 text-dark dark:text-white leading-tight">
          {post.title}
        </h1>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="tag-stack">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="space-y-6" data-aos="fade-up">
        {post.content.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-[1.7rem] text-dark/85 dark:text-white/85 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

export default BlogPostView;
