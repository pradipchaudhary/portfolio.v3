import React from "react";

// ListItem Component with TypeScript
interface ListItemProps {
    text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
    return (
        <li className="flex items-start group rounded-lg transition-all duration-300">
            <span className="text-[#384c69] italic mr-2">#</span>
            <span className="text-xs sm:text-sm text-slate-500  leading-relaxed group-hover:text-slate-500">
                {text}
            </span>
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
        <div className="relative pt-20 pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-[#6f49d8]/20">
            {/* Timeline Dot */}
            <div className="absolute left-[-5.5px] top-[5.25rem] sm:top-[5.55rem] h-3 w-3">
                <div className="h-full w-full rounded-full bg-[#6f49d8] ring-[6px] ring-[#6f49d8]/10" />
            </div>

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-400 mb-1">
                        {title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-slate-500">
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

                <ul className="space-y-3">
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
        <section className="py-16" id="experience">
            <div className="space-y-1">
                <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-400">
                        💼 Experience
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 ml-12">
                        My professional journey and roles
                    </p>
                </div>

                <div
                    className="pl-5"
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
