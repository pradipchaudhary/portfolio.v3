import React from "react";

// ListItem Component with TypeScript
interface ListItemProps {
    text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
    return (
        <li className="flex items-start group rounded-lg transition-all duration-300">
            <span className="text-[#7b74a6] italic mr-2">#</span>
            <span className="text-xs sm:text-sm ">{text}</span>
        </li>
    );
};

// ExperienceItem Component with TypeScript
interface ExperienceItemProps {
    title: string;
    company: string;
    period: string;
    description: string;
    responsibilities: string[];
    markerColor: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    title,
    company,
    period,
    description,
    responsibilities,
}) => {
    return (
        <div className="relative pt-[2.97rem] pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-[#6f49d8]/20">
            {/* Timeline Dot */}
            <div className="absolute left-[-5.5px] top-[4rem] sm:top-[3.55rem] h-3 w-3">
                <div className="h-full w-full rounded-full bg-[#6f49d8] ring-[6px] ring-[#6f49d8]/10 after:animate-ping" />
                <div className="h-full w-full rounded-full bg-[#6f49d8] ring-[6px] ring-[#6f49d8]/10 animate-ping absolute -top-[0px]" />
            </div>

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#7b74a6] mb-1">
                        {title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm">
                        <span className="font-medium">{company}</span>
                        {description && (
                            <>
                                <span className="hidden sm:inline">•</span>
                                <span>{description}</span>
                            </>
                        )}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-[#6f49d8]">
                        {period}
                    </div>
                </div>

                <ul className="space-y-1.5">
                    {responsibilities.map((task, index) => (
                        <ListItem key={index} text={task} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Experience Component with TypeScript
const Experience: React.FC = () => {
    // Experience data array
    const experiences = [
        {
            title: "Full Stack Developer",
            company: "Sarathi Technosoft Pvt. Ltd",
            companyUrl: "https://www.sarathitechnosoft.com",
            period: "Aug 2021 - Apr 2024",
            description: "",
            responsibilities: [
                "Built and maintained dynamic web applications using React, Node.js, and MongoDB or MySQL.",
                "Collaborated with cross-functional teams to design and implement new features.",
                "Implemented RESTful APIs and integrated with third-party services.",
                "Optimized front-end performance and enhanced user experience across devices.",
            ],
            markerColor: "bg-teal-400",
        },
        {
            title: "Frontend Engineer ",
            company: "Softbenz Infosys",
            companyUrl: "https://softbenz.com",
            period: "Sep 2020 - Jul 2021",
            description: "Software Company",
            responsibilities: [
                "Developed single-page applications (SPAs) using React.js and Redux.",
                "Created responsive and accessible UI components with Tailwind CSS.",
                "Integrated REST APIs to fetch data dynamically and ensure a smooth UX.",
                "Worked with the design team to implement user-friendly and visually appealing designs.",
            ],
            markerColor: "bg-teal-300",
        },
        {
            title: "Junior Frontend Developer",
            company: "Purwanchal Digital Media Technologies Pvt. Ltd.",
            companyUrl: "https://www.purwanchaldigital.com",
            period: "Feb 2016 - May 2021",
            description: "",
            responsibilities: [
                "Developed responsive websites with HTML5, CSS3, and JavaScript.",
                "Collaborated with senior developers to implement features using PHP.",
                "Optimized websites for performance, SEO, and accessibility standards.",
                "Maintained and updated websites, ensuring they were secure and up to date.",
            ],
            markerColor: "bg-teal-300",
        },
    ];

    return (
        <section className="py-16 " id="experience">
            <div className="space-y-1 relative max-h-full ">
                <svg
                    className="absolute left-[0.46rem] top-9 rounded-full"
                    width="2"
                    height="900"
                    viewBox="0 0 2 905"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="path"
                        d="M1 0V1085"
                        stroke="#6f49d8"
                        strokeWidth="12"
                        fill="none"
                    ></path>
                </svg>

                <div className="space-y-2 pb-6">
                    <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-[#8c95e4] to-[#292450]/80 text-transparent bg-clip-text  tracking-tight ml-0.5">
                        Experience
                    </h2>
                </div>

                <div
                    className="pl-2"
                    style={{
                        marginTop: "-34px",
                    }}
                >
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
