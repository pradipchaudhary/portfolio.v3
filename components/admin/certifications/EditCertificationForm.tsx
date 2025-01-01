"use client";

import {
    fetchCertificationById,
    updateCertification,
} from "@/features/certifications/certificationSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Form State Interface
interface CertificationFormState {
    id?: number;
    certificationYear?: number;
    achieveCertifications: string[];
}

const UpdateCertificationForm: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>(); // Typed dispatch
    const { id } = useParams<{ id: string }>(); // Retrieve ID from the route

    const certification = useSelector(
        (state: RootState) => state.certifications.singleCertificate
    );

    const [formState, setFormState] = useState<CertificationFormState>({
        id: undefined,
        certificationYear: undefined,
        achieveCertifications: [],
    });

    // Fetch certification data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const certificationId = Number(id);
                if (!isNaN(certificationId)) {
                    await dispatch(fetchCertificationById(certificationId));
                }
            } catch (error) {
                console.error("Error fetching certification:", error);
            }
        };
        fetchData();
    }, [dispatch, id]);

    // Sync Redux state with local form state
    useEffect(() => {
        if (certification && certification.id === Number(id)) {
            setFormState({
                id: certification.id,
                certificationYear: certification.certificationYear,
                achieveCertifications:
                    certification.achieveCertifications || [],
            });
        }
    }, [certification, id]);

    // Handle changes for certificationYear
    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value ? parseInt(e.target.value, 10) : undefined;
        setFormState((prev) => ({ ...prev, certificationYear: value }));
    };

    // Handle changes for achieveCertifications
    const handleCertificationChange = (index: number, value: string) => {
        setFormState((prev) => {
            const updatedCertifications = [...prev.achieveCertifications];
            updatedCertifications[index] = value;
            return { ...prev, achieveCertifications: updatedCertifications };
        });
    };

    // Add a new certification input
    const addCertificationInput = () => {
        setFormState((prev) => ({
            ...prev,
            achieveCertifications: [...prev.achieveCertifications, ""],
        }));
    };

    // Remove a certification input
    const removeCertificationInput = (index: number) => {
        setFormState((prev) => {
            const updatedCertifications = [...prev.achieveCertifications];
            updatedCertifications.splice(index, 1);
            return { ...prev, achieveCertifications: updatedCertifications };
        });
    };

    // Update the dispatch inside handleSubmit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Submit");

        if (
            formState.id &&
            formState.certificationYear !== undefined &&
            formState.achieveCertifications
        ) {
            console.log("all data have");
            // Prepare the certification object to pass to the action
            const certification = {
                certificationYear: formState.certificationYear,
                achieveCertifications: formState.achieveCertifications,
            };

            // Dispatch with the required structure
            dispatch(
                updateCertification({
                    id: formState.id, // Use the formState.id
                    certification, // Pass the certification data as 'certification'
                })
            );
            router.push("/admin/certifications");
            // routeModule
        } else {
            console.error("Form is incomplete or has missing fields");
        }
    };

    return (
        <div className="mt-8 ml-4">
            <form onSubmit={handleSubmit}>
                <div className="mt-5">
                    <label
                        htmlFor="certificationYear"
                        className="block font-medium mb-1 text-gray-400"
                    >
                        Certification Year
                    </label>
                    <input
                        type="number"
                        id="certificationYear"
                        value={formState.certificationYear || ""}
                        onChange={handleYearChange}
                        className="w-72 rounded-lg border border-[#2d2854] bg-[#1d193e] p-4 py-2    text-sm text-slate-200 placeholder:text-slate-500    focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50   transition-all duration-300"
                    />
                </div>

                <div className="mt-5">
                    <label>Achieve Certifications</label>
                    {formState.achieveCertifications.map((cert, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={cert}
                                onChange={(e) =>
                                    handleCertificationChange(
                                        index,
                                        e.target.value
                                    )
                                }
                                className="w-[95%] my-2 rounded-lg border border-[#2d2854] bg-[#1d193e] p-4 py-2    text-sm text-slate-200 placeholder:text-slate-500    focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50   transition-all duration-300"
                            />
                            <button
                                type="button"
                                onClick={() => removeCertificationInput(index)}
                                style={{
                                    marginLeft: "8px",
                                    color: "red",
                                    cursor: "pointer",
                                }}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addCertificationInput}
                        className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 flex items-center gap-2 mt-4"
                    >
                        + Add Certification
                    </button>
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors mt-8"
                >
                    Update Certification
                </button>
            </form>
        </div>
    );
};

export default UpdateCertificationForm;
