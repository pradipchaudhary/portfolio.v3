"use client";

const ResumeDownload = () => {
  return (
    <div>
      <p className="py-8 text-gray-800 dark:text-gray-300">
        Review my{" "}
        <a
          href="/resume/pradip_chaudhary_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block font-bold p-1
          text-gray-900 dark:text-white
          hover:text-black dark:hover:text-gray-200
          transition-all duration-300"
        >
          resume

          {/* Decorative underline */}
          <svg
            className="absolute -bottom-[2px] left-0 w-full h-[10px] 
            text-gray-400 dark:text-gray-500"
            viewBox="0 0 120 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7C20 2 50 10 70 4C90 -2 110 8 118 3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </a>{" "}
        for hiring consideration.
      </p>
    </div>
  );
};

export default ResumeDownload;