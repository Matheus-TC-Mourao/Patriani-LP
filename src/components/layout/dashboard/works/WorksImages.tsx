"use client";
import { images } from "@/assets/images/imagens";
import XIcon from "@/components/icons/XIcon";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface WorksImagesProps {
  title: string;
}

export function WorksImages({ title }: WorksImagesProps) {
  const [seletedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  return (
    <div className=" flex flex-col w-[564px] gap-[12px]">
      <span className="w-[564px] h-[24px] font-medium text-[16px] leading-[24px] space-y-[16px] tracking-[0] text-[#1A1717] ">
        {title}
      </span>
      <div className="flex flex-row w-[564px] h-[294px] gap-[10px] ">
        <div className="grid grid-cols-3 w-[563px] h-[296px] gap-[10px] ">
          {images.map((src, index) => (
            <div
              onClick={() => setSelectedImage(src)}
              key={index}
              className="w-[181px] h-[145px] rounded-[12px] "
            >
              <Image
                src={src}
                alt="Imagens"
                className="w-[181px] h-[145px] rounded-[12px]"
              />
            </div>
          ))}
        </div>
      </div>
      {seletedImage && (
        <div
          className="fixed inset-0 bg-[#000000E5] flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="w-[612px] h-[400px] rounded-[8px] flex flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={seletedImage}
              alt="Imagem ampliada"
              className="w-[612px] h-[400px] rounded-[8px]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="relative top-[7px] right-[36px] bg-[#000000E5] w-[36px] h-[36px] rounded-[18px] p-[8px] gap-[12px]"
            >
              <div className="w-[20px] h-[20px] text-[48px] flex items-center justify-center">
                <XIcon className="w-[20px] h-[20px] top-[5px] left-[5px] text-[1.67px] text-[#FFFFFF] " />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
