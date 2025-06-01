"use client";

import { ShieldBan } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
    return (
        <section
            id="about" aria-label="About Pradip Chaudhary" className="">
            {/* <h2 className="w-5 text-7xl">🙏 </h2> */}
            <span className="text-5xl">🙏</span>
            <p>
                I&apos;m an Undergraduate software  engineer who loves to <span className="text-[#6f49d8]"> write code.</span>
            </p>

            <p
                className="text-custom-text my-4">

                I&apos;m an enthusiastic{" "}
                <Link
                    href={"https://react.dev/"}
                    target="_blank"
                    className="text-[#6f49d8] "
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
                    className="text-[#6f49d8] "
                >
                    React Developer
                </Link>
                , my expertise lies in creating seamless and responsive UIs and
                designs into engaging web experiences. Currently, I&apos;m
                diving deep into{" "}
                <Link
                    href={"https://nextjs.org/"}
                    target="_blank"
                    className="text-[#6f49d8] "
                >
                    Next.js
                </Link>{" "}
                and{" "}
                <Link
                    href={"https://www.typescriptlang.org/"}
                    target="_blank"
                    className="text-[#6f49d8] "
                >
                    TypeScript
                </Link>{" "}
                , leveraging my skills in{" "}
                <Link
                    href="/https://www.behance.net/galleries/ui-ux/ui-ux"
                    target="_blank"
                    className="text-[#6f49d8] "
                >
                    UI/UX Design
                </Link>{" "}
                and{" "}
                <Link
                    href={"https://moz.com/beginners-guide-to-seo"}
                    className="text-[#6f49d8] "
                    target="_blank"
                >
                    SEO
                </Link>
                , along with{" "}
                <Link
                    href={"https://scrapy.org/"}
                    className="text-[#6f49d8] "
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
                    className="text-[#6f49d8] "
                    target="_blank"
                >
                    Bulma
                </Link>
                ,{" "}
                <Link
                    href="https://getbootstrap.com/"
                    className="text-[#6f49d8] "
                    target="_blank"
                >
                    Bootstrap
                </Link>
                , and{" "}
                <Link
                    href="https://tailwindcss.com/"
                    className="text-[#6f49d8] "
                    target="_blank"
                >
                    Tailwind CSS{" "}
                </Link>
                ensures that I craft applications that are not only functional
                but also visually stunning.
            </p>

            <blockquote>
                Let’s build something extraordinary together! 🚀
            </blockquote>
            <div className="flex py-2">
                {/* First Icon */}
                <div className="relative group z-10 hover:z-20">
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full border flex justify-center items-center"
                    >
                        {/* Icon 1 */}
                        <Image
                            src="/skills-icons/react.svg" // ✅ NO "./"
                            width={24}                    // Fixed size (e.g., 24x24 px)
                            height={24}
                            alt="React Icon"             // ✅ alt is required
                        />
                    </a>
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                    px-2 py-1 bg-gray-800 text-white text-sm rounded 
                    opacity-0 group-hover:opacity-100 transition-opacity z-50">
                        Tooltip 1
                    </div>
                </div>

                {/* Second Icon */}
                <div className="relative group -ml-4 z-0 hover:z-20">
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full border flex justify-center items-center"
                    >
                        {/* Icon 2 */}
                        <Image
                            src="/skills-icons/next.svg" // ✅ NO "./"
                            width={24}                    // Fixed size (e.g., 24x24 px)
                            height={24}
                            alt="React Icon"             // ✅ alt is required
                        />
                    </a>
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                    px-2 py-1 bg-gray-800 text-white text-sm rounded 
                    opacity-0 group-hover:opacity-100 transition-opacity z-50">
                        Tooltip 2
                    </div>
                </div>

                {/* Third Icon */}
                <div className="relative group -ml-4 z-0 hover:z-20">
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full border flex justify-center items-center"
                    >
                        {/* Icon 3 */}
                        <Image
                            src="/skills-icons/node.svg" // ✅ NO "./"
                            width={24}                    // Fixed size (e.g., 24x24 px)
                            height={24}
                            alt="React Icon"             // ✅ alt is required
                        />
                    </a>
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                    px-2 py-1 bg-gray-800 text-white text-sm rounded 
                    opacity-0 group-hover:opacity-100 transition-opacity z-50">
                        Tooltip 3
                    </div>
                </div>
                {/* Fourth Icon */}
                <div className="relative group -ml-4 z-0 hover:z-20">
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full border flex justify-center items-center"
                    >
                        {/* Icon 4 */}
                        <Image
                            src="/skills-icons/tailwind-css.svg" // ✅ NO "./"
                            width={24}                    // Fixed size (e.g., 24x24 px)
                            height={24}
                            alt="React Icon"             // ✅ alt is required
                        />
                    </a>
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                    px-2 py-1 bg-gray-800 text-white text-sm rounded 
                    opacity-0 group-hover:opacity-100 transition-opacity z-50">
                        Tooltip 3
                    </div>
                </div>
            </div>


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
