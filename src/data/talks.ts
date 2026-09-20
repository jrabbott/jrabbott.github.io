export const talks = [
  {
    id: 'building-robust-data-pipelines',
    title: 'Building robust data pipelines',
    event: 'Yorkshire Azure User Group',
    speakers: 'Darren Hutton & Jonathan Abbott',
    summary:
      'How to design Azure data pipelines that stay reliable as needs grow: when batch, stream, and scheduled processing all show up, how a landing zone and medallion layers keep quality rising, and why treating data as a product beats chasing tooling alone.',
    href: 'https://jrabbott.github.io/building-robust-data-pipelines/',
  },
] as const;

export type TalkId = (typeof talks)[number]['id'];
