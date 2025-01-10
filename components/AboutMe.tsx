"use client";

import Link from "next/link";

export default function AboutMe() {
    return (
        <section id="about" aria-label="About Pradip Chaudhary" className="">
            <h1 className="text-4xl bg-gradient-to-b from-[#8c95e4] to-[#292450]/90 text-transparent bg-clip-text  tracking-tight font-semibold mt-2">
                Hi there,
            </h1>
            <p className="text-custom-text my-4">
                {`I'm an enthusiastic React Developer dedicated to crafting
                intuitive and dynamic web applications. With expertise in modern
                web technologies, I excel in transforming complex concepts into
                seamless digital solutions.`}
            </p>
            <p className="text-custom-text my-4 ">
                As a Full-Time React Developer, my expertise lies in creating
                seamless and responsive UIs and designs into engaging web
                experiences. Currently, I'm diving deep into Next.js and
                TypeScript , leveraging my skills in{" "}
                <Link
                    href="/https://www.behance.net/galleries/ui-ux/ui-ux"
                    target="_blank"
                    className=""
                >
                    UI/UX Design
                </Link>{" "}
                Design and SEO, along with Web Scraping, to deliver
                high-performance solutions that meet client needs.
            </p>
            <p className="text-custom-text my-4">
                {`My proficiency in modern web technologies, including Bulma, Bootstrap, and Tailwind CSS ensures that I craft applications that are not only functional but also visually stunning.`}
            </p>
            <div className="line"></div>
        </section>
    );
}
