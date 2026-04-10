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
      // { name: "Superlist", url: "https://superlist.com/" },
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
      <div className="">

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Inspired By
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl leading-7">
            A curated list of beautiful, modern, clean, and high-quality developer and designer portfolios that influence my UI, animations, and design direction.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>

              <div className="space-y-2">
                {section.items.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm group"
                  >
                    <span className="text-gray-700 group-hover:text-black transition">
                      {item.name}
                    </span>

                    {/* <span className="text-gray-400 group-hover:text-gray-600 transition -mt-6 w-1 h-1">
                      ↗
                    </span> */}
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