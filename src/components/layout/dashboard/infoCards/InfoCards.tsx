import Award01Icon from "@/components/icons/AwardIcon";
import File06Icon from "@/components/icons/FileIcon";
import ReceiptIcon from "@/components/icons/ReceiptIcon";
import Users02Icon from "@/components/icons/UsersIcon";

interface InfoCardsProps {
  icon: "user" | "award" | "file" | "receipt";
  title: string;
  value: number;
}

interface InfoProps{
  children:React.ReactNode
}

export function Info({children}:InfoProps){
  return(
        <div className="flex flex-row justify-between w-[1203px] h-[110px] gap-[12px]">
          {children}
        </div>

  )
}

export function InfoCards({ icon, title, value }: InfoCardsProps) {
  const icons = {
    user: Users02Icon,
    award: Award01Icon,
    file: File06Icon,
    receipt: ReceiptIcon,
  };
  const Icon = icons[icon]

  return (

      <div className="flex flex-col w-[276px] h-[110px] border rounded-[12px] p-[24px] gap-[12px] bg-[#FFFFFF] border-[#E2DEDC] [box-shadow:0px_1px_2px_rgba(16,24,40,0.06),0px_1px_3px_rgba(16,24,40,0.10)]">
        <div className="flex flex-row w-[228px] h-[20px] gap-[8px]">

          {/* Icon */}
          <div className="flex items-center justify-center w-[20px] h-[20px]">
            <Icon className="w-[16.67px] h-[14.17px] top-[2.5px] left-[1.67px] size-[1.5px] text-[#504D4C]" />
          </div>

          {/* Title */}
          <p className="w-[200px] h-[20px] font-medium text-[14px] leading-[20px] space-y-[14px] tracking-[0] text-[#504D4C]">
            {title}
          </p>
        </div>

        {/* Value */}
        <div className="flex flex-row w-[228px] h-[30px] gap-[16px]">
          <p className="w-[228px] h-[30px] font-semibold text-[20px] leading-[30px] space-y-[20px] tracking-[0] text-[#1A1717]">
            {value}
          </p>
        </div>
      </div>
  );
}
