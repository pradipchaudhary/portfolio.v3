"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { GoArrowUpRight } from "react-icons/go";


const inspirations = [
  { name: "Manu Arora", url: "https://manuarora.in/" },
  { name: "Chanh Dai", url: "https://chanhdai.com/" },
  { name: "Ramx", url: "https://ramx.in/" },
  { name: "Ben Martin", url: "https://benrmartin.com/" },
  { name: "Hrithik", url: "https://devhrithik.vercel.app/" },
  { name: "Brittany Chiang", url: "https://brittanychiang.com/" },
  { name: "Lee Robinson", url: "https://leerob.io/" },
  { name: "Jhey Tompkins", url: "https://jhey.dev/" },
  { name: "Paco", url: "https://www.paco.me/" },
  { name: "Alex Carpenter", url: "https://alexcarpenter.me/" },
  { name: "Vercel Design", url: "https://vercel.com/design" },
];

export default function InspirationPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Inspired By"
        description="A curated collection of designers, developers, and products that influence my approach to building thoughtful digital experiences."
      />

      <div className="space-y-1">
        {inspirations.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-lg px-3 py-3 transition-all duration-200 hover:bg-zinc-100/70 dark:hover:bg-zinc-900"
          >
            <div className="flex flex-col">
              <span className="text-[15px] font-medium text-zinc-900 dark:text-zinc-100">
                {item.name}
              </span>

              <span className="text-sm text-zinc-500 dark:text-zinc-500">
                {new URL(item.url).hostname.replace("www.", "")}
              </span>
            </div>

            <span className="text-zinc-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
              <GoArrowUpRight />

            </span>
          </a>
        ))}
      </div>
    </div>
  );
}