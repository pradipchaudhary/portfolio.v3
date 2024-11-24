"use client";
import Link from "next/link";

export default function AboutMe() {
    return (
        <section id="introduction" className="fade-up">
            <h1 className="text-2xl font-bold mb-4 fade-up">
                Hi there, <span className="wave  text-white">👋</span>
            </h1>

            {/* p1 */}
            <p className="text-lg fade-up">
                I&apos;m an enthusiastic{" "}
                <Link
                    href="https://reactjs.org/"
                    className="text-[#6743CD] hover:underline transition-all duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React Developer
                </Link>{" "}
                dedicated to crafting intuitive and dynamic web applications.
                With expertise in modern web technologies, I excel in
                transforming complex concepts into seamless digital solutions.
            </p>
            {/* p2 */}
            <p className="text-lg my-4 fade-up">
                As a{" "}
                <strong>
                    Full-Time{" "}
                    <Link
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6743CD] hover:underline"
                    >
                        React Developer
                    </Link>
                </strong>
                , my expertise lies in creating{" "}
                <strong className="font-semibold">
                    seamless and responsive UIs{" "}
                </strong>
                and
                <strong className="font-semibold"> designs </strong>
                into engaging web experiences. Currently, I&apos;m diving deep
                into{" "}
                <Link
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6743CD] hover:underline"
                >
                    Next.js
                </Link>{" "}
                and{" "}
                <Link
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6743CD] hover:underline"
                >
                    TypeScript
                </Link>{" "}
                , leveraging my skills in{" "}
                <Link
                    href="https://www.smashingmagazine.com/category/uiux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6743CD] hover:underline"
                >
                    UI/UX Design
                </Link>{" "}
                and{" "}
                <Link
                    href="https://moz.com/beginners-guide-to-seo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6743CD] hover:underline"
                >
                    SEO
                </Link>
                , along with{" "}
                <Link
                    href="https://scrapy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6743CD] hover:underline"
                >
                    Web Scraping
                </Link>
                , to deliver{" "}
                <strong className="font-semibold">
                    high-performance solutions
                </strong>{" "}
                that meet client needs.
            </p>
            {/* p3 */}
            <p className="text-lg my-4 fade-up">
                My proficiency in modern web technologies, including{" "}
                <Link
                    href="https://bulma.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6743CD] hover:underline"
                >
                    Bulma
                </Link>
                ,{" "}
                <Link
                    href="https://getbootstrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6743CD] hover:underline"
                >
                    Bootstrap
                </Link>
                , and{" "}
                <Link
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6743CD] hover:underline"
                >
                    Tailwind CSS
                </Link>{" "}
                ensures that I craft applications that are not only functional
                but also visually stunning.
            </p>
        </section>
    );
}
