import CompassIcon from "../../icons/CompassIcon";

interface StatusProps {
  status: string;
  iconLeading?: boolean;
  iconTrailing?: boolean;
  iconTrailingName?: "compass";
}

export function HeaderStatus({
  status ,
  iconLeading,
  iconTrailing,
  iconTrailingName,
}: StatusProps) {
  return (
    <div className="flex flex-row w-[160px] h-[36px]">
      <button className="inline-flex flex-row item-center border rounded-full border-[#FFF2DE] px-[14px] py-[8px] gap-[8px] bg-[#FFF2DE] ">
        {/* Icon 1 */}
        {iconLeading && (
          <div className="w-[20px] h-[20px]">
            <div className="w-[16.67px] h-[16.67px] top-[1.67px] left-[1.67px] border-[1.67px] border-[#C30010]"></div>
          </div>
        )}
        {/* Text */}
        <p className="w-[104px] h-[20px] font-semibold text-[14px] leading-[20px] space-y-[14px] tracking-[0] text-[#E5961E]">
          {status}
        </p>
        {/* Icon 2 */}
        {iconTrailing && (
          <div className=" flex items-center justify-center w-[20px] h-[20px]">
            {iconTrailingName === "compass" && (
              <CompassIcon className="w-[15px] h-[16.67px] top-[1.67px] left-[2.5px]  text-[#E5961E]" />
            )}
          </div>
        )}
      </button>
    </div>
  );
}
