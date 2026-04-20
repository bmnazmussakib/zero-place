"use client";

import { CldUploadWidget } from "next-cloudinary";
import { ImagePlus, Trash, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useCallback } from "react";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  onRemove: () => void;
  label?: string;
}

export default function ImageUpload({
  value,
  onChange,
  onRemove,
  label = "Upload Image"
}: ImageUploadProps) {
  
  const onSuccess = useCallback((result: any) => {
    if (result.info && typeof result.info !== "string") {
      onChange(result.info.secure_url);
    }
  }, [onChange]);

  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center gap-4">
        {value ? (
          <div className="relative w-24 h-24 rounded-sm border border-primary/10 overflow-hidden bg-slate-50">
            <Image
              fill
              src={value}
              alt="Upload"
              className="object-contain p-2"
            />
            <button
              onClick={onRemove}
              type="button"
              className="absolute top-1 right-1 p-1 bg-rose-500 text-white rounded-sm shadow-sm hover:bg-rose-600 transition-colors"
            >
              <Trash className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <div className="w-24 h-24 rounded-sm border border-dashed border-primary/20 bg-primary/5 flex flex-col items-center justify-center text-slate-300">
            <ImageIcon className="w-8 h-8 mb-1 opacity-20" />
            <span className="text-[10px] uppercase font-bold tracking-tighter opacity-40">No Image</span>
          </div>
        )}

        <CldUploadWidget 
          onSuccess={onSuccess} 
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          options={{
            maxFiles: 1,
            resourceType: "image",
          }}
        >
          {({ open }) => {
            return (
              <button
                type="button"
                onClick={() => open()}
                className="btn btn-sm h-10 rounded-sm bg-white border-primary/10 hover:bg-primary/5 hover:border-primary/20 text-slate-600 font-bold gap-2 flex-1"
              >
                <ImagePlus className="w-4 h-4 text-primary" />
                {label}
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
}
