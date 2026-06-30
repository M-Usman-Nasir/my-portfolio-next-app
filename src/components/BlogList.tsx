import Link from "next/link";
import { blog } from "@/data/portfolio";

const BlogList = () => {
  return (
    <section className="min-h-screen px-[5%] md:px-[9%] py-16">
      <h2 className="section-heading mb-4" data-aos="fade-down">
        {blog.heading} <span>{blog.headingAccent}</span>
      </h2>
      <p
        className="text-center text-[1.6rem] text-dark/70 dark:text-white/70 mb-12 max-w-[70rem] mx-auto"
        data-aos="fade-down"
      >
        {blog.subtitle}
      </p>

      <div className="max-w-[90rem] mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blog.posts.map((post) => (
          <article
            key={post.slug}
            className="bg-gray-100 dark:bg-muted rounded-xl p-8 border border-gray-200 dark:border-white/10"
            data-aos="fade-up"
          >
            <time className="text-[1.3rem] text-dark/60 dark:text-white/60">{post.date}</time>
            <h3 className="text-[2.2rem] font-bold mt-2 mb-3 text-dark dark:text-white">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-[1.5rem] text-dark/80 dark:text-white/80 mb-4">{post.excerpt}</p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-stack">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <Link href={`/blog/${post.slug}`} className="text-primary text-[1.5rem] font-semibold hover:underline">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
