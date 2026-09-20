export const BLOG_FEED_TITLE = "Jon Abbott's Blog";
export const BLOG_DESCRIPTION = 'Ideas, experiments, and everyday observations.';
export const BLOG_FEED_DESCRIPTION =
  'A personal blog covering ideas, experiments, and everyday observations.';
export const BLOG_INTRO = 'Ideas, experiments, observations.';

export function blogPostPath(id: string): string {
  return `/blog/posts/${id}/`;
}
