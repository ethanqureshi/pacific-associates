import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const postsDir = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data } = matter(raw);
      return data as PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);
  return {
    ...(data as PostMeta),
    contentHtml: processed.toString(),
  };
}
