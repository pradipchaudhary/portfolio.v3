"use client";
import { fetchSkills } from "@/features/skills/skillSlice";
import { AppDispatch, RootState } from "@/store/store";
import { FilePenLine, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SkillsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const skillsAPIData = useSelector(
        (state: RootState) => state.skills.skillsAPIData
    );
    const loading = useSelector((state: RootState) => state.skills.loading);
    const error = useSelector((state: RootState) => state.skills.error);
    const skills = skillsAPIData || [];

    useEffect(() => {
        dispatch(fetchSkills());
    }, [dispatch]);

    const handleDelete = (skillId) => {
        // Implement the delete functionality here
    };

    return (
        <>
            <div className="p-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-white">Skills</h1>
                    <Link
                        href={"/admin/skills/new"}
                        className="px-4 py-2 bg-[#1a2942] text-white rounded-lg hover:bg-[#243656] transition-colors"
                    >
                        Add Skill
                    </Link>
                </div>
                <div className="mt-8 flex gap-8 flex-wrap">
                    {loading && <div>Loading...</div>}
                    {error && <div>Error: {error}</div>}

                    {skills.length > 0 &&
                        skills.map((skill) => (
                            <div
                                key={skill.id}
                                className="p-6  bg-[#1c1c1c] rounded-lg  min-w-72"
                            >
                                <div className="flex justify-between place-items-start">
                                    <h2 className="text-xl font-bold text-gray-400">
                                        {skill.name}
                                    </h2>
                                    <div className="flex gap-4">
                                        <Link
                                            href={`/admin/skills/${skill.id}/edit`}
                                            className="w-3 h-3 bg-[#1a2942] text-white rounded-lg hover:bg-[#243656] transition-colors"
                                        >
                                            <FilePenLine />
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(skill.id)
                                            }
                                            className="text-red-500 hover:text-red-600 transition-colors w-4 h-4"
                                        >
                                            <Trash />
                                        </button>
                                    </div>
                                </div>

                                <div className="w-100 flex items-center justify-center py-4">
                                    <h2 className="text-5xl m-4 font-bold text-gray-300">
                                        {skill.percentage}
                                    </h2>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default SkillsPage;
