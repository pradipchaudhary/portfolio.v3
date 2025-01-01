import EditCertificationForm from "@/components/admin/certifications/EditCertificationForm";
import Link from "next/link";

export default function CertificationEditPage() {
    return (
        <>
            <div className="header ml-4">
                <h1 className="text-3xl mb-4">Edit Certification</h1>
                <Link
                    href="/admin/certifications"
                    className="flex items-center gap-2 text-gray-600 group-hover:text-gray-300"
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
                        className="lucide lucide-arrow-left h-5 w-5 text-gray-600 group-hover:text-gray-300"
                    >
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path>
                    </svg>
                    Back
                </Link>
            </div>
            <EditCertificationForm />
        </>
    );
}
