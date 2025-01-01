import React, { useState } from "react";

interface Skill {
    id: number;
    name: string;
    category: string;
    proficiency: string;
    percentage: number | null;
    iconUrl: string | null;
    isHighlighted: boolean;
}

const SkillForm = () => {
    const [skill, setSkill] = useState<Skill>({
        id: 0,
        name: "",
        category: "",
        proficiency: "",
        percentage: null,
        iconUrl: null,
        isHighlighted: false,
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Submit the form data to the API or database
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setSkill({ ...skill, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={skill.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Category:
                <select
                    name="category"
                    value={skill.category}
                    onChange={handleChange}
                >
                    <option value="">Select a category</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="DevOps">DevOps</option>
                </select>
            </label>
            <label>
                Proficiency:
                <select
                    name="proficiency"
                    value={skill.proficiency}
                    onChange={handleChange}
                >
                    <option value="">Select a proficiency level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select>
            </label>
            <label>
                Percentage:
                <input
                    type="number"
                    name="percentage"
                    value={skill.percentage || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Icon URL:
                <input
                    type="text"
                    name="iconUrl"
                    value={skill.iconUrl || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Highlight:
                <input
                    type="checkbox"
                    name="isHighlighted"
                    checked={skill.isHighlighted}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SkillForm;
