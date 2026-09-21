export type Talk = {
  id: string;
  title: string;
  event: string;
  speakers: string;
  summary: string;
  href: string;
  /** Calendar date the talk was given (UTC midnight). */
  date?: Date;
};

export const talks: Talk[] = [
  {
    id: 'azure-terraform-backend',
    title: 'Bootstrapping Azure Terraform state',
    event: 'Hippo Learn & Lunch',
    speakers: 'Jonathan Abbott',
    summary:
      'The Day 0 chicken-and-egg of Azure Terraform state: the main config cannot create its own backend, so I walk through Portal, CLI, ARM, and Bicep, then land on a small Bicep bootstrap that hardens storage by default (private endpoint, Entra ID only) and sits cleanly ahead of Terraform in CI/CD.',
    href: 'https://jrabbott.github.io/talk-azure-terraform-backend/',
  },
  {
    id: 'terraform-sandwich',
    title: 'Terraform sandwich',
    event: 'Hippo Learn & Lunch',
    speakers: 'Jonathan Abbott',
    summary:
      'A multi-stage Terraform pattern for when create-time dependencies need a live application: run Terraform for what is safe first, release the app, then run Terraform again for resources that need the endpoint alive. I used Azure Event Grid subscriptions as the concrete case. I also covered when the sandwich is worth it versus redesigning the dependency.',
    href: 'https://jrabbott.github.io/talk-terraform-sandwich/',
  },
  {
    id: 'building-robust-data-pipelines',
    title: 'Building robust data pipelines',
    event: 'Yorkshire Azure User Group',
    speakers: 'Darren Hutton & Jonathan Abbott',
    summary:
      'How to design Azure data pipelines that stay reliable as needs grow: when batch, stream, and scheduled processing all show up, how a landing zone and medallion layers keep quality rising, and why treating data as a product beats chasing tooling alone.',
    href: 'https://jrabbott.github.io/talk-building-robust-data-pipelines/',
  },
];

export type TalkId = (typeof talks)[number]['id'];
