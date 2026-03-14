export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  tags: string[];
  cluster?: string;
  clusterRole?: "pillar" | "spoke";
  pillarSlug?: string;
  image?: string;
  readingTime?: number;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}
