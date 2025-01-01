"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    fetchSingleExperience,
    updateExperience,
} from "@/features/experiences/experienceSlice";
import { AppDispatch } from "@/store/store";
import { useParams } from "next/navigation";

interface Experience {
    id?: string; // Optional for editing existing experiences
    title: string;
    company: string;
    companyUrl?: string;
    period: string;
    responsibilities: string[];
}

interface ExperienceFormProps {
    initialData?: Experience; // Optional data for editing
    onSubmit?: (data: Experience) => void; // Callback for submission
}

const EditExperienceForm: React.FC<ExperienceFormProps> = ({
    initialData,
    onSubmit,
}) => {
    const [experience, setExperience] = useState<Experience>({
        id: initialData?.id || undefined,
        title: initialData?.title || "",
        company: initialData?.company || "",
        companyUrl: initialData?.companyUrl || "",
        period: initialData?.period || "",
        responsibilities: initialData?.responsibilities || [],
    });

    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams();

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setExperience((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const experienceId = Number(id);
                console.log("types of experience id", id);
                console.log("types of experience id", experienceId);
                if (!isNaN(experienceId)) {
                    await dispatch(fetchSingleExperience(experienceId));
                }
            } catch (error) {
                console.error("Error fetching certification:", error);
            }
        };
        fetchData();
    }, [id, dispatch]);

    // Sync Redux state with local form state
    useEffect(() => {
        if (experience && experience.id === Number(id)) {
            setExperience({
                id: experience.id,
                title: experience.title,
                company: experience.company,
                companyUrl: experience.companyUrl,
                period: experience.period,
                responsibilities: experience.responsibilities || [],
            });
        }
    }, [experience, id]);

    // Add a new responsibility
    const handleAddResponsibility = () => {
        setExperience((prevState) => ({
            ...prevState,
            responsibilities: [...prevState.responsibilities, ""],
        }));
    };

    // Remove a responsibility
    const handleRemoveResponsibility = (index: number) => {
        setExperience((prevState) => ({
            ...prevState,
            responsibilities: prevState.responsibilities.filter(
                (_, i) => i !== index
            ),
        }));
    };

    // Update a specific responsibility
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
        if (onSubmit) {
            onSubmit(experience); // Invoke the callback
        } else if (experience.id) {
            dispatch(updateExperience(experience)); // Dispatch update action
        } else {
            dispatch(createExperience(experience)); // Dispatch create action
        }
    };

    return (
        <div>
            <h1 className="text-3xl text-gray-800 mb-6">
                {experience.id ? "Edit Experience" : "Add Experience"}
            </h1>
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

                {/* Company URL */}
                <div className="mb-4">
                    <label
                        htmlFor="companyUrl"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Company URL
                    </label>
                    <input
                        id="companyUrl"
                        type="text"
                        name="companyUrl"
                        value={experience.companyUrl}
                        onChange={handleInputChange}
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
                    {experience.responsibilities.map(
                        (responsibility, index) => (
                            <div key={index} className="flex items-center mb-2">
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
                                    placeholder={`Responsibility ${index + 1}`}
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleRemoveResponsibility(index)
                                    }
                                    className="ml-2 text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        )
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
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                    >
                        {experience.id ? "Save Changes" : "Add Experience"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditExperienceForm;
