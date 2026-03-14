import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import type { Components } from "react-markdown";
import type { CardContent } from "@/globals/Card-Content";
// import "highlight.js/styles/github-dark.css";
import type { ComponentPropsWithoutRef } from "react";
import type { ExtraProps } from "react-markdown";

const customComponents: Components = {
  h1: ({ node, ...props }: ComponentPropsWithoutRef<"h1"> & ExtraProps) => (
    <h1 className="text-3xl font-bold text-white mt-10 mb-4 leading-tight tracking-tight" {...props} />
  ),
  h2: ({ node, ...props }: ComponentPropsWithoutRef<"h2"> & ExtraProps) => (
    <h2 className="text-2xl font-semibold text-white mt-8 mb-3 pb-2 border-b border-white/10" {...props} />
  ),
  h3: ({ node, ...props }: ComponentPropsWithoutRef<"h3"> & ExtraProps) => (
    <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2" {...props} />
  ),
  p: ({ node, ...props }: ComponentPropsWithoutRef<"p"> & ExtraProps) => (
    <p className="text-gray-300 leading-7 text-[15px] mb-4" {...props} />
  ),
  ul: ({ node, ...props }: ComponentPropsWithoutRef<"ul"> & ExtraProps) => (
    <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 pl-4" {...props} />
  ),
  ol: ({ node, ...props }: ComponentPropsWithoutRef<"ol"> & ExtraProps) => (
    <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1 pl-4" {...props} />
  ),
  li: ({ node, ...props }: ComponentPropsWithoutRef<"li"> & ExtraProps) => (
    <li className="text-gray-300 text-[15px] leading-7" {...props} />
  ),
  blockquote: ({ node, ...props }: ComponentPropsWithoutRef<"blockquote"> & ExtraProps) => (
    <blockquote
      className="border-l-4 border-blue-500 bg-white/5 pl-4 pr-3 py-2 my-4 rounded-r-lg text-gray-400 italic"
      {...props}
    />
  ),
  table: ({ node, ...props }: ComponentPropsWithoutRef<"table"> & ExtraProps) => (
    <div className="overflow-x-auto my-6 rounded-lg border border-white/10">
      <table className="w-full text-sm text-gray-300" {...props} />
    </div>
  ),
  th: ({ node, ...props }: ComponentPropsWithoutRef<"th"> & ExtraProps) => (
    <th className="bg-white/10 px-4 py-2 text-left font-semibold text-white border-b border-white/10" {...props} />
  ),
  td: ({ node, ...props }: ComponentPropsWithoutRef<"td"> & ExtraProps) => (
    <td className="px-4 py-2 border-b border-white/5" {...props} />
  ),
  img: ({ node, src, alt, ...props }: ComponentPropsWithoutRef<"img"> & ExtraProps) => (
    <img
      src={src ?? ""}
      alt={alt ?? ""}
      className="rounded-xl my-6 w-full object-cover max-h-[480px] border border-white/10"
      loading="lazy"
      {...props}
    />
  ),
  hr: ({ node, ...props }: ComponentPropsWithoutRef<"hr"> & ExtraProps) => (
    <hr className="my-8 border-white/10" {...props} />
  ),
  code: ({ node, className, children, ...props }: ComponentPropsWithoutRef<"code"> & ExtraProps) => {
    const isInline = !className;
    return isInline ? (
      <code
        className="bg-white/10 text-blue-300 text-sm px-1.5 py-0.5 rounded font-mono"
        {...props}
      >
        {children}
      </code>
    ) : (
      <pre className="rounded-xl overflow-x-auto my-6 border border-white/10">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    );
  },
};

export default function BlogPost({ post }: { post: CardContent }) {
  return (
    <div className="min-h-screen  px-4 py-12">
      <article className="mx-auto max-w-3xl">

        {/* Hero Image */}
        {post.imageUrl && (
          <div className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 aspect-video">
            <img
              src={post.imageUrl}
              alt={post.primaryTitle}
              className="w-full h-full object-cover"
            />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] via-transparent to-transparent" />
          </div>
        )}

        {/* Header */}
        <header className="mb-10">
          {/* Card label */}
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            {post.cardTitle}
          </span>

          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            {post.primaryTitle}
          </h1>

          <p className="mt-2 text-gray-400 text-sm">
            {post.secondaryTitle}
          </p>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-primary px-3 py-1 text-xs font-medium text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <hr className="mt-8 border-white/10" />
        </header>

        {/* Markdown Body */}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeSlug]}
          components={customComponents}
        >
          {post.content}
        </ReactMarkdown>

      </article>
    </div>
  );
}