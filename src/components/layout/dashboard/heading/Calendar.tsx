import CalendarIcon from "../../../icons/CalendarIcon";

interface CalendarProps{
  day:string;
  month:string;
  year:string;
}

export function Calendar({day,month, year }: CalendarProps){
  return(
<div className="flex flex-row w-[139px] h-[44px] gap-[12px]">
        <button className="flex flex-row items-center w-[139px] h-[44px] border rounded-[8px] py-[10px] pr-[16px] pl-[12px] gap-[8px] bg-[#FFFFFF] border-[#D0D5DD] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
          <div className="w-[24px] h-[24px] flex justify-center items-center">
            <CalendarIcon className="w-[18px] h-[20px] top-[2px] left-[3px] text-[2px] text-[#504D4C]" />
          </div>
          <p className="w-[79px] h-[20px] font-semibold text-[14px] leading-[20px] space-y-[14px] tracking-[0] text-[#404E3D]">{`${day}/${month}/${year}`}</p>
        </button>
      </div>
  )
}