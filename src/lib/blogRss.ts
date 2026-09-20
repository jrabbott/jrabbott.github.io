import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { BLOG_DESCRIPTION, BLOG_FEED_TITLE, blogPostPath } from './blogMeta';
import { siteOrigin } from './siteOrigin';

export async function buildBlogRss(context: Parameters<APIRoute>[0]) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: BLOG_FEED_TITLE,
    description: BLOG_DESCRIPTION,
    site: siteOrigin(context.site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: blogPostPath(post.id),
    })),
    customData: `<language>en-gb</language>`,
  });
}
