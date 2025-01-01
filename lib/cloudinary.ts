import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(
    buffer: Buffer,
    options: {
        folder: string;
        resource_type: "image" | "video" | "raw" | "auto";
    }
): Promise<{ url: string; publicId: string }> {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: options.folder,
                resource_type: options.resource_type,
            },
            (error, result) => {
                if (error || !result) {
                    reject(error || new Error("Upload failed"));
                    return;
                }
                resolve({
                    url: result.secure_url,
                    publicId: result.public_id,
                });
            }
        );

        // Write buffer to stream
        uploadStream.write(buffer);
        uploadStream.end();
    });
}

export async function deleteFromCloudinary(publicId: string) {
    try {
        await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        console.error(error);
        throw error;
    }
}
