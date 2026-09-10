import type { APIRoute } from 'astro';
import { buildBlogRss } from '../../lib/blogRss';

/** Alias of /blog/rss.xml for Hugo-era feed subscribers. */
export const GET: APIRoute = async (context) => buildBlogRss(context);
