"use client";

import React from "react";

type LinkItem = {
  name: string;
  url: string;
};

type Section = {
  title: string;
  items: LinkItem[];
};

const sections: Section[] = [
  {
    title: "Personal Portfolios (Developers / Designers)",
    items: [
      { name: "Manu Arora", url: "https://manuarora.in/" },
      { name: "Chanh Dai", url: "https://chanhdai.com/" },
      { name: "Ramx", url: "https://ramx.in/" },
      { name: "Frostin", url: "https://www.frostin.dev/" },
      { name: "Ben Martin", url: "https://benrmartin.com/" },
      { name: "Hrithik", url: "https://devhrithik.vercel.app/" },
    ],
  },
  {
    title: "Additional High-Quality Portfolios",
    items: [
      { name: "Brittany Chiang", url: "https://brittanychiang.com/" },
      { name: "Lee Robinson", url: "https://leerob.io/" },
      { name: "Jhey Tompkins", url: "https://jhey.dev/" },
      { name: "Paco", url: "https://www.paco.me/" },
      { name: "Josh Comeau", url: "https://www.joshwcomeau.com/" },
      { name: "Alex Carpenter", url: "https://alexcarpenter.me/" },
    ],
  },
  {
    title: "Minimal & Clean Aesthetic Inspiration",
    items: [
      { name: "Vercel Design", url: "https://vercel.com/design" },
      { name: "Linear", url: "https://linear.app/" },
      { name: "Arc", url: "https://arc.net/" },
      { name: "Framer", url: "https://framer.com/" },
    ],
  },
  {
    title: "Motion & Animation Inspiration",
    items: [
      { name: "Lusion", url: "https://lusion.co/" },
      { name: "Cuberto", url: "https://cuberto.com/" },
      { name: "Waaark", url: "https://waaark.com/" },
    ],
  },
];

export default function InspirationPage() {
  return (
    <main className="py-18">
      <div>
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight
            text-gray-900 dark:text-white">
            Inspired By
          </h1>

          <p className="mt-4 max-w-2xl leading-7
            text-gray-600 dark:text-gray-400">
            A curated list of beautiful, modern, clean, and high-quality developer and designer portfolios that influence my UI, animations, and design direction.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold mb-4
                text-gray-900 dark:text-gray-200">
                {section.title}
              </h2>

              <div className="space-y-2">
                {section.items.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-sm"
                  >
                    <span
                      className="
                        text-gray-700 dark:text-gray-400
                        group-hover:text-black dark:group-hover:text-white
                        transition-colors duration-200
                      "
                    >
                      {item.name}
                    </span>

                    {/* subtle arrow */}
                    <span
                      className="
                        text-gray-400 dark:text-gray-500
                        group-hover:text-gray-600 dark:group-hover:text-gray-300
                        transition-all duration-200
                        translate-x-0 group-hover:translate-x-0.5
                      "
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}