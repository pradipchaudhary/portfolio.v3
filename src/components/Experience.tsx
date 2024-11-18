import React from "react";

const Experience = () => {
    return (
        <section className="py-7 mt-5">
            <h2 className="text-2xl font-bold mb-5">
                💼 Professional Experience
            </h2>

            {/* Experience 1 */}
            <div className="mb-8 pl-5">
                <div className="flex items-center mb-1">
                    <h3 className="text-[1.3rem] font-semibold inline-flex items-baseline leading-tight text-teal-300 text-base">
                        Full Stack Developer
                    </h3>
                    <span className="text-gray-600 ml-4">
                        Jan 2023 - Present
                    </span>
                </div>
                <p className="text mb-2">
                    <strong className=" text-gray-400 font-medium">
                        Company XYZ
                    </strong>{" "}
                    - A leading web solutions provider.
                </p>
                <ul className="list-disc pl-6 text-gray-500">
                    <li>
                        Built and maintained dynamic web applications using
                        React, Node.js, and MongoDB.
                    </li>
                    <li>
                        Collaborated with cross-functional teams to design and
                        implement new features.
                    </li>
                    <li>
                        Implemented RESTful APIs and integrated with third-party
                        services.
                    </li>
                    <li>
                        Optimized front-end performance and enhanced user
                        experience across devices.
                    </li>
                </ul>
            </div>

            {/* Experience 2 */}
            <div className="mb-8 pl-5">
                <div className="flex items-center mb-1">
                    <h3 className="text-[1.3rem] font-semibold inline-flex items-baseline leading-tight text-teal-300 text-base">
                        React Developer
                    </h3>
                    <span className="text-gray-500 ml-4">
                        Jun 2021 - Dec 2022
                    </span>
                </div>
                <p className="text-lg mb-2">
                    <strong className="text-gray-400 font-medium">
                        Company ABC
                    </strong>{" "}
                    - A startup focused on SaaS products.
                </p>
                <ul className="list-disc pl-6 text-gray-500">
                    <li>
                        Developed single-page applications (SPAs) using React.js
                        and Redux.
                    </li>
                    <li>
                        Created responsive and accessible UI components with
                        Tailwind CSS.
                    </li>
                    <li>
                        Integrated REST APIs to fetch data dynamically and
                        ensure a smooth UX.
                    </li>
                    <li>
                        Worked with the design team to implement user-friendly
                        and visually appealing designs.
                    </li>
                </ul>
            </div>

            {/* Experience 3 */}
            <div className="mb-8 pl-5">
                <div className="flex items-center mb-1">
                    <h3 className="text-[1.3rem] font-semibold inline-flex items-baseline leading-tight text-teal-300 text-base">
                        Junior Frontend Developer
                    </h3>
                    <span className="text-gray-500 ml-4">
                        Aug 2019 - May 2021
                    </span>
                </div>
                <p className="text-lg mb-2">
                    <strong className="text-gray-400 font-medium">
                        Startup Innovations
                    </strong>{" "}
                    - Focused on mobile-first web design.
                </p>
                <ul className="list-disc pl-6 text-gray-500">
                    <li>
                        Developed responsive websites with HTML5, CSS3, and
                        JavaScript.
                    </li>
                    <li>
                        Collaborated with senior developers to implement
                        features using React.js.
                    </li>
                    <li>
                        Optimized websites for performance, SEO, and
                        accessibility standards.
                    </li>
                    <li>
                        Maintained and updated websites, ensuring they were
                        secure and up to date.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Experience;
