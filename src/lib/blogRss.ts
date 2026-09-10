import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function buildBlogRss(context: Parameters<APIRoute>[0]) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: "Jon Abbott's Blog",
    description: 'A personal blog covering ideas, experiments, and everyday observations.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/posts/${post.id}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}
