export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string | null;
  github?: string | null;
}

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
