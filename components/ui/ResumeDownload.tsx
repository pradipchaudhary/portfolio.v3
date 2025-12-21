"use client";

const ResumeDownload = () => {
  return (
    <div>
      <p className="py-8 text-gray-800 ">
        Review my{" "}
        <a
          href="/resume/Pradip-Chaudhary-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block font-bold hover:text-gray-900 transition-all duration-300 p-1"
        >
          resume
          {/* Decorative underline */}
          <svg
            className="absolute -bottom-[2px] left-0 w-full h-[10px] text-gray-400"
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
