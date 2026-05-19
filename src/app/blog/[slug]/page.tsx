import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPost } from '@/lib/posts';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#F3F0EB] border-b border-[#E8E2D9] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[#C9922A] text-sm font-semibold hover:text-[#A87820] transition-colors mb-6"
          >
            &larr; Back to Blog
          </Link>
          <p className="text-xs text-[#888888] uppercase tracking-wider mb-3">
            {formatDate(post.date)}
          </p>
          <h1
            className="text-4xl lg:text-5xl font-bold text-navy leading-tight mb-4"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            {post.title}
          </h1>
          <p className="text-ink-mid text-lg leading-relaxed">{post.description}</p>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-14">
        <div
          className="max-w-3xl mx-auto prose-custom"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>

      {/* Footer nav */}
      <div className="border-t border-[#E8E2D9] py-10 px-4">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[#C9922A] font-semibold hover:text-[#A87820] transition-colors"
          >
            &larr; Back to Blog
          </Link>
          <Link
            href="/free-quote"
            className="px-6 py-3 rounded bg-[#C9922A] text-white font-semibold text-sm hover:bg-[#A87820] transition-all hover:-translate-y-0.5 shadow"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
