"use client";

import {
    deleteCertification,
    fetchCertifications,
} from "@/features/certifications/certificationSlice";
import { AppDispatch, RootState } from "@/store/store";
import { Award } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CertificationsPage() {
    const dispatch = useDispatch<AppDispatch>();

    const { certificates, loading, error } = useSelector(
        (state: RootState) => state.certifications // Ensure this matches your store slice
    );

    useEffect(() => {
        dispatch(fetchCertifications());
    }, [dispatch]);

    console.log("certifications", certificates);
    const handleDelete = async (id: number) => {
        try {
            await dispatch(deleteCertification(id)).unwrap();
        } catch (error) {
            console.error("Failed to delete certification:", error);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-white">
                    Certifications
                </h1>
                <Link
                    href="/admin/certifications/new"
                    className="px-4 py-2 bg-[#1a2942] text-white rounded-lg hover:bg-[#243656] transition-colors"
                >
                    Add Certification
                </Link>
            </div>

            {loading ? (
                <p className="text-white">Loading...</p>
            ) : error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : certificates.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certificates.map((cert: any) => (
                        <div
                            key={cert.id}
                            className="rounded-lg border text-card-foreground shadow-sm bg-[#2d2854]/50 border-[#2d2854] p-6 backdrop-blur-sm hover:bg-[#2d2854]/70 transition-all duration-300 group hover:border-[#6f49d8]/20 hover:shadow-lg"
                        >
                            <div className="mb-6 flex justify-between ">
                                <h2 className="text-xl font-semibold">
                                    {cert.certificationYear ||
                                        "No Year Provided"}
                                </h2>
                                <div>
                                    <button className="p-2 hover:bg-[#243656] rounded-lg transition-colors">
                                        <Link
                                            href={`/admin/certifications/${cert.id}/edit`}
                                            className=""
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="lucide lucide-pen h-4 w-4 text-gray-400"
                                            >
                                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                            </svg>
                                        </Link>
                                    </button>

                                    <button
                                        onClick={() => handleDelete(cert.id)}
                                        className="p-2 text-red-400 hover:bg-[#243656] rounded-lg transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-trash2 h-4 w-4 text-red-400"
                                        >
                                            <path d="M3 6h18"></path>
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                            <line
                                                x1="10"
                                                x2="10"
                                                y1="11"
                                                y2="17"
                                            ></line>
                                            <line
                                                x1="14"
                                                x2="14"
                                                y1="11"
                                                y2="17"
                                            ></line>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="mb-4">
                                {cert.achieveCertifications.length > 0 && (
                                    <ul className="mt-2">
                                        {cert.achieveCertifications.map(
                                            (skill: string, index: number) => (
                                                <li
                                                    key={index}
                                                    className="text-gray-400 text-sm flex gap-1 mt-2"
                                                >
                                                    <span className="h-6 w-6">
                                                        <Award className="h-4 w-4 text-[#6f49d8] mt-[3px]" />
                                                    </span>
                                                    <span className="text-[0.8rem]">
                                                        {skill}{" "}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-400">No certifications available.</p>
            )}
        </div>
    );
}
