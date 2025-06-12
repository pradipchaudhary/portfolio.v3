import React from "react";

// ListItem Component
interface ListItemProps {
    text: string;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => {
    return (
        <li className="flex items-start group rounded-lg transition-all duration-300">
            <span className="text-purple-600 italic mr-2">#</span>
            <span className="text-sm text-gray-700">{text}</span>
        </li>
    );
};

// ExperienceItem Component
interface ExperienceItemProps {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
    markerColor: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    title,
    company,
    period,
    responsibilities,
    markerColor,
}) => {
    return (
        <div className="relative pt-12 pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-purple-200">
            {/* Timeline Dot */}
            <div className="absolute left-[-5.5px] top-[3.5rem] sm:top-[3.3rem] h-3 w-3">
                <div className={`h-full w-full rounded-full ${markerColor} ring-[6px] ring-purple-200`} />
                <div className={`h-full w-full rounded-full ${markerColor} ring-[6px] ring-purple-100 animate-ping absolute top-0`} />
            </div>

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{title}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm sm:text-base">
                        <span className="font-medium text-gray-700">{company}</span>
                        <span className="text-sm text-black italic">{period}</span>
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

// Experience Section Component
const Experience: React.FC = () => {
    const experiences = [
        {
            title: "Full Stack Developer",
            company: "Freelancer",
            period: "May 2021 - Present",
            responsibilities: [
                "Developed and deployed full-stack applications for clients worldwide.",
                "Built and customized WordPress themes and plugins for various businesses.",
                "Worked with React.js, Next.js, Node.js, and MongoDB to develop web applications.",
                "Integrated third-party APIs and payment gateways for e-commerce solutions.",
                "Collaborated with clients to understand project requirements and deliver tailored solutions.",
            ],
            markerColor: "bg-purple-500",
        },
        {
            title: "Full Stack Developer",
            company: "Sarathi Technosoft Pvt. Ltd",
            period: "Aug 2021 - Apr 2024",
            responsibilities: [
                "Implemented RESTful APIs and integrated with third-party services.",
                "Optimized front-end performance and enhanced user experience across devices.",
                "Collaborated with cross-functional teams to design and implement new features.",
                "Built and maintained dynamic web applications using React, Node.js, and MongoDB or MySQL.",
            ],
            markerColor: "bg-purple-400",
        },
        {
            title: "Web Developer",
            company: "Softbenz Infosys",
            period: "Sep 2020 - Jul 2021",
            responsibilities: [
                "Developed single-page applications (SPAs) using React.js and Redux.",
                "Created responsive and accessible UI components with Tailwind CSS.",
                "Integrated REST APIs to fetch data dynamically and ensure a smooth UX.",
                "Worked with the design team to implement user-friendly and visually appealing designs.",
            ],
            markerColor: "bg-purple-300",
        },
        {
            title: "Junior Frontend Developer",
            company: "Purwanchal Digital Media Technologies Pvt. Ltd.",
            period: "Feb 2016 - May 2021",
            responsibilities: [
                "Developed responsive websites with HTML5, CSS3, and JavaScript.",
                "Collaborated with senior developers to implement features using PHP.",
                "Optimized websites for performance, SEO, and accessibility standards.",
                "Maintained and updated websites, ensuring they were secure and up to date.",
            ],
            markerColor: "bg-purple-200",
        },
    ];

    return (
        <section id="experience" className="py-20 text-black">
            <div className="relative max-w-4xl mx-auto px-2 sm:px-4 lg:px-2">
                {/* Section Title */}
                <div className="mb-1">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Experience
                    </h2>
                </div>

                {/* Experience Items */}
                <div className="pl-1 sm:pl-2 ">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
