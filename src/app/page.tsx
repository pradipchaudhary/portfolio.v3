"use client";

import Experience from "@/components/Experience";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
    return (
        <div className="max-w-[1080px] mx-auto py-20">
            <div className="grid gap-20 p-4 grid-cols-[300px,_1fr]">
                <aside className="pt-2">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl ">
                        Pradip Chaudhary
                    </h1>
                    <h4 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                        Full Stack Developer
                    </h4>
                    <p className="text-gray-500 mt-4 max-w-xs leading-normal0">
                        React Developer creating dynamic web solutions with
                        modern tools.
                    </p>

                    {/* Social media */}
                    <SocialMedia />
                </aside>
                <main className="text-gray-400">
                    {/* Header Section */}
                    <header>
                        <h1 className="text-2xl font-bold mb-4">
                            Hi there,{" "}
                            <img
                                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                                alt="wave"
                                className="inline-block w-8"
                            />
                        </h1>
                        <p className="text-lg">
                            I'm an enthusiastic{" "}
                            <a
                                href="https://reactjs.org/"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                React Developer
                            </a>{" "}
                            dedicated to crafting intuitive and dynamic web
                            applications. With expertise in modern web
                            technologies, I excel in transforming complex
                            concepts into seamless digital solutions.
                        </p>
                        <p className="text-lg mb-4 mt-4">
                            As a{" "}
                            <strong className="font-semibold">
                                Full-Time{" "}
                                <a
                                    href="https://reactjs.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    React Developer
                                </a>
                            </strong>
                            , my expertise lies in creating{" "}
                            <strong className="font-semibold">
                                seamless and responsive UIs
                            </strong>{" "}
                            and{" "}
                            <strong className="font-semibold">
                                transforming designs
                            </strong>{" "}
                            into engaging web experiences. Currently, I'm diving
                            deep into{" "}
                            <a
                                href="https://nextjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Next.js
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://www.typescriptlang.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                TypeScript
                            </a>
                            , leveraging my skills in{" "}
                            <a
                                href="https://www.smashingmagazine.com/category/uiux"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                UI/UX Design
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://moz.com/beginners-guide-to-seo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                SEO
                            </a>
                            , along with{" "}
                            <a
                                href="https://scrapy.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Web Scraping
                            </a>
                            , to deliver{" "}
                            <strong className="font-semibold">
                                high-performance solutions
                            </strong>{" "}
                            that meet client needs.
                        </p>
                        <p className="text-lg mt-4">
                            My proficiency in modern web technologies, including{" "}
                            <a
                                href="https://bulma.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Bulma
                            </a>
                            ,{" "}
                            <a
                                href="https://getbootstrap.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Bootstrap
                            </a>
                            , and{" "}
                            <a
                                href="https://tailwindcss.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                Tailwind CSS
                            </a>{" "}
                            ensures that I craft applications that are not only
                            functional but also visually stunning.
                        </p>
                    </header>

                    {/* Skills Section */}
                    <section className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">
                            🛠️ Languages and Tools:
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                                alt="HTML"
                                className="w-8 h-8"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                                alt="CSS"
                                className="w-8 h-8"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                                alt="JavaScript"
                                className="w-8 h-8"
                            />
                            <img
                                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                                alt="React"
                                className="w-8 h-8"
                            />
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                alt="Node.js"
                                className="w-8 h-8"
                            />
                        </div>
                    </section>

                    <Experience />

                    {/* Contact Section */}
                    <section className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">
                            📫 Let's Connect!
                        </h2>
                        <div className="flex gap-6">
                            <a
                                href="https://twitter.com/pradipchaudhary"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-600"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://github.com/pradipchaudhary"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-800 hover:text-black"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/pradipchaudhary"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
