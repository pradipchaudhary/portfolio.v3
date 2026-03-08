import { motion } from "framer-motion";
import Link from "next/link";

export default function Username({ name, username }: { name: string; username: string }) {
  return (
    <motion.div
      initial={{ rotate: -1 }}
      animate={{ rotate: [-1, 1, -1] }}   // shake effect
      transition={{
        duration: 0.4,
        repeat: 3, // runs 4 times total
        ease: "easeInOut",
      }}
      whileHover={{
        rotate: 0,
        transition: { type: "spring", stiffness: 200, damping: 20 }
      }}
    >
      <Link href="#" className="hover:opacity-80 transition">
        <h1 className="text-xl font-semibold text-gray-900 -mt-4">
          {name}
        </h1>
        <p className="text-sm text-gray-500 font-sans -mt-2">
          @{username}
        </p>
      </Link>
    </motion.div>
  );
}