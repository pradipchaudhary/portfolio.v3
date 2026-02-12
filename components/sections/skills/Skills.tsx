"use client";

import React from "react";
import { Hash, Code, Atom, Server, Database, Zap, GitBranch } from "lucide-react";

// Skills with trending and in-demand topics
const skills = [
  {
    name: "JavaScript",
    icon: <Code className="w-4 h-4 text-yellow-500" />,
    topics: ["Promises", "Async/Await", "Functional Programming", "ES6+", "DOM Manipulation", "Event Loop", "Modules", "Fetch API", "Error Handling"],
  },
  {
    name: "React",
    icon: <Atom className="w-4 h-4 text-cyan-500" />,
    topics: ["Hooks", "Context", "Routing", "State Management", "React Query", "Suspense", "React 18 Features", "Performance Optimization"],
  },
  {
    name: "NextJS",
    icon: <Atom className="w-4 h-4 text-gray-800" />,
    topics: ["SSR", "SSG", "ISR", "API Routes", "Middleware", "NextAuth", "Image Optimization", "SEO Best Practices"],
  },
  {
    name: "TypeScript",
    icon: <Code className="w-4 h-4 text-blue-600" />,
    topics: ["Types", "Interfaces", "Generics", "Utility Types", "Type Guards", "TS Config", "Advanced Typing"],
  },
  {
    name: "NodeJS",
    icon: <Server className="w-4 h-4 text-green-500" />,
    topics: ["Express", "REST APIs", "GraphQL APIs", "Event Loop", "Streams", "File System", "JWT Auth", "WebSockets", "Error Handling"],
  },
  {
    name: "PHP",
    icon: <Code className="w-4 h-4 text-purple-600" />,
    topics: ["OOP", "Laravel", "Composer", "MVC", "Routing", "Blade Templates", "Eloquent ORM", "Authentication", "REST API"],
  },
  {
    name: "TailwindCSS",
    icon: <Zap className="w-4 h-4 text-blue-400" />,
    topics: ["Utilities", "Responsive Design", "Flex/Grid", "Animations", "Dark Mode", "Custom Themes", "Transitions", "Pro Plugins"],
  },
  {
    name: "Redux",
    icon: <Atom className="w-4 h-4 text-purple-500" />,
    topics: ["Store", "Reducers", "Actions", "Redux Toolkit", "Middleware", "Async Thunks", "State Normalization", "React-Redux Hooks"],
  },
  {
    name: "ExpressJS",
    icon: <Server className="w-4 h-4 text-gray-700" />,
    topics: ["Middleware", "Routing", "Error Handling", "JWT Auth", "REST APIs", "CORS", "Validation", "Express Generator"],
  },
  {
    name: "MongoDB",
    icon: <Database className="w-4 h-4 text-green-700" />,
    topics: ["Collections", "Queries", "Indexes", "Aggregation", "Transactions", "Mongoose", "Data Modeling", "Replication", "Sharding"],
  },
  {
    name: "MySQL",
    icon: <Database className="w-4 h-4 text-blue-600" />,
    topics: ["Tables", "Joins", "Stored Procedures", "Indexes", "Transactions", "Triggers", "Views", "Performance Tuning"],
  },
  {
    name: "PostgreSQL",
    icon: <Database className="w-4 h-4 text-indigo-600" />,
    topics: ["Schemas", "Indexes", "Transactions", "Views", "Stored Procedures", "Full-Text Search", "JSON Support", "PostGIS"],
  },
  {
    name: "REST",
    icon: <Code className="w-4 h-4 text-gray-600" />,
    topics: ["GET/POST/PUT/DELETE", "Stateless", "JSON", "Authentication", "Rate Limiting", "Caching", "Versioning", "Error Handling"],
  },
  {
    name: "Git",
    icon: <GitBranch className="w-4 h-4 text-orange-500" />,
    topics: ["Commit", "Branching", "Merge", "Rebase", "GitHub", "GitLab", "Version Control Workflow", "Pull Requests", "CI/CD Integration"],
  },
  {
    name: "Docker",
    icon: <Code className="w-4 h-4 text-blue-500" />,
    topics: ["Containers", "Images", "Volumes", "Docker Compose", "Networking", "Dockerfile", "Container Orchestration", "Deployment"],
  },
  {
    name: "CI/CD",
    icon: <Zap className="w-4 h-4 text-green-400" />,
    topics: ["Pipeline", "GitHub Actions", "GitLab CI", "Jenkins", "Deployment", "Testing Automation", "Build Scripts", "Monitoring"],
  },
  {
    name: "AWS",
    icon: <Server className="w-4 h-4 text-orange-400" />,
    topics: ["S3", "Lambda", "EC2", "CloudFront", "RDS", "DynamoDB", "API Gateway", "IAM", "Serverless"],
  },
  {
    name: "Firebase",
    icon: <Zap className="w-4 h-4 text-yellow-400" />,
    topics: ["Auth", "Firestore", "Hosting", "Functions", "Realtime DB", "Cloud Messaging", "Storage", "Security Rules"],
  },
  {
    name: "GraphQL",
    icon: <Code className="w-4 h-4 text-pink-500" />,
    topics: ["Queries", "Mutations", "Resolvers", "Apollo Client", "Subscriptions", "Schema Design", "Performance Optimization"],
  },
  {
    name: "Sass",
    icon: <Zap className="w-4 h-4 text-pink-300" />,
    topics: ["Variables", "Mixins", "Nesting", "Partials", "Inheritance", "Functions", "Loops", "Responsive Design"],
  },
  {
    name: "WordPress",
    icon: <Code className="w-4 h-4 text-blue-700" />,
    topics: ["Themes", "Plugins", "Custom Post Types", "Gutenberg", "REST API", "WooCommerce", "Security", "SEO"],
  },
  {
    name: "OpenAI",
    icon: <Zap className="w-4 h-4 text-purple-400" />,
    topics: ["API Integration", "ChatGPT", "Embeddings", "Fine-tuning", "Prompt Engineering", "Generative AI", "Automation"],
  },
  {
    name: "HTML",
    icon: <Code className="w-4 h-4 text-orange-500" />,
    topics: ["Tags", "Forms", "Semantic HTML", "Accessibility", "SEO", "Media Elements", "Canvas", "Web Components"],
  },
  {
    name: "CSS",
    icon: <Zap className="w-4 h-4 text-blue-500" />,
    topics: ["Flexbox", "Grid", "Animations", "Transitions", "Responsive Design", "Variables", "Pseudo-classes", "Media Queries"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="relative group">
            {/* Skill Tag */}
            <span className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer transition-all duration-150 ease-in-out italic px-2 py-1 text-sm">
              <Hash className="w-3 h-3" />
              {skill.name}
            </span>

            {/* Tooltip Box */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50">
              <div className="bg-gradient-to-r from-white/90 to-gray-100/90 border border-gray-300 rounded-xl p-3 w-60 shadow-lg hover:shadow-2xl transition-shadow">

                {/* Skill Header */}
                <div className={`flex items-center gap-2 mb-2 text-gray-400`}>
                  {skill.icon}
                  <span className="font-bold text-sm text-gray-700">{skill.name}</span>
                </div>

                {/* Skill Topics */}
                <div className="flex flex-wrap gap-2">
                  {skill.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-0.5 text-[10px] text-gray-800 font-semibold hover:text-gray-900 transition-colors duration-150"
                    >
                      <Hash className="w-2 h-2" />
                      {topic.replace(/\s/g, "")}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
