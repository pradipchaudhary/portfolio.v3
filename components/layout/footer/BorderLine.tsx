// import motion from "motion/react";
import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";


export default function BorderLine() {
  const svgControls = useAnimation();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(()=>{
      setStartAnimation(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
    if (startAnimation) {
      svgControls.start({
        strokeDashoffset: 0,
        transition: {
          duration: 3,
          ease: "easeInOut",
        },
      });
    }
  }, [startAnimation, svgControls]);


  return (
    <svg
        className="absolute top-0 left-0 w-full h-14 pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,70 C120,30 240,110 360,70 C480,30 600,110 720,70 C840,30 960,110 1080,70 C1200,30 1320,100 1440,70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-400 dark:text-gray-600 opacity-25"
          id="footer-svg-path"

          initial={{
            strokeDasharray: 1454.9981689453125,
            strokeDashoffset: 1454.9981689453125,
          }}

          animate={svgControls}
        />
      </svg>
  )}