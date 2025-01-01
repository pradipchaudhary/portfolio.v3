"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateSkill } from "@/features/skills/skillSlice";
// import { updateSkill } from "@/store/skillsSlice"; // Import your slice
// import { RootState } from "@/store"; // Update with your actual store structure

interface Skill {
    id?: number;
    name: string;
    percentage?: number;
    iconUrl?: string;
    isHighlighted: boolean;
}

const EditSkillForm: React.FC = () => {
    const { id } = useParams();
    const router = useRouter();
    const dispatch = useDispatch();
    const { skills, loading, error } = useSelector(
        (state: RootState) => state.skills
    );

    const [skill, setSkill] = useState<Skill | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Fetch the skill details from the Redux store or API
        const existingSkill = skills.find((skill) => skill.id === parseInt(id));
        if (existingSkill) {
            setSkill(existingSkill);
        } else {
            // Optional: Fetch from API if skill is not in Redux
            const fetchSkill = async () => {
                try {
                    const response = await fetch(`/api/skills/${id}`);
                    if (response.ok) {
                        const data = await response.json();
                        setSkill(data.skill);
                    } else {
                        console.error("Failed to fetch skill details");
                    }
                } catch (error) {
                    console.error("Error fetching skill:", error);
                }
            };
            fetchSkill();
        }
    }, [id, skills]);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type, checked } = e.target;
        setSkill({
            ...skill!,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!skill) return;

        setIsSubmitting(true);
        try {
            // Unwrap the async thunk result
            await dispatch(updateSkill(skill)).unwrap();
            console.log("Skill updated successfully");
            router.push("/admin/skills"); // Navigate to the skills list page
        } catch (error) {
            console.error("Error updating skill:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading || !skill) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white p-4">
            <h1 className="text-3xl font-bold">Edit Skill</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">
                        Skill Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={skill?.name || ""}
                        onChange={handleChange}
                        className="w-full bg-[#090909] rounded-lg px-4 py-3 text-white border border-[#333] focus:border-[#444] focus:ring-[#4444] focus:ring-1 focus:outline-none placeholder:text-[#666]"
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
                        value={skill?.percentage || ""}
                        onChange={handleChange}
                        className="w-full bg-[#090909] rounded-lg px-4 py-3 text-white border border-[#333] focus:border-[#444] focus:ring-[#4444] focus:ring-1 focus:outline-none placeholder:text-[#666]"
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
                        value={skill?.iconUrl || ""}
                        onChange={handleChange}
                        className="w-full bg-[#090909] rounded-lg px-4 py-3 text-white border border-[#333] focus:border-[#444] focus:ring-[#4444] focus:ring-1 focus:outline-none placeholder:text-[#666]"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        id="isHighlighted"
                        name="isHighlighted"
                        checked={skill?.isHighlighted || false}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="isHighlighted">Highlight this skill</label>
                </div>
                <button
                    type="submit"
                    className={`w-full p-2 rounded text-white font-bold ${
                        isSubmitting
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Updating..." : "Update Skill"}
                </button>
            </form>
        </div>
    );
};

export default EditSkillForm;
