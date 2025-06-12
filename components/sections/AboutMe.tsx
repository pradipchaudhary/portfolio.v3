"use client";

import Link from "next/link";
import SkillIcons from "../common/SkillIcons";
import MobileCVDownload from "../common/MobileCVDownload";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section
            id="about"
            aria-label="About Pradip Chaudhary"
            className="pt-2"
        >
            <div className="flex gap-2">
                <span className="text-5xl">🙏</span>{" "}
                <span className="text-custom-text text-lg leading-relaxed">
                    <span className="text-3xl font-serif">I</span>&apos;m an undergraduate software engineer <br />  who loves to{" "}
                    <span className="text-[#6f6f6f] font-bold">write code.</span>
                </span>
            </div>

            <p className="text-custom-text my-4 leading-relaxed">
                I&apos;m an enthusiastic{" "}
                <Link
                    href="https://react.dev/"
                    target="_blank"
                    className="text-[#6f49d8]"
                >
                    React Developer
                </Link>{" "}
                dedicated to crafting intuitive and dynamic web applications. With expertise in modern web technologies, I excel in transforming complex concepts into seamless digital solutions.
            </p>

            <p className="text-custom-text my-4 leading-relaxed">
                As a full-time{" "}
                <Link
                    href="https://react.dev/"
                    target="_blank"
                    className="text-[#6f49d8]"
                >
                    React Developer
                </Link>
                , I specialize in creating seamless and responsive UIs that turn designs into engaging web experiences. Currently, I&apos;m diving deep into{" "}
                <Link
                    href="https://nextjs.org/"
                    target="_blank"
                    className="text-[#6f49d8]"
                >
                    Next.js
                </Link>{" "}
                and{" "}
                <Link
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    className="text-[#6f49d8]"
                >
                    TypeScript
                </Link>
                , leveraging my knowledge in{" "}
                <Link
                    href="https://www.behance.net/galleries/ui-ux/ui-ux"
                    target="_blank"
                    className="text-[#6f49d8]"
                >
                    UI/UX Design
                </Link>{" "}
                and{" "}
                <Link
                    href="https://moz.com/beginners-guide-to-seo"
                    target="_blank"
                    className="text-[#6f49d8]"
                >
                    SEO
                </Link>
                , along with{" "}
                <Link
                    href="https://scrapy.org/"
                    target="_blank"
                    className="text-[#6f49d8]"
                >
                    Web Scraping
                </Link>
                , to deliver high-performance, client-focused solutions.
            </p>

            <p className="text-custom-text my-4 leading-relaxed">
                My proficiency in modern web technologies, including{" "}
                <Link
                    href="https://bulma.io/"
                    target="_blank"
                    className="text-[#6f49d8]"
                >
                    Bulma
                </Link>
                ,{" "}
                <Link
                    href="https://getbootstrap.com/"
                    target="_blank"
                    className="text-[#6f49d8]"
                >
                    Bootstrap
                </Link>
                , and{" "}
                <Link
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="text-[#6f49d8]"
                >
                    Tailwind CSS
                </Link>{" "}
                ensures that I build applications that are both functional and visually appealing.
            </p>

            <blockquote className="text-[#6f6f6f] italic mb-6">
                Let’s build something extraordinary together! 🚀
            </blockquote>

            <SkillIcons />

            {/* Signature Image */}
            <div className="mt-10 ">
                <Image
                    src="/signature.png"
                    alt="Signature"
                    width={180}
                    height={80}
                    className="opacity-80"
                    priority
                />
            </div>

            {/* // Replace the old block with: */}
            <MobileCVDownload />
        </section>
    );
}
