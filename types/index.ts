// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   tags: string[];
//   link?: string | null;
//   github?: string | null;
// }

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
}


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