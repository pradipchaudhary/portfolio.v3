"use client";
import Image from "next/image";
import React from "react";

const LanguagesAndTools = () => {
    const tools = [
        {
            src: "/images/visual-studio-code.png",
            alt: "Visual Studio Code",
            link: "https://code.visualstudio.com/",
        },
        {
            src: "/images/html.png",
            alt: "HTML5",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
            src: "/images/css.png",
            alt: "CSS3",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
            src: "/images/sass.png",
            alt: "Sass",
            link: "https://sass-lang.com/",
        },
        {
            src: "/images/javascript.png",
            alt: "JavaScript",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            src: "/images/typescript.png",
            alt: "TypeScript",
            link: "https://www.typescriptlang.org/",
        },
        {
            src: "/images/react.png",
            alt: "React",
            link: "https://reactjs.org/",
        },
        {
            src: "/images/gatsby.png",
            alt: "Gatsby",
            link: "https://www.gatsbyjs.com/",
        },
        {
            src: "/images/graphql-plain.svg",
            alt: "GraphQL",
            link: "https://graphql.org/",
        },
        {
            src: "/images/php.png",
            alt: "PHP",
            link: "https://www.php.net/",
        },
        {
            src: "/images/nodejs-original.svg",
            alt: "Node.js",
            link: "https://nodejs.org/",
        },
        {
            src: "/images/mysql-original.svg",
            alt: "MySQL",
            link: "https://www.mysql.com/",
        },
        {
            src: "/images/mongodb-original.svg",
            alt: "MongoDB",
            link: "https://www.mongodb.com/",
        },
        {
            src: "/images/firebase.png",
            alt: "Firebase",
            link: "https://firebase.google.com/",
        },
        {
            src: "/images/git-original.svg",
            alt: "Git",
            link: "https://git-scm.com/",
        },
        {
            src: "/images/github.png",
            alt: "GitHub",
            link: "https://github.com/",
        },
        {
            src: "/images/terminal.png",
            alt: "Terminal",
            link: "#",
        },
    ];

    return (
        <section className="mt-10">
            <h2 className="text-2xl font-bold mb-6">🛠️ Languages and Tools:</h2>
            <div className="flex flex-wrap gap-4">
                {tools.map(({ src, alt, link }) => (
                    <a
                        key={alt}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                        title={`Learn more about ${alt}`}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            width={22}
                            height={22}
                            className="rounded-sm"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default LanguagesAndTools;
