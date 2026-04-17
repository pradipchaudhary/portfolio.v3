"use client";

import React, { useState } from "react";
import { Workflow } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiDocker,
  SiFirebase,
  SiGraphql,
  SiHtml5,
  SiGit,
  SiOpenai,
} from "react-icons/si";
import { FaAmazon, FaCss3, FaWordpress } from "react-icons/fa";
import { DiPhp } from "react-icons/di";
import { FaSass } from "react-icons/fa6";

// Main container animation only
const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2, // slight delay after About
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Skills array with standardized icon sizes (w-7 h-7)
const skills = [
  // Frontend
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-7 h-7 text-yellow-500" />,
    description: "Core language for building dynamic web apps.",
    topics: ["Promises", "Async/Await", "Functional Programming", "ES6+", "DOM Manipulation", "Event Loop", "Modules", "Fetch API", "Error Handling"],
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-7 h-7 text-blue-600" />,
    description: "Typed JavaScript for scalability and safety.",
    topics: ["Types", "Interfaces", "Generics", "Utility Types", "Type Guards", "TS Config", "Advanced Typing"],
  },
  {
    name: "React",
    icon: <SiReact className="w-7 h-7 text-cyan-500" />,
    description: "Component-based UI library for building web apps.",
    topics: ["Hooks", "Context", "Routing", "State Management", "React Query", "Suspense", "React 18 Features", "Performance Optimization"],
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-7 h-7 text-black" />,
    description: "Fullstack React framework for production apps.",
    topics: ["SSR", "SSG", "ISR", "API Routes", "Middleware", "NextAuth", "Image Optimization", "SEO Best Practices"],
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-7 h-7 text-sky-400" />,
    description: "Utility-first CSS framework for rapid UI development.",
    topics: ["Utilities", "Responsive Design", "Flex/Grid", "Animations", "Dark Mode", "Custom Themes", "Transitions", "Pro Plugins"],
  },
  {
    name: "CSS3",
    icon: <FaCss3 className="w-7 h-7 text-blue-500" />,
    description: "Styling web pages and layouts.",
    topics: ["Flexbox", "Grid", "Animations", "Transitions", "Responsive Design", "Variables", "Pseudo-classes", "Media Queries"],
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="w-7 h-7 text-orange-500" />,
    description: "Markup language for structuring web content.",
    topics: ["Tags", "Forms", "Semantic HTML", "Accessibility", "SEO", "Media Elements", "Canvas", "Web Components"],
  },
  {
    name: "Sass",
    icon: <FaSass className="w-7 h-7 text-pink-300" />,
    description: "CSS preprocessor for enhanced styling capabilities.",
    topics: ["Variables", "Mixins", "Nesting", "Partials", "Inheritance", "Functions", "Loops", "Responsive Design"],
  },

  // Backend
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-7 h-7 text-green-600" />,
    description: "Backend runtime for building scalable applications.",
    topics: ["Express", "REST APIs", "GraphQL APIs", "Event Loop", "Streams", "File System", "JWT Auth", "WebSockets", "Error Handling"],
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-7 h-7 text-gray-800" />,
    description: "Minimalist backend framework for Node.js.",
    topics: ["Middleware", "Routing", "Error Handling", "JWT Auth", "REST APIs", "CORS", "Validation", "Express Generator"],
  },
  {
    name: "PHP",
    icon: <DiPhp className="w-7 h-7 text-purple-600" />,
    description: "Server-side scripting language for web development.",
    topics: ["OOP", "Laravel", "Composer", "MVC", "Routing", "Blade Templates", "Eloquent ORM", "Authentication", "REST API"],
  },
  {
    name: "WordPress",
    icon: <FaWordpress className="w-7 h-7 text-blue-700" />,
    description: "Content management system for building websites.",
    topics: ["Themes", "Plugins", "Custom Post Types", "Gutenberg", "REST API", "WooCommerce", "Security", "SEO"],
  },

  // Databases
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-7 h-7 text-green-700" />,
    description: "NoSQL database for flexible and scalable data storage.",
    topics: ["Collections", "Queries", "Indexes", "Aggregation", "Transactions", "Mongoose", "Data Modeling", "Replication", "Sharding"],
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-7 h-7 text-blue-600" />,
    description: "Relational database for structured data.",
    topics: ["Tables", "Joins", "Stored Procedures", "Indexes", "Transactions", "Normalization", "Triggers", "Views", "Performance Tuning"],
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-7 h-7 text-indigo-600" />,
    description: "Advanced SQL database for large-scale applications.",
    topics: ["Schemas", "Indexes", "Transactions", "Views", "Stored Procedures", "Full-Text Search", "JSON Support", "PostGIS"],
  },

  // State Management
  {
    name: "Redux",
    icon: <SiRedux className="w-7 h-7 text-purple-500" />,
    description: "State management for React applications.",
    topics: ["Store", "Reducers", "Actions", "Redux Toolkit", "Middleware", "Async Thunks", "State Normalization", "React-Redux Hooks"],
  },

  // DevOps / CI-CD
  {
    name: "Docker",
    icon: <SiDocker className="w-7 h-7 text-blue-500" />,
    description: "Containerization for consistent development and deployment.",
    topics: ["Containers", "Images", "Volumes", "Docker Compose", "Networking", "Dockerfile", "Container Orchestration", "Deployment"],
  },
  {
    name: "CI/CD",
    icon: <Workflow className="w-7 h-7 text-green-400" />,
    description: "Continuous Integration and Continuous Deployment practices.",
    topics: ["Pipeline", "GitHub Actions", "GitLab CI", "Jenkins", "Deployment", "Testing Automation", "Build Scripts", "Monitoring"],
  },

  // Cloud
  {
    name: "AWS",
    icon: <FaAmazon className="w-7 h-7 text-orange-400" />,
    description: "Cloud computing and infrastructure services.",
    topics: ["S3", "Lambda", "EC2", "CloudFront", "RDS", "DynamoDB", "API Gateway", "IAM", "Serverless"],
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-7 h-7 text-yellow-400" />,
    description: "Backend-as-a-service for web and mobile apps.",
    topics: ["Auth", "Firestore", "Hosting", "Functions", "Realtime DB", "Cloud Messaging", "Storage", "Security Rules"],
  },

  // API / AI
  {
    name: "GraphQL",
    icon: <SiGraphql className="w-7 h-7 text-pink-500" />,
    description: "Flexible API query language for fetching data.",
    topics: ["Queries", "Mutations", "Resolvers", "Apollo Client", "Subscriptions", "Schema Design", "Performance Optimization"],
  },
  {
    name: "Git",
    icon: <SiGit className="w-7 h-7 text-orange-500" />,
    description: "Version control system for source code management.",
    topics: ["Commit", "Branching", "Merge", "Rebase", "GitHub", "GitLab", "Version Control Workflow", "Pull Requests", "CI/CD Integration"],
  },
  {
    name: "OpenAI / AI",
    icon: <SiOpenai className="w-7 h-7 text-purple-600" />,
    description: "Artificial Intelligence tools and APIs.",
    topics: ["API Integration", "ChatGPT", "Embeddings", "Fine-tuning", "Prompt Engineering", "Generative AI", "Automation"],
  },
];

const tooltipVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="skills"
      className="py-18 relative text-gray-900 dark:text-gray-100"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >

            <span className="inline-flex items-center gap-1.5 text-sm cursor-pointer text-gray-600 dark:text-gray-400 hover:text-blue-700 italic">
              #{skill.name}
            </span>

            {/* Animated Tooltip */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tooltipVariants}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-0 -translate-x-1/2 mb-3 w-72 z-50"
                >
                  <div className="relative bg-white border border-gray-200 rounded-xl px-4 py-4 backdrop-blur-md  pb-10">
                    {/* Arrow pointing down on left side */}
                    <div
                      className="absolute bottom-[-6px] left-10 w-3 h-3 rotate-45 bg-white border-r border-b border-gray-200"
                    // style={{ left: "10px" }} // fixed to left side
                    />

                    {/* Icon + Name + Description */}
                    <div className="flex items-center gap-3 mb-3 border-b border-gray-200 pb-2">

                      <div>
                        {skill.icon}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-md font-semibold text-gray-900">
                          {skill.name}
                        </h3>
                        <p className="text-[12px] text-gray-500 -mt-0.5 leading-tight">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1.5 mt-6">
                      {skill.topics.map((topic, i) => (
                        <span key={i} className="leading-5 mb-2  text-gray-700 hover:text-blue-700 cursor-pointer  rounded-md text-xs italic bg-gray-50  mr-2 px-1">
                          #{topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;