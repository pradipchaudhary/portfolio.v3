"use client";

import Link from "next/link";
import { PulseBeams } from "./Animation";

export default function AboutMe() {
    return (
        <section id="about" aria-label="About Pradip Chaudhary" className="">
            <h1 className="text-4xl bg-gradient-to-b from-[#8c95e4] to-[#292450]/90 text-transparent bg-clip-text  tracking-tight font-semibold mt-2">
                Hi there,
            </h1>
            <p className="text-custom-text my-4">
                I&apos;m an enthusiastic{" "}
                <Link
                    href={"https://react.dev/"}
                    target="_blank"
                    className="text-[#8c95e4] underline"
                >
                    React Developer
                </Link>{" "}
                dedicated to crafting intuitive and dynamic web applications.
                With expertise in modern web technologies, I excel in
                transforming complex concepts into seamless digital solutions.
            </p>
            <p className="text-custom-text my-4 ">
                As a Full-Time{" "}
                <Link
                    href={"https://react.dev/"}
                    target="_blank"
                    className="text-[#8c95e4] underline"
                >
                    React Developer
                </Link>
                , my expertise lies in creating seamless and responsive UIs and
                designs into engaging web experiences. Currently, I&apos;m
                diving deep into{" "}
                <Link
                    href={"https://nextjs.org/"}
                    target="_blank"
                    className="text-[#8c95e4] underline"
                >
                    Next.js
                </Link>{" "}
                and{" "}
                <Link
                    href={"https://www.typescriptlang.org/"}
                    target="_blank"
                    className="text-[#8c95e4] underline"
                >
                    TypeScript
                </Link>{" "}
                , leveraging my skills in{" "}
                <Link
                    href="/https://www.behance.net/galleries/ui-ux/ui-ux"
                    target="_blank"
                    className="text-[#8c95e4] underline"
                >
                    UI/UX Design
                </Link>{" "}
                and{" "}
                <Link
                    href={"https://moz.com/beginners-guide-to-seo"}
                    className="text-[#8c95e4] underline"
                    target="_blank"
                >
                    SEO
                </Link>
                , along with{" "}
                <Link
                    href={"https://scrapy.org/"}
                    className="text-[#8c95e4] underline"
                    target="_blank"
                >
                    Web Scraping
                </Link>
                , to deliver high-performance solutions that meet client needs.
            </p>
            <p className="text-custom-text my-4">
                My proficiency in modern web technologies, including{" "}
                <Link
                    href="https://bulma.io/"
                    className="text-[#8c95e4] underline"
                    target="_blank"
                >
                    Bulma
                </Link>
                ,{" "}
                <Link
                    href="https://getbootstrap.com/"
                    className="text-[#8c95e4] underline"
                    target="_blank"
                >
                    Bootstrap
                </Link>
                , and{" "}
                <Link
                    href="https://tailwindcss.com/"
                    className="text-[#8c95e4] underline"
                    target="_blank"
                >
                    Tailwind CSS{" "}
                </Link>
                ensures that I craft applications that are not only functional
                but also visually stunning.
            </p>
            <div className="md:hidden mt-10 ml-8">
                <Link
                    href={"/Pradip_Chaudhary.pdf"}
                    className="download-button -ml-7 hover:text-slate-400 "
                >
                    Download CV
                </Link>
            </div>
        </section>
    );
}
