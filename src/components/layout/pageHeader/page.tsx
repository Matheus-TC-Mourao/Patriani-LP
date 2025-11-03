import ImgPageHeader from "@/assets/images/imgPageHeader";
import Image, { StaticImageData } from "next/image";


export function PageHeader() {
  return (
    <div className=" flex-col inline-flex w-[1503px] h-[240px]">
      <Image src={ImgPageHeader} alt="Image Page Header" className="w-[1503px] h-[240px]"/>
    </div>
  );
}
