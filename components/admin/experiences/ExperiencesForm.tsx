"use client";
import { createExperience } from "@/features/experiences/experienceSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface Experience {
    title: string;
    company: string;
    companyUrl?: string;
    period: string;
    responsibilities: string[];
}

const ExperienceForm: React.FC = () => {
    const [experience, setExperience] = useState<Experience>({
        title: "",
        company: "",
        companyUrl: "",
        period: "",
        responsibilities: [],
    });

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setExperience((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle adding a new responsibility
    const handleAddResponsibility = () => {
        setExperience((prevState) => ({
            ...prevState,
            responsibilities: [...prevState.responsibilities, ""],
        }));
    };

    // Handle removing a specific responsibility
    const handleRemoveResponsibility = (index: number) => {
        setExperience((prevState) => ({
            ...prevState,
            responsibilities: prevState.responsibilities.filter(
                (_, i) => i !== index
            ),
        }));
    };

    // Handle updating responsibility input
    const responsibilityInputHandler = (index: number, value: string) => {
        setExperience((prevState) => {
            const updatedResponsibilities = [...prevState.responsibilities];
            updatedResponsibilities[index] = value;
            return { ...prevState, responsibilities: updatedResponsibilities };
        });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", experience);
        dispatch(createExperience(experience));
        router.push("/admin/experiences");
    };

    return (
        <div>
            <h1 className="text-3xl text-gray-800 mb-6">Experience Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Job Title */}
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Job Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={experience.title}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter your job title"
                    />
                </div>

                {/* Company Name */}
                <div className="mb-4">
                    <label
                        htmlFor="company"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Company Name
                    </label>
                    <input
                        id="company"
                        type="text"
                        name="company"
                        value={experience.company}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter company name"
                    />
                </div>
                {/* Company Name */}
                <div className="mb-4">
                    <label
                        htmlFor="companyUrl"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Company URL
                    </label>
                    <input
                        id="company"
                        type="text"
                        name="companyUrl"
                        value={experience.companyUrl}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-400"
                        placeholder="Enter company URL"
                    />
                </div>

                {/* Period */}
                <div className="mb-4">
                    <label
                        htmlFor="period"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Period
                    </label>
                    <input
                        id="period"
                        type="text"
                        name="period"
                        value={experience.period}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-400"
                        placeholder="e.g., Jan 2020 - Dec 2022"
                    />
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                    <h3 className="font-medium text-gray-700 mb-2">
                        Responsibilities:
                    </h3>
                    {experience.responsibilities.length > 0 ? (
                        <ul>
                            {experience.responsibilities.map(
                                (responsibility, index) => (
                                    <li key={index} className="mb-2">
                                        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded">
                                            <input
                                                type="text"
                                                value={responsibility}
                                                onChange={(e) =>
                                                    responsibilityInputHandler(
                                                        index,
                                                        e.target.value
                                                    )
                                                }
                                                className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-400 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemoveResponsibility(
                                                        index
                                                    )
                                                }
                                                className="ml-4 text-red-500 hover:text-red-700"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                )
                            )}
                        </ul>
                    ) : (
                        <p className="text-gray-500">
                            No responsibilities added yet.
                        </p>
                    )}
                    <button
                        type="button"
                        onClick={handleAddResponsibility}
                        className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                    >
                        Add Responsibility
                    </button>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        className="px-4 py-2 text-gray-300 hover:text-gray-200 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                    >
                        <span>Save Experience</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ExperienceForm;
