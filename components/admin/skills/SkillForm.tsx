"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js routing
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { createSkill } from "@/features/skills/skillSlice";

interface Skill {
    id?: number;
    name: string;
    percentage?: number;
    iconUrl?: string;
    isHighlighted: boolean;
}

const SkillForm: React.FC = () => {
    const [skill, setSkill] = useState<Skill>({
        name: "",
        percentage: undefined,
        iconUrl: "",
        isHighlighted: false,
    });

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type, checked } = e.target;

        setSkill({
            ...skill,
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "number"
                    ? +value
                    : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Submitting skill:", skill);

        try {
            // Dispatch the createSkill action
            const resultAction = await dispatch(createSkill(skill));
            if (createSkill.fulfilled.match(resultAction)) {
                console.log(
                    "Skill submitted successfully:",
                    resultAction.payload
                );
                router.push("/admin/skills"); // Redirect to skills list
            } else {
                console.error("Error submitting skill:", resultAction.payload);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-4">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">Add New Skill</h1>
                <p className="text-gray-400 mt-2 text-lg">
                    Add a new skill to your portfolio
                </p>
            </div>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">
                        Skill Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={skill.name}
                        onChange={handleChange}
                        className="w-full bg-[#090909] rounded-lg px-4 py-3 text-white border border-[#333] focus:border-[#444] focus:ring-[#4444] focus:ring-1 focus:outline-none placeholder:text-[#666]"
                        placeholder="e.g., React, Node.js"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="percentage" className="block mb-1">
                        Percentage
                    </label>
                    <input
                        type="number"
                        id="percentage"
                        name="percentage"
                        value={skill.percentage || ""}
                        onChange={handleChange}
                        className="w-full bg-[#090909] rounded-lg px-4 py-3 text-white border border-[#333] focus:border-[#444] focus:ring-[#4444] focus:ring-1 focus:outline-none placeholder:text-[#666]"
                        placeholder="e.g., 85"
                        min={0}
                        max={100}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="iconUrl" className="block mb-1">
                        Icon URL
                    </label>
                    <input
                        type="text"
                        id="iconUrl"
                        name="iconUrl"
                        value={skill.iconUrl || ""}
                        onChange={handleChange}
                        className="w-full bg-[#090909] rounded-lg px-4 py-3 text-white border border-[#333] focus:border-[#444] focus:ring-[#4444] focus:ring-1 focus:outline-none placeholder:text-[#666]"
                        placeholder="e.g., https://example.com/icon.png"
                    />
                </div>

                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        id="isHighlighted"
                        name="isHighlighted"
                        checked={skill.isHighlighted}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="isHighlighted">Highlight this skill</label>
                </div>

                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-bold"
                >
                    Submit Skill
                </button>
            </form>
        </div>
    );
};

export default SkillForm;
