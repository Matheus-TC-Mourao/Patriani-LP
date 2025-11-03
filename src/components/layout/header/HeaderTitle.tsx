import ChevronLeftIcon from "../../icons/ChevronLeft";

interface HeaderTitleProps {
  title: string;
  leftIcon?: boolean;
}

export function HeaderTitle({ title, leftIcon }: HeaderTitleProps) {
  return (
    <div className="flex flex-row items-center justify-center w-[233px] h-[32px] gap-[16px]">

      {/* Icon */}
      <div className="flex justify-center items-center w-[24px] h-[24px]">
        {leftIcon && (
          <ChevronLeftIcon className="w-[6px] h-[12px] top-[6px] left-[9px] text-[2px] text-[#000000]" />
        )}
      </div>

      {/* Title */}
      <div className="flex flex-row w-[193px] h-[32px] gap-[12px]">
        <div className=" flex flex-col w-[193px] h-[32px]">
          <p className="w-[193px] h-[32px] font-bold text-[24px] leading-[32px] space-y-[24px] tracking-[0] align-middle text-[#1A1717]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
