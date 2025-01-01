"use client";
// pages/certification-form.tsx
import React, { useState } from "react";
import "draft-js/dist/Draft.css";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const CertificationForm: React.FC = () => {
    const [certificationYear, setCertificationYear] = useState<string>("");
    const [editorState, setEditorState] = useState<any>("");

    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [{ align: [] }],
            [{ color: [] }],
            ["code-block"],
            ["clean"],
        ],
    };
    const quillFormats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "image",
        "align",
        "color",
        "code-block",
    ];
    const router = useRouter();

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);

        console.log({
            certification_year: certificationYear,
            achieve_certification: JSON.stringify(rawContentState),
        });

        alert("Form submitted successfully!");

        // Optionally redirect to another page
        router.push("/");
    };

    // Change handler for the editor
    const handleEditorChange = (value: string) => {
        setEditorState(value);
    };

    return (
        <div className="mt-10 p-6 border rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Certification Form</h1>
            <form onSubmit={handleSubmit}>
                {/* Certification Year */}
                <div className="mb-4">
                    <label
                        htmlFor="certification_year"
                        className="block font-medium mb-1"
                    >
                        Certification Year:
                    </label>
                    <input
                        type="number"
                        id="certification_year"
                        name="certification_year"
                        placeholder="Enter year (e.g., 2023)"
                        className="w-full border px-3 py-2 rounded"
                        value={certificationYear}
                        onChange={(e) => setCertificationYear(e.target.value)}
                        required
                    />
                </div>

                {/* Achieve Certification */}
                <div className="mb-4">
                    <label
                        htmlFor="achieve_certification"
                        className="block font-medium mb-1"
                    >
                        Achieve Certification:
                    </label>
                    <QuillEditor
                        value={editorState}
                        onChange={handleEditorChange}
                        modules={quillModules}
                        formats={quillFormats}
                        className="w-full h-[200px] mt-2 bg-white"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CertificationForm;
