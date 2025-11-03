import { Iprogress } from "@/assets/images/progress";
import Image from "next/image";

interface WorksProgressProps {
  title: string;
}

export function WorksProgress({title}:WorksProgressProps) {

  return (
    <div className="flex flex-col w-[564px] gap-[12px]">
      <span className="w-[564px] h-[24px] font-medium text-[16px] leading-[24px] space-y-[16px] tracking-[0] text-[#1A1717] ">
        {title}
      </span>
      <div className="flex flex-col w-[564px] h-[294px] border rounded-[12px] p-[48px] gap-[32px] bg-[#FFFFFF] border-[#E2DEDC] [box-shadow:0px_2px_2px_rgba(16,24,40,0.06),0px_1px_3px_rgba(16,24,40,0.10)]  ">
        <div className="flex flex-row w-[468px] h-[64px] justify-between ">
          <div className="flex flex-col w-[468px] h-[64px] gap-[8px] ">
            <span className="w-[468px] h-[20px] font-semibold text-[14px] leading-[20px] space-y-[14px] tracking-[0] text-[#1A1717] ">
              Entrega Prevista
            </span>
            <span className="w-[468px] h-[36px] font-semibold text-[32px] leading-[36px] space-y-[32px] -tracking-[2%] align-middle text-[#1A1717] ">
              Em Construção
            </span>
          </div>
        </div>
        <div className="w-[468px] h-[1px] bg-[#E2DEDC] "></div>
        <div className="flex flex-row w-[468px] h-[69px] gap-[8px]">
          {Iprogress.map((src, index) => (
            <div
              key={index}
              className="w-[71.33px] h-[69px] rounded-[8px] "
            >
              <Image
                src={src}
                alt="Imagens"
                className="w-[71.33px] h-[69px] rounded-[8px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
