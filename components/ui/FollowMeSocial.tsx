"use client";

import Image from "next/image";
import SocialIcons from "./SocialIcons";

export default function FollowMeSocial() {
  return (
    <section className="relative flex flex-col items-center gap-2 rounded-xl px-6 py-6">

      {/* Follow Me Text */}
      <p
        className="text-sm font-medium tracking-wide text-gray-500 rotate-[-10deg]"
        style={{ fontFamily: "'Patrick Hand', cursive" }}
      >
        Follow Me
      </p>

      {/* Arrow Image */}
      <Image
        src="/images/curved-arrow.png"
        alt="Follow arrow"
        width={100}
        height={100}
        className="opacity-30 brightness-110 dark:opacity-20 ml-10"
        priority
      />

      {/* Social Icons */}
      <SocialIcons />
    </section>
  );
}
