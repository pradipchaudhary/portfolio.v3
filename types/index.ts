
export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string | null;

  link?: string | null;
  github?: string | null;
  image?: string | null;

  tags: string[];

  featured: boolean;
  published: boolean;
  order: number;

  createdAt: Date;
  updatedAt: Date;
};

