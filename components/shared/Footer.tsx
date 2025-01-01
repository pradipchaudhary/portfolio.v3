const TechLink = ({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) => (
    <a
        href={href}
        className="font-medium text-slate-400 hover:text-[#6f49d8] focus-visible:text-[#6f49d8]"
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${label} (opens in a new tab)`}
    >
        {children}
    </a>
);

export default function Footer() {
    return (
        <footer className="max-w-[29rem] pb-16 mt-20 ml-6 text-sm text-slate-500 sm:pb-0">
            <p>
                Loosely designed in{" "}
                <TechLink href="https://www.figma.com/" label="Figma">
                    Figma
                </TechLink>{" "}
                and coded in{" "}
                <TechLink
                    href="https://code.visualstudio.com/"
                    label="Visual Studio Code"
                >
                    Visual Studio Code
                </TechLink>{" "}
                by yours truly. Built with{" "}
                <TechLink href="https://nextjs.org/" label="Next.js">
                    Next.js
                </TechLink>{" "}
                and{" "}
                <TechLink href="https://tailwindcss.com/" label="Tailwind CSS">
                    Tailwind CSS
                </TechLink>
                , deployed with{" "}
                <TechLink href="https://vercel.com/" label="Vercel">
                    Vercel
                </TechLink>
                . All text is set in the{" "}
                <TechLink href="https://rsms.me/inter/" label="Inter">
                    Inter
                </TechLink>{" "}
                typeface.
            </p>
        </footer>
    );
}
