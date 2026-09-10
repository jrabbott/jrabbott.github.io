import type { APIRoute } from 'astro';
import { buildBlogRss } from '../../lib/blogRss';

export const GET: APIRoute = async (context) => buildBlogRss(context);
