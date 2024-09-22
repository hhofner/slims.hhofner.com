import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Slims' Wiki",
  DESCRIPTION: "Personal wiki for Slims",
  EMAIL: "hofner@duck.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal wiki for Slims",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of blog posts.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Mastodon",
    HREF: "https://famichiki.jp/@slims",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/hhofner",
  },
];
