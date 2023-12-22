"use client";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export default function page() {
    const [imageUrl,setImageUrl] = useState("")
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h2 className="mb-12 ">Uploading files using cloudinary</h2>
      <CldUploadButton onUpload={(data)=>{
        console.log(data.info.secure_url)
        setImageUrl(data.info.secure_url)
      }}
        uploadPreset="InvoicePreset"
        className="bg-violet-600 py-2 px-8 text-white rounded-md mb-8"
      />
      {
        imageUrl && (
            <CldImage
            width={'960'}
            height={'600'}
            src={imageUrl}
            sizes='100vw'
            alt="Description of my image"
            />
        )
      }
    </div>
  );
}
