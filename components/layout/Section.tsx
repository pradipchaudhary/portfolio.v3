// reusable Section component

import { motion } from "motion/react";
import { container, maincontainer } from "@/lib/animations";
import Container from "./Container";

// Section Props
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
}

export default function Section({
  children,
  className = "",
  id,
  ariaLabel,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      className={`${className} mb-20`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>{children}</Container>
    </motion.section>
  );
}
