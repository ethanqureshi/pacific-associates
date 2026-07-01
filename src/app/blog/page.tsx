import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import FadeUp from '@/components/FadeUp';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Practical guides on debt consolidation, credit recovery, and financial freedom from Pacific Associates.',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-white py-14 sm:py-20 px-4 border-b border-[#E8E2D9]">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <span className="inline-block text-[#C9922A] text-xs font-semibold uppercase tracking-widest mb-4">
              Pacific Associates
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-navy mb-4"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              Resources &amp; Insights
            </h1>
            <p className="text-ink-mid text-lg leading-relaxed">
              Practical guides on debt consolidation, credit recovery, and the
              path to financial freedom.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-[#F3F0EB] py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {posts.map((post, i) => (
            <FadeUp key={post.slug} delay={i * 0.08}>
              <article className="bg-white rounded-xl border border-[#E8E2D9] border-l-4 border-l-[#C9922A] p-8 hover:shadow-md transition-shadow duration-300">
                <p className="text-xs text-[#888888] uppercase tracking-wider mb-2">
                  {formatDate(post.date)}
                </p>
                <h2
                  className="text-2xl font-bold text-navy mb-3 leading-snug"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {post.title}
                </h2>
                <p className="text-ink-mid leading-relaxed mb-5">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#C9922A] font-semibold text-sm hover:text-[#A87820] transition-colors"
                >
                  Read More &rarr;
                </Link>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}
