"use client";

import React, { useState } from "react";
import { Hash, Code, Atom, Server, Database, Zap, GitBranch } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="skills" className="max-w-3xl mx-auto py-16">
      <h2 className="text-2xl font-medium text-gray-900 mb-10 tracking-tight">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index: number) => (
          <motion.div
            key={index}
            className="relative"
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Skill Tag */}
            <motion.span
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-1.5 text-sm cursor-pointer
              text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              <Hash className="w-3 h-3 opacity-50 group-hover:opacity-100 transition" />
              {skill.name}
            </motion.span>

            {/* Tooltip */}
            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-6 z-50 pointer-events-none"
                >
                  <motion.div
                    initial={{ scale: 0.96 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="min-w-[220px] rounded-lg border border-gray-200/80 px-4 py-3 bg-white/70 backdrop-blur-md"
                  >

                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="opacity-80">{skill.icon}</div>
                      <span className="text-sm font-medium text-gray-900">
                        {skill.name}
                      </span>
                    </div>

                    {/* Topics List */}
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: {
                          transition: { staggerChildren: 0.04 },
                        },
                      }}
                      className="space-y-1"
                    >
                      {skill.topics.map((topic, i: number) => (
                        <motion.li
                          key={i}
                          variants={{
                            hidden: { opacity: 0, x: -6 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          className="text-[12px] text-gray-600 tracking-tight"
                        >
                          {topic}
                        </motion.li>
                      ))}
                    </motion.ul>

                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;