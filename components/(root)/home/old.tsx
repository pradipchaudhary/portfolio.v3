"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
    return (
        <section
            id="introduction"
            className="space-y-8 h-full text-slate-500 text-[.9rem] font-light"
        >
            {/* Header Section */}
            <div className="space-y-1">
                <div className="inline-block">
                    <h1 className="text-3xl sm:text-2xl font-semibold text-slate-500 mb-2 mt-2">
                        NAMASTE
                    </h1>
                    {/* <div className="h-0.5 w-1/2 bg-gradient-to-r from-[#6f49d8] to-transparent rounded-full"></div> */}
                </div>
                <h2 className="text-xs sm:text-sm lg:text-base text-slate-500 leading-relaxed">
                    I&apos;m Pradip, a passionate React Developer from{" "}
                    <Link
                        href="https://en.wikipedia.org/wiki/Nepal"
                        target="_blank"
                        className="text-slate-500 hover:text-slate-400 transition-colors duration-300 
                                     border-b border-slate-500/30 hover:border-slate-400"
                    >
                        Nepal.
                    </Link>
                </h2>
            </div>

            {/* Content Section */}
            <div className="space-y-6 text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
                {/* Introduction */}
                <div className="group">
                    <p className="transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                        I&apos;m an enthusiastic{" "}
                        <Link
                            href="https://reactjs.org/"
                            className="text-slate-500 hover:text-slate-400 transition-colors duration-300 
                                     border-b border-slate-500/30 hover:border-slate-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React Developer{" "}
                        </Link>{" "}
                        dedicated to crafting intuitive and dynamic web
                        applications. With expertise in modern web technologies,
                        I excel in transforming complex concepts into seamless
                        digital solutions.
                    </p>
                </div>

                {/* Main Experience */}
                <div className="group">
                    <p className="text-sm sm:text-sm lg:text-base">
                        As a Full-Time React Developer , my expertise lies in
                        creating seamless and responsive UIs and designs into
                        engaging web experiences. Currently focusing on{" "}
                        <TechStack
                            technologies={[
                                "Next.js",
                                "TypeScript",
                                "UI/UX Design",
                            ]}
                        />
                        .
                    </p>
                </div>

                {/* Technologies */}
                <div className="group">
                    <p className="text-xs sm:text-sm lg:text-base">
                        Proficient in modern CSS frameworks including{" "}
                        <TechStack
                            technologies={[
                                "Tailwind CSS",
                                "Bootstrap",
                                "Bulma",
                            ]}
                        />{" "}
                        for crafting visually stunning applications.
                    </p>
                </div>
            </div>

            <div>
                <p>
                    Let's collaborate to bring your ideas to life and build
                    something extraordinary together. 🚀 Ready to elevate your
                    project?{" "}
                    <Link
                        href="mailto:chaudharypradip678@gmail.com"
                        target="_blank"
                        className="text-slate-500 hover:text-slate-400 transition-colors duration-300 
                                     border-b border-slate-500/30 hover:border-slate-400"
                    >
                        Hire me
                    </Link>{" "}
                    today!
                </p>
            </div>

            {/* about footer  */}
            <div className="space-y-2 mt-28 ">
                <div className="pt-10 flex gap-10"></div>
                <div className="signature mt-10 flex flex-col ml-2">
                    <Image
                        src="/signature.png"
                        alt="signature"
                        width={200}
                        height={100}
                        className=" ml-3"
                        style={{ marginLeft: "-10px" }}
                    />
                    <span className="py-1">Best Regards,</span>
                    <span>
                        <hr className="border-t border-slate-500/30 w-[8rem]" />
                    </span>
                    <span className="font-semibold mt-3">Pradip Chaudhary</span>
                    <span className="text-slate-500 text-sm italic mt-0.5">
                        Full Stack Software Developer 🚀
                    </span>
                </div>
            </div>
        </section>
    );
}

// Helper component for tech links
function TechLink({ href, text }: { href: string; text: string }) {
    return (
        <Link
            href={href}
            className="text-slate-500 hover:text-slate-400 transition-colors duration-300 
                                     border-b border-slate-500/30 hover:border-slate-400"
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </Link>
    );
}

// Helper component for technology stacks
function TechStack({ technologies }: { technologies: string[] }) {
    return (
        <span className="space-x-1">
            {technologies.map((tech, index) => (
                <span key={tech}>
                    <TechLink href={getTechUrl(tech)} text={tech} />
                    {index < technologies.length - 1 &&
                        index !== technologies.length - 2 &&
                        ", "}
                    {index === technologies.length - 2 && " and "}
                </span>
            ))}
        </span>
    );
}

// Helper function to get technology URLs
function getTechUrl(tech: string): string {
    const urls: { [key: string]: string } = {
        "Next.js": "https://nextjs.org/",
        TypeScript: "https://www.typescriptlang.org/",
        "UI/UX Design": "https://www.smashingmagazine.com/category/uiux",
        "Tailwind CSS": "https://tailwindcss.com/",
        Bootstrap: "https://getbootstrap.com/",
        Bulma: "https://bulma.io/",
    };
    return urls[tech] || "#";
}
