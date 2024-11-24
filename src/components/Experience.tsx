import React from "react";

// ListItem Component with TypeScript
interface ListItemProps {
    text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
    return (
        <li className="flex items-start text-base leading-6 group rounded-lg transition duration-300 ">
            <span className="mr-1 mt-0.5 flex items-center justify-center w-5 h-5">
                <svg
                    width={14}
                    height={14}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg"
                >
                    <g clipPath="url(#clip0_980_24852)">
                        <path
                            d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                            fill="currentColor"
                        />
                        <path
                            d="M12.6875 7.09375L8.96875 10.7188L7.28125 9.0625C7 8.78125 6.5625 8.8125 6.28125 9.0625C6 9.34375 6.03125 9.78125 6.28125 10.0625L8.28125 12C8.46875 12.1875 8.71875 12.2813 8.96875 12.2813C9.21875 12.2813 9.46875 12.1875 9.65625 12L13.6875 8.125C13.9688 7.84375 13.9688 7.40625 13.6875 7.125C13.4063 6.84375 12.9688 6.84375 12.6875 7.09375Z"
                            fill="currentColor"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_980_24852">
                            <rect width={20} height={20} fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>
            <span className="flex-1  transition duration-300 text-sm hover:text-slate-400">
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
        <div className="mb-2 pt-12 flex items-start relative fade-up">
            {/* Circle for Timeline Marker */}

            <div className="flex justify-center items-center bg-[#111115] left-[-5px] top-2">
                <div className="relative">
                    <div className="w-[.75rem] h-[.75rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[.4rem] left-[-7px] transform animate-beat"></div>
                    <div className="w-[.75rem] h-[.75rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[.4rem] left-[-7px] transform animate-echo"></div>
                </div>
            </div>

            <div className="ml-7">
                <div className="flex items-center mb-1">
                    <h3 className="text-lg font-semibold text-gray-300">
                        {title}
                    </h3>
                    <span className="text-sm text-gray-400 ml-4">{period}</span>
                </div>
                <p className="text-base text-[#8176a1] mb-3">
                    <strong className="font-medium">{company}</strong> -{" "}
                    {description}
                </p>
                <ul className="list-disc text-sm text-gray-400 space-y-2">
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
            title: "Associate Founder",
            company: "Plus2note",
            companyUrl: "https://www.plus2note.com",
            period: "Aug 2021 - Apr 2024",
            description: "AI startup revolutionizing intelligent solutions.",
            responsibilities: [
                "Spearheaded the development of AI-driven web platforms using React, Node.js, and MongoDB, delivering scalable and user-centric solutions.",
                "Integrated advanced machine learning models into applications, driving automation and enhancing user engagement.",
                "Optimized system performance, achieving up to 50% faster load times and ensuring scalability for high traffic demands.",
                "Led cross-functional collaboration to innovate and launch impactful AI-powered products.",
            ],
            markerColor: "bg-teal-400",
        },
        {
            title: "Full Stack Developer",
            company: "Sarathi Technosoft Pvt. Ltd",
            companyUrl: "https://www.sarathitechnosoft.com",
            period: "Aug 2021 - Apr 2024",
            description: "A leading web solutions provider.",
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
        <section id="experience" className="py-7 my-4 ">
            <h2 className="text-2xl font-bold text-gray-400 ">💼 Experience</h2>

            {/* Timeline */}
            <div className="relative pl-4">
                {/* Vertical Line on Left Side */}
                <div className="absolute left-[.9rem] w-[0.13rem] bg-[#4b2f9663] h-full"></div>

                {/* Map over experiences */}
                {experiences.map((exp, index) => (
                    <ExperienceItem
                        key={index}
                        title={exp.title}
                        company={exp.company}
                        period={exp.period}
                        description={exp.description}
                        responsibilities={exp.responsibilities}
                        markerColor={exp.markerColor}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;
