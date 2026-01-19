"use client";

import Image from "next/image";
import SocialIconStack from "./AvatarStack";

export default function FollowMeSocial() {
  return (
    <section className="relative flex flex-col items-center gap-3 rounded-xl
      bg-black/[0.03] px-6 py-6 dark:bg-white/[0.04]">

      {/* Follow Me Text */}
      <p className="text-sm font-medium tracking-wide text-gray-700 dark:text-gray-500">
        Follow Me
      </p>

      {/* Arrow Image */}
      <Image
        src="/images/curved-arrow.png"
        alt="Follow arrow"
        width={120}
        height={120}
        className="opacity-80 dark:opacity-70"
        priority
      />

      {/* Social Icons */}
      <SocialIconStack />
    </section>
  );
}
