"use client";
import { createCertification } from "@/features/certifications/certificationSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface FormData {
    certificationYear: string;
    achieveCertifications: string[];
}

interface FormErrors {
    certificationYear: string;
    achieveCertifications: string[];
}

const Create = () => {
    const [formData, setFormData] = useState<FormData>({
        certificationYear: "",
        achieveCertifications: [],
    });

    const [errors, setErrors] = useState<FormErrors>({
        certificationYear: "",
        achieveCertifications: [],
    });

    const dispatch = useDispatch<AppDispatch>(); // Define Dispatch type
    const router = useRouter();

    // Add a new input box for achieve certification
    const addAchieveCertificationInput = () => {
        setFormData((prev) => ({
            ...prev,
            achieveCertifications: [...prev.achieveCertifications, ""],
        }));
        setErrors((prev) => ({
            ...prev,
            achieveCertifications: [...prev.achieveCertifications, ""],
        }));
    };

    // Handle input change for certification year
    const handleYearChange = (value: string) => {
        setFormData((prev) => ({
            ...prev,
            certificationYear: value,
        }));
        setErrors((prev) => ({
            ...prev,
            certificationYear: "",
        }));
    };

    // Handle input change for certification fields
    const handleCertificationChange = (index: number, value: string) => {
        const updatedCertifications = [...formData.achieveCertifications];
        updatedCertifications[index] = value;
        setFormData((prev) => ({
            ...prev,
            achieveCertifications: updatedCertifications,
        }));

        const updatedErrors = [...errors.achieveCertifications];
        updatedErrors[index] = "";
        setErrors((prev) => ({
            ...prev,
            achieveCertifications: updatedErrors,
        }));
    };

    // Remove an input box for achieve certification
    const removeAchieveCertificationInput = (index: number) => {
        const updatedCertifications = formData.achieveCertifications.filter(
            (_, i) => i !== index
        );
        const updatedErrors = errors.achieveCertifications.filter(
            (_, i) => i !== index
        );
        setFormData((prev) => ({
            ...prev,
            achieveCertifications: updatedCertifications,
        }));
        setErrors((prev) => ({
            ...prev,
            achieveCertifications: updatedErrors,
        }));
    };

    // Validate the form fields
    const validateForm = (): boolean => {
        let isValid = true;
        const newErrors: FormErrors = {
            certificationYear: "",
            achieveCertifications: [],
        };

        if (!/^\d{4}$/.test(formData.certificationYear)) {
            newErrors.certificationYear = "Please enter a valid 4-digit year.";
            isValid = false;
        }

        formData.achieveCertifications.forEach((cert, index) => {
            if (!cert.trim()) {
                newErrors.achieveCertifications[index] =
                    "This field cannot be empty.";
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            const payload = {
                certification_year: Number(formData.certificationYear),
                achieve_certifications: formData.achieveCertifications,
            };
            dispatch(createCertification(payload));
            console.log("Form Submitted data:", payload);
            router.push("/admin/certifications");
        }
    };

    return (
        <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold underline">
                Create Certification
            </h1>
            <form onSubmit={handleSubmit} className="my-8">
                <div className="mb-4">
                    <label
                        htmlFor="certificationYear"
                        className="block font-medium mb-1 text-gray-700"
                    >
                        Certification Year
                    </label>
                    <input
                        type="text"
                        name="certificationYear"
                        id="certificationYear"
                        placeholder="Enter year (e.g., 2023)"
                        value={formData.certificationYear}
                        onChange={(e) => handleYearChange(e.target.value)}
                        className="w-72 rounded-lg border border-[#2d2854] bg-[#1d193e] p-4 py-2    text-sm text-slate-200 placeholder:text-slate-500    focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50   transition-all duration-300"
                        aria-label="Certification Year"
                    />
                    {errors.certificationYear && (
                        <p className="text-red-600">
                            {errors.certificationYear}
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1 text-gray-700">
                        Achieve Certifications:
                    </label>
                    {formData.achieveCertifications.map(
                        (certification, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <input
                                    type="text"
                                    placeholder="Enter your certification details..."
                                    className="w-full rounded-lg border border-[#2d2854] bg-[#1d193e] p-4 py-2    text-sm text-slate-200 placeholder:text-slate-500    focus:border-[#6f49d8]/50 focus:outline-none focus:ring-1 focus:ring-[#6f49d8]/50   transition-all duration-300"
                                    value={certification}
                                    onChange={(e) =>
                                        handleCertificationChange(
                                            index,
                                            e.target.value
                                        )
                                    }
                                    aria-label={`Certification ${index + 1}`}
                                />
                                {errors.achieveCertifications[index] && (
                                    <p className="text-red-600 ml-2">
                                        {errors.achieveCertifications[index]}
                                    </p>
                                )}
                                <button
                                    type="button"
                                    onClick={() =>
                                        removeAchieveCertificationInput(index)
                                    }
                                    className="ml-2 text-white py-1 px-2 rounded hover:bg-red-700 "
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
                                        className="lucide lucide-trash-2"
                                    >
                                        <path d="M3 6h18" />
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                        <line x1="10" x2="10" y1="11" y2="17" />
                                        <line x1="14" x2="14" y1="11" y2="17" />
                                    </svg>
                                </button>
                            </div>
                        )
                    )}
                    <button
                        type="button"
                        onClick={addAchieveCertificationInput}
                        className=" bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 flex items-center gap-2 mt-4"
                    >
                        {" "}
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
                            className="lucide lucide-plus h-4 w-4"
                        >
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>{" "}
                        Add Certifications
                    </button>
                </div>
                <button
                    type="submit"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors mt-8"
                >
                    Submit
                </button>

                {/* <a
                    class="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                    href="/admin/experience/create-new"
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
                        className="lucide lucide-plus h-4 w-4"
                    >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>
                    <span>Add Experience</span>
                </a> */}
            </form>
        </div>
    );
};

export default Create;
