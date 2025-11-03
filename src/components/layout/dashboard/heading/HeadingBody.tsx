import MarkerPin01Icon from "../../../icons/MarkerPin";

interface HeadingBodyProps {
  title: string;
  address: string;
  children:React.ReactNode
}

export function HeadingBody({ title, address,children}: HeadingBodyProps) {
  return (
    <div className="flex justify-between w-[1203px] h-[61px] gap-[24px]">
      <div className="flex flex-col w-[977px] h-[61px] gap-[8px]">
        <div className="flex flex-row w-[977px] h-[32px] gap-[12px]">
          <p className="w-[193px] h-[32px] font-bold text-[24px] leading-[32px] space-y-[24px] tracking-[0] text-[#1A1717]">
            {title}
          </p>
        </div>
        <div className="flex flex-row items-center w-[977px] h-[18px] gap-[4px]">
          <div className="flex items-center justify-center w-[16px] h-[16px]">
            <MarkerPin01Icon className="w-[10.67px] h-[13.33px] top-[1.33px] left-[2.67px] text-[1.5px] text-[#504D4C]" />
          </div>
          <p className="w-[346px] h-[18px] font-normal text-[12px] leading-[18px] space-y-[12px] tracking-[0] text-[#504D4C]">
            {address}
          </p>
        </div>
      </div>
     {children}
    </div>
  );
}
