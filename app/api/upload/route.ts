import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return new Response("No file uploaded", { status: 400 });
  }


  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const result = await new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
    
    cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result as { secure_url: string; public_id: string });
        }
      }
    ).end(buffer);  
  });

return NextResponse.json({
  url: result.secure_url,
  public_id: result.public_id
})


  } catch (error) {
    console.error("Error uploading file:", error);
    return new Response("Error uploading file", { status: 500 });
  }

}