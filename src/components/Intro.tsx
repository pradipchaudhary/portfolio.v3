"use client";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">
                Hi there,
                <Image
                    src="/images/wave.webp"
                    alt="wave"
                    width={2} // Correct width and height values
                    height={2}
                    className="inline-block w-8"
                />
            </h1>
            {/* p1 */}
            <p className="text-lg">
                I&apos;m an enthusiastic{" "}
                <Link
                    href="https://reactjs.org/"
                    className="text-blue-800 hover:underline"
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
            <p className="text-lg my-4">
                As a{" "}
                <strong className="font-semibold">
                    Full-Time{" "}
                    <Link
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:underline"
                    >
                        React Developer
                    </Link>
                </strong>
                , my expertise lies in creating
                <strong className="font-semibold">
                    seamless and responsive UIs
                </strong>
                and
                <strong className="font-semibold">transforming designs</strong>
                into engaging web experiences. Currently, I&apos;m diving deep
                into{" "}
                <Link
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
                >
                    Next.js
                </Link>{" "}
                and{" "}
                <Link
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
                >
                    TypeScript
                </Link>{" "}
                , leveraging my skills in{" "}
                <Link
                    href="https://www.smashingmagazine.com/category/uiux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
                >
                    UI/UX Design
                </Link>{" "}
                and{" "}
                <Link
                    href="https://moz.com/beginners-guide-to-seo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
                >
                    SEO
                </Link>
                , along with{" "}
                <Link
                    href="https://scrapy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
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
            <p className="text-lg my-4">
                My proficiency in modern web technologies, including{" "}
                <Link
                    href="https://bulma.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
                >
                    Bulma
                </Link>
                ,{" "}
                <Link
                    href="https://getbootstrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
                >
                    Bootstrap
                </Link>
                , and{" "}
                <Link
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
                >
                    Tailwind CSS
                </Link>{" "}
                ensures that I craft applications that are not only functional
                but also visually stunning.
            </p>
        </div>
    );
}
