"use client";

import { CldUploadWidget } from "next-cloudinary";

export default function UploadButton() {
  return (
    <CldUploadWidget
      uploadPreset="your_unsigned_preset"
      onSuccess={(result) => {
        console.log(result);
      }}
    >
      {({ open }) => {
        return (
          <button
            onClick={() => open()}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Upload Image
          </button>
        );
      }}
    </CldUploadWidget>
  );
}