import { Project, Experience, Certification } from '@/types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: "docsnepal",
    description: "DocsNepal: a document generator for Nepali legal and official documents (PDF/docx) — templates and API utilities.",
    tags: ["TypeScript", "PDF", "Docx"],
    link: "https://docsnepal.vercel.app/",
  },
  {
    id: '2',
    title: "portfolio.v3",
    description: "This portfolio site (built with Next.js & Tailwind) showcasing my work, skills and blog — the code for this website.",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "https://github.com/pradipchaudhary/portfolio.v3",
    github: "https://github.com/pradipchaudhary/portfolio.v3",
  },
  {
    id: '3',
    title: "100-javascript-projects",
    description: "A curated collection of 100 practical JavaScript projects for learners — utilities, games, DOM practice and small apps.",
    tags: ["JavaScript", "Learning", "Projects"],
    link: "https://100plusjs.vercel.app/",
  },
  {
    id: '4',
    title: "jobfindingai",
    description: "JobFindingAI: an AI-powered platform that helps users find jobs based on their resume, skills, and interests.",
    tags: ["AI", "Next.js", "OpenAI"],
    link: "https://github.com/pradipchaudhary/jobfindingai",
    github: "https://github.com/pradipchaudhary/jobfindingai",
  },
];

export const INITIAL_EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    role: "Full Stack Developer",
    company: "Freelancer",
    duration: "May 2021 - Present",
    description: "Built modern web applications using React.js, Next.js, and Node.js for international clients. Developed e-commerce solutions with payment integrations and custom WordPress themes. Expertise in creating scalable applications across multiple industries.",
  },
  {
    id: 'e2',
    role: "Full Stack Developer",
    company: "Sarathi Technosoft Pvt. Ltd",
    duration: "Aug 2021 - Apr 2024",
    description: "Developed enterprise applications using React, Node.js, and MongoDB/MySQL. Improved application performance and implemented RESTful APIs. Led development teams and mentored junior developers in modern web technologies.",
  },
  {
    id: 'e3',
    role: "Web Developer",
    company: "Softbenz Infosys • Software Company",
    duration: "Sep 2020 - Jul 2021",
    description: "Created single-page applications with React.js and Redux. Built responsive UI components using Tailwind CSS. Integrated RESTful APIs for dynamic data management and improved user experience.",
  },
  {
    id: 'e4',
    role: "Junior Frontend Developer",
    company: "Purwanchal Digital Media Technologies Pvt. Ltd.",
    duration: "Feb 2016 - May 2021",
    description: "Developed responsive websites using HTML5, CSS3, and JavaScript. Implemented PHP-based features and focused on performance optimization. Enhanced sites for better SEO and accessibility standards.",
  },
];

export const INITIAL_CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    title: "Completed the 'Complete Full Stack Web Development - MERN Stack' course at Deerwalk Training Center.",
    issuer: "Deerwalk Training Center",
    year: "General",
  },
  {
    id: 'c2',
    title: "Graduated from the 'Full Stack Next.js Bootcamp' organized by Jobsnipper.",
    issuer: "Jobsnipper",
    year: "General",
  },
  {
    id: 'c3',
    title: "Successfully completed the 'Custom WordPress Theme Development Bootcamp' hosted by Jobsnipper.",
    issuer: "Jobsnipper",
    year: "General",
  },
  {
    id: 'c4',
    title: "Achieved top 15% ranking in the JavaScript LinkedIn Assessment.",
    issuer: "LinkedIn",
    year: "2020",
  },
  {
    id: 'c5',
    title: "Ranked in the top 5% of participants in the PHP LinkedIn Assessment.",
    issuer: "LinkedIn",
    year: "2020",
  },
  {
    id: 'c6',
    title: "Scored 92/100 in the JavaScript Code Verification on HackerRank.",
    issuer: "HackerRank",
    year: "2020",
  },
  {
    id: 'c7',
    title: "HTML and CSS Certification from TemplateMonster.com",
    issuer: "TemplateMonster.com",
    year: "2018",
  },
  {
    id: 'c8',
    title: "Earned 'JavaScript Expert' status with a score of 212 on Pluralsight IQ.",
    issuer: "Pluralsight",
    year: "2017",
  },
  {
    id: 'c9',
    title: "Achieved 'CSS Expert' verification with a score of 218 on Pluralsight IQ.",
    issuer: "Pluralsight",
    year: "2017",
  },
  {
    id: 'c10',
    title: "Diploma in Computer Engineering, accredited by CTEVT (Council for Technical Education and Vocational Training).",
    issuer: "CTEVT",
    year: "2016",
  },
];
