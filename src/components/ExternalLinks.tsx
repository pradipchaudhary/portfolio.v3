// components/ExternalLinks.tsx
import React from "react";

interface LinkItem {
    href: string;
    label: string;
    name: string;
}

const links: LinkItem[] = [
    {
        href: "https://github.com/pradipchaudhary",
        label: "GitHub",
        name: "GitHub (opens in a new tab)",
    },
    {
        href: "https://www.linkedin.com/in/pradipchaudhary/",
        label: "LinkedIn",
        name: "LinkedIn (opens in a new tab)",
    },
    {
        href: "https://twitter.com/pradipchaudhary",
        label: "Twitter",
        name: "Twitter (opens in a new tab)",
    },
    {
        href: "https://codepen.io/pradipchaudhary/",
        label: "CodePen",
        name: "CodePen (opens in a new tab)",
    },
    {
        href: "https://stackoverflow.com/users/6118353/pradipchaudhary",
        label: "Stack Overflow",
        name: "Stack Overflow (opens in a new tab)",
    },
    {
        href: "https://stackoverflow.com/story/pradipchaudhary",
        label: "Stack Overflow Story",
        name: "Stack Overflow Story (opens in a new tab)",
    },
];

const ExternalLinks: React.FC = () => {
    return (
        <section>
            <h4 className="text-xl font-semibold mb-4">External Links:</h4>
            <ul className="list-none p-0">
                {links.map(({ href, label, name }) => (
                    <li key={label} className="mb-2">
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={name}
                            className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ExternalLinks;
